import React, { useState } from 'react';
import SupportDashboardModal from './SupportDashboardModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="min-h-[60vh] py-12 bg-gray-50 relative">
      <SupportDashboardModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Left: Get In Touch */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-4">Contact us today for your tech and appliances repair services. Book a service today! We're committed to your complete satisfaction with our service.</p>
            <p className="mb-2 font-bold">Address : <span className="font-normal">24th St, Coral Springs, FL 33065, United States</span></p>
            <p className="mb-2 font-bold">Email : <span className="font-normal">support@geek-services.com</span></p>
            <p className="mb-6 font-bold">Phone : <span className="font-normal">+1 (833) 573-2428</span></p>
            <a
              href="tel:+18335732428"
              className="w-56 h-16 bg-yellow-400 hover:bg-yellow-500 text-xl font-bold rounded-md border-2 border-blue-600 text-gray-900 transition-colors flex items-center justify-center text-center"
            >
              Chat Now
            </a>
          </div>
          {/* Right: Request Free Consultation */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Request Free Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Type here..."
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Type here..."
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">Your Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Type here..."
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-1">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type here..."
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-32 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Floating Phone Button */}
        <button
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl z-40"
          onClick={() => setModalOpen(true)}
          aria-label="Open Support Dashboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-1.01 2.31l-.37.185a11.042 11.042 0 005.516 5.516l.185-.37a2 2 0 012.31-1.01l2.064.516A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 12V6a2 2 0 012-2z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Contact;