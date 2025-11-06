import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="bg-[#101010] text-gray-300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4C4DDC] mb-8">
          App Privacy Policy
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-400 leading-relaxed mb-6">
          At <span className="text-[#4C4DDC] font-semibold">NoWait</span>, we
          respect your privacy and are committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, and safeguard
          your information when you use the NoWait application and services.
        </p>

        {/* Policy Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Name and contact details (email, phone number)</li>
              <li>Location data (only with user permission)</li>
              <li>Booking history and salon preferences</li>
              <li>Device and app usage information</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To process and manage your salon bookings</li>
              <li>To improve overall user experience</li>
              <li>To prevent fraud or unauthorized activity</li>
              <li>To send important updates, alerts, and notifications</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              3. Sharing of Data
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We share only the necessary information with partner salons to
              confirm and complete your bookings. We do{" "}
              <span className="text-[#C8C8F4] font-medium">
                not sell or rent
              </span>{" "}
              your data to third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              4. Data Storage & Security
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Your information is securely stored and protected using
              industry-standard encryption and security protocols. We retain
              your data only for as long as it is necessary for the purpose it
              was collected.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              5. User Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Request data deletion</li>
              <li>Request correction of incorrect information</li>
              <li>Request account deletion anytime</li>
              <li>Opt-out of promotional messages</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              6. Consent
            </h2>
            <p className="text-gray-400 leading-relaxed">
              By using the NoWait app and services, you provide consent to the
              collection and use of your information as described in this
              Privacy Policy.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed">
              For any privacy-related queries or concerns, feel free to contact:
              <br />
              <a
                href="mailto:support@nowaitinsaloon.com"
                className="text-[#4C4DDC] font-medium"
              >
                support@nowaitinsaloon.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
