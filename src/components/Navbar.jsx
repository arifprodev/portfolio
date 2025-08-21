"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

// Animated Text Component for individual characters
const AnimatedText = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <span style={{ opacity: isVisible ? 1 : 0 }}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateY(50px)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll detection - Show hamburger after 10% scroll and maintain position
  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage =
        documentHeight > 0 ? (scrollPosition / documentHeight) * 100 : 0;

      setIsScrolled(scrollPercentage >= 20);

      // Save scroll position if it's 10% or more
      if (scrollPercentage >= 10) {
        sessionStorage.setItem("maintainScroll", scrollPosition.toString());
      } else {
        sessionStorage.removeItem("maintainScroll");
      }
    };

    // Restore scroll position if it was 10% or more
    const savedPosition = sessionStorage.getItem("maintainScroll");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    // Check immediately and after small delay for content loading
    checkScrollPosition();
    const timeout = setTimeout(checkScrollPosition, 100);

    const handleScroll = () => {
      checkScrollPosition();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset body overflow
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#works", label: "Works" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <section className="px-4">
      <div>
        <div className="w-full">
          <div className="flex justify-between py-3 sm:py-4">
            {/* Navigation */}
            <div className="flex md:items-center justify-between w-full font-medium text-lg text-[#6B645C] z-10">
              {/* Logo */}
              <p>
                Web Developer & Designer
              </p>

              {/* Nav Links */}
              <div className="flex flex-col md:flex-row -space-y-1.5">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#works">Works</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile/Tablet Menu Button - Show after 10% scroll OR always on mobile/tablet */}
            {isScrolled && (
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 bg-[#F1F0ED] w-10 h-10 sm:w-12 sm:h-12 hover:bg-slate-100 focus:outline-none fixed top-4 sm:top-5 md:top-7 lg:top-10 right-3 sm:right-5 md:right-8 z-[999] transition-all duration-300 shadow-sm"
                aria-label="Toggle menu"
              >
                <HamburgerIcon isOpen={isOpen} />
              </button>
            )}
          </div>
          {/* Hero Background Text - Animated Characters */}
          <div className="w-fit">
            <div className="flex flex-wrap -space-y-[57px] text-[#302f2d] md:opacity-0 absolute top-[42px]">
              <h1 className="text-[7.6rem] -tracking-widest font-bold">
                <AnimatedText text="ARIF" delay={100} />
              </h1>
              <h2 className="text-[3.5rem] -tracking-widest flex font-bold justify-end items-end">
                <AnimatedText text="HOSSEN" delay={300} />
              </h2>
            </div>
              <div className="hidden w-fit mx-auto md:flex justify-center items-center gap-4 md:gap-5 lg:gap-6 xl:gap-7 -tracking-widest absolute left-0 right-0 font-semibold uppercase overflow-hidden
         top-10
        md:text-[126px] md:-top-2 md:font-semibold md:flex-row
        lg:text-[168.4px] lg:-top-6 lg:font-semibold
        xl:text-[215px] xl:-top-11
        2xl:text-[261.9px] 2xl:-top-16
        text-[#302f2d]">
                <AnimatedText text="ARIF" delay={100} />
                <AnimatedText text="HOSSEN" delay={300} />
              </div>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/10 backdrop-blur-xl z-[90]"
                onClick={() => setIsOpen(false)}
              />

              {/* Main Menu Container */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="fixed top-0 right-0 w-full h-screen z-[100] bg-[#6B645C]/20 backdrop-blur-xl overflow-hidden"
              >
                {/* Menu Background Decoration */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  className="fixed right-0 top-0 z-10"
                >
                  <div className="relative">
                    <figure>
                      <Image
                        src="/menu.svg"
                        width={150}
                        height={150}
                        className="opacity-10 sm:opacity-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                        alt="Menu background decoration"
                      />
                    </figure>
                  </div>
                </motion.div>

                {/* Menu Content */}
                <div className="flex flex-col pt-10 px-4 sm:px-6 md:px-8 items-start sm:items-end sm:mr-8 md:mr-48 lg:mr-52 xl:mr-64">
                  <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full sm:w-auto">
                    {/* Menu Items with Waterfall Effect */}
                    <div className="">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 100, opacity: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.1,
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        >
                          <MobileNavLink
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </MobileNavLink>
                        </motion.div>
                      ))}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-[#E8E8E3]/20">
                      {/* Email */}
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="text-[#E8E8E3]/60 text-xs sm:text-sm"
                      >
                        <p className="uppercase font-semibold mb-1 sm:mb-2">
                          Email Address
                        </p>
                        <Link
                          href="mailto:arifprodev@gmail.com"
                          className="text-[#E8E8E3]/90 hover:text-[#E8E8E3] transition-colors text-sm sm:text-base break-all"
                        >
                          arifprodev@gmail.com
                        </Link>
                      </motion.div>

                      {/* Social Links */}
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="text-[#E8E8E3]/90 text-xs sm:text-sm"
                      >
                        <p className="uppercase font-semibold mb-2 text-[#E8E8E3]/60">
                          Follow Me
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                          <Link
                            href="https://www.linkedin.com/in/arifhossenbd/"
                            className="hover:text-[#E8E8E3] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </Link>
                          <Link
                            href="https://github.com/arifhossenbd"
                            className="hover:text-[#E8E8E3] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </Link>
                          <Link
                            href="https://leetcode.com/u/arifhossenbd"
                            className="hover:text-[#E8E8E3] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LeetCode
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Desktop NavLink Component
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="px-1 text-[#6B645C] hover:text-[#4a443e] transition-colors"
  >
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.span>
  </Link>
);

// Mobile NavLink with enhanced animation
const MobileNavLink = ({ href, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group">
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block font-bold text-[#E8E8E3] relative w-fit uppercase transition-all duration-300
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        {children}

        {/* Animated Underline */}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-[#E8E8E3] origin-left w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </Link>
    </div>
  );
};

// Enhanced Hamburger Icon
const HamburgerIcon = ({ isOpen }) => {
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 4 },
  };

  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -4 },
  };

  return (
    <div className="w-5 h-3 sm:w-6 sm:h-3 relative flex flex-col justify-between">
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
