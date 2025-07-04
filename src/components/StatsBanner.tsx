import React from 'react';
import { Link } from 'react-router-dom';

const StatsBanner = () => {
  return (
    <section className="w-full bg-headerblue py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-16">
        <Link to="/contact" className="flex items-center space-x-4 text-white font-bold text-2xl hover:underline">
          <span className="text-4xl" style={{border: '3px solid #FFD600', borderRadius: '50%', padding: '6px'}} role="img" aria-label="smile">😊</span>
          <span>Book Your Appointment</span>
        </Link>
        <a href="#" className="flex items-center space-x-4 text-white font-bold text-2xl hover:underline">
          <span className="text-4xl" style={{border: '3px solid #FFD600', borderRadius: '50%', padding: '6px'}} role="img" aria-label="user">👤</span>
          <span>Ask an Experts</span>
        </a>
      </div>
    </section>
  );
};

export default StatsBanner; 