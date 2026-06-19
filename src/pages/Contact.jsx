import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">

      {/* HERO */}
      <div className="relative h-[260px] md:h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="text-gray-200 mt-2 text-sm md:text-base max-w-xl">
            We are available 24/7 for support & business inquiries
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="space-y-6">

          <div className="bg-white p-5 rounded-2xl shadow space-y-4">

            <h2 className="font-bold text-lg">Contact Info</h2>

            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-red-500" />
              +923000372774
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-red-500" />
              lifechangersclub2@gmail.com
            </div>

            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-red-500" />
             124 Mehboob Garden, Shadab Garden, Lahore, 54000, Pakistan
            </div>

          </div>

          {/* SOCIAL ICONS (CLICKABLE) */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="font-bold mb-3">Follow Us</h2>

            <div className="flex gap-4">

              <a href="https://www.facebook.com/yasinshakir123" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-8 h-8 hover:scale-110 transition cursor-pointer"
                  alt="facebook"
                />
              </a>

              <a href="https://www.instagram.com/yasinshakir78/" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  className="w-8 h-8 hover:scale-110 transition cursor-pointer"
                  alt="instagram"
                />
              </a>

              <a href="https://linkedin.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                  className="w-8 h-8 hover:scale-110 transition cursor-pointer"
                  alt="linkedin"
                />
              </a>

              <a href="https://x.com/ShakirYasi7744" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  className="w-8 h-8 hover:scale-110 transition cursor-pointer"
                  alt="twitter"
                />
              </a>

            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-bold mb-5 text-center">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border h-12 pl-10 rounded-xl"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border h-12 pl-10 rounded-xl"
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full border pl-10 pt-3 rounded-xl"
                required
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 text-sm rounded-lg flex items-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* ================= REAL MAP (WORKING) ================= */}
     {/* ================= REAL MAP (UPDATED) ================= */}
<div className="w-full px-4 pb-12">

  <div className="max-w-[1200px] mx-auto">

    <h2 className="text-xl font-bold mb-4 text-center">
      Our Location
    </h2>

    <iframe
      className="w-full h-[400px] md:h-[500px] rounded-2xl shadow"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2250659616966!2d74.3530913!3d31.421451899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bef08142905%3A0x6ce8338afda0d40a!2slifechangersclub.pk!5e1!3m2!1sen!2s!4v1779304143569!5m2!1sen!2s"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

  </div>

</div>

    </div>
  );
}

export default Contact;