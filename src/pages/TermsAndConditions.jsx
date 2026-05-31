import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-12">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mt-3">
          Please read these terms carefully before using our services
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">

        <section>
          <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mt-2">
            By accessing our website or services, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">2. Services</h2>
          <p className="text-gray-600 mt-2">
            We provide business coaching, training programs, and educational content for personal and professional growth.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">3. Payments</h2>
          <p className="text-gray-600 mt-2">
            All payments must be completed before access to premium content is granted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">4. Refund Policy</h2>
          <p className="text-gray-600 mt-2">
            Refunds are not available once the course or service has been accessed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">5. User Responsibility</h2>
          <p className="text-gray-600 mt-2">
            Users are responsible for maintaining the confidentiality of their account information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">6. Contact</h2>
          <p className="text-gray-600 mt-2">
            If you have any questions, contact us at info@example.com
          </p>
        </section>

      </div>

    

    </div>
  );
}