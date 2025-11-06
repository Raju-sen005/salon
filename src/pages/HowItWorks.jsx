import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCut, FaRegClock, FaMobileAlt, FaSpa } from "react-icons/fa";
function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Service",
      desc: "Pick from our wide range of salon and spa services tailored to your needs.",
      icon:  <FaCut className="text-[#4C4DDC] text-5xl mb-4 m-auto" />,
    },
    {
      id: 2,
      title: "Select a Salon & Time",
      desc: "Find trusted salons near you and choose your preferred time slot instantly.",
      icon: <FaRegClock className="text-[#4C4DDC] text-5xl mb-4 m-auto" />,
    },
    {
      id: 3,
      title: "Book Instantly",
      desc: "Confirm your appointment with just one click and skip the waiting line.",
      icon: <FaMobileAlt className="text-[#4C4DDC] text-5xl mb-4 m-auto" />,
    },
    {
      id: 4,
      title: "Enjoy Your Visit",
      desc: "Show up on time and enjoy a smooth, premium salon experience.",
      icon: <FaSpa className="text-[#4C4DDC] text-5xl mb-4 m-auto" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4C4DDC] via-[#101010] to-[#101010]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#4C4DDC] mb-4">
            How <span className="text-[#C8C8F4]">NoWait</span> Works
          </h1>
          <p className="text-gray-400 text-lg">
            Get your beauty services done faster — no lines, no stress, no wait!
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center bg-[#151515] p-8 rounded-2xl border border-[#4C4DDC] hover:border-[#4C4DDC] hover:shadow-lg hover:shadow-[#4C4DDC] transition-all duration-300"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#C8C8F4] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      {/* <section className="text-center py-20 bg-gradient-to-b from-[#101010] to-[#0c0c0c]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4C4DDC]">
          Ready to Skip the Wait?
        </h2>
        <p className="text-gray-400 mt-4">
          Join thousands of users already booking their salon visits faster with
          NoWait.
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

export default HowItWorks;
