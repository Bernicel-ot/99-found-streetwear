'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Navigation Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors font-medium px-2">
              HOME
            </Link>
            <Link href="/apparel" className="text-black hover:text-gray-600 transition-colors font-medium px-2">
              SHOP
            </Link>
            <Link href="/collections" className="text-black hover:text-gray-600 transition-colors font-medium px-2">
              COLLECTIONS
            </Link>
            <Link href="/impact" className="text-black hover:text-gray-600 transition-colors font-medium px-2">
              IMPACT
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors font-medium px-2">
              ABOUT
            </Link>
          </div>

          {/* Logo - Centered */}
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors street-font tracking-wider">
            99FOUND
          </Link>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button 
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Cart Icon */}
            <Link href="/cart" className="relative text-black hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 5H6L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-black hover:text-gray-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/apparel" 
              className="block py-2 text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link 
              href="/collections" 
              className="block py-2 text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              COLLECTIONS
            </Link>
            <Link 
              href="/impact" 
              className="block py-2 text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              IMPACT
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/signup" 
              className="block py-2 text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
