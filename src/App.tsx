import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import FastRepairs from './components/FastRepairs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CommunityBanner from './components/CommunityBanner';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import Contact from './components/Contact';

function HomePage() {
  console.log('HomePage component rendering');
  return (
    <>
      <Hero />
      <StatsBanner />
      <FastRepairs />
      <StatsBanner />
      <About />
      <Testimonials />
      <CommunityBanner />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  console.log('Current location:', location.pathname);

  return (
    <div className="min-h-screen pt-24">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  console.log('App component rendering');
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;