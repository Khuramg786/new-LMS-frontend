import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; 
import Banar from "./HomeContent/Banar";
import Maincatagory from "./HomeContent/Maincatagory";
import Upcomingcourese from "./HomeContent/Upcomingcourese";
import PromoBanner from "./HomeContent/PromoBanner";
import Secondpromobannaer from "./HomeContent/Secondpromobannaer";
import TestimonialVideoSection from "./HomeContent/TestimonialVideoSection";

// 🛠️ FIXED PATH: '../' ki jagah '../../' kiya hai taake build ke waqt Vite is image ko index kar sake
import addPostImg from '../../assets/add_post.jpg';

function Home() {
  const [showAds, setShowAds] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    let countdownInterval;

    if (showAds) {
      // 20 seconds display countdown
      setTimeLeft(20);
      countdownInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            setShowAds(false); // Smooth exit trigger
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // 5 Seconds break time ke baad automatic fir se show hoga
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
            initial={{ x: 400, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}   
            exit={{ x: 400, opacity: 0 }}    
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {/* Header (Agar aap un-comment karna chahein) */}
            {/* <div className="ads-header">
              <span className="ad-timer">Ads closing in: <strong>{timeLeft}s</strong></span>
              <button className="ad-close-btn" onClick={() => setShowAds(false)}>
                <X size={14} />
              </button>
            </div> */}

            <div className="ads-body">
              {/* Banner Image */}
              <div className="ad-box tall-banner">
                {/* <span className="ad-tag">Sponsored Offer</span> */}
                <img 
                  src={addPostImg} 
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
          top: 350px; 
          width: 300px; 
          background: #ffffff;
          border-radius: 14px;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px 0px, 
                      rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
          padding: 12px;
          z-index: 999;
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
          transition: background 0.2s;
        }

        .ad-close-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
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
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          border: 1px solid #f1f5f9;
        }

        .ad-box.tall-banner img {
          width: 100%;
          height: 180px; 
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }

        .ad-box img:hover {
          transform: scale(1.02);
        }

        .ad-tag {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(0, 0, 0, 0.75);
          color: #ffffff;
          font-size: 9px;
          font-family: system-ui, sans-serif;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          z-index: 10;
        }

        @media (max-width: 1200px) { 
          .right-ads-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;