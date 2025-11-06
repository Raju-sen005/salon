import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4C4DDC]/10 via-[#101010] to-[#101010]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#4C4DDC] mb-4">
            Contact <span className="text-[#C8C8F4]">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question or need support? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-[#C8C8F4] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Whether you’re a customer or a salon owner, our team is here to
              help you get the best out of NoWait. Reach out anytime!
            </p>
          </div>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#4C4DDC] text-xl" />{" "}
              <span className="text-[#4C4DDC]">Jaipur, Rajasthan, India</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#4C4DDC] text-xl" />{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-[#C8C8F4] transition"
              >
                +91 98765 43210
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#4C4DDC] text-xl" />
              <a
                href="mailto:support@nowait.com"
                className="hover:text-[#C8C8F4] transition"
              >
                support@nowait.com
              </a>
            </p>
          </div>

          <div className="flex space-x-5 text-2xl mt-6">
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#4C4DDC] transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#151515] p-8 rounded-2xl border border-[#4C4DDC]/20 shadow-md shadow-[#4C4DDC]/10">
          <h3 className="text-2xl font-semibold text-[#C8C8F4] mb-6 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-[#0D0D0D] border border-[#4C4DDC]/20 text-gray-200 focus:border-[#4C4DDC] focus:ring-2 focus:ring-[#4C4DDC]/40 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-[#0D0D0D] border border-[#4C4DDC]/20 text-gray-200 focus:border-[#4C4DDC] focus:ring-2 focus:ring-[#4C4DDC]/40 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-xl bg-[#0D0D0D] border border-[#4C4DDC]/20 text-gray-200 focus:border-[#4C4DDC] focus:ring-2 focus:ring-[#4C4DDC]/40 outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#4C4DDC] text-white font-semibold hover:bg-[#3B3CCB] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-10">
        <iframe
          title="NoWait Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.776496544586!2d75.78727077453578!3d26.84969536201846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40f3c6d8cf9%3A0xd6956b602e8c16e8!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709912353661!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-t border-[#4C4DDC]/20"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
