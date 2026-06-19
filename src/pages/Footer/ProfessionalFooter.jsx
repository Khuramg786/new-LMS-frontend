import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>

      {/* CONTAINER */}
      <div style={styles.container}>

        {/* LOGO & ABOUT */}
        <div style={styles.column}>
          <img
            src="https://ik.imagekit.io/b6iqka2sz/LIFECHANGE.png?updatedAt=1778487247929"
            alt="logo"
            style={styles.logo}
          />

          <p style={styles.about}>
            We provide professional training programs to help
            individuals and businesses improve leadership,
            productivity, and growth through practical learning
            and mentorship.
          </p>

          {/* SOCIALS */}
          <div style={styles.socials}>
            <a href="https://www.facebook.com/yasinshakir123" style={styles.socialIcon}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" style={styles.iconImg} />
            </a>

            <a href="https://www.instagram.com/yasinshakir78/?fbclid=IwY2xjawR66Q5leHRuA2FlbQIxMQBicmlkETE1Tk5KampPd2NuUFRNSzg2c3J0YwZhcHBfaWQBMAABHmeQsvvOHm8fbdrQrm0DmE7dvYXj6fQobEmXCZqhcvofoGNgrVdlTKzy8vzQ_aem_mMReD7M7fZKQ4FMP4x_K6w" style={styles.socialIcon}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="instagram" style={styles.iconImg} />
            </a>

            <a href="https://share.google/gwmt9QFkK2HCP0ZpN" style={styles.socialIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="google"
                style={styles.iconImg}
              />
            </a>

            <a href="https://www.youtube.com/@Yasinshakirofficial" style={styles.socialIcon}>
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube" style={styles.iconImg} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>

          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/courses" style={styles.link}>Courses</a>
          <a href="/" style={styles.link}>Testimonials</a>
          <a href="/contact" style={styles.link}>Contact</a>
          {/* NEW ADDED */}
          <a href="/TermsAndConditions" style={styles.link}>Terms & Conditions</a>
        </div>

        {/* SERVICES */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Our Services</h3>

          <a href="#" style={styles.link}>Business Training</a>
          <a href="#" style={styles.link}>Leadership Skills</a>
          <a href="#" style={styles.link}>Team Management</a>
          <a href="#" style={styles.link}>Career Coaching</a>
          <a href="#" style={styles.link}>Online Workshops</a>
        </div>

        {/* CONTACT */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact Info</h3>

          <p style={styles.contact}>📞  +923000372774
          </p>
          <p style={styles.contact}>📧 lifechangersclub2@gmail.com
</p>
          <p style={styles.contact}>📍 124 Mehboob Garden, Shadab Garden, Lahore, 54000, Pakistan</p>

          {/* NEWSLETTER */}
          <div style={styles.newsletter}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />

            <button style={styles.button}>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        © 2026 Life Changers Club — All Rights Reserved
      </div>
    </footer>
  );
}

/* STYLES */

const styles = {
  footer: {
    width: "100%",
    background: "#0f172a",
    color: "#fff",
    marginTop: "60px",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "70px 25px 50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "50px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    width: "180px",
    marginBottom: "20px",
    objectFit: "contain",
  },

  about: {
    color: "#cbd5e1",
    lineHeight: "28px",
    fontSize: "15px",
  },

  heading: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "24px",
  },

  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    marginBottom: "14px",
    fontSize: "15px",
    transition: "0.3s",
  },

  contact: {
    color: "#cbd5e1",
    marginBottom: "16px",
    lineHeight: "24px",
    fontSize: "15px",
  },

  socials: {
    display: "flex",
    gap: "12px",
    marginTop: "28px",
    flexWrap: "wrap",
  },

  socialIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "#1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",
    transition: "0.3s",
  },

  newsletter: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    width: "100%",
    height: "48px",
    borderRadius: "12px",
    border: "1px solid #334155",
    background: "#1e293b",
    padding: "0 16px",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    width: "100%",
    height: "48px",
    borderRadius: "12px",
    border: "none",
    background: "#dc2626",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "15px",
  },

  bottom: {
    borderTop: "1px solid #1e293b",
    textAlign: "center",
    padding: "22px",
    color: "#94a3b8",
    fontSize: "14px",
  },
};