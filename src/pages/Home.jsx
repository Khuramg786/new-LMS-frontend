import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; 
import Banar from "./HomeContent/Banar";
import Maincatagory from "./HomeContent/Maincatagory";
import Upcomingcourese from "./HomeContent/Upcomingcourese";
import PromoBanner from "./HomeContent/PromoBanner";
import Secondpromobannaer from "./HomeContent/Secondpromobannaer";
import TestimonialVideoSection from "./HomeContent/TestimonialVideoSection";

function Home() {
  const [showAds, setShowAds] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    let countdownInterval;

    if (showAds) {
      setTimeLeft(20);
      countdownInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            setShowAds(false); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      const breakTimer = setTimeout(() => {
        setShowAds(true);
      }, 5000); 

      return () => clearTimeout(breakTimer);
    }

    return () => clearInterval(countdownInterval);
  }, [showAds]);

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Banar />
      <Maincatagory />
      <Secondpromobannaer />
      <Upcomingcourese />
      <PromoBanner />
      <TestimonialVideoSection />

      {/* ================= RIGHT SIDE SINGLE WIDE AD SYSTEM ================= */}
      <AnimatePresence>
        {showAds && (
          <motion.div
            className="right-ads-container"
            initial={{ x: 200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}   
            exit={{ x: 200, opacity: 0 }}    
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="ads-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="ad-timer">Closing in: <strong>{timeLeft}s</strong></span>
              <button className="ad-close-btn" onClick={() => setShowAds(false)}>
                <X size={14} />
              </button>
            </div>

            <div className="ads-body">
              <div className="ad-box tall-banner">
                {/* Text aur Image dono active hain taake pakka pata chale */}
                <h3 style={{ fontSize: "14px", margin: "5px 0", color: "#333", textAlign: "center" }}>
                  Premium Advertisement
                </h3>
                <img 
                  src="/add_post.jpg" 
                  alt="Premium Business Course Advertisement" 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= ADS CSS STYLES ================= */}
      <style>{`
        .right-ads-container {
          position: fixed;
          right: 24px;
          top: 250px; 
          width: 280px; 
          background: #ffffff;
          border-radius: 14px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
                      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          padding: 12px;
          z-index: 99999; /* Z-Index barha diya taake live par koi cheez iske upar na aaye */
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-sizing: border-box;
          border: 1px solid #e2e8f0;
        }

        .ads-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 6px;
        }

        .ad-timer {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          color: #64748b;
        }

        .ad-timer strong {
          color: #ef4444;
        }

        .ad-close-btn {
          background: #f1f5f9;
          border: none;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
        }

        .ads-body {
          display: flex;
          flex-direction: column;
        }

        .ad-box {
          position: relative;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
        }

        .ad-box.tall-banner img {
          width: 100%;
          height: 180px; 
          object-fit: cover;
          display: block;
        }

        /* 🛠️ TESTING KE LIYE DISPLAY NONE WALA CODE DELETE KAR DIYA HAI */
      `}</style>
    </div>
  );
}

export default Home;