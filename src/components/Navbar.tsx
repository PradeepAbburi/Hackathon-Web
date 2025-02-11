import { ArrowLeft, Menu, X } from 'lucide-react'; // Remove Moon and Sun as we are removing the theme toggle
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu visibility
  const showBackButton = location.pathname !== '/';

  return (
    <nav className="fixed top-0 w-full bg-gray-900 py-2 dark:bg-gray-900 shadow-md z-50 border-b border-gold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="mr-4 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-800"
              >
                <ArrowLeft className="h-5 w-5 text-black" />
              </button>
            )}
            
            {/* Container with background, curved shape, and transparency */}
            <div className="bg-gradient-to-r from-transparent to-gold-500 text-white p-4 rounded-xl shadow-lg">
              <h1 className="text-xl font-bold font-poppins">
                Global Coding Club Hackathon
              </h1>
            </div>
          </div>

          {/* Hamburger Menu for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-6">
            <a href="/" className="text-white hover:text-gold-400 transition-colors">
              Home
            </a>
            <a href="/register" className="text-white hover:text-gold-400 transition-colors">
              Register
            </a>
            <a href="/gallery" className="text-white hover:text-gold-400 transition-colors">
              Gallery
            </a>
            <a href="/contact" className="text-white hover:text-gold-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Nav Links (when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 p-4 space-y-4">
          <a href="/" className="text-black hover:text-gold-400 transition-colors block">
            Home
          </a>
          <a href="/register" className="text-black hover:text-gold-400 transition-colors block">
            Register
          </a>
          <a href="/gallery" className="text-black hover:text-gold-400 transition-colors block">
            Gallery
          </a>
          <a href="/contact" className="text-black hover:text-gold-400 transition-colors block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
