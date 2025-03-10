import React from "react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../ultils/motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.nav
    variants={fadeIn("down", 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-gray-100 backdrop-blur-sm border-b px-16 shadow-sm">
      <div className="w-full flex items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1  cursor-pointer">
          <div className="w-6 h-6 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-6 h-6 bg-red-600 rounded-full -ml-2 opacity-75 hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Mobile menu btn */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center  gap-1 cursor-pointer"
        >
          {isMenuOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>

        {/* navbar items */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
              }}
              className={`text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-700 hover:text-gray-950"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* get touch btn */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>


      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-lg font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              <a href="#newsletter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
