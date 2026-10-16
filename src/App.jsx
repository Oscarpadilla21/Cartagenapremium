import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import HabitacionesPage from './pages/HabitacionesPage';
import ServiciosPage from './pages/ServiciosPage';
import ExperienciasPage from './pages/ExperienciasPage';
import GaleriaPage from './pages/GaleriaPage';
import UbicacionPage from './pages/UbicacionPage';
import ContactoPage from './pages/ContactoPage';
import AvisoLegalPage from './pages/AvisoLegalPage';
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState(null);
  const [currency, setCurrency] = useState('COP');

  const handleOpenBooking = (suite = null) => {
    setSelectedSuite(suite);
    setIsBookingOpen(true);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-[#1A1816] flex flex-col selection:bg-[#C5A880]/30 selection:text-[#0E1E2E] overflow-x-hidden max-w-full">
        {/* Fixed Luxury Navigation Bar with Multi-Page Routing */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* Dynamic Multi-Page Content with Dedicated Pagination & Routes */}
        <main className="flex-1 w-full overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  currency={currency}
                />
              }
            />
            <Route
              path="/habitaciones"
              element={
                <HabitacionesPage
                  onOpenBooking={handleOpenBooking}
                  currency={currency}
                />
              }
            />
            <Route
              path="/servicios"
              element={
                <ServiciosPage
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/experiencias"
              element={<ExperienciasPage />}
            />
            <Route
              path="/galeria"
              element={<GaleriaPage />}
            />
            <Route
              path="/ubicacion"
              element={
                <UbicacionPage
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/contacto"
              element={
                <ContactoPage
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/aviso-legal"
              element={<AvisoLegalPage />}
            />
            <Route
              path="/politica-privacidad"
              element={<PoliticaPrivacidadPage />}
            />
          </Routes>
        </main>

        {/* Luxury Footer with Router Links */}
        <Footer />

        {/* Interactive Reservation Drawer / Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialSuite={selectedSuite}
          currency={currency}
        />

        {/* Official Floating VIP WhatsApp Concierge Widget */}
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}
