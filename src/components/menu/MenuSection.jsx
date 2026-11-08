'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { ProductCard } from './ProductCard';
export const MenuSection = ({ id, title, description, products, onOpenDetails, onQuickAdd, cartItemsQuantities }) => {
    if (products.length === 0)
        return null;
    return (_jsxs("section", { id: `section-${id}`, className: "scroll-mt-28 mb-14", children: [_jsx("div", { className: "flex items-end justify-between mb-5 pb-3 border-b border-cinema-border/80", children: _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-cinema-red shadow-glow-red" }), _jsx("h3", { className: "text-xl sm:text-2xl font-black text-white tracking-tight", children: title }), _jsxs("span", { className: "text-xs px-2 py-0.5 rounded-full bg-cinema-surface text-slate-400 font-semibold border border-cinema-border", children: [products.length, " items"] })] }), _jsx("p", { className: "text-xs sm:text-sm text-slate-400 mt-1", children: description })] }) }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: products.map(product => (_jsx(ProductCard, { product: product, onOpenDetails: onOpenDetails, onQuickAdd: onQuickAdd, cartQuantity: cartItemsQuantities[product.id] || 0 }, product.id))) })] }));
};
