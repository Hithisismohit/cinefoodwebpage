'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, MapPin, ChefHat, Bike, Armchair, ShieldCheck } from 'lucide-react';
import { formatINR } from '../../lib/utils';
const ORDER_STEPS = [
    { status: 'ORDER_PLACED', label: 'Order Placed', desc: 'Sent to concession system', icon: Clock },
    { status: 'PAYMENT_CONFIRMED', label: 'Payment Confirmed', desc: 'Demo payment record', icon: ShieldCheck },
    { status: 'ORDER_ACCEPTED', label: 'Order Accepted', desc: 'Concession queue assigned', icon: CheckCircle2 },
    { status: 'PREPARING', label: 'Fresh Preparation', desc: 'Popping corn & grilling', icon: ChefHat },
    { status: 'READY_FOR_DELIVERY', label: 'Runner Dispatched', desc: 'Walking to your screen', icon: Bike },
    { status: 'DELIVERED_TO_SEAT', label: 'Delivered to Seat', desc: 'Enjoy your movie!', icon: Armchair },
];
export const OrderTrackerModal = ({ order: initialOrder, isOpen, onClose }) => {
    const [order, setOrder] = useState(initialOrder);
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
    // Read the latest order from this browser's localStorage so admin status changes appear here.
    useEffect(() => {
        setOrder(initialOrder);
        if (!initialOrder) return;
        const sync = () => { try { const rows = JSON.parse(localStorage.getItem('cinebite_orders_v1') || '[]'); const latest = rows.find(row => row.id === initialOrder.id); if (latest) { setOrder(latest); const map = { NEW:0, ACCEPTED:2, PREPARING:3, READY:4, DELIVERED:5, CANCELLED:0 }; setCurrentStatusIndex(map[latest.status] ?? 0); } } catch (error) { console.warn('Could not sync order tracking', error); } };
        sync(); const timer = setInterval(sync, 2000); return () => clearInterval(timer);
    }, [initialOrder]);
    if (!isOpen || !order)
        return null;
    // Manual status advancement for frontend demo purposes
    const advanceStatusDemo = () => {
        setCurrentStatusIndex(prev => (prev + 1) % ORDER_STEPS.length);
    };
    const activeStep = ORDER_STEPS[currentStatusIndex];
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in", children: _jsxs("div", { className: "relative w-full max-w-lg rounded-3xl bg-cinema-card border border-cinema-border overflow-hidden shadow-2xl my-8", children: [_jsxs("div", { className: "p-6 border-b border-cinema-border flex items-center justify-between bg-cinema-dark", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" }), _jsx("span", { className: `text-xs font-bold uppercase tracking-wider ${order.paymentStatus === 'PAID' ? 'text-green-400' : 'text-amber-400'}`, children: order.paymentStatus === 'PAID' ? 'Live Order Tracking' : 'Payment Pending' })] }), _jsxs("h3", { className: "text-xl font-black text-white mt-1", children: ["Order #", order.orderNumber] })] }), _jsx("button", { onClick: onClose, className: "p-2 rounded-xl bg-cinema-surface hover:bg-cinema-border text-slate-400 hover:text-white transition-colors", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { className: "p-5 rounded-2xl bg-gradient-to-br from-cinema-surface to-cinema-card border border-cinema-border text-center", children: [_jsx("div", { className: "w-14 h-14 mx-auto rounded-2xl bg-cinema-red/20 text-cinema-red border border-cinema-red/30 flex items-center justify-center mb-3", children: React.createElement(activeStep.icon, { className: 'w-7 h-7' }) }), _jsx("h4", { className: "text-lg font-black text-white", children: activeStep.label }), _jsx("p", { className: "text-xs text-slate-400 mt-1", children: activeStep.desc }), _jsxs("div", { className: "mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-cinema-border text-xs text-cinema-gold font-bold", children: [_jsx(Clock, { className: "w-3.5 h-3.5" }), _jsxs("span", { children: ["Estimated Seat Arrival in ~", Math.max(2, 10 - currentStatusIndex * 2), " mins"] })] })] }), _jsxs("div", { className: "p-4 rounded-xl bg-cinema-surface/70 border border-cinema-border flex items-center justify-between text-xs", children: [_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx(MapPin, { className: "w-4 h-4 text-cinema-red" }), _jsxs("div", { children: [_jsx("span", { className: "text-slate-400", children: "Target Seat: " }), _jsxs("strong", { className: "text-white", children: ["Hall ", order.seatInfo.hallNumber, " \u2022 Seat ", order.seatInfo.seatNumber] })] })] }), _jsxs("span", { className: "text-[11px] font-bold text-cinema-gold uppercase", children: [order.deliveryTiming, " Delivery"] })] }), _jsxs("div", { className: "space-y-4 pt-2", children: [_jsx("h5", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider", children: "Concession Progress Stages" }), _jsx("div", { className: "space-y-3", children: ORDER_STEPS.map((step, idx) => {
                                        const isCompleted = idx < currentStatusIndex;
                                        const isCurrent = idx === currentStatusIndex;
                                        const isUpcoming = idx > currentStatusIndex;
                                        const StepIcon = step.icon;
                                        return (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${isCompleted
                                                        ? 'bg-green-950 text-green-400 border border-green-700'
                                                        : isCurrent
                                                            ? 'bg-cinema-red text-white shadow-glow-red'
                                                            : 'bg-cinema-surface text-slate-500 border border-cinema-border'}`, children: isCompleted ? _jsx(CheckCircle2, { className: "w-4 h-4" }) : _jsx(StepIcon, { className: "w-4 h-4" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: `text-xs font-bold ${isCurrent ? 'text-white' : isCompleted ? 'text-slate-300' : 'text-slate-500'}`, children: step.label }), _jsx("div", { className: "text-[10px] text-slate-400 truncate", children: step.desc })] }), isCurrent && (_jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-cinema-red/20 text-cinema-red font-bold animate-pulse", children: "In Progress" }))] }, step.status));
                                    }) })] }), order.paymentStatus !== 'PAID' && (_jsx("div", { className: "p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-xs text-amber-200", children: "Payment is pending. This frontend demo saves the order locally; fulfilment begins only after the admin records a Pay at Seat demo payment." }))] }), _jsxs("div", { className: "p-6 bg-cinema-dark border-t border-cinema-border flex items-center justify-between", children: [_jsxs("div", { className: "text-xs text-slate-400", children: [order.paymentStatus === 'PAID' ? 'Total Paid:' : 'Order Total:', " ", _jsx("strong", { className: "text-white text-sm", children: formatINR(order.breakdown.grandTotal) })] }), _jsx("button", { onClick: onClose, className: "px-6 py-2.5 rounded-xl bg-cinema-surface hover:bg-cinema-border text-white font-bold text-xs transition-colors", children: "Close & Back to Movie" })] })] }) }));
};
