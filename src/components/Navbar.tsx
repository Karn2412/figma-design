"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Hotels", href: "#" },
  { label: "Flights", href: "#" },
  { label: "Bookings", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <a href="/" className="flex items-center">
            {/* USER: Insert Jadoo Logo SVG from Figma here */}
            <img src="./Jadoo.svg" alt="Jadoo Logo" className="h-8 w-auto object-contain" />
          </a>

          {/* Right: Links & Actions */}
          <div className="hidden md:flex items-center gap-10 lg:gap-16">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="text-[#212832] text-[17px] font-normal hover:text-primary-coral transition-colors"
                style={{ fontFamily: "var(--font-google-sans, sans-serif)" }}
              >
                {link.label}
              </motion.a>
            ))}
            
            <motion.a
              href="#login"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-[#212832] text-[17px] font-medium hover:text-primary-coral transition-colors"
              style={{ fontFamily: "var(--font-google-sans, sans-serif)" }}
            >
              Login
            </motion.a>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-[#212832] text-[17px] font-medium hover:text-primary-coral transition-colors"
              style={{ fontFamily: "var(--font-google-sans, sans-serif)" }}
            >
              Sign up
            </motion.button>

            {/* EN Dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-1 cursor-pointer group"
            >
              <span className="text-[#212832] text-[17px] font-medium" style={{ fontFamily: "var(--font-google-sans, sans-serif)" }}>EN</span>
              {/* USER: Insert Chevron Down Icon SVG from Figma here */}
              <img src="./vector1.svg" alt="Language Dropdown" className="w-3 h-3 group-hover:rotate-180 transition-transform" />
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#212832]"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#212832]"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-brand-navy font-semibold py-2 text-lg hover:text-primary-orange transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-gray-100" />
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="text-brand-navy font-semibold py-2 text-lg hover:text-primary-orange transition-colors"
              >
                Login
              </a>
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="text-brand-navy font-semibold py-2 text-lg hover:text-primary-orange transition-colors"
              >
                Sign up
              </a>
              
              <div className="flex items-center gap-2 mt-4 cursor-pointer">
                 <span className="text-[#212832] font-semibold text-lg">EN</span>
                 <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="#212832" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
