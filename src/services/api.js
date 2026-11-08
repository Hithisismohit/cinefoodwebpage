import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { PROMOTIONAL_COMBOS } from '../data/promotions';

const KEYS = { products: 'cinebite_products_v1', orders: 'cinebite_orders_v1', admin: 'cinebite_admin_demo_v1' };
const read = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.error('CineBite storage error:', error); throw new Error('Browser storage is unavailable or full.'); } };
const products = () => read(KEYS.products, PRODUCTS);
const orders = () => read(KEYS.orders, []);
const saveOrders = value => write(KEYS.orders, value);
const id = prefix => `${prefix}-${globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
const money = value => Number(value || 0);
const localDay = value => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date(value));
function dashboard() {
  const all = orders(), catalog = products(), paid = all.filter(o => o.paymentStatus === 'PAID'), today = localDay(new Date());
  const sum = rows => rows.reduce((n, o) => n + money(o.breakdown?.grandTotal), 0);
  const last7Days = Array.from({ length: 7 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - (6-i)); const date = localDay(d); const day = paid.filter(o => localDay(o.createdAt) === date); return { date, orders: day.length, revenue: sum(day) }; });
  return { products: catalog, orders: all.sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt)), stats: {
    totalOrders: all.length, todayOrders: all.filter(o => localDay(o.createdAt)===today).length, paidOrders: paid.length,
    paymentPendingOrders: all.filter(o=>o.paymentStatus==='PENDING').length, pendingOrders: paid.filter(o=>['NEW','ACCEPTED'].includes(o.status)).length,
    preparingOrders: paid.filter(o=>o.status==='PREPARING').length, readyOrders: paid.filter(o=>o.status==='READY').length,
    completedOrders: paid.filter(o=>['DELIVERED','COMPLETED'].includes(o.status)).length, cancelledOrders: all.filter(o=>o.status==='CANCELLED').length,
    revenue:sum(paid), todayRevenue:sum(paid.filter(o=>localDay(o.createdAt)===today)), totalProducts:catalog.length, last7Days
  }, generatedAt:new Date().toISOString() };
}
const stages = { NEW:['ACCEPTED','CANCELLED'], ACCEPTED:['PREPARING','CANCELLED'], PREPARING:['READY','CANCELLED'], READY:['DELIVERED','CANCELLED'], DELIVERED:[], CANCELLED:[] };
async function route(url, init={}) {
  const parsed = new URL(url, location.origin), method=(init.method||'GET').toUpperCase(), path=parsed.pathname;
  let body={}; try { body=init.body?JSON.parse(init.body):{}; } catch {}
  const respond=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
  if(path==='/api/products' && method==='GET'){ const cat=parsed.searchParams.get('category'); return respond(products().filter(p=>!cat||p.categoryId===cat)); }
  if(path==='/api/orders' && method==='POST'){
    const hall=String(body?.seatInfo?.hallNumber||'').trim(), seat=String(body?.seatInfo?.seatNumber||'').trim(), total=money(body?.breakdown?.grandTotal);
    if(!hall||!seat||!Array.isArray(body.items)||!body.items.length||!Number.isFinite(total)||total<=0) return respond({error:'Valid hall, seat, items and total are required.'},400);
    const all=orders(); if(body.id && all.some(o=>o.id===body.id)) return respond(all.find(o=>o.id===body.id));
    const now=new Date().toISOString(), order={...body,id:body.id||id('ord'),orderNumber:`CB-${Date.now().toString().slice(-8)}-${Math.floor(Math.random()*90+10)}`,createdAt:now,status:'NEW',paymentStatus:'PENDING',paymentTransactionId:null,seatInfo:{hallNumber:hall,seatNumber:seat}};
    all.unshift(order); saveOrders(all); return respond(order,201);
  }
  if(path==='/api/admin/login'&&method==='POST'){
    if(body.password!=='admin123') return respond({error:'Incorrect demo password.'},401);
    write(KEYS.admin,{authenticated:true,at:Date.now()}); return respond({ok:true});
  }
  if(path==='/api/admin/logout'&&method==='POST'){ write(KEYS.admin,{authenticated:false}); return respond({ok:true}); }
  if(path.startsWith('/api/admin/')){
    if(!read(KEYS.admin,{authenticated:false}).authenticated) return respond({error:'Unauthorized'},401);
    if(path==='/api/admin/data'&&method==='GET') return respond(dashboard());
    if(path==='/api/admin/products'&&method==='POST'){
      if(!body.name?.trim()||!body.categoryId?.trim()||!Number.isFinite(Number(body.price))||Number(body.price)<0) return respond({error:'Name, category and valid price are required.'},400);
      const list=products(), product={...body,id:body.id||id('prd'),name:body.name.trim(),price:Number(body.price),description:body.description||'',image:body.image||'',isAvailable:body.isAvailable!==false};
      const idx=list.findIndex(p=>p.id===product.id); if(idx>=0) list[idx]=product; else list.push(product); write(KEYS.products,list); return respond({ok:true,id:product.id});
    }
    if(path==='/api/admin/products'&&method==='DELETE') { const productId=parsed.searchParams.get('id'); if(!productId)return respond({error:'Product id required'},400); write(KEYS.products,products().filter(p=>p.id!==productId)); return respond({ok:true}); }
    if(path==='/api/admin/orders'&&method==='PATCH'){
      const all=orders(), index=all.findIndex(o=>o.id===body.id); if(index<0)return respond({error:'Order not found'},404);
      const current=all[index]; if(current.paymentStatus!=='PAID')return respond({error:'Only confirmed demo/offline paid orders can enter the fulfilment queue.'},409);
      if(!Object.prototype.hasOwnProperty.call(stages,body.status))return respond({error:'Invalid order status'},400);
      if(body.status!==current.status&&!stages[current.status]?.includes(body.status))return respond({error:`Invalid transition: ${current.status} → ${body.status}. Move one stage at a time.`},409);
      all[index]={...current,status:body.status}; saveOrders(all); return respond({ok:true});
    }
    if(path==='/api/admin/orders/offline-payment'&&method==='POST'){
      const all=orders(), index=all.findIndex(o=>o.id===body.id); if(index<0)return respond({error:'Order not found.'},404);
      const order=all[index]; if(order.paymentStatus==='PAID')return respond({ok:true,alreadyPaid:true});
      if(order.paymentMethod!=='PAY_AT_SEAT')return respond({error:'Manual demo confirmation is available only for Pay at Seat orders.'},409);
      all[index]={...order,paymentStatus:'PAID',paymentTransactionId:`DEMO-OFFLINE-${Date.now()}`,paymentVerifiedAt:new Date().toISOString(),paymentVerifiedBy:'ADMIN'}; saveOrders(all); return respond({ok:true,order:all[index]});
    }
  }
  return respond({error:'Frontend demo endpoint not found.'},404);
}

// Browser-only compatibility adapter for the original components' /api/* calls.
if (typeof window !== 'undefined' && !window.__cinebiteFetchPatched) {
  const nativeFetch=window.fetch.bind(window);
  window.fetch=(input,init={})=>{ const url=typeof input==='string'?input:input?.url||''; if(url.startsWith('/api/')) return route(url,init); return nativeFetch(input,init); };
  window.__cinebiteFetchPatched=true;
}

export const API_BASE_URL = '';
export const USE_MOCK_DATA = true;
export const cinemaApi = {
  async getCategories(){ return CATEGORIES; },
  async getProducts(categoryId){ return products().filter(p=>!categoryId||p.categoryId===categoryId); },
  async getPromotions(){ return PROMOTIONAL_COMBOS; },
  async verifySeat(seatInfo){ const hallNumber=String(seatInfo.hallNumber||'').trim(),seatNumber=String(seatInfo.seatNumber||'').trim(); return {valid:!!(hallNumber&&seatNumber),verifiedSeat:{...seatInfo,hallNumber,seatNumber,cinemaId:seatInfo.cinemaId||'cin-01'}}; },
  async createOrder(payload){ const response=await route('/api/orders',{method:'POST',body:JSON.stringify({...payload,id:id('ord')})}); const result=await response.json(); if(!response.ok)throw new Error(result.error||'Order could not be saved.'); return result; },
  async getOrderStatus(orderId){ const order=orders().find(o=>o.id===orderId); return {status:order?.status||'NEW',estimatedMinutes:order?.estimatedDeliveryMinutes||8,paymentStatus:order?.paymentStatus||'PENDING'}; },
  async validateCoupon(code,subtotal){ const upper=String(code).trim().toUpperCase(); if(upper==='CINEMA50')return {valid:true,discount:50,message:'₹50 flat discount applied!'}; if(upper==='BLOCKBUSTER'&&subtotal>=500)return {valid:true,discount:100,message:'₹100 blockbuster discount applied!'}; if(upper==='POPCORN20')return {valid:true,discount:Math.round(subtotal*.2),message:'20% movie discount applied!'}; return {valid:false,discount:0,message:'Invalid or expired cinema promo code.'}; },
  async getAdminOrders(){return orders();}, async updateOrderStatus(orderId,status){const r=await route('/api/admin/orders',{method:'PATCH',body:JSON.stringify({id:orderId,status})});if(!r.ok)throw new Error((await r.json()).error);return r.json();},
  async addProduct(product){const r=await route('/api/admin/products',{method:'POST',body:JSON.stringify(product)});if(!r.ok)throw new Error((await r.json()).error);return r.json();},
  async updateProduct(product){return this.addProduct(product);}, async deleteProduct(productId){const r=await route(`/api/admin/products?id=${encodeURIComponent(productId)}`,{method:'DELETE'});if(!r.ok)throw new Error((await r.json()).error);return r.json();}
};
