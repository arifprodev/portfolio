'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 bg-slate-50 w-12 hover:bg-slate-100 h-12 focus:outline-none"
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/projects">Projects</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  );
}

// Reusable NavLink Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </Link>
);

// Mobile NavLink with animation
const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
  >
    {children}
  </Link>
);

// Animated Hamburger Icon
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  // Variants for smooth animation
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 5, width: '100%' }, // Adjusted y position
  };

  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -5, width: '100%' }, // Adjusted y position
  };

  return (
    <div className="w-6 h-3 relative flex flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full bg-current origin-center"
        variants={topLine}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="block h-0.5 w-full bg-current origin-center"
        variants={bottomLine}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};