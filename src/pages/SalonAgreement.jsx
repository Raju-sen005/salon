import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SalonAgreement() {
  return (
    <div className="bg-[#101010] text-gray-300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4C4DDC] mb-8">
          Salon Onboarding Agreement
        </h1>

        <p className="text-gray-400 leading-relaxed mb-8">
          This Salon Onboarding Agreement (“Agreement”) is made between:
        </p>

        {/* Salon Details */}
        <div className="bg-[#151515] p-6 rounded-xl border border-[#4C4DDC] mb-10">
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-[#C8C8F4]">Company:</span>{" "}
            NoWait (the “Platform”)
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-[#C8C8F4]">Partner:</span>{" "}
            __________________ (the “Salon”)
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-[#C8C8F4]">Address:</span>{" "}
            __________________
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-[#C8C8F4]">Contact:</span>{" "}
            __________________
          </p>
        </div>

        {/* Agreement Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              1. Purpose
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The Platform enables salons to receive online bookings from
              customers through the NoWait mobile application.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              2. Term
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This Agreement becomes effective on the signing date and continues
              until terminated by either party.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              3. Services
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The Platform will list the Salon, allow customers to book
              appointments, and notify the Salon of upcoming bookings.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              4. Commission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The Salon agrees to pay a commission of{" "}
              <span className="text-[#C8C8F4] font-medium">5%</span> on each
              completed booking. Commissions shall be settled every{" "}
              <span className="text-[#C8C8F4] font-medium">7 days</span>.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              5. Salon Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide accurate pricing and service details</li>
              <li>Honor (Accept/Reject) bookings received through the Platform</li>
              <li>Maintain hygiene, quality, and safety standards</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              6. No-Show & Cancellations
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The Salon must specify its cancellation and no-show policies,
              which will be displayed to users.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              7. Payment Settlement
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Payments (after commission deduction) will be transferred to the
              Salon’s registered bank account.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              8. Liability
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The Platform is not responsible for any disputes between the Salon
              and the customers regarding services, pricing, or quality.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-[#C8C8F4] mb-3">
              9. Termination
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Either party may terminate this Agreement with a{" "}
              <span className="text-[#C8C8F4] font-medium">7-day notice</span>.
            </p>
          </section>

          {/* Signature Block */}
          <section className="mt-10 bg-[#151515] p-6 rounded-xl border border-[#4C4DDC]/20">
            <h3 className="text-lg font-semibold text-[#C8C8F4] mb-4">
              Signatures
            </h3>

            <div className="space-y-6">
              <p className="text-gray-300">
                <span className="font-semibold text-[#4C4DDC]">Platform Signature:</span>{" "}
                ______________________
              </p>

              <p className="text-gray-300">
                <span className="font-semibold text-[#4C4DDC]">Salon Signature:</span>{" "}
                ______________________
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SalonAgreement;
