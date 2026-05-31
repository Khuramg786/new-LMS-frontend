import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  CalendarDays,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function Upcomingcourese() {
  const [index, setIndex] = useState(0);
  const [courses, setCourses] = useState([]);
  const cardsPerView = 4;
  const cardWidth = 310;
  const fetchCourses = async () => {
    try {
      const res = await fetch(
        "https://lms-backend-umup.onrender.com/upcomings/getUpcoming"
      );

      const data = await res.json();

      console.log("API RESPONSE:", data); // 🔥 add this

      setCourses(data.upcoming ?? []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  // NEXT
  const nextSlide = () => {
    if (index >= courses.length - cardsPerView) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // PREVIOUS
  const prevSlide = () => {
    if (index <= 0) {
      setIndex(courses.length - cardsPerView);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => {
        if (prev >= courses.length - cardsPerView) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(slider);
  }, [courses.length]);

  return (
    <div className="courses-section">
      {/* HEADER */}
      <div className="top-header">
        <h1>
          Upcoming <span>Courses</span>
        </h1>

        <div className="course-count">
          <Clock3 size={18} />
          <p>{courses.length} Upcoming Courses Available</p>
        </div>


      </div>

      {/* SLIDER */}
      <div className="slider-container">
        {/* BUTTONS */}
        <button className="nav-btn left-btn" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>

        <button className="nav-btn right-btn" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>

        {/* SLIDER WRAPPER */}
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * (cardWidth + 22)}px)`,
            }}
          >
            {courses.map((course, i) => (
              <div className="course-card" key={i}>

                {/* IMAGE */}
                <div className="image-box">
                  <img src={course.imageUrl} alt={course.title} />

                  <div className="upcoming-badge">
                    <Clock3 size={14} />
                    Upcoming
                  </div>
                </div>

                {/* CONTENT */}
                <div className="content">
                  <h2>{course.title}</h2>

                  <div className="info-row">
                    <CalendarDays size={17} />
                    <span>
                      {course.recordingDate?.split("T")[0]} at {course.time}
                    </span>
                  </div>

                  <div className="info-row">
                    <Clock3 size={17} />
                    <span>{course.duration} Days Course</span>
                  </div>

                  {/* FOOTER */}
                  <div className="card-footer">
                    <div className="enrolled">
                      <Users size={17} />
                      {course.studentenroll} enrolled
                    </div>

                    <Link to={`/upcoming-course/${course._id}`}>

                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
      

        .courses-section{
          width:100%;
          padding:10px 20px;
          background:#f5f5f5;
          overflow:hidden;
            margin-bottom:10px;
        }

        /* HEADER */

        .top-header{
          text-align:center;
          margin-bottom:60px;
        }

        .top-header h1{
          font-size:40px;
          font-weight:800;
          color:#1e3a8a;
          margin-bottom:10px;
        }

        .top-header h1 span{
          color:#ef4444;
        }

        .course-count{
          display:inline-flex;
          align-items:center;
          gap:10px;
          background:#fff;
          padding:12px 24px;
          border-radius:50px;
          box-shadow:0 4px 15px rgba(0,0,0,0.08);
          margin-bottom:5px;
          color:#ef4444;
          font-weight:700;
        }

        .sub-title{
          font-size:20px;
          color:#6b7280;
        }

        /* SLIDER */

        .slider-container{
          position:relative;
        }

        .slider-wrapper{
          overflow:hidden;
          width:100%;
        }

        .slider-track{
          display:flex;
          gap:22px;
          transition:0.7s ease;
        }

        /* CARD */

        .course-card{
          width:310px;
          min-width:310px;
          background:#fff;
          border-radius:22px;
          overflow:hidden;
          box-shadow:0 8px 25px rgba(0,0,0,0.08);
          transition:0.3s;
        }

        .course-card:hover{
          transform:translateY(-8px);
        }

        .image-box{
          position:relative;
        }

        .image-box img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .upcoming-badge{
          position:absolute;
          top:18px;
          right:18px;
          background:linear-gradient(90deg,#ef4444,#dc2626);
          color:#fff;
          padding:8px 16px;
          border-radius:50px;
          display:flex;
          align-items:center;
          gap:6px;
          font-size:14px;
          font-weight:700;
        }

        /* CONTENT */

        .content{
          padding:24px;
        }

        .content h2{
          font-size:22px;
          line-height:1.4;
          color:#111827;
          margin-bottom:20px;
          min-height:95px;
        }

        .info-row{
          display:flex;
          align-items:center;
          gap:10px;
          color:#6b7280;
          margin-bottom:15px;
          font-size:15px;
        }

        .info-row svg{
          color:#2563eb;
        }

        /* FOOTER */

        .card-footer{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:25px;
        }

        .enrolled{
          display:flex;
          align-items:center;
          gap:7px;
          color:#6b7280;
          font-size:15px;
        }

        .enrolled svg{
          color:#2563eb;
        }

        .details-btn{
          border:none;
          background:none;
          color:#ef4444;
          font-weight:700;
          font-size:15px;
          cursor:pointer;
        }

        /* BUTTONS */

        .nav-btn{
          position:absolute;
          top:-70px;
          width:48px;
          height:48px;
          border-radius:50%;
          border:2px solid #ef4444;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:100;
          transition:0.3s;
        }

        .nav-btn:hover{
          background:#ef4444;
          color:#fff;
        }

        .left-btn{
          right:65px;
        }

        .right-btn{
          right:0;
        }

        /* RESPONSIVE */

        @media(max-width:1400px){
          .course-card{
            width:280px;
            min-width:280px;
          }
        }

        @media(max-width:1100px){
          .course-card{
            width:48%;
            min-width:48%;
          }

          .top-header h1{
            font-size:45px;
          }
        }

        @media(max-width:700px){
          .course-card{
            width:100%;
            min-width:100%;
          }

          .courses-section{
            padding:50px 20px;
          }

          .top-header h1{
            font-size:34px;
          }

          .sub-title{
            font-size:16px;
          }

          .content h2{
            font-size:20px;
          }
              .nav-btn{
    width:36px;
    height:36px;
    top:-55px;
  }

  .top-header h1{
    font-size:24px;   /* main title small */
    line-height:1.3;
  }

  .top-header h1 span{
    font-size:24px;
  }

  .course-count{
    font-size:12px;   /* second title small */
    padding:8px 14px;
    gap:6px;
  }

  .course-count p{
    font-size:12px;
  }

  .sub-title{
    font-size:14px;
  }

  .content h2{
    font-size:16px;
  }

  .nav-btn svg{
    width:18px;
    height:18px;
  }

  .left-btn{
    right:50px;
  }

  .right-btn{
    right:0;
  }
        }
      `}</style>
    </div>
  );
}