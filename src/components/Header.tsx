import React, { useState } from 'react';
import { Wallet, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0d0e12] border-b border-[#1e2028] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Wallet className="h-8 w-8 text-[#5470ff]" />
              <span className="font-bold text-xl">Exodus</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a>
            <a href="#assets" className="text-gray-300 hover:text-white transition-colors">Assets</a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-gradient-to-r from-[#5470ff] to-[#31c5f0] rounded-lg font-medium">
              Download Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e2028] px-4 py-6">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a>
            <a href="#assets" className="text-gray-300 hover:text-white transition-colors">Assets</a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
            <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <button className="px-4 py-2 bg-gradient-to-r from-[#5470ff] to-[#31c5f0] rounded-lg font-medium self-start mt-2">
              Download Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;