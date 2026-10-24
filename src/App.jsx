import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import LegalNotice from './components/LegalNotice';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import HabitacionesPage from './pages/HabitacionesPage';
import ServiciosPage from './pages/ServiciosPage';
import ExperienciasPage from './pages/ExperienciasPage';
import GaleriaPage from './pages/GaleriaPage';
import UbicacionPage from './pages/UbicacionPage';
import ContactoPage from './pages/ContactoPage';
import ClubPremiumPage from './pages/ClubPremiumPage';
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#333333] flex flex-col selection:bg-[#c1a186]/30 selection:text-[#333333] overflow-x-hidden max-w-full">
        {/* Navigation Bar matching original site items */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* Dynamic Multi-Page Content */}
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
              path="/club-premium"
              element={<ClubPremiumPage />}
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
              path="/aviso-legal"
              element={<AvisoLegalPage />}
            />
            <Route
              path="/politica-privacidad"
              element={<PoliticaPrivacidadPage />}
            />
            <Route
              path="/politica-de-cookies"
              element={<PoliticaPrivacidadPage />}
            />
          </Routes>
        </main>

        {/* Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialSuite={selectedSuite}
          currency={currency}
        />

        {/* Direct WhatsApp Concierge Button */}
        <WhatsAppButton />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Footer */}
        <Footer />

        {/* Authentic Cookie Notice Banner */}
        <LegalNotice />
      </div>
    </BrowserRouter>
  );
}
