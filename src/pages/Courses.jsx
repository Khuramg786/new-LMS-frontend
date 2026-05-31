import React, { useState, useEffect } from "react";
import {
    Search,
    Filter,
    Star,
    Users,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------- DATA ---------------- */
const staticCourses = [
    {
        id: 1,
        title: "Complete MERN Stack Development",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        category: "Development",
        livePrice: "PKR-120",
        recordedPrice: "PKR-70",
        batch: "Batch 12",
        trainer: "Yasin Sakir",
        reviews: 4.1,
        enrolled: 1200,
        premium: true,
        profile: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    },
    {
        id: 2,
        title: "Professional UI/UX Design",
        image:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
        category: "Design",
        livePrice: "PKR-90",
        recordedPrice: "PKR-45",
        batch: "Batch 08",
        trainer: "Yasin Sakir",
        reviews: 4.0,
        enrolled: 950,
        premium: true,
        profile: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    },
    {
        id: 3,
        title: "Advanced Digital Marketing",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        category: "Marketing",
        livePrice: "PKR-100",
        recordedPrice: "PKR-60",
        batch: "Batch 15",
        trainer: "Yasin Sakir",
        reviews: 3.8,
        enrolled: 1500,
        premium: true,
        profile: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    },
    {
        id: 4,
        title: "React JS Masterclass",
        image:
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
        category: "Development",
        livePrice: "PKR-80",
        recordedPrice: "PKR-40",
        batch: "Batch 05",
        trainer: "Yasin Sakir",
        reviews: 5,
        enrolled: 2000,
        premium: true,
        profile: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    },
];

/* ---------------- STAR COMPONENT ---------------- */
const Stars = ({ rating }) => {
    const stars = 5;
    return (
        <div className="flex gap-[2px]">
            {Array.from({ length: stars }).map((_, i) => (
                <Star
                    key={i}
                    size={12}
                    className={
                        i < Math.round(rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                    }
                    fill={i < Math.round(rating) ? "currentColor" : "none"}
                />
            ))}
        </div>
    );
};


const trainerName = "Yasin Sakir";

const trainerProfile =
    "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406";

const rating = 4.2;

function Courses() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showMore, setShowMore] = useState(false);
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const mergedCourses =
        Array.isArray(courses) && courses.length > 0
            ? courses
            : staticCourses;
    const [page, setPage] = useState(1);
    const perPage = 8;


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch("https://lms-backend-umup.onrender.com/course/getcourse");
                const data = await res.json();
                const allCourses = data.courses || [];

                setCourses(allCourses);

                // unique categories
                const uniqueCategories = [
                    "All",
                    ...new Set(allCourses.map((item) => item.category))
                ];

                setCategories(uniqueCategories);
            } catch (err) {
                console.log(err);
            }
        };

        fetchCourses();
    }, []);
    const filtered = mergedCourses.filter((c) => {
        const matchSearch = c.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCat =
            selectedCategory === "All" ||
            c.category === selectedCategory;

        return matchSearch && matchCat;
    });

    const pages = Math.ceil(filtered.length / perPage);

    const data = filtered.slice(
        (page - 1) * perPage,
        page * perPage
    );

    return (
        <div className="w-full min-h-screen bg-[#f8fafc]">

            {/* HERO */}
            <div className="w-full py-14 bg-gradient-to-br from-indigo-950 via-black to-gray-900 relative overflow-hidden">

                {/* Background Glow Effects */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">

                    {/* LEFT SIDE TEXT */}
                    <div className="w-full md:w-1/2 text-center md:text-left">

                        <span className="inline-block px-5 py-2 text-xs bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-md mb-5">
                            🎓 Upgrade Your Skills
                        </span>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Our Premium <span className="text-indigo-400">Courses</span>
                        </h1>

                        <p className="text-gray-300 mt-5 text-base md:text-lg">
                            Learn industry-ready skills with expert-led courses designed for your success.
                        </p>



                    </div>

                    {/* RIGHT SIDE CIRCLES */}
                    <div className="w-full md:w-1/2 flex justify-center">

                        <div className="grid grid-cols-3 gap-4">

                            {mergedCourses.slice(0, 9).map((course, index) => (
                                <div
                                    key={index}
                                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-110 transition duration-300"
                                >
                                    <img
                                        src={course.imageUrl || course.image}
                                        alt="course"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* overlay glow */}
                                    <div className="absolute inset-0 bg-white/5 hover:bg-transparent transition"></div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
            {/* BODY */}
            <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">

                {/* FILTER */}
                <div className="w-full lg:w-[280px] bg-white p-4 rounded-2xl shadow">

                    <div className="flex items-center gap-2 mb-3">
                        <Filter className="text-red-500" size={18} />
                        <h2 className="font-bold">Filters</h2>
                    </div>

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search course..."
                        className="w-full border h-10 rounded-xl px-3 mb-3 text-sm"
                    />

                    {(showMore ? categories : categories.slice(0, 12)).map(
                        (cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`w-full text-left p-2 rounded-xl mb-2 text-sm ${selectedCategory === cat
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        )
                    )}

                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center gap-1 text-sm text-red-500 mt-2"
                    >
                        {showMore ? "Show Less" : "More Categories"}
                        {showMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                </div>

                {/* COURSES */}
                <div className="flex-1">

                    <div className="flex justify-between mb-4">
                        <h2 className="font-bold text-xl">Courses</h2>
                        <span className="text-red-500 text-sm">
                            {filtered.length} Results
                        </span>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {data.map((course) => (
                            <div
                                key={course.id}
                           className="bg-white rounded-2xl shadow flex overflow-hidden h-[190px] md:h-[200px]"
                            >

                                {/* IMAGE */}
                                <div className="relative w-[42%]">

                                    <img
                                        src={course.imageUrl || course.image}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* PREMIUM */}
                                    <div className="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
                                        <Crown size={12} />
                                        Premium Course
                                    </div>

                                    {/* PROFILE TOP LEFT */}
                                    <div className="absolute top-2 left-2 flex items-center gap-2 bg-black/60 px-2 py-1 rounded-full">
                                        <img
                                            src={trainerProfile}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-white text-[10px]">
                                            {trainerName}
                                        </span>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="w-[58%] p-3 flex flex-col justify-between">

                                    <div>
                                     <p className="text-xs text-red-500 truncate">
                                            {course.category} • {course.batch}
                                        </p>

                                      <h3 className="text-sm font-bold line-clamp-2 h-[40px] overflow-hidden">
                                            {course.title}
                                        </h3>

                                        <div className="flex items-center gap-2 mt-1">
                                            <Stars rating={course.reviews || (Math.random() * 2 + 3).toFixed(1)} />
                                            <span className="text-xs text-gray-500">
                                                {course.reviews || (Math.random() * 2 + 3).toFixed(1)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between mt-2">

                                            {/* LIVE */}
                                            <div className="text-center">
                                                <p className="text-lg font-bold text-green-600">Live</p>
                                                <p className="font-bold text-xs text-gray-500">
                                                    {course.price || course.livePrice || "N/A"}
                                                </p>
                                            </div>

                                            {/* RECORDED */}
                                            <div className="text-center">
                                                <p className="text-lg font-bold text-blue-600">Recorded</p>
                                                <p className="font-bold text-xs text-gray-500">
                                                    {course.discount || course.recordedPrice || "N/A"}
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    {/* BOTTOM */}
                                    <div className="flex justify-between items-center text-xs border-t pt-2">

                                        <div className="flex items-center gap-1 text-gray-600">
                                            <Users size={14} />
                                            {course.enrolled || Math.floor(Math.random() * 100)} Trainees
                                        </div>

                                      <Link to={`/course/${course._id}`}>
  <p className="bg-red-600 hover:bg-red-700 text-white text-[11px] px-3 py-2 rounded-md inline-block cursor-pointer transition duration-300">
    More Detail
  </p>
</Link>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* PAGINATION */}
                    <div className="flex justify-center items-center gap-2 mt-6">

                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            className="px-3 py-1 bg-gray-200 rounded"
                        >
                            Prev
                        </button>

                        {Array.from({ length: pages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`px-3 py-1 rounded ${page === i + 1
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                setPage((p) => Math.min(p + 1, pages))
                            }
                            className="px-3 py-1 bg-gray-200 rounded"
                        >
                            Next
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Courses;