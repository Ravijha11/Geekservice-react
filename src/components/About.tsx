import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{paddingTop: '4%'}}>Who we are?</h2>
              <p className="text-lg text-slate-700 mb-8" style={{padding: '4%'}}>
                Geek Services is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances. Specializing in services for Computers & Tablets, Mobile Devices, Printers, WiFi & Networking, TV & Home Theater, Video Games & Entertainment, Cameras & Camcorders, Smart Home, Home Security, Drones, Audio & Video, TV Mounting, Major Appliances, Small Appliances, and more, Geek Services aims to address the diverse repair service needs of its customers.<br /><br />
                <Link to="/about" className="font-bold text-base border border-[#006bc2] px-8 py-2 rounded-full hover:bg-[#006bc2] hover:text-white transition-colors" style={{fontSize: '16px'}}>Read More</Link>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/image%20copy%202.png"
              alt="About Us"
              className="w-full max-w-xl rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;