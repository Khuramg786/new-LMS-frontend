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
            <div className="ads-header">
              <span className="ad-timer">Ads closing in: <strong>{timeLeft}s</strong></span>
              <button className="ad-close-btn" onClick={() => setShowAds(false)}>
                <X size={14} />
              </button>
            </div>

            <div className="ads-body">
              {/* 🛠️ TESTING TEXT BOX: Image ko hata kar direct bright styling di hai */}
              <div className="ad-text-test-box">
                <h2>📢 BIG OFFER!</h2>
                <p>Premium Business Course is now live. Join Life Changers Club today!</p>
                <span className="ad-click-btn">Learn More</span>
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
          z-index: 999999; /* Bohot high z-index taake har cheez ke upar dikhe */
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

        /* 🛠️ STYLING FOR TESTING TEXT BOX */
        .ad-text-test-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          font-family: system-ui, sans-serif;
        }

        .ad-text-test-box h2 {
          margin: 0 0 10px 0;
          font-size: 20px;
        }

        .ad-text-test-box p {
          font-size: 13px;
          line-height: 1.4;
          margin: 0 0 15px 0;
          opacity: 0.9;
        }

        .ad-click-btn {
          display: inline-block;
          background: white;
          color: #764ba2;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: bold;
          border-radius: 20px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

export default Home;