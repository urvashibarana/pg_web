'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-pacifico text-blue-600">PGFinder</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Search
            </Link>
            <Link href="/host-dashboard" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Host Dashboard
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute top-full left-0 right-0 shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            <Link 
              href="/" 
              className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/search" 
              className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
            <Link 
              href="/host-dashboard" 
              className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Host Dashboard
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <Link 
                href="/auth/login" 
                className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className="block py-3 px-4 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700 transition-colors duration-200 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
