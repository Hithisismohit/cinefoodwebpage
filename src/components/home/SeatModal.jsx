'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { X, MapPin, CheckCircle2 } from 'lucide-react';
export const SeatModal = ({ isOpen, onClose, seatInfo, onSaveSeatInfo }) => {
    const [hallNumber, setHallNumber] = useState('');
    const [seatNumber, setSeatNumber] = useState('');
    const [error, setError] = useState('');
    if (!isOpen)
        return null;
    const handleSubmit = (e) => {
        e.preventDefault();
        const hall = hallNumber.trim();
        const seat = seatNumber.trim().toUpperCase();
        if (!hall || !seat) {
            setError('Hall Number and Seat Number are both required.');
            return;
        }
        if (!/^[A-Za-z0-9-]{1,12}$/.test(hall) || !/^[A-Za-z0-9-]{1,12}$/.test(seat)) {
            setError('Use 1–12 letters, numbers or hyphens.');
            return;
        }
        onSaveSeatInfo({ ...seatInfo, hallNumber: hall, seatNumber: seat });
        setError('');
        onClose();
    };
    return _jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm", children: _jsxs("div", { className: "w-full max-w-md rounded-3xl bg-cinema-card border border-cinema-border p-6 sm:p-8 shadow-2xl", children: [_jsx("button", { onClick: onClose, className: "float-right p-2 rounded-full bg-cinema-surface text-slate-400", children: _jsx(X, { className: "w-5 h-5" }) }), _jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-2xl bg-cinema-red/15 flex items-center justify-center text-cinema-red", children: _jsx(MapPin, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white", children: "Enter Your Seating Details" }), _jsx("p", { className: "text-xs text-slate-400", children: "Where should we deliver your order?" })] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("label", { className: "block text-xs font-semibold text-slate-300", children: ["Hall Number", _jsx("input", { autoFocus: true, value: hallNumber, onChange: e => setHallNumber(e.target.value), placeholder: "e.g. 02", className: "mt-2 w-full px-4 py-3 rounded-xl bg-cinema-surface border border-cinema-border text-white" })] }), _jsxs("label", { className: "block text-xs font-semibold text-slate-300", children: ["Seat Number", _jsx("input", { value: seatNumber, onChange: e => setSeatNumber(e.target.value), placeholder: "e.g. H-12", className: "mt-2 w-full px-4 py-3 rounded-xl bg-cinema-surface border border-cinema-border text-white" })] }), error && _jsx("p", { className: "text-xs text-red-400", children: error }), _jsxs("button", { type: "submit", className: "w-full py-3.5 rounded-xl bg-cinema-red text-white font-bold flex items-center justify-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4" }), "Continue to Checkout"] })] })] }) });
};
