import React from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
  console.log('Current location:', location.pathname);
  console.log('Current hash:', location.hash);

  // Add error boundary for routing
  React.useEffect(() => {
    console.log('Location changed to:', location.pathname);
  }, [location]);

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
        {/* Add a catch-all route for debugging */}
        <Route path="*" element={
          <div className="min-h-[60vh] py-12 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <p className="text-lg mb-4">Current path: {location.pathname}</p>
              <button 
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Go Home
              </button>
            </div>
          </div>
        } />
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