import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import appStore from "../assets/appstore.png";
// import playStore from "../assets/playstore.png";

function Footer() {
  return (
    <footer className="bg-[#101010] text-gray-300 border-t border-[#4C4DDC] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#4C4DDC] mb-3">
            No<span className="text-[#C8C8F4]">Wait</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Skip the wait — salon visits made simple. Manage bookings, stylists,
            and clients effortlessly with{" "}
            <span className="text-[#4C4DDC]">NoWait</span>.
          </p>

          {/* App Download Buttons */}
          <div className="flex space-x-3 mt-5">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Google Play"
                className="h-10 w-auto"
                style={{
                  height: "58px",
                  position: "relative",
                  left: "0px",
                  top: "-8px",
                  width: "136px",
                }}
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#C8C8F4] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#4C4DDC] transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-[#4C4DDC] transition"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#4C4DDC] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#4C4DDC] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policy Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#C8C8F4] mb-3">
            Policies
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/refund-policy"
                className="hover:text-[#4C4DDC] transition"
              >
                Refund & Cancellation Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#4C4DDC] transition"
              >
                App Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#4C4DDC] transition">
                Customer Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/onboarding-agreement"
                className="hover:text-[#4C4DDC] transition"
              >
                Salon Onboarding Agreement
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#C8C8F4] mb-3">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:nowaitinsaloon@gmail.com"
                className="hover:text-[#4C4DDC]"
              >
                nowaitinsaloon@gmail.com
              </a>
            </li>
            <li>
              Phone: <span className="text-[#4C4DDC]">+91 70233 02672</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-4 text-lg">
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-[#4C4DDC]/10 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#4C4DDC]">NoWait</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
