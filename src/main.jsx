import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CinemaFoodOrderingApp from './app/page.jsx';
import AdminPage from './app/admin/page.jsx';
import './app/globals.css';
import './services/api.js';

function App(){return <BrowserRouter><Routes><Route path="/" element={<CinemaFoodOrderingApp/>}/><Route path="/admin" element={<AdminPage/>}/><Route path="*" element={<CinemaFoodOrderingApp/>}/></Routes></BrowserRouter>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
