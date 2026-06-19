import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, Menu, X, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Books", path: "/Books" },
  { name: "Announcement", path: "/AnnouncementPage" },
  { name: "BusinessBranding", path: "/BusinessBranding" },
  { name: "Blogs", path: "/Blogs" },
  { name: "Contact", path: "/contact" },
];

const courseCategories = [
  "Business Growth Club",
  "Team Management Skills",
  "Sales Booster Training",
  "Mental Wellness",
  "Financial Management",
  "Relation Building",
  "Physical Health",
  "Social Awareness",
  "Spiritual Awakening",
  "Leadership Skills for Principals",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessJob: "",
    city: "",
    whatsapp: "",
    category: ""
  });

  // Automatically hide success popup after 3 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Native HTML5 validation will trigger first, but ensuring all fields are filled
    if (formData.fullName && formData.businessJob && formData.city && formData.whatsapp && formData.category) {
      setIsModalOpen(false);
      setShowSuccess(true);
      // Reset Form Fields
      setFormData({
        fullName: "",
        businessJob: "",
        city: "",
        whatsapp: "",
        category: ""
      });
    }
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          {/* Left: Location */}
          <div className="topbar-left">
            <MapPin size={14} className="topbar-icon" />
            <span>124 Mehboob Garden, Shadab Garden, Lahore</span>
          </div>

          {/* Center: Animated Discount Offer */}
          <div className="topbar-center">
            <span className="badge">OFFER</span>
            <span className="offer-text animated-offer" onClick={() => setIsModalOpen(true)}>
              * 40% Discount on 100+ Business Courses * <strong>Register Now</strong>
            </span>
          </div>

          {/* Right: Contact Info */}
          <div className="topbar-right">
            <a href="mailto:lifechangersclub2@gmail.com
" className="topbar-link">
              <Mail size={14} /> lifechangersclub2@gmail.com

            </a>
            <span className="separator">|</span>
            <a href="https://wa.me/923000372774
" target="_blank" rel="noopener noreferrer" className="topbar-link whatsapp">
              <Phone size={14} /> +923000372774

            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="navbar"
      >
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/LIFECHANGE.png?updatedAt=1778487247929"
              alt="logo"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="navLinks desktop">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navItem active" : "navItem"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* LOGIN DESKTOP */}
        <div className="auth desktop">
          <Link to="/login" className="loginBtn">
            <LogIn size={16} />
            Login
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="mobileIcon" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobileMenu">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className="mobileItem"
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            className="mobileLogin"
            onClick={() => setOpen(false)}
          >
            <LogIn size={16} />
            Login
          </Link>
        </div>
      )}

      {/* REGISTRATION MODAL POPUP */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="modal-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Course Registration</h3>
                <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Business / Job</label>
                  <input
                    type="text"
                    name="businessJob"
                    value={formData.businessJob}
                    onChange={handleInputChange}
                    placeholder="Your profession or business name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Lahore, Karachi"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="e.g. 03001234567"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Course Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    {courseCategories.map((cat, idx) => (
                      <option key={idx} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="submit-btn">Submit Registration</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS TOAST POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="success-toast"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
          >
            <CheckCircle size={20} color="#2ecc71" />
            <span>Form submitted successfully! Your data has been recorded.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CSS STYLES ================= */}
      <style>{`
        :root {
          --text: #6b6375;
          --text-h: #08060d;
          --bg: #ffffff;
          --border: #aaa9ac;
          --accent: #115f97;
          --accent-bg: rgba(170, 59, 255, 0.1);
          --shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -3px,
                    rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
          --topbar-bg: #1e3a8a; 
          --sans: system-ui, "Segoe UI", Roboto, sans-serif;
        }

        body {
          margin: 0;
          font-family: var(--sans);
        }

        /* TOPBAR STYLES */
        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 40px;
          background: var(--topbar-bg);
          color: #ffffff;
          font-size: 13px;
          z-index: 1001; 
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .topbar-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topbar-left, .topbar-right, .topbar-center {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .topbar-icon {
          color: #e74c3c; 
        }

        .badge {
          background: #e74c3c; 
          color: white;
          font-size: 10px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* ZOOM IN / OUT PULSE ANIMATION FOR OFFER */
        .animated-offer {
          font-weight: 700;
          cursor: pointer;
          display: inline-block;
          animation: pulse 2s infinite ease-in-out;
        }

        .animated-offer strong {
          color: #f1c40f;
          text-decoration: underline;
          margin-left: 5px;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.04); text-shadow: 0 0 8px rgba(255,255,255,0.6); }
          100% { transform: scale(1); }
        }

        .topbar-link {
          color: #e0e0e0;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s;
        }

        .topbar-link:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .topbar-link.whatsapp:hover {
          color: #2ecc71; 
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        /* NAVBAR ACCUMODATION */
        .navbar {
          position: fixed;
          top: 40px;   
          left: 70px;  
          right: 70px; 
          width: auto; 
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          box-sizing: border-box;
          background: var(--bg);
          border-bottom: none;
          overflow: hidden;
          border-radius: 0 0 12px 12px;
          box-shadow: var(--shadow);
          z-index: 1000; 
        }

        .navItem.active {
          color: var(--accent);
          font-weight: 900;
          position: relative;
        }

        .navItem.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          border-radius: 10px;
        }

        .logo img {
          width: 100px;
          height: 50px;
          object-fit: contain;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 12px 50px;
          border-radius: 999px;
          border: 1px solid var(--border);
          max-width: 60%;
          overflow: hidden;
        }

        .navItem {
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          transition: 0.3s;
          white-space: nowrap;
        }

        .navItem:hover {
          color: var(--accent);
        }

        .loginBtn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 999px;
          background: var(--accent);
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          box-shadow: var(--shadow);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .mobileIcon {
          display: none;
          cursor: pointer;
          flex-shrink: 0;
          margin-left: 10px;
        }

        /* MOBILE MENU */
        .mobileMenu {
          position: fixed;
          top: 95px; 
          left: 0;
          width: 100%;
          height: calc(100vh - 95px);
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 998;
        }

        .mobileItem {
          text-decoration: none;
          font-size: 18px;
          color: var(--text);
        }

        .mobileLogin {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: white;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
        }

        /* MODAL POPUP SYSTEM */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-container {
          background: #ffffff;
          width: 100%;
          max-width: 450px;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #edf2f7;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 18px;
          color: var(--text-h);
        }

        .close-modal {
          background: none;
          border: none;
          cursor: pointer;
          color: #a0aec0;
          transition: color 0.2s;
        }

        .close-modal:hover {
          color: #4a5568;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #4a5568;
        }

        .form-group input, .form-group select {
          padding: 10px 12px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 14px;
          font-family: var(--sans);
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--accent);
        }

        .submit-btn {
          background: var(--accent);
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 15px;
          transition: opacity 0.2s;
          margin-top: 6px;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }

        /* SUCCESS TOAST NOTIFICATION */
        .success-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #10b981;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 2100;
          font-size: 14px;
          font-weight: 500;
        }

        /* RESPONSIVE MEDIA QUERIES */
        @media (max-width: 900px) {
          .topbar { height: auto; padding: 5px 0; }
          .topbar-inner { flex-direction: column; padding: 0 15px; gap: 4px; text-align: center; }
          .topbar-left, .topbar-right { display: none; }
          .navbar { height: 55px; left: 10px; right: 10px; top: 35px; border-radius: 10px; padding: 0 12px; }
          .logo img { width: 30px; height: 35px; }
          .navLinks, .auth { display: none; }
          .mobileIcon { display: block; }
          .mobileMenu { top: 90px; height: calc(100vh - 90px); }
          .modal-container { width: 90%; margin: 0 auto; }
        }
      `}</style>
    </>
  );
}