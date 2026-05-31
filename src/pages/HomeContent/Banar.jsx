import { useEffect, useState } from "react";

const slides = [
  { image: "https://yselti.pk/images/business.webp" },
  { image: "https://yselti.pk/images/business.webp" },
  { image: "https://yselti.pk/images/business.webp" },
];

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

export default function Banar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* BANNER */}
      <div className="bannerWrapper">
        <div className="banner">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`slide ${i === index ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>

        {/* DOTS */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "activeDot" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* LOGO SLIDER */}
      <div className="logoWrapper">
        <div className="logoTrack">
          {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} alt="logo" className="logo" />
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .bannerWrapper {
          height: 60vh;
          position: relative;
          // margin-top: -70px;
          overflow: hidden;
        }

        .banner {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: all 1s ease;
          transform: scale(1.05);
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .dots {
          position: absolute;
          bottom: 15px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
        }

        .activeDot {
          background: #115f97;
          transform: scale(1.3);
        }

        /* LOGO SLIDER */
        .logoWrapper {
          width: 100%;
          overflow: hidden;
          background: #fff;
          padding: 20px 0;
        }

        .logoTrack {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: scroll 15s linear infinite;
          align-items: center;
        }

        .logo {
          height: 50px;
          width: auto;
          object-fit: contain;
          filter: none; /* original color */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .bannerWrapper {
            height: 20vh;
            margin-top: -20px;
          }

          .slide {
            transform: scale(1);
          }

          .logo {
            height: 35px;
          }

          .logoTrack {
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
}