'use client';
import { useState, useEffect } from 'react';
import { cinemaApi } from '../services/api';
const CART_STORAGE_KEY = 'cinebite_cart_items_v1';
const PROMO_STORAGE_KEY = 'cinebite_promo_code_v1';
export function useCart() {
    const [items, setItems] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [promoDiscount, setPromoDiscount] = useState(0);
    const [promoMessage, setPromoMessage] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // Load from localStorage on mount
    useEffect(() => {
        try {
            const savedItems = localStorage.getItem(CART_STORAGE_KEY);
            if (savedItems)
                setItems(JSON.parse(savedItems));
            const savedPromo = localStorage.getItem(PROMO_STORAGE_KEY);
            if (savedPromo)
                setPromoCode(savedPromo);
        }
        catch (e) {
            console.warn('Could not read cart from localStorage', e);
        }
    }, []);
    // Save to localStorage on change
    useEffect(() => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        }
        catch (e) {
            console.warn('Could not save cart to localStorage', e);
        }
    }, [items]);
    // Compute cartItemId hash
    const computeCartItemId = (product, variant, addOns = []) => {
        const sortedAddonIds = [...addOns].map(a => a.id).sort().join(',');
        return `${product.id}|${variant?.id || 'default'}|${sortedAddonIds}`;
    };
    // Add product to cart with custom options
    const addToCart = (product, quantity = 1, variant, addOns = [], specialInstructions) => {
        if (!product.isAvailable)
            return;
        const basePrice = variant ? variant.price : product.price;
        const addOnsTotal = addOns.reduce((sum, a) => sum + a.price, 0);
        const unitPrice = basePrice + addOnsTotal;
        const cartItemId = computeCartItemId(product, variant, addOns);
        setItems(prevItems => {
            const existingIdx = prevItems.findIndex(i => i.cartItemId === cartItemId);
            if (existingIdx > -1) {
                const copy = [...prevItems];
                copy[existingIdx].quantity += quantity;
                copy[existingIdx].totalPrice = copy[existingIdx].quantity * copy[existingIdx].unitPrice;
                return copy;
            }
            else {
                return [
                    ...prevItems,
                    {
                        cartItemId,
                        product,
                        quantity,
                        selectedVariant: variant,
                        selectedAddOns: addOns,
                        specialInstructions,
                        unitPrice,
                        totalPrice: unitPrice * quantity
                    }
                ];
            }
        });
        setIsDrawerOpen(true);
    };
    const updateQuantity = (cartItemId, newQty) => {
        if (newQty <= 0) {
            removeFromCart(cartItemId);
            return;
        }
        setItems(prev => prev.map(item => item.cartItemId === cartItemId
            ? { ...item, quantity: newQty, totalPrice: newQty * item.unitPrice }
            : item));
    };
    const removeFromCart = (cartItemId) => {
        setItems(prev => prev.filter(i => i.cartItemId !== cartItemId));
    };
    const clearCart = () => {
        setItems([]);
        setPromoCode('');
        setPromoDiscount(0);
        setPromoMessage('');
        try {
            localStorage.removeItem(CART_STORAGE_KEY);
            localStorage.removeItem(PROMO_STORAGE_KEY);
        }
        catch (e) { }
    };
    const applyPromoCode = async (code) => {
        const res = await cinemaApi.validateCoupon(code, subtotal);
        if (res.valid) {
            setPromoCode(code.toUpperCase());
            setPromoDiscount(res.discount);
            setPromoMessage(res.message);
            try {
                localStorage.setItem(PROMO_STORAGE_KEY, code.toUpperCase());
            }
            catch (e) { }
        }
        else {
            setPromoMessage(res.message);
            setPromoDiscount(0);
            setPromoCode('');
            try { localStorage.removeItem(PROMO_STORAGE_KEY); } catch (e) {}
        }
        return res;
    };
    // Calculations
    const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    useEffect(() => {
        if (!promoCode) { setPromoDiscount(0); return; }
        let active = true;
        cinemaApi.validateCoupon(promoCode, subtotal).then(result => {
            if (active) { setPromoDiscount(result.valid ? result.discount : 0); setPromoMessage(result.message); }
        }).catch(error => console.warn('Could not restore promo code', error));
        return () => { active = false; };
    }, [promoCode, subtotal]);
    const taxGst = Math.round(subtotal * 0.05); // 5% concession tax
    const convenienceFee = subtotal > 499 || subtotal === 0 ? 0 : 25; // Free delivery over ₹499
    const grandTotal = Math.max(0, subtotal + taxGst + convenienceFee - promoDiscount);
    const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const breakdown = {
        subtotal,
        taxGst,
        convenienceFee,
        discount: promoDiscount,
        grandTotal,
        appliedPromoCode: promoCode || undefined
    };
    return {
        items,
        totalItemCount,
        breakdown,
        isDrawerOpen,
        setIsDrawerOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        promoCode,
        promoDiscount,
        promoMessage,
        applyPromoCode
    };
}
