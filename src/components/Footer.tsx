import React from 'react';
import { Wallet, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0e12] border-t border-[#1e2028] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="h-8 w-8 text-[#5470ff]" />
              <span className="font-bold text-xl">Exodus</span>
            </div>
            <p className="text-gray-400 mb-4">
              The world's leading Web3 wallet for managing cryptocurrency assets and accessing decentralized applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#5470ff] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5470ff] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5470ff] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5470ff] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5470ff] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Desktop Wallet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Wallet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browser Extension</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardware Wallet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exodus Crypto Apps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Asset Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal & Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1e2028] pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Exodus. All rights reserved.</p>
          <p className="mt-2">Cryptocurrency storage, management, and exchange services provided by Exodus Movement, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;