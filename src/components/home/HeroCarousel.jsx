'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Plus, Users } from 'lucide-react';
import { formatINR } from '../../lib/utils';
export const HeroCarousel = ({ combos, allProducts, onAddComboToCart }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartX = useRef(null);
    // Auto-rotate every 4.5 seconds when not hovered
    useEffect(() => {
        if (isHovered || combos.length <= 1)
            return;
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % combos.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [isHovered, combos.length]);
    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % combos.length);
    };
    const goToPrev = () => {
        setCurrentIndex(prev => (prev - 1 + combos.length) % combos.length);
    };
    // Touch swipe support for mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null)
            return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50)
            goToNext();
        if (diff < -50)
            goToPrev();
        touchStartX.current = null;
    };
    const currentCombo = combos[currentIndex];
    if (!currentCombo)
        return null;
    const matchingProduct = allProducts.find(p => p.id === currentCombo.productId);
    return (_jsx("section", { id: "hero", className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd, children: _jsxs("div", { className: "relative rounded-3xl overflow-hidden border border-cinema-border/90 bg-cinema-card shadow-2xl", children: [_jsxs("div", { className: "relative min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex items-center", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("img", { src: currentCombo.image, alt: currentCombo.title, className: "w-full h-full object-cover object-center transform scale-105 transition-all duration-700 ease-out" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/80 to-transparent sm:bg-gradient-to-r sm:from-cinema-dark sm:via-cinema-dark/85 sm:to-transparent" }), _jsx("div", { className: "absolute inset-0 bg-black/30 backdrop-blur-[1px]" })] }), _jsxs("div", { className: "relative z-10 p-6 sm:p-10 md:p-14 max-w-2xl", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [_jsxs("span", { className: "px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-cinema-red text-white shadow-glow-red flex items-center gap-1.5", children: [_jsx(Sparkles, { className: "w-3.5 h-3.5" }), currentCombo.badge] }), _jsx("span", { className: "px-3 py-1 rounded-full text-xs font-semibold bg-cinema-surface/90 text-cinema-gold border border-cinema-border", children: currentCombo.subtitle }), _jsxs("span", { className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-slate-300 flex items-center gap-1", children: [_jsx(Users, { className: "w-3 h-3 text-slate-400" }), currentCombo.servesCount] })] }), _jsx("h2", { className: "text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md", children: currentCombo.title }), _jsx("p", { className: "mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3", children: currentCombo.description }), _jsx("div", { className: "mt-4 hidden sm:flex flex-wrap gap-2", children: currentCombo.items.map((item, idx) => (_jsxs("span", { className: "text-xs px-2.5 py-1 rounded-lg bg-cinema-surface/80 border border-cinema-border text-slate-200", children: ["\u2713 ", item] }, idx))) }), _jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-4", children: [_jsxs("div", { className: "flex items-baseline gap-2.5", children: [_jsx("span", { className: "text-2xl sm:text-4xl font-black text-white", children: formatINR(currentCombo.price) }), _jsx("span", { className: "text-base sm:text-lg text-slate-400 line-through", children: formatINR(currentCombo.originalPrice) }), _jsxs("span", { className: "text-xs font-bold text-green-400 bg-green-950/60 border border-green-800/80 px-2 py-0.5 rounded", children: ["Save ", formatINR(currentCombo.originalPrice - currentCombo.price)] })] }), _jsxs("button", { onClick: () => {
                                                if (matchingProduct) {
                                                    onAddComboToCart(matchingProduct);
                                                }
                                            }, className: "px-6 py-3.5 rounded-2xl bg-cinema-red hover:bg-cinema-red-hover text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-glow-red hover:scale-105 active:scale-95 transition-all", children: [_jsx(Plus, { className: "w-5 h-5" }), "Add Combo to Seat Cart"] })] })] })] }), _jsx("button", { onClick: goToPrev, className: "absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-cinema-dark/70 hover:bg-cinema-red text-white border border-cinema-border/80 flex items-center justify-center transition-all shadow-lg hover:scale-110", "aria-label": "Previous Slide", children: _jsx(ChevronLeft, { className: "w-5 h-5" }) }), _jsx("button", { onClick: goToNext, className: "absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-cinema-dark/70 hover:bg-cinema-red text-white border border-cinema-border/80 flex items-center justify-center transition-all shadow-lg hover:scale-110", "aria-label": "Next Slide", children: _jsx(ChevronRight, { className: "w-5 h-5" }) }), _jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2", children: combos.map((combo, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-8 bg-cinema-red shadow-glow-red'
                            : 'w-2.5 bg-white/40 hover:bg-white/70'}`, "aria-label": `Go to slide ${index + 1}` }, combo.id))) })] }) }));
};
