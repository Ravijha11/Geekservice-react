import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-10">
      {/* Top Links Row */}
      <section className="w-full py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <Link to="/about" className="inline-block"><h5 className="text-white font-semibold text-lg">About Us</h5></Link>
            <Link to="/privacy-policy" className="inline-block"><h5 className="text-white font-semibold text-lg">Privacy Policy</h5></Link>
            <Link to="/terms-and-conditions" className="inline-block"><h5 className="text-white font-semibold text-lg">Terms & Conditions</h5></Link>
            <Link to="/refund-policy" className="inline-block"><h5 className="text-white font-semibold text-lg">Refund Policy</h5></Link>
            <Link to="/contact" className="inline-block"><h5 className="text-white font-semibold text-lg">Contact Us</h5></Link>
          </div>
        </div>
      </section>
      {/* Copyright */}
      <div className="border-t border-slate-700 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-white">Copyrights © 2025 Geek Services. All Rights Reserved</p>
        </div>
      </div>
      {/* Logo Section */}
      <div className="py-4">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-white text-3xl font-extrabold">Geek Services</h3>
        </div>
      </div>
      {/* Disclaimer */}
      <div className="pb-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-slate-300">Geek Services is an independent service provider and is not affiliated with any brands unless explicitly stated.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;