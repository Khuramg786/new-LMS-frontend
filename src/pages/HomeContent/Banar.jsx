import { useEffect, useState } from "react";

const slides = [
  { image: "https://ik.imagekit.io/b6iqka2sz/Team%20mangment%20tema%20.jpg" },
  { image: "https://ik.imagekit.io/b6iqka2sz/bussines%20groth%20club%20best%20.jpg" },
];

const logos = [
  "https://ik.imagekit.io/b6iqka2sz/newhand%20.png",
  "https://ik.imagekit.io/b6iqka2sz/logo-1.jpg",
  "https://ik.imagekit.io/b6iqka2sz/Screenshot%202026-06-06%20141421.png",
  "https://ik.imagekit.io/b6iqka2sz/nesgasga.png",
  "https://ik.imagekit.io/b6iqka2sz/newhand%20.png",
  "https://ik.imagekit.io/b6iqka2sz/299867451_157170886956277_5270323847173662017_n.png",
  "https://ik.imagekit.io/b6iqka2sz/l.png",
  "https://ik.imagekit.io/b6iqka2sz/302112017_448111447355075_1730860603452584329_n-removebg-preview.png",
];

export default function Banar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 40000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      {/* BANNER CONTAINER 
        - mt-20 md:mt-24 sa fixed navbar ki space clear hogi.
        - pt-4 md:pt-6 sa navbar ke foran baad thori extra padding space milegi taake banner thoda niche push ho kar khula khula dikhe.
      */}
     <div className="bannerWrapper mt-32 md:mt-40 pt-8 md:pt-12" style={{ marginTop:"2%"}}>
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

      <style>{`
        /* BANNER */
        .bannerWrapper {
          width: 100%;
          height: 60vh;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
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
          background-size: 100% 100%; /* FULL WIDTH + HEIGHT */
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        /* DOTS */
        .dots {
          position: absolute;
          bottom: 15px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 2;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
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
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* TABLET */
        @media (max-width: 992px) {
          .bannerWrapper {
            height: 40vh;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .bannerWrapper {
            height: 30vh;
          }

          .logo {
            height: 35px;
          }

          .logoTrack {
            gap: 30px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .bannerWrapper {
            height: 25vh;
          }

          .logo {
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
}