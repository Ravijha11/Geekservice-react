import React from 'react';

interface SupportDashboardModalProps {
  open: boolean;
  onClose: () => void;
}

const SupportDashboardModal: React.FC<SupportDashboardModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row relative overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Left: Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Expert Solutions, Anytime, Anywhere—</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Right At Your Fingertips</h3>
          <p className="mb-6 text-base md:text-lg">We believe every challenge deserves a solution. That's why we offer a comprehensive range of expert services to help you tackle any issue—whether it's technology, appliances, or something entirely unique. From troubleshooting and repair to installation and professional guidance, we're here to keep your life running smoothly.</p>
          <h4 className="text-xl font-bold mb-2">How can we assist you today?</h4>
          <a
            href="tel:+18335732428"
            className="w-48 h-14 bg-yellow-400 hover:bg-yellow-500 text-xl font-bold rounded-md border-2 border-blue-600 text-gray-900 mb-4 transition-colors flex items-center justify-center text-center"
          >
            Chat Now
          </a>
          <div className="text-lg font-bold mb-2">For Quick Assistance: <span className="text-gray-800">+1 (833) 573-2428</span></div>
          <p className="text-sm text-gray-700 mt-2">Available 24/7, our experts are here to provide you with accurate answers and effective solutions. They undergo a strict verification process and are carefully selected to ensure you receive the best help possible.</p>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0">
          <img
            src="/image copy 2.png"
            alt="Support Agent"
            className="object-cover w-full h-64 md:h-full rounded-b-lg md:rounded-b-none md:rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportDashboardModal; 