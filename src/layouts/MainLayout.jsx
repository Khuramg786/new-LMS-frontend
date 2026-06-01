import Navbar from "../component/Navbar/Navbar";
import Footer from "../pages/Footer/ProfessionalFooter";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
        <Outlet />
      </div>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923000372774"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />

        {/* CSS */}
        <style>{`
          .whatsapp-float {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: 60px;
            height: 60px;
            background-color: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            z-index: 9999;
            cursor: pointer;
            animation: floatUpDown 2s ease-in-out infinite;
          }

          .whatsapp-float img {
            width: 35px;
            height: 35px;
          }

          @keyframes floatUpDown {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .whatsapp-float:hover {
            transform: scale(1.1);
            transition: 0.3s;
          }
        `}</style>
      </a>
    </div>
  );
}

export default MainLayout;