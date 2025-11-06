import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import salon from "../assets/saloon.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4C4DDC] via-[#101010] to-[#101010]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#4C4DDC] mb-4">
            About <span className="text-[#C8C8F4]">NoWait</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We’re here to revolutionize salon bookings — faster, smarter, and
            stress-free.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#C8C8F4] mb-4">Our Story</h2>
          <p className="text-gray-400 leading-relaxed">
            NoWait started with a simple idea — eliminate the long waiting times
            at salons and bring convenience to both customers and salon owners.
            We envisioned a platform where users can instantly book services,
            choose stylists, and manage appointments from the comfort of their
            home.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            Today, NoWait empowers salons across cities, helping them manage
            clients, boost revenue, and deliver premium beauty experiences — all
            while customers enjoy seamless, stress-free appointments.
          </p>
        </div>

        <div className="relative">
          <div className="w-full h-80 bg-gradient-to-br from-[#4C4DDC] to-[#C8C8F4] rounded-3xl blur-sm"></div>
          <img
            src={salon}
            alt="Salon"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl border border-[#4C4DDC] shadow-lg shadow-[#4C4DDC]"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#101010] text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4C4DDC] mb-4">
          Our Mission
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
          To create a digital-first salon ecosystem that connects people to
          their favorite beauty experts instantly — saving time, enhancing
          comfort, and promoting self-care in a smarter way.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Innovation",
            desc: "We’re constantly evolving to make salon management smarter and faster.",
          },
          {
            title: "Trust",
            desc: "We ensure reliable, transparent experiences for both customers and salons.",
          },
          {
            title: "Quality",
            desc: "Our focus is on premium service, top-rated salons, and satisfied clients.",
          },
        ].map((value, i) => (
          <div
            key={i}
            className="bg-[#151515] p-8 rounded-2xl border border-[#4C4DDC] hover:border-[#4C4DDC] hover:shadow-lg hover:shadow-[#4C4DDC] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              {value.title}
            </h3>
            <p className="text-gray-400 text-sm">{value.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-gradient-to-b from-[#101010] to-[#0c0c0c]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4C4DDC]">
          Be Part of the NoWait Journey
        </h2>
        <p className="text-gray-400 mt-4">
          Join us in transforming how people experience beauty and care — one
          booking at a time.
        </p>
        {/* <div className="mt-8 flex justify-center gap-4"> */}
          {/* <button className="px-8 py-3 bg-[#4C4DDC] text-white font-semibold rounded-full hover:bg-[#3B3CCB] transition">
            Join Now
          </button> */}
          {/* <button className="px-8 py-3 border border-[#4C4DDC] text-[#4C4DDC] rounded-full hover:bg-[#4C4DDC] hover:text-white transition" >
              <Link to="/contact" >
                Contact Us
              </Link>
          </button> */}
        {/* </div> */}
      </section>

      <Footer />
    </div>
  );
}

export default About;
