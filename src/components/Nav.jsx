import React from "react";
import { Mail, Linkedin, Github, Instagram, Youtube } from 'lucide-react'
import { SiTiktok } from 'react-icons/si'

const Nav = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
          <Mail className="w-5 h-5 text-yellow-500" /> MyPWA Docs
        </h1>
        <div className="flex gap-4 items-center">
          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-yellow-500 transition"
          >
            Home
          </a>
          <a
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-yellow-500 transition"
          >
            Contact
          </a>
          <a
            href="https://github.com/dabasil101/vite-pwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
