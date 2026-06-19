import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
    {
        title: "Business Growth Club",
        color: "#2563eb",
        total: "12 Courses",
        items: [
            "Business Planning", "Startup Growth", "Scaling Strategy", 
            "Brand Expansion", "Business Analysis", "Team Building", 
            "Profit System", "Business Automation", "Sales Funnels", 
            "Client Handling", "Marketing Basics", "Business Success"
        ],
    },
    {
        title: "Team Management Skills Club",
        color: "#7c3aed",
        total: "18 Courses",
        items: [
            "Team Leadership", "Communication", "Conflict Solving", 
            "Project Planning", "Motivation", "Staff Training", 
            "Task Management", "Work Ethics", "Productivity", "Decision Making"
        ],
    },
    {
        title: "Sales Booster Training",
        color: "#ec4899",
        total: "5 Courses",
        items: [
            "Sales Psychology", "Lead Conversion", "Cold Calling", 
            "Closing Techniques", "Client Attraction", "Sales Funnel", 
            "Negotiation", "Customer Handling"
        ],
    },
    {
        title: "Mental Wellness",
        color: "#14b8a6",
        total: "6 Courses",
        items: [
            "Stress Management", "Positive Thinking", "Mind Relaxation", 
            "Confidence Building", "Emotional Balance", "Mental Strength"
        ],
    },
    {
        title: "Financial Management",
        color: "#16a34a",
        total: "6 Courses",
        items: [
            "Money Management", "Investment Basics", "Budget Planning", 
            "Cash Flow", "Savings Strategy", "Financial Goals", 
            "Business Finance", "Income Planning", "Expense Control"
        ],
    },
    {
        title: "Relation Building",
        color: "#f97316",
        total: "6 Courses",
        items: [
            "Communication Skills", "Trust Building", "Social Interaction", 
            "Healthy Relations", "Personality Growth"
        ],
    },
    {
        title: "Physical Health",
        color: "#dc2626",
        total: "6 Courses",
        items: [
            "Fitness Training", "Healthy Lifestyle", "Daily Exercise", 
            "Body Strength", "Diet Planning", "Yoga Basics", "Energy Boost"
        ],
    },
    {
        title: "Social Awareness",
        color: "#0ea5e9",
        total: "6 Courses",
        items: [
            "Community Support", "Social Ethics", "Public Awareness", "Human Rights"
        ],
    },
    {
        title: "Spiritual Awakening",
        color: "#9333ea",
        total: "2 Courses",
        items: [
            "Inner Peace", "Self Awareness", "Spiritual Growth", 
            "Meditation", "Mind Purification", "Life Purpose"
        ],
    },
    {
        title: "Leadership Skills for Principals",
        color: "#2563eb",
        total: "4 Courses",
        items: [
            "School Leadership", "Team Direction", "Student Management", 
            "Decision Making", "Communication", "Planning", 
            "Educational Growth", "Motivation", "Discipline", "Problem Solving"
        ],
    },
    {
        title: "Business Coaching",
        color: "#db2777",
        total: "8 Courses",
        items: [
            "Business Mentoring", "Startup Coaching", "Goal Setting", 
            "Success Planning", "Market Strategy", "Growth Coaching", 
            "Mindset Building", "Revenue Planning"
        ],
    },
];

function Maincatagory() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Mobile par user jab slide karega to indicators update honge
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / (clientWidth * 0.88));
            setActiveIndex(index);
        }
    };

    return (
        <div className="mainWrapper">
            <div className="heading">
                <span>OUR BUSINESS COURSES</span>
                <h1>
                    Live & Recorded <span>Course Categories</span>
                </h1>
            </div>

            {/* Slider Container */}
            <div 
                className="categoryContainer" 
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {categories.map((cat, index) => (
                    <Link
                        key={index}
                        to={`/category/${encodeURIComponent(cat.title)}`}
                        className="cardLink"
                    >
                        <div className="card">
                            <div className="topBar" style={{ background: cat.color }} />
                            <div className="content">
                                <h2>{cat.title}</h2>
                                <div className="courseBadge" style={{ background: cat.color }}>
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

            {/* Mobile Slider Indicators / Dots */}
            <div className="sliderDots">
                {categories.map((_, idx) => (
                    <span 
                        key={idx} 
                        className={`dot ${activeIndex === idx ? "active" : ""}`}
                    />
                ))}
            </div>

            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                }

                .mainWrapper {
                    width: 100%;
                    padding: 80px 4%;
                    background: #f3f7fc;
                    overflow: hidden;
                }

                .heading {
                    text-align: center;
                    margin-bottom: 65px;
                }

                .heading span {
                    color: #ef4444;
                    font-weight: 700;
                    letter-spacing: 2px;
                    font-size: 14px;
                    text-transform: uppercase;
                }

                .heading h1 {
                    font-size: 42px;
                    font-weight: 800;
                    color: #111827;
                    margin-top: 12px;
                }

                .heading h1 span {
                    color: #2563eb;
                }

                .categoryContainer {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 24px;
                }

                .cardLink {
                    text-decoration: none;
                    color: inherit;
                }

                .card {
                    position: relative;
                    background: white;
                    border-radius: 26px;
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.07);
                    transition: 0.4s;
                    min-height: 340px;
                    height: 100%;
                }

                .card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 18px 45px rgba(0,0,0,0.12);
                }

                .topBar {
                    width: 100%;
                    height: 7px;
                }

                .content {
                    padding: 28px 24px;
                }

                .content h2 {
                    font-size: 22px;
                    line-height: 1.4;
                    color: #111827;
                    margin-bottom: 20px;
                }

                .courseBadge {
                    display: inline-block;
                    padding: 8px 16px;
                    border-radius: 50px;
                    color: white;
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 22px;
                }

                .content ul {
                    list-style: none;
                }

                .content li {
                    margin-bottom: 13px;
                    color: #4b5563;
                    font-size: 15px;
                    line-height: 1.5;
                }

                /* Mobile Dots Navigation (Desktop par hidden rahegi) */
                .sliderDots {
                    display: none;
                    justify-content: center;
                    gap: 6px;
                    margin-top: 20px;
                }

                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #cbd5e1;
                    transition: all 0.3s ease;
                }

                .dot.active {
                    background: #2563eb;
                    width: 20px;
                    border-radius: 4px;
                }

                /* RESPONSIVE BREAKPOINTS */
                @media(max-width: 1500px) {
                    .categoryContainer {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                @media(max-width: 1100px) {
                    .categoryContainer {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .heading h1 {
                        font-size: 34px;
                    }
                }

                /* MOBILE DESIGN (Full Responsive Slider with Indicators) */
                @media(max-width: 768px) {
                    .mainWrapper {
                        padding: 50px 16px;
                    }

                    .heading {
                        margin-bottom: 35px;
                    }

                    .heading h1 {
                        font-size: 26px;
                    }

                    .categoryContainer {
                        display: flex;
                        overflow-x: auto;
                        gap: 16px;
                        scroll-behavior: smooth;
                        padding-bottom: 15px;
                        snap-type: x mandatory; /* Cards smooth snap honge */
                        -webkit-overflow-scrolling: touch;
                    }

                    .categoryContainer::-webkit-scrollbar {
                        display: none; /* Scrollbar hide */
                    }

                    .cardLink {
                        min-width: 85%;
                        scroll-snap-align: start;
                        flex-shrink: 0;
                    }

                    .card {
                        min-height: 330px;
                    }

                    .content h2 {
                        font-size: 19px;
                    }

                    .sliderDots {
                        display: flex; /* Mobile par dots show honge */
                    }
                }
            `}</style>
        </div>
    );
}

export default Maincatagory;