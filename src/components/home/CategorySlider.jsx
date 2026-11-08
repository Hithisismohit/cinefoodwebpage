'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from 'react';
import { Sparkles, Popcorn, Ham, Utensils, CupSoda, Sandwich, Pizza, Cookie, ChevronLeft, ChevronRight } from 'lucide-react';
// Icon mapping helper
const getCategoryIcon = (iconName) => {
    switch (iconName) {
        case 'Sparkles': return _jsx(Sparkles, { className: "w-5 h-5 text-cinema-gold" });
        case 'Popcorn': return _jsx(Popcorn, { className: "w-5 h-5 text-amber-400" });
        case 'Ham': return _jsx(Ham, { className: "w-5 h-5 text-cinema-red" });
        case 'Utensils': return _jsx(Utensils, { className: "w-5 h-5 text-yellow-500" });
        case 'CupSoda': return _jsx(CupSoda, { className: "w-5 h-5 text-cyan-400" });
        case 'Sandwich': return _jsx(Sandwich, { className: "w-5 h-5 text-emerald-400" });
        case 'Pizza': return _jsx(Pizza, { className: "w-5 h-5 text-orange-500" });
        case 'Cookie': return _jsx(Cookie, { className: "w-5 h-5 text-rose-400" });
        default: return _jsx(Sparkles, { className: "w-5 h-5 text-cinema-gold" });
    }
};
export const CategorySlider = ({ categories, activeCategoryId, onSelectCategory }) => {
    const sliderRef = useRef(null);
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -260, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 260, behavior: 'smooth' });
        }
    };
    const handleCategoryClick = (catId) => {
        onSelectCategory(catId);
        // Smooth scroll to the corresponding section on the same page
        const sectionElement = document.getElementById(`section-${catId}`);
        if (sectionElement) {
            const navOffset = 110;
            const elementPosition = sectionElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (_jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold text-white tracking-tight flex items-center gap-2", children: _jsx("span", { children: "Explore Concession Menu" }) }), _jsx("p", { className: "text-xs text-slate-400", children: "Click to jump directly to your favorite movie treats" })] }), _jsxs("div", { className: "hidden sm:flex items-center gap-2", children: [_jsx("button", { onClick: scrollLeft, className: "w-8 h-8 rounded-full bg-cinema-card hover:bg-cinema-surface border border-cinema-border flex items-center justify-center text-slate-300 hover:text-white transition-colors", "aria-label": "Scroll Categories Left", children: _jsx(ChevronLeft, { className: "w-4 h-4" }) }), _jsx("button", { onClick: scrollRight, className: "w-8 h-8 rounded-full bg-cinema-card hover:bg-cinema-surface border border-cinema-border flex items-center justify-center text-slate-300 hover:text-white transition-colors", "aria-label": "Scroll Categories Right", children: _jsx(ChevronRight, { className: "w-4 h-4" }) })] })] }), _jsxs("div", { ref: sliderRef, className: "flex items-center gap-3 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth", style: { scrollbarWidth: 'none', msOverflowStyle: 'none' }, children: [_jsxs("button", { onClick: () => handleCategoryClick('all'), className: `flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-left ${activeCategoryId === 'all'
                            ? 'bg-cinema-red text-white border-cinema-red shadow-glow-red scale-105'
                            : 'bg-cinema-card hover:bg-cinema-surface text-slate-300 border-cinema-border hover:border-slate-600'}`, children: [_jsx("div", { className: "w-9 h-9 rounded-xl bg-black/30 flex items-center justify-center", children: _jsx(Sparkles, { className: "w-4 h-4 text-white" }) }), _jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold whitespace-nowrap", children: "All Concessions" }), _jsx("div", { className: "text-[10px] opacity-80 whitespace-nowrap", children: "Full Menu" })] })] }), categories.map(cat => {
                        const isActive = activeCategoryId === cat.id;
                        return (_jsxs("button", { onClick: () => handleCategoryClick(cat.id), className: `flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all text-left group ${isActive
                                ? 'bg-gradient-to-r from-cinema-red to-red-800 text-white border-cinema-red shadow-glow-red scale-105 font-semibold'
                                : 'bg-cinema-card hover:bg-cinema-surface text-slate-300 border-cinema-border hover:border-slate-600'}`, children: [_jsx("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${isActive ? 'bg-black/30' : 'bg-cinema-surface border border-cinema-border'}`, children: getCategoryIcon(cat.icon) }), _jsxs("div", { children: [_jsx("div", { className: "text-xs font-bold whitespace-nowrap text-white", children: cat.name }), _jsx("div", { className: "text-[10px] text-slate-400 group-hover:text-slate-300 whitespace-nowrap", children: "View section \u2192" })] })] }, cat.id));
                    })] })] }));
};
