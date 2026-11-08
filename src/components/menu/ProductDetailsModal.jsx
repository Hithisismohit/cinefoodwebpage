'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Clock } from 'lucide-react';
import { formatINR } from '../../lib/utils';
export const ProductDetailsModal = ({ product, isOpen, onClose, onAddToCart, }) => {
    const [selectedVariant, setSelectedVariant] = useState(undefined);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [specialInstructions, setSpecialInstructions] = useState('');
    // Reset state when product changes
    useEffect(() => {
        if (product) {
            const defaultVar = product.variants?.find(v => v.isDefault) || product.variants?.[0];
            setSelectedVariant(defaultVar);
            setSelectedAddOns([]);
            setQuantity(1);
            setSpecialInstructions('');
        }
    }, [product]);
    if (!isOpen || !product)
        return null;
    const handleToggleAddOn = (addOn) => {
        setSelectedAddOns(prev => {
            const exists = prev.some(a => a.id === addOn.id);
            if (exists) {
                return prev.filter(a => a.id !== addOn.id);
            }
            else {
                return [...prev, addOn];
            }
        });
    };
    // Compute live unit and total price
    const basePrice = selectedVariant ? selectedVariant.price : product.price;
    const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = basePrice + addOnsTotal;
    const totalPrice = unitPrice * quantity;
    const handleAdd = () => {
        onAddToCart(product, quantity, selectedVariant, selectedAddOns, specialInstructions);
        onClose();
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in", children: _jsxs("div", { className: "relative w-full max-w-lg rounded-3xl bg-cinema-card border border-cinema-border overflow-hidden shadow-2xl my-8", children: [_jsx("button", { onClick: onClose, className: "absolute top-4 right-4 z-20 p-2 rounded-full bg-cinema-dark/80 text-white hover:bg-cinema-red transition-colors shadow-lg", children: _jsx(X, { className: "w-5 h-5" }) }), _jsxs("div", { className: "relative h-60 w-full overflow-hidden bg-cinema-surface", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover object-center" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-cinema-card via-transparent to-transparent" }), _jsxs("div", { className: "absolute bottom-4 left-6 flex items-center gap-2", children: [_jsxs("span", { className: "p-1 rounded bg-cinema-dark/90 border border-cinema-border", children: [product.foodType === 'veg' && _jsx("span", { className: "veg-badge" }), product.foodType === 'non-veg' && _jsx("span", { className: "non-veg-badge" }), product.foodType === 'egg' && _jsx("span", { className: "egg-badge" })] }), _jsxs("span", { className: "text-xs px-2.5 py-0.5 rounded-full bg-cinema-dark/90 border border-cinema-border text-slate-300 flex items-center gap-1 font-medium", children: [_jsx(Clock, { className: "w-3 h-3 text-cinema-red" }), product.prepTimeMinutes, " mins prep"] }), product.calories && (_jsxs("span", { className: "text-xs px-2.5 py-0.5 rounded-full bg-cinema-dark/90 border border-cinema-border text-slate-300 font-medium", children: [product.calories, " kcal"] }))] })] }), _jsxs("div", { className: "p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold text-cinema-gold tracking-wider uppercase mb-1", children: product.brand || product.categoryName }), _jsx("h3", { className: "text-2xl font-black text-white tracking-tight", children: product.name }), _jsx("p", { className: "mt-2 text-sm text-slate-300 leading-relaxed", children: product.description })] }), product.variants && product.variants.length > 0 && (_jsxs("div", { className: "pt-2", children: [_jsx("label", { className: "block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5", children: "Choose Size / Portion" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: product.variants.map(variant => {
                                        const isSelected = selectedVariant?.id === variant.id;
                                        return (_jsxs("button", { type: "button", onClick: () => setSelectedVariant(variant), className: `p-3 rounded-xl border text-left flex items-center justify-between transition-all ${isSelected
                                                ? 'bg-cinema-red/15 border-cinema-red text-white'
                                                : 'bg-cinema-surface border-cinema-border text-slate-300 hover:border-slate-600'}`, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: `w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-cinema-red bg-cinema-red text-white' : 'border-slate-500'}`, children: isSelected && _jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) }), _jsx("span", { className: "text-xs font-bold", children: variant.name })] }), _jsx("span", { className: "text-xs font-black text-cinema-gold", children: formatINR(variant.price) })] }, variant.id));
                                    }) })] })), product.addOns && product.addOns.length > 0 && (_jsxs("div", { className: "pt-2", children: [_jsx("label", { className: "block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5", children: "Concession Customizations & Dips" }), _jsx("div", { className: "space-y-2", children: product.addOns.map(addOn => {
                                        const isChecked = selectedAddOns.some(a => a.id === addOn.id);
                                        return (_jsxs("button", { type: "button", onClick: () => handleToggleAddOn(addOn), className: `w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${isChecked
                                                ? 'bg-cinema-red/10 border-cinema-red text-white'
                                                : 'bg-cinema-surface border-cinema-border text-slate-300 hover:border-slate-600'}`, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `w-4 h-4 rounded-md border flex items-center justify-center ${isChecked ? 'border-cinema-red bg-cinema-red text-white' : 'border-slate-500'}`, children: isChecked && _jsx(Check, { className: "w-3 h-3" }) }), _jsx("span", { className: "text-xs font-medium", children: addOn.name })] }), _jsxs("span", { className: "text-xs font-bold text-slate-200", children: ["+", formatINR(addOn.price)] })] }, addOn.id));
                                    }) })] })), _jsxs("div", { className: "pt-2", children: [_jsx("label", { className: "block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5", children: "Special Instructions for Seat Runner (Optional)" }), _jsx("input", { type: "text", value: specialInstructions, onChange: e => setSpecialInstructions(e.target.value), placeholder: "e.g. Extra napkins, less spicy, no ice in soda", className: "w-full px-4 py-2.5 rounded-xl bg-cinema-surface border border-cinema-border text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cinema-red transition-colors" })] })] }), _jsxs("div", { className: "p-6 bg-cinema-dark border-t border-cinema-border flex items-center justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-3 bg-cinema-surface px-3 py-1.5 rounded-xl border border-cinema-border", children: [_jsx("button", { onClick: () => setQuantity(q => Math.max(1, q - 1)), className: "p-1 rounded-lg hover:bg-cinema-border text-slate-300 hover:text-white transition-colors", "aria-label": "Decrease quantity", children: _jsx(Minus, { className: "w-4 h-4" }) }), _jsx("span", { className: "text-sm font-black text-white w-5 text-center", children: quantity }), _jsx("button", { onClick: () => setQuantity(q => q + 1), className: "p-1 rounded-lg hover:bg-cinema-border text-slate-300 hover:text-white transition-colors", "aria-label": "Increase quantity", children: _jsx(Plus, { className: "w-4 h-4" }) })] }), _jsxs("button", { onClick: handleAdd, className: "flex-1 py-3.5 px-6 rounded-2xl bg-cinema-red hover:bg-cinema-red-hover text-white font-bold text-sm shadow-glow-red flex items-center justify-between transition-all", children: [_jsx("span", { children: "Add to Order" }), _jsx("span", { className: "font-black text-base", children: formatINR(totalPrice) })] })] })] }) }));
};
