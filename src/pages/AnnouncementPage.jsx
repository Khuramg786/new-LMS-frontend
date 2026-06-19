import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Video, DollarSign } from "lucide-react";

function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 px-4 py-16 flex flex-col justify-center items-center">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
          New Update
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          📢 Company Announcement
        </h1>
        <p className="text-gray-500 mt-3 text-base md:text-lg font-medium">
          Business Coaching & Training Live Session Update
        </p>
      </motion.div>

      {/* SINGLE ANNOUNCEMENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl w-full bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-r before:from-yellow-400 before:via-orange-400 before:to-red-500"
      >
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 leading-snug">
          High Performance Team Building for Business Success
        </h2>

        <p className="text-center text-gray-400 mt-2 text-sm font-medium tracking-wide">
          Professional Training for Business Growth & Mindset
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

          <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50 hover:bg-gray-100/70 transition">
            <div className="bg-yellow-100 p-2 rounded-xl">
              <Calendar className="text-yellow-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Date</p>
              <p className="font-bold text-gray-800">11 July 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50 hover:bg-gray-100/70 transition">
            <div className="bg-green-100 p-2 rounded-xl">
              <Clock className="text-green-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Time</p>
              <p className="font-bold text-gray-800">02:00 PM - 07:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50 hover:bg-gray-100/70 transition">
            <div className="bg-red-100 p-2 rounded-xl">
              <MapPin className="text-red-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Location</p>
              <p className="font-bold text-gray-800">Online + Physical + Recorded</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-2xl border border-gray-100/50 hover:bg-gray-100/70 transition">
            <div className="bg-blue-100 p-2 rounded-xl">
              <Video className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Type</p>
              <p className="font-bold text-gray-800">Interactive Training</p>
            </div>
          </div>

          {/* PRICE (Full width layout for cleaner look) */}
          <div className="sm:col-span-2 flex items-center gap-3.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-md shadow-orange-200">
            <div className="bg-white/20 p-2 rounded-xl">
              <DollarSign className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-orange-100">Investment Price</p>
              <p className="font-black text-xl md:text-2xl">Rs 8,750 Only</p>
            </div>
          </div>

        </div>

        {/* REGISTER BUTTON */}
        <div className="text-center mt-8">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-gray-900 text-white px-10 py-3.5 rounded-2xl font-bold text-base hover:bg-gray-800 transition shadow-lg shadow-gray-300"
          >
            Register Now
          </motion.button>
        </div>

      </motion.div>

      {/* WHATSAPP SECTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/923009408054"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] transition px-6 py-3.5 rounded-full text-white font-bold shadow-lg shadow-green-200"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            className="w-6 h-6 brightness-0 invert"
            alt="whatsapp"
          />
          Chat on WhatsApp: +92 300 9408054
        </motion.a>

        <p className="text-gray-400 text-xs mt-3 font-medium">
          For registration & details contact us instantly
        </p>
      </motion.div>

    </div>
  );
}

export default AnnouncementPage;