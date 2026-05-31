import React from "react";
import { Link } from "react-router-dom";
const categories = [
    {
        title: "Business Growth Club",
        color: "#2563eb",
        total: "12 Courses",
        items: [
            "Business Planning",
            "Startup Growth",
            "Scaling Strategy",
            "Brand Expansion",
            "Business Analysis",
            "Team Building",
            "Profit System",
            "Business Automation",
            "Sales Funnels",
            "Client Handling",
            "Marketing Basics",
            "Business Success",
        ],
    },

    {
        title: "Team Management Skills Club",
        color: "#7c3aed",
        total: "10 Courses",
        items: [
            "Team Leadership",
            "Communication",
            "Conflict Solving",
            "Project Planning",
            "Motivation",
            "Staff Training",
            "Task Management",
            "Work Ethics",
            "Productivity",
            "Decision Making",
        ],
    },

    {
        title: "Sales Booster Training",
        color: "#ec4899",
        total: "8 Courses",
        items: [
            "Sales Psychology",
            "Lead Conversion",
            "Cold Calling",
            "Closing Techniques",
            "Client Attraction",
            "Sales Funnel",
            "Negotiation",
            "Customer Handling",
        ],
    },

    {
        title: "Mental Wellness",
        color: "#14b8a6",
        total: "6 Courses",
        items: [
            "Stress Management",
            "Positive Thinking",
            "Mind Relaxation",
            "Confidence Building",
            "Emotional Balance",
            "Mental Strength",
        ],
    },

    {
        title: "Financial Management",
        color: "#16a34a",
        total: "9 Courses",
        items: [
            "Money Management",
            "Investment Basics",
            "Budget Planning",
            "Cash Flow",
            "Savings Strategy",
            "Financial Goals",
            "Business Finance",
            "Income Planning",
            "Expense Control",
        ],
    },

    {
        title: "Relation Building",
        color: "#f97316",
        total: "5 Courses",
        items: [
            "Communication Skills",
            "Trust Building",
            "Social Interaction",
            "Healthy Relations",
            "Personality Growth",
        ],
    },

    {
        title: "Physical Health",
        color: "#dc2626",
        total: "7 Courses",
        items: [
            "Fitness Training",
            "Healthy Lifestyle",
            "Daily Exercise",
            "Body Strength",
            "Diet Planning",
            "Yoga Basics",
            "Energy Boost",
        ],
    },

    {
        title: "Social Awareness",
        color: "#0ea5e9",
        total: "4 Courses",
        items: [
            "Community Support",
            "Social Ethics",
            "Public Awareness",
            "Human Rights",
        ],
    },

    {
        title: "Spiritual Awakening",
        color: "#9333ea",
        total: "6 Courses",
        items: [
            "Inner Peace",
            "Self Awareness",
            "Spiritual Growth",
            "Meditation",
            "Mind Purification",
            "Life Purpose",
        ],
    },

    {
        title: "Leadership Skills for Principals",
        color: "#2563eb",
        total: "10 Courses",
        items: [
            "School Leadership",
            "Team Direction",
            "Student Management",
            "Decision Making",
            "Communication",
            "Planning",
            "Educational Growth",
            "Motivation",
            "Discipline",
            "Problem Solving",
        ],
    },

    {
        title: "Business Coaching",
        color: "#db2777",
        total: "8 Courses",
        items: [
            "Business Mentoring",
            "Startup Coaching",
            "Goal Setting",
            "Success Planning",
            "Market Strategy",
            "Growth Coaching",
            "Mindset Building",
            "Revenue Planning",
        ],
    },
];

