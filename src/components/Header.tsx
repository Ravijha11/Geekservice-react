import React, { useState } from 'react';
import { Menu, X, Code, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-headerblue text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80">
            <Code className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold">Geek Services</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors font-bold text-lg">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors font-bold text-lg">About</Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors font-bold text-lg">Contact</Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+18335732428" className="flex items-center space-x-2 font-bold text-lg hover:text-cyan-200 transition-colors">
              <span className="text-2xl">🇺🇸</span>
              <span className="flex items-center space-x-1">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+1 (833) 573-2428</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-cyan-400 transition-colors font-bold text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors font-bold text-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors font-bold text-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;