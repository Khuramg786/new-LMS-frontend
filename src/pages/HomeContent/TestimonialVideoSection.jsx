import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    name: "Ibrar Ahmad",
    role: "Real Estate Developer",
    video: "https://ik.imagekit.io/b6iqka2sz/Ibrar-Ahmad-Business-Owner.mp4?updatedAt=1769933634019",
    thumbnail:
      "https://ik.imagekit.io/b6iqka2sz/theem%203.png",
  },
  {
    id: 2,
    name: "Zaheer Sahib",
    role: "Business Owner",
    video: "https://ik.imagekit.io/b6iqka2sz/Zaheer%20Sahib%20real%20estate%20developer%20business%20man.mp4?updatedAt=1769932872882",
    thumbnail:
      "https://ik.imagekit.io/b6iqka2sz/theem%201%20.png",
  },
  {
    id: 3,
    name: "Riaz Sahib",
    role: "Jewellers",
    video: "https://ik.imagekit.io/b6iqka2sz/Riaz%20Sahab%20Jewelrs%20Larkana.mp4?updatedAt=1769879417949",
    thumbnail:
      "https://ik.imagekit.io/b6iqka2sz/theem%202.png",
  },
];

export default function TestimonialVideoSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonial-section">
      
      {/* CENTER CONTAINER */}
      <div className="testimonial-container">
        
        {/* TOP TITLE */}
        <div className="testimonial-header">
          <h2>
            <span className="blue">What our</span>{" "}
            <span className="red">Trainees Say</span>
          </h2>

          <p>
            Hear from our satisfied users about their experiences
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="testimonial-content">
          
          {/* LEFT SIDE */}
          <div className="left-side">
            <h3>Video Stories</h3>

            <p>
              Watch professionals sharing impactful learning
              experiences with us.
            </p>

            {/* BUTTONS */}
            <div className="buttons">
              <button onClick={scrollLeft}>
                <ChevronLeft size={22} />
              </button>

              <button onClick={scrollRight}>
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="line"></div>
          </div>

          {/* VIDEO SLIDER */}
          <div
            ref={sliderRef}
            className="video-slider no-scrollbar"
          >
            {videos.map((item) => (
              <div className="video-card" key={item.id}>
                
                <video
                  controls
                  poster={item.thumbnail}
                  className="video"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                <div className="card-content">
                  
                  <div className="icon">
                    💼
                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .testimonial-section {
          width: 100%;
          background: #f5f5f5;
          padding: 20px 0;
          display: flex;
          justify-content: center;
        }

        .testimonial-container {
          width: 100%;
          max-width: 1400px;
          padding: 0 10px;
        }

        .testimonial-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .testimonial-header h2 {
          font-size: 52px;
          font-weight: 700;
        }

        .testimonial-header p {
          color: #6b7280;
          font-size: 18px;
          margin-top: 5px;
        }

        .blue {
          color: #1e3a8a;
        }

        .red {
          color: #dc2626;
        }

        .testimonial-content {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        .left-side {
          width: 280px;
          flex-shrink: 0;
          padding-top: 10px;
        }

        .left-side h3 {
          font-size: 42px;
          font-weight: 700;
          color: #111827;
        }

        .left-side p {
          margin-top: 20px;
          color: #6b7280;
          line-height: 1.7;
          font-size: 17px;
        }

        .buttons {
          display: flex;
          gap: 12px;
          margin-top: 30px;
        }

        .buttons button {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 14px;
          background: #dc2626;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .line {
          border-bottom: 1px solid #d1d5db;
          margin-top: 30px;
        }

        .video-slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          width: 100%;
          padding-bottom: 10px;
        }

        .video-card {
          min-width: 340px;
          background: white;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
        }

        .video {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .card-content {
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
        }

        .card-content h4 {
          font-size: 20px;
          font-weight: 700;
          margin: 0;
        }

        .card-content p {
          color: #6b7280;
          font-size: 14px;
          margin-top: 4px;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .testimonial-content {
            flex-direction: column;
          }

          .left-side {
            width: 100%;
          }

          .testimonial-header h2 {
            font-size: 38px;
          }

          .left-side h3 {
            font-size: 32px;
          }
        }

    @media (max-width: 768px) {

  .testimonial-section {
    padding: 60px 0;
  }

  .testimonial-container {
    padding: 0 20px;
  }

  /* 🔥 MAIN TITLE */
  .testimonial-header h2 {
    font-size: 24px;   /* main title small */
    line-height: 1.3;
  }

  /* 🔥 SUB TITLE */
  .testimonial-header p {
    font-size: 14px;
    margin-top: 8px;
  }

  /* LEFT SIDE TITLE */
  .left-side h3 {
    font-size: 22px;
    line-height: 1.3;
  }

  .left-side p {
    font-size: 14px;
    line-height: 1.6;
  }

  .video-card {
    min-width: 280px;
  }

  .video {
    height: 190px;
  }
}
      `}
      
      </style>
    </section>
  );
}