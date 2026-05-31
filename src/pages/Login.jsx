import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-3 sm:px-4 py-6">

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 animate-fadeIn border">

        {/* LOGO SECTION */}
        <div className="text-center mb-5 sm:mb-6">

          <Link to="/" className="inline-block">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/LIFECHANGE.png?updatedAt=1778487247929"
              alt="logo"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto object-contain hover:scale-110 transition duration-300"
            />
          </Link>

          <p className="text-xs sm:text-sm text-gray-500 mt-2 px-2">
            Welcome back! Please login to continue
          </p>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-5 sm:mb-6 text-gray-800">
          Login
        </h1>

        {/* EMAIL INPUT */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        />

        {/* PASSWORD INPUT */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 sm:mb-6 px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        />

        {/* LOGIN BUTTON */}
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-red-700 transition transform hover:scale-[1.02]">
          Login
        </button>

        {/* FOOTER */}
        <p className="text-xs sm:text-sm text-center text-gray-500 mt-5 leading-6">
          Don't have an account?{" "}
          <span className="text-red-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @media (max-width: 480px) {
            .animate-fadeIn {
              animation-duration: 0.4s;
            }
          }
        `}
      </style>

    </div>
  );
}

export default Login;