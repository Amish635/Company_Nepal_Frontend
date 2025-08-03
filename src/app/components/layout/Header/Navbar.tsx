'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { FiMessageCircle } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="w-full bg-white dark:bg-blue-950 shadow-sm dark:shadow-lg sticky top-0 z-50 border-b dark:border-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700 dark:text-white tracking-wide">
          NepTrade
        </Link>

        {/* Center Menu (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {/* Search */}
          <div className="relative w-full max-w-sm">
  <input
    type="text"
    placeholder="Search for products, suppliers..."
    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


          <Link href="/categories" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium text-sm">
            Categories
          </Link>
          <Link href="/products" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium text-sm">
            Products
          </Link>
          <Link href="/suppliers" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium text-sm">
            Suppliers
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 ml-4">
          {/* Message Icon */}
          <Link href="/messages" aria-label="Messages" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">
            <FiMessageCircle size={22} />
          </Link>

          <Link
            href="/signin"
            className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium"
          >
            Sign In
          </Link>

          <Link href="/post_requirement">
            <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Post Requirement
            </button>
          </Link>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-blue-950 border-t dark:border-blue-800">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <Link href="/categories" className="block text-sm text-gray-700 dark:text-gray-200">
            Categories
          </Link>
          <Link href="/products" className="block text-sm text-gray-700 dark:text-gray-200">
            Products
          </Link>
          <Link href="/suppliers" className="block text-sm text-gray-700 dark:text-gray-200">
            Suppliers
          </Link>
          <Link href="/messages" className="block items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <FiMessageCircle size={58} /> Messages
          </Link>
          <Link href="/signin" className="block text-sm text-gray-700 dark:text-gray-200">
            Sign In
          </Link>
          <Link href="/post_requirement">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
              Post Requirement
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
