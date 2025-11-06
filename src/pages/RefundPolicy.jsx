import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RefundPolicy() {
  return (
    <div className="bg-[#101010] text-gray-300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4C4DDC] mb-8">
          Refund & Cancellation Policy
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-400 leading-relaxed mb-6">
          At <span className="text-[#4C4DDC] font-semibold">NoWait</span>, we aim to
          provide a smooth and reliable booking experience for all users.  
          Please read the refund and cancellation rules carefully before making a booking.
        </p>

        {/* Policy Sections */}
        <div className="space-y-8">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              1. User Cancellations
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>
                If a booking is cancelled within <span className="text-[#C8C8F4]">2 hours</span> of the
                appointment time, a late cancellation fee will be charged:
              </li>
              <ul className="list-disc pl-10 space-y-1 text-gray-400">
                <li>10% for services up to ₹500</li>
                <li>15% for services between ₹501–₹1500</li>
                <li>20% for services above ₹1500</li>
              </ul>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              2. Salon Cancellations
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>If a salon cancels a confirmed appointment, the user will be notified immediately.</li>
              <li>Users can rebook another available slot without any extra charges.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              3. Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Refunds apply only to <span className="text-[#C8C8F4]">prepaid bookings</span>.</li>
              <li>Refunds will be processed within <span className="text-[#C8C8F4]">3–7 business days</span>.</li>
              <li>Refunds will be credited to the original payment method only.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              4. No-Show Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>
                If a user fails to show up for the appointment, 
                <span className="text-[#C8C8F4]"> no refund</span> will be provided for prepaid services.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              5. Service Disputes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>All service quality-related issues must be resolved directly with the salon.</li>
              <li>
                NoWait is not responsible for disputes related to service quality, behavior, or waiting time.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              6. Contact & Support
            </h2>
            <p className="text-gray-400">
              For refund or payment-related issues, contact:  
              <a 
                href="mailto:billing@nowaitinsaloon.com" 
                className="text-[#4C4DDC] ml-1"
              >
                billing@nowaitinsaloon.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RefundPolicy;
