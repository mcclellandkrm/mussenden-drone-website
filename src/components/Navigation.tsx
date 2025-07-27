'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={item.href}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group"
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={false}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white origin-center transition-all duration-300"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white mt-1.5 origin-center transition-all duration-300"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 w-64 mt-4 bg-black/90 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl lg:hidden"
          >
            <div className="p-4 space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-gray-800 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
