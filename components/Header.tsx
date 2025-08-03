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
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-blue-600 transition-colors">
              Search
            </Link>
            <Link href="/host-dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              Host Dashboard
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Sign Up
            </Link>
            <button 
              className="md:hidden w-6 h-6 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/search" className="block py-2 text-gray-700 hover:text-blue-600">
              Search
            </Link>
            <Link href="/host-dashboard" className="block py-2 text-gray-700 hover:text-blue-600">
              Host Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}