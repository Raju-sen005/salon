import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TermsCondition() {
  return (
    <div className="bg-[#101010] text-gray-300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4C4DDC] mb-8">
          Customer Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="text-gray-400 leading-relaxed mb-8">
          Welcome to{" "}
          <span className="text-[#4C4DDC] font-semibold">NoWait</span>, By using
          our mobile application, you agree to the Terms and Conditions
          mentioned below. Please read them carefully before using the services.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              1. Booking
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Users may book salon services through the Platform. Booking
              confirmation does not guarantee immediate service and depends on
              salon availability.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              2. User Obligations
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide accurate and updated information</li>
              <li>Arrive on time for appointments</li>
              <li>Follow salon rules and instructions</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              3. Payments
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Users may pay online or directly at the salon. Any extra service
              charges applied by the salon are the customer’s responsibility.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              4. Cancellation
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Users may cancel bookings as per the NoWait Platform’s official
              cancellation policy.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              5. No-Show
            </h2>
            <p className="text-gray-400 leading-relaxed">
              If a user fails to show up, the salon may mark the booking as
              completed and may charge a fee, depending on salon policy.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-400 leading-relaxed">
              NoWait acts only as a facilitator. We are not responsible for the
              quality, timing, behavior, pricing, or outcome of services
              delivered by partner salons.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              7. Account Termination
            </h2>
            <p className="text-gray-400 leading-relaxed">
              NoWait reserves the right to suspend or terminate any user account
              for violation of policies, fraudulent activities, or misuse of the
              platform.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              8. Privacy
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Use of the NoWait application is also governed by our Privacy Policy{" "}
              {/* <a href="/privacy-policy" className="text-[#4C4DDC] underline">
                App Privacy Policy
              </a> */}
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsCondition;