function Maincatagory() {
    return (
        <div className="mainWrapper">

          <div className="heading">
    <span>OUR PREMIUM COURSES</span>

    <h1>
        Live & Recorded{" "}
        <span>Course Categories</span>
    </h1>

   
</div>

            <div className="categoryContainer">

              {categories.map((cat, index) => (

  <Link
    key={index}
    to={`/category/${encodeURIComponent(cat.title)}`}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >

    <div className="card">

      <div
        className="topBar"
        style={{ background: cat.color }}
      />

      <div className="content">

        <h2>{cat.title}</h2>

        <div
          className="courseBadge"
          style={{ background: cat.color }}
        >
          {cat.total}
        </div>

        <ul>
          {cat.items.slice(0, 5).map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>

      </div>

    </div>

  </Link>

))}

            </div>

            <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        .mainWrapper{
          width:100%;
          padding:80px 4%;
          background:#f3f7fc;
          overflow:hidden;
        }

        .heading{
          text-align:center;
          margin-bottom:65px;
        }

       


        .heading h1{
          font-size:30px;
          font-weight:800;
          color:#111827;
          margin-top:12px;
        }

        .categoryContainer{
          display:grid;
          grid-template-columns:repeat(5,1fr);
          gap:24px;
        }

        .card{
          position:relative;
          background:white;
          border-radius:26px;
          overflow:hidden;
          border:1px solid #e5e7eb;
          box-shadow:0 10px 30px rgba(0,0,0,0.07);
          transition:0.4s;
          min-height:340px;
        }

        .card:hover{
          transform:translateY(-12px);
          box-shadow:0 18px 45px rgba(0,0,0,0.12);
        }
.heading span{
  color:#ef4444;
  font-weight:700;
  letter-spacing:2px;
  font-size:30px;
  text-transform:uppercase;
}

.heading h1{
  font-size:42px;
  font-weight:800;
  color:#111827;
}

.heading h1 span{
  color:#2563eb;
}

.subText{
  font-size:16px;
  color:#6b7280;
  margin-top:12px;
  max-width:600px;
  margin-left:auto;
  margin-right:auto;
  line-height:1.6;
}
        .topBar{
          width:100%;
          height:7px;
        }

        .content{
          padding:28px 24px;
        }

        .content h2{
          font-size:90px;
          color:#111827;
          font-weight:700;
          margin-bottom:10px;
        }
          

.content h2 {
    font-size: 22px;
    line-height: 1.4;
    color: #111827;
    margin-bottom: 20px;
    min-height: 10px !important;
}

        .courseBadge{
          display:inline-block;
          padding:8px 16px;
          border-radius:50px;
          color:white;
          font-size:13px;
          font-weight:600;
          margin-bottom:22px;
        }

        .content ul{
          list-style:none;
        }

        .content li{
          margin-bottom:13px;
          color:#4b5563;
          font-size:15px;
          line-height:1.5;
        }

        /* DESKTOP LARGE */
        @media(max-width:1500px){
          .categoryContainer{
            grid-template-columns:repeat(4,1fr);
          }
        }

        /* TABLET */
        @media(max-width:1100px){
          .categoryContainer{
            grid-template-columns:repeat(2,1fr);
          }

          .heading h1{
            font-size:38px;
          }
        }

        /* MOBILE */
        @media(max-width:768px){

  .mainWrapper{
    padding:50px 15px;
  }

  .heading{
    margin-bottom:40px;
  }

  /* 🔥 SMALL TOP TITLE */
  .heading span{
    font-size:14px;
    letter-spacing:1px;
  }

  /* 🔥 MAIN TITLE */
  .heading h1{
    font-size:22px;
    line-height:1.3;
  }

  .heading h1 span{
    font-size:22px;
  }

  .categoryContainer{
    display:flex;
    overflow-x:auto;
    gap:18px;
    scroll-behavior:smooth;
    padding-bottom:10px;
  }

  .categoryContainer::-webkit-scrollbar{
    display:none;
  }

  .card{
    min-width:88%;
    flex-shrink:0;
    min-height:320px;
  }

  .content{
    padding:24px 20px;
  }

  .content h2{
    font-size:18px;
  }
          .mainWrapper{
            padding:50px 15px;
          }

          .heading{
            margin-bottom:40px;
          }

          .heading h1{
            font-size:28px;
          }

          .categoryContainer{
            display:flex;
            overflow-x:auto;
            gap:18px;
            scroll-behavior:smooth;
            padding-bottom:10px;
          }

          .categoryContainer::-webkit-scrollbar{
            display:none;
          }

          .card{
            min-width:88%;
            flex-shrink:0;
            min-height:320px;
          }

          .content{
            padding:24px 20px;
          }

          .content h2{
            font-size:20px;
          }
        }
      `}</style>

        </div>
    );
}

export default Maincatagory;