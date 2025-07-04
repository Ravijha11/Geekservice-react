import React, { useState } from 'react';
import { Monitor, Printer, Wifi, Mail, Home, Shield, Brain } from 'lucide-react';
import SupportDashboardModal from './SupportDashboardModal';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const services = [
    {
      icon: Monitor,
      title: "Computers & Tablet",
      description: "Complete repair and support for all computer and tablet devices"
    },
    {
      icon: Printer,
      title: "Printers",
      description: "Professional printer setup, repair, and maintenance services"
    },
    {
      icon: Wifi,
      title: "WiFi & Network",
      description: "Network setup, troubleshooting, and optimization solutions"
    },
    {
      icon: Mail,
      title: "Email Help",
      description: "Email configuration, security, and technical support"
    },
    {
      icon: Shield,
      title: "Antivirus & Security",
      description: "Comprehensive security solutions and virus removal"
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "Smart home device setup and automation solutions"
    },
    {
      icon: Shield,
      title: "Home Security",
      description: "Home security system installation and monitoring"
    },
    {
      icon: Brain,
      title: "Ask Experts",
      description: "Get expert advice and consultation for any tech issue"
    }
  ];

  return (
    <section id="app" className="py-16 bg-white">
      <SupportDashboardModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block border-b-4 border-headerblue pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Choose Product Category</h2>
          </div>
          <div className="max-w-3xl mx-auto mt-4">
            <p className="text-lg text-gray-700">
              We believe technology should work for everyone. That's why we offer a full range of tech & appliances repair solutions to keep you connected from protection and repair to installation and expert support.<br />
              How can we help you today?
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-6">
              For Quick Assistance : <a href="tel:+18335732428" className="text-headerblue underline hover:text-blue-700">+1 (833) 573-2428</a>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-headerblue" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2 text-center">{service.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;