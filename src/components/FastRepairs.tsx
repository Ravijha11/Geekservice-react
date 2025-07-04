import React from 'react';

const FastRepairs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-light text-slate-900 mb-5" style={{paddingBottom: '18px'}}>Fast repairs, right in your neighborhood</h1>
            <p className="text-base text-slate-700 mb-2" style={{fontSize: '16px'}}>
              Our experts can fix your tech & appliances easily. Make your appointment today and let us come to you. And our appliance repairs are just as simple. In select cities, we can have your device working after one visit to your home.<br /><br />
            </p>
            <ul className="mb-8 pl-6 font-bold" style={{paddingBottom: '32px', listStyleImage: 'url(/public/list.jpg)'}}>
              <li>Thousands of local repair experts ready to help</li>
              <li>Most repairs done in same day</li>
            </ul>
            <a href="#app" className="font-bold text-base border border-[#006bc2] px-6 py-2 rounded-full mr-4 hover:bg-[#006bc2] hover:text-white transition-colors" style={{fontSize: '16px'}}>Book Your Appointment</a>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/image%20copy.png"
              alt="Tech and Appliances repair services"
              className="w-full max-w-xl rounded-xl object-cover"
              style={{paddingTop: '24px'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastRepairs;