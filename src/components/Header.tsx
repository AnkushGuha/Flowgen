import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'; // ✅ Make sure logo.jpg exists at src/components/logo.jpg

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Flowgen Arc Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl font-semibold text-white">Flowgen Arc</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/features" className="hover:text-indigo-400 transition">Features</Link>
          <Link to="/pricing" className="hover:text-indigo-400 transition">Pricing</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link
            to="/signup"
            className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-black">
          <Link to="/" className="block hover:text-indigo-400">Home</Link>
          <Link to="/features" className="block hover:text-indigo-400">Features</Link>
          <Link to="/pricing" className="block hover:text-indigo-400">Pricing</Link>
          <Link to="/about" className="block hover:text-indigo-400">About</Link>
          <Link
            to="/signup"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-center transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
