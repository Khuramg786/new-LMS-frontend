import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Video, DollarSign } from "lucide-react";

function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-12">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          📢 Company Announcement
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Business Coaching & Training Live Session Update
        </p>
      </motion.div>

      {/* CARDS WRAPPER */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

        {[1, 2].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg"
          >

            {/* TITLE */}
            <h2 className="text-xl md:text-2xl font-bold text-center">
               Live Business Coaching Session #{item}
            </h2>

            <p className="text-center text-gray-500 mt-2 text-sm">
              Professional Training for Business Growth & Mindset
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 gap-4 mt-6">

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Calendar className="text-yellow-500" />
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="font-semibold">25 May 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Clock className="text-green-500" />
                <div>
                  <p className="text-xs text-gray-500">Time</p>
                  <p className="font-semibold">07:00 PM - 09:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <MapPin className="text-red-500" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold">
                    Online + Physical (Training Center)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Video className="text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Type</p>
                  <p className="font-semibold">Live Interactive Class</p>
                </div>
              </div>

              {/* PRICE */}
             <div className="w-[180px] flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-3 rounded-xl">
  <div>
    <p className="text-xs">Price</p>
    <p className="font-bold text-lg">Rs 5,000 Only</p>
  </div>
</div>

            </div>

            {/* REGISTER BUTTON */}
            <div className="text-center mt-6">
              <button className="bg-black text-white px-6 py-2.5 rounded-xl font-bold hover:bg-gray-800 transition">
                Register Now
              </button>
            </div>

          </motion.div>
        ))}
      </div>

      {/* WHATSAPP SECTION */}
      <div className="text-center mt-14">

        <a
          href="https://wa.me/923009408054"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            className="w-6 h-6"
            alt="whatsapp"
          />
          Chat on WhatsApp: +92 300 9408054
        </a>

        <p className="text-gray-500 text-xs mt-3">
          For registration & details contact us instantly
        </p>
      </div>

    </div>
  );
}

export default AnnouncementPage;