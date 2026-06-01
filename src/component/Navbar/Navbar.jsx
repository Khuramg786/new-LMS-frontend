import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

      {/* ================= CSS FIXED ================= */}
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

          --sans: system-ui, "Segoe UI", Roboto, sans-serif;
        }

        body {
          margin: 0;
          font-family: var(--sans);
        }

       .navbar {
  position: fixed;
  top: 0px;   /* 👈 top margin */
  left: 70px;  /* 👈 left margin effect */
  right: 70px; /* 👈 right margin effect */

  width: auto; /* important */

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
   z-index: 1000; /* 👈 IMPORTANT */
   
}
          .navItem.active {
  color: var(--accent);
  font-weight: 900;
  position: relative;
}
  @media (max-width: 900px) {
  .navbar {
    height: 55px;   /* 👈 mobile pe chhoti height */
    left: 10px;
    right: 10px;
    top: 0px;
    border-radius: 10px;
    padding: 0 12px;
  }

  .logo img {
    width: 30px;   /* 👈 logo small */
    height: 35px;
  }

  .mobileIcon {
    margin-left: 0;
  }
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

        /* LOGO */
        .logo {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-h);
          flex-shrink: 0;
        }
     .logo img {
  width: 100px;
  height: 50px;
  object-fit: contain;
}

        .logo span {
          color: var(--accent);
        }

        /* DESKTOP NAV */
        .navLinks {
          display: flex;
          align-items: center;
          gap: 30px;

          // background: var(--accent-bg);
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

        .navItem.active {
          color: var(--accent);
        }

        /* LOGIN BUTTON FIX */
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

        /* MOBILE ICON FIX */
       .mobileIcon {
  display: none;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 10px;
}

        /* MOBILE MENU */
        .mobileMenu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          height: calc(100vh - 70px);

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

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .navLinks,
          .auth {
            display: none;
          }

          .mobileIcon {
            display: block;
          }
        }
      `}</style>
    </>
  );
}