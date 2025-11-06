import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#101010] shadow-lg border-b border-[#4C4DDC]"
          : "bg-[#101010] border-b border-[#4C4DDC]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 select-none">
          <h1 className="text-2xl font-extrabold text-[#4C4DDC] tracking-wide">
            No<span className="text-[#C8C8F4]">Wait</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/how-it-works", label: "How It Works" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
          ].map((link) => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                className={`transition ${
                  location.pathname === link.to
                    ? "text-[#4C4DDC]"
                    : "hover:text-[#C8C8F4]"
                }`}
              >
                {link.label}
              </Link>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#4C4DDC] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        {/* <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-[#4C4DDC] rounded-full text-[#4C4DDC] hover:bg-[#4C4DDC] hover:text-white transition">
            Log In
          </button>
          <button className="px-4 py-2 bg-[#4C4DDC] text-white font-semibold rounded-full hover:bg-[#3B3CCB] transition">
            Sign Up
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#101010] backdrop-blur-lg border-t border-[#4C4DDC] px-6 py-4 space-y-4 animate-slideDown">
          {[
            { to: "/", label: "Home" },
            { to: "/how-it-works", label: "How It Works" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block text-gray-300 hover:text-[#C8C8F4] transition ${
                location.pathname === link.to ? "text-[#4C4DDC]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* <div className="flex space-x-3 pt-4">
            <button className="flex-1 px-4 py-2 border border-[#4C4DDC] rounded-full text-[#4C4DDC] hover:bg-[#4C4DDC] hover:text-white transition">
              Log In
            </button>
            <button className="flex-1 px-4 py-2 bg-[#4C4DDC] text-white font-semibold rounded-full hover:bg-[#3B3CCB] transition">
              Sign Up
            </button>
          </div> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
