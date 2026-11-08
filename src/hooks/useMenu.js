'use client';
import { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
export function useMenu() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [foodTypeFilter, setFoodTypeFilter] = useState('all');
    const [products, setProducts] = useState(PRODUCTS);
    useEffect(() => { let active = true; const load = async () => { try {
        const r = await fetch('/api/products', { cache: 'no-store' });
        if (r.ok) {
            const rows = await r.json();
            if (active)
                setProducts(rows);
        }
    }
    catch { /* retain bundled menu while offline */ } }; load(); const timer = setInterval(load, 15000); return () => { active = false; clearInterval(timer); }; }, []);
    const [sortBy, setSortBy] = useState('recommended');
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Search filter
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase().trim();
                const matchesName = product.name.toLowerCase().includes(query);
                const matchesDesc = (product.description || '').toLowerCase().includes(query);
                const matchesBrand = product.brand?.toLowerCase().includes(query);
                const matchesCat = (product.categoryName || '').toLowerCase().includes(query);
                if (!matchesName && !matchesDesc && !matchesBrand && !matchesCat) {
                    return false;
                }
            }
            // Category filter
            if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
                return false;
            }
            // Veg / Non-Veg filter
            if (foodTypeFilter !== 'all' && product.foodType !== foodTypeFilter) {
                return false;
            }
            return true;
        }).sort((a, b) => {
            if (sortBy === 'price-low')
                return a.price - b.price;
            if (sortBy === 'price-high')
                return b.price - a.price;
            if (sortBy === 'prep-time')
                return a.prepTimeMinutes - b.prepTimeMinutes;
            // Recommended / best sellers first
            if (a.isBestSeller && !b.isBestSeller)
                return -1;
            if (!a.isBestSeller && b.isBestSeller)
                return 1;
            return 0;
        });
    }, [products, searchQuery, selectedCategory, foodTypeFilter, sortBy]);
    // Group by category for the single long page
    const productsByCategory = useMemo(() => {
        const map = new Map();
        CATEGORIES.forEach(cat => map.set(cat.id, []));
        filteredProducts.forEach(prod => {
            const list = map.get(prod.categoryId) || [];
            list.push(prod);
            map.set(prod.categoryId, list);
        });
        return map;
    }, [filteredProducts]);
    return {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        foodTypeFilter,
        setFoodTypeFilter,
        sortBy,
        setSortBy,
        filteredProducts,
        productsByCategory,
        categories: CATEGORIES
    };
}
