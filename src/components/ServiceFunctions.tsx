import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ServiceFunctions = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Book Appointment */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Book Your Appointment</h3>
                <p className="text-blue-100 mb-6">Schedule a convenient time for our experts to help you with your tech needs</p>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Book Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Ask Experts */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-blue-800" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ask an Expert</h3>
                <p className="text-blue-100 mb-6">Get instant answers and professional advice from our certified technicians</p>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Chat Now</span>
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 px-12 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg">
                  <span>Get Started Now</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-12 py-4 rounded-lg font-bold text-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFunctions;