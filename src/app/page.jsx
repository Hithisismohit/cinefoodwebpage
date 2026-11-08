'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { CategorySlider } from '../components/home/CategorySlider';
import { SeatModal } from '../components/home/SeatModal';
import { SearchAndFilters } from '../components/menu/SearchAndFilters';
import { MenuSection } from '../components/menu/MenuSection';
import { ProductDetailsModal } from '../components/menu/ProductDetailsModal';
import { CartDrawer } from '../components/cart/CartDrawer';
import { CheckoutModal } from '../components/checkout/CheckoutModal';
import { OrderTrackerModal } from '../components/orders/OrderTrackerModal';
import { useCart } from '../hooks/useCart';
import { useMenu } from '../hooks/useMenu';
import { PROMOTIONAL_COMBOS } from '../data/promotions';
import { PRODUCTS } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { formatINR } from '../lib/utils';
export default function CinemaFoodOrderingApp() {
    // Cart Hook
    const { items, totalItemCount, breakdown, isDrawerOpen, setIsDrawerOpen, addToCart, updateQuantity, removeFromCart, clearCart, promoCode, promoMessage, applyPromoCode, } = useCart();
    // Menu Hook
    const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, foodTypeFilter, setFoodTypeFilter, sortBy, setSortBy, filteredProducts, productsByCategory, categories, } = useMenu();
    // Seat Info state parsed from URL query parameters with fallback
    const [seatInfo, setSeatInfo] = useState({ hallNumber: '', seatNumber: '' });
    // Modal States
    const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);
    const [checkoutAfterSeat, setCheckoutAfterSeat] = useState(false);
    const [selectedProductForDetails, setSelectedProductForDetails] = useState(null);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [latestOrder, setLatestOrder] = useState(null);
    const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
    const searchInputRef = useRef(null);
    // Quick map of product id to quantity in cart
    const cartItemsQuantities = items.reduce((acc, item) => {
        acc[item.product.id] = (acc[item.product.id] || 0) + item.quantity;
        return acc;
    }, {});
    const handleOrderSuccess = (order) => {
        setIsCheckoutOpen(false);
        clearCart();
        setLatestOrder(order);
        setIsOrderTrackerOpen(true);
    };
    return (_jsxs("div", { className: "min-h-screen bg-cinema-dark text-slate-100 flex flex-col", children: [_jsx(Navbar, { seatInfo: seatInfo, cartCount: totalItemCount, onOpenCart: () => setIsDrawerOpen(true), onOpenSeatModal: () => setIsSeatModalOpen(true), onFocusSearch: () => {
                    searchInputRef.current?.focus();
                    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } }), _jsxs("main", { className: "flex-1 pb-24", children: [_jsx(HeroCarousel, { combos: PROMOTIONAL_COMBOS, allProducts: PRODUCTS, onAddComboToCart: prod => addToCart(prod, 1) }), _jsx(CategorySlider, { categories: categories, activeCategoryId: selectedCategory, onSelectCategory: catId => setSelectedCategory(catId) }), _jsx(SearchAndFilters, { searchQuery: searchQuery, onSearchChange: setSearchQuery, foodTypeFilter: foodTypeFilter, onFoodTypeChange: setFoodTypeFilter, sortBy: sortBy, onSortChange: setSortBy, searchInputRef: searchInputRef }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12", children: filteredProducts.length === 0 ? (_jsxs("div", { className: "py-20 text-center rounded-3xl bg-cinema-card border border-cinema-border p-8", children: [_jsx("div", { className: "w-16 h-16 mx-auto rounded-3xl bg-cinema-surface flex items-center justify-center text-slate-400 mb-4", children: "\uD83C\uDF7F" }), _jsx("h3", { className: "text-xl font-bold text-white", children: "No cinema snacks found" }), _jsxs("p", { className: "text-xs text-slate-400 mt-1 max-w-sm mx-auto", children: ["We couldn't find any items matching \"", searchQuery, "\". Try searching for popcorn, burger, or soda."] }), _jsx("button", { onClick: () => {
                                        setSearchQuery('');
                                        setSelectedCategory('all');
                                        setFoodTypeFilter('all');
                                    }, className: "mt-5 px-5 py-2.5 rounded-xl bg-cinema-red text-white text-xs font-bold shadow-glow-red hover:bg-cinema-red-hover transition-colors", children: "Reset Menu Filters" })] })) : (
                        // Render each category section sequentially
                        categories.map(category => {
                            const categoryProducts = productsByCategory.get(category.id) || [];
                            return (_jsx(MenuSection, { id: category.id, title: category.name, description: category.description, products: categoryProducts, onOpenDetails: prod => setSelectedProductForDetails(prod), onQuickAdd: prod => addToCart(prod, 1), cartItemsQuantities: cartItemsQuantities }, category.id));
                        })) })] }), totalItemCount > 0 && !isDrawerOpen && (_jsx("div", { className: "fixed bottom-4 left-4 right-4 z-40 sm:hidden", children: _jsxs("button", { onClick: () => setIsDrawerOpen(true), className: "w-full py-3.5 px-5 rounded-2xl bg-cinema-red text-white font-bold text-sm shadow-glow-red flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("span", { className: "w-6 h-6 rounded-full bg-white text-cinema-dark text-xs font-black flex items-center justify-center", children: totalItemCount }), _jsx("span", { children: "View Cinema Tray" })] }), _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("span", { className: "font-black", children: formatINR(breakdown.grandTotal) }), _jsx(ArrowRight, { className: "w-4 h-4" })] })] }) })), _jsx(SeatModal, { isOpen: isSeatModalOpen, onClose: () => { setIsSeatModalOpen(false); setCheckoutAfterSeat(false); }, seatInfo: seatInfo, onSaveSeatInfo: (info) => { setSeatInfo(info); if (checkoutAfterSeat)
                    setIsCheckoutOpen(true); } }), _jsx(ProductDetailsModal, { product: selectedProductForDetails, isOpen: !!selectedProductForDetails, onClose: () => setSelectedProductForDetails(null), onAddToCart: (prod, qty, variant, addOns, notes) => {
                    addToCart(prod, qty, variant, addOns, notes);
                } }), _jsx(CartDrawer, { isOpen: isDrawerOpen, onClose: () => setIsDrawerOpen(false), items: items, breakdown: breakdown, seatInfo: seatInfo, onUpdateQuantity: updateQuantity, onRemoveItem: removeFromCart, onClearCart: clearCart, onApplyPromoCode: applyPromoCode, promoCode: promoCode, promoMessage: promoMessage, onProceedToCheckout: () => {
                    setIsDrawerOpen(false);
                    setCheckoutAfterSeat(true);
                    setIsSeatModalOpen(true);
                } }), _jsx(CheckoutModal, { isOpen: isCheckoutOpen, onClose: () => setIsCheckoutOpen(false), items: items, breakdown: breakdown, seatInfo: seatInfo, onOrderSuccess: handleOrderSuccess }), _jsx(OrderTrackerModal, { order: latestOrder, isOpen: isOrderTrackerOpen, onClose: () => setIsOrderTrackerOpen(false) }), _jsx(Footer, {})] }));
}
