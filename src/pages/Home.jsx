import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBolt, FaAward, FaRegCalendarCheck } from "react-icons/fa";
import slider1 from "../assets/animation.5.mp4";
import salon from "../assets/saloon.png";
function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main
        className="flex-grow mt-20 flex flex-col items-center justify-center text-center px-6 py-6 relative overflow-hidden"
        style={{ height: "88vh" }}
      >
        {/* Background Image */}
        {/* <div
          className="hidden md:flex absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slider1})`,
          }}
        ></div> */}
        {/* Background Video */}
        <video
          className="absolute  w-full h-full object-cover"
          style={{opacity:"0.7"}}
          src={slider1}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay Gradient */}
        <div className="absolute  bg-black"></div>

        {/* Glow Circle */}
        <div className="absolute w-96 h-96 bg-[#4C4DDC]/0 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
            Welcome to <span className="text-[#4C4DDC]">NoWait</span>
          </h1>

          <p className="text-gray-300 mt-5 text-lg md:text-xl">
            Make Saloon Visits With {" "}
            <span className="text-[#C8C8F4] font-medium">
             NoWait
            </span>
          </p>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-4"> */}
            {/* <button className="px-8 py-3 bg-[#4C4DDC] text-white font-semibold rounded-full hover:bg-[#3B3CCB] transition">
              Download Now
            </button> */}
            {/* <button className="px-8 py-3 border border-[#4C4DDC] text-[#4C4DDC] rounded-full hover:bg-[#4C4DDC] hover:text-white transition">
              Learn More
            </button> */}
          {/* </div> */}
        </div>

        {/* Divider Line */}
        <div className="absolute bottom-10 w-2/3 h-px bg-gradient-to-r from-transparent via-[#4C4DDC] to-transparent"></div>
      </main>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
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

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#101010] py-20 px-6  text-center">
        <h2 className="text-3xl font-bold text-[#4C4DDC] mb-10">
          Why Choose <span className="text-[#C8C8F4]">NoWait</span>?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 ">
          {[
            {
              title: "Fast Bookings",
              desc: "Instantly book appointments at your favorite salon without the hassle of waiting lines.",
              icon: <FaBolt className="text-[#4C4DDC] text-4xl mb-4 m-auto" />,
            },
            {
              title: "Verified Salons",
              desc: "Every salon on our platform is verified for quality, hygiene, and top-notch service.",
              icon: <FaAward className="text-[#4C4DDC] text-4xl mb-4 m-auto" />,
            },
            {
              title: "Smart Scheduling",
              desc: "Choose your preferred stylist and get reminders so you never miss an appointment.",
              icon: (
                <FaRegCalendarCheck className="text-[#4C4DDC] text-4xl mb-4 m-auto" />
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#151515] p-8 rounded-2xl border border-[#4C4DDC] hover:border-[#4C4DDC] hover:shadow-lg hover:shadow-[#4C4DDC] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#C8C8F4] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="text-center py-20 bg-gradient-to-b from-[#101010] to-[#0c0c0c]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4C4DDC]">
          Ready to Skip the Wait?
        </h2>
        <p className="text-gray-400 mt-4">
          Join thousands of users who trust NoWait for their salon bookings.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-[#4C4DDC] text-white font-semibold rounded-full hover:bg-[#3B3CCB] transition">
            Get Started
          </button>
          <button className="px-8 py-3 border border-[#4C4DDC] text-[#4C4DDC] rounded-full hover:bg-[#4C4DDC] hover:text-white transition">
            Learn More
          </button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default Home;
