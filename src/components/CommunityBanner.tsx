import React from 'react';

const CommunityBanner = () => {
  return (
    <section className="w-full bg-headerblue py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">Become a member and save money on today's service.</h2>
            <p className="text-lg text-white">Plus, get unlimited help with all your devices and 100+ included or discounted services.</p>
          </div>
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="tel:+18335732428" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-2xl px-12 py-6 rounded-md shadow-lg transition-colors block text-center">Chat Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner; 