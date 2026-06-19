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
            setShowAds(false); // Smooth exit trigger
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // 5 Seconds break ke baad automatic dobara show hoga
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
            initial={{ x: 350, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}   
            exit={{ x: 350, opacity: 0 }}    
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Ad Header */}
            <div className="ads-header">
              <span className="ad-timer">Closing in: <strong>{timeLeft}s</strong></span>
              <button className="ad-close-btn" onClick={() => setShowAds(false)}>
                <X size={14} />
              </button>
            </div>

            {/* Ad Body (Aapka Offer Text Box) */}
            <div className="ads-body">
              <div className="ad-text-test-box">
                <div className="discount-tag">MEGA OFFER</div>
                <h2>75% OFF</h2>
                <h3>Only for 1st 50 Subscriptions</h3>
                <p className="validity-date">⏳ Valid up to 30 June, 2026</p>
                <button className="ad-click-btn">Claim Offer Now</button>
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
          width: 300px; 
          background: #ffffff;
          border-radius: 16px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
                      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          padding: 14px;
          z-index: 999999; /* Is se ad har component ke upar show hogi */
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
          border: 1px solid #e2e8f0;
        }

        .ads-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 8px;
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
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: background 0.2s;
        }

        .ad-close-btn:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        .ads-body {
          display: flex;
          flex-direction: column;
        }

        /* 🎨 DESIGN FOR YOUR OFFER BOX */
        .ad-text-test-box {
          background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
          color: white;
          padding: 24px 16px;
          border-radius: 12px;
          text-align: center;
          font-family: system-ui, sans-serif;
          position: relative;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
        }

        .discount-tag {
          background: rgba(255, 255, 255, 0.2);
          display: inline-block;
          padding: 4px 12px;
          font-size: 10px;
          font-weight: 700;
          border-radius: 20px;
          letter-spacing: 1px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .ad-text-test-box h2 {
          margin: 0 0 6px 0;
          font-size: 38px;
          font-weight: 900;
          letter-spacing: -1px;
          text-shadow: 0px 2px 4px rgba(0,0,0,0.15);
        }

        .ad-text-test-box h3 {
          margin: 0 0 12px 0;
          font-size: 14px;
          font-weight: 600;
          opacity: 0.95;
          line-height: 1.3;
        }

        .validity-date {
          font-size: 12px;
          background: rgba(0, 0, 0, 0.15);
          padding: 6px;
          border-radius: 6px;
          margin: 0 0 16px 0;
          font-weight: 500;
        }

        .ad-click-btn {
          width: 100%;
          background: white;
          color: #ff4b2b;
          padding: 10px;
          font-size: 13px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ad-click-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}

export default Home;