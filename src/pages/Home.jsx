import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock } from "lucide-react"; 
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

      {/* ================= PROFESSIONAL RIGHT SIDE AD SYSTEM ================= */}
      <AnimatePresence>
        {showAds && (
          <motion.div
            className="right-ads-container"
            initial={{ x: 380, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}   
            exit={{ x: 380, opacity: 0 }}    
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            {/* Ad Header */}
            {/* <div className="ads-header">
              <span className="ad-timer">
                <Clock size={12} style={{ marginRight: "4px" }} />
                Closing in: <strong>{timeLeft}s</strong>
              </span>
              <button className="ad-close-btn" onClick={() => setShowAds(false)}>
                <X size={14} />
              </button>
            </div> */}

            {/* Ad Body (Professional Design) */}
            <div className="ads-body">
              <div className="ad-card-premium">
                <div className="discount-tag">
                  <Sparkles size={10} style={{ marginRight: '4px' }} />
                  MEGA OFFER
                </div>
                <h2>75% OFF</h2>
                <h3>Only for 1st 50 Subscriptions</h3>
                
                <p className="validity-date">
                  <span>⏳</span> Valid up to 30 June, 2026
                </p>
                
                <button className="ad-click-btn">
                  Claim Offer Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= UPGRADED PROFESSIONAL CSS STYLES ================= */}
      <style>{`
        .right-ads-container {
          position: fixed;
          right: 24px;
          top: 220px; 
          width: 310px; 
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0px 20px 40px rgba(15, 23, 42, 0.1), 
                      0px 1px 3px rgba(15, 23, 42, 0.05);
          padding: 16px;
          z-index: 999999;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-sizing: border-box;
          border: 1px solid rgba(226, 232, 240, 0.8);
          backdrop-filter: blur(8px);
        }

        .ads-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 10px;
        }

        .ad-timer {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          display: flex;
          align-items: center;
        }

        .ad-timer strong {
          color: #ef4444;
          margin-left: 3px;
          font-weight: 600;
        }

        .ad-close-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s ease-in-out;
        }

        .ad-close-btn:hover {
          background: #fef2f2;
          border-color: #fee2e2;
          color: #ef4444;
          transform: rotate(90deg);
        }

        .ads-body {
          display: flex;
          flex-direction: column;
        }

        /* 🎨 NEW PREMIUM CARD LOOK */
        .ad-card-premium {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          padding: 26px 20px;
          border-radius: 14px;
          text-align: center;
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(30, 41, 59, 0.2);
        }

        /* Subtle background glow element */
        .ad-card-premium::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .discount-tag {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.2);
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          border-radius: 30px;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .ad-card-premium h2 {
          margin: 0 0 4px 0;
          font-size: 42px;
          font-weight: 900;
          letter-spacing: -1px;
          background: linear-gradient(to right, #ffffff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ad-card-premium h3 {
          margin: 0 0 16px 0;
          font-size: 13px;
          font-weight: 400;
          color: #94a3b8;
          line-height: 1.4;
        }

        .validity-date {
          font-size: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 12px;
          border-radius: 8px;
          margin: 0 0 20px 0;
          font-weight: 500;
          color: #e2e8f0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }

        .ad-click-btn {
          width: 100%;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          padding: 12px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .ad-click-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
          background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
        }

        .ad-click-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default Home;