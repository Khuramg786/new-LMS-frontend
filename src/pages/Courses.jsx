import React, { useState, useEffect } from "react";
import {
    Search,
    Filter,
    Star,
    Users,
    ChevronDown,
    ChevronUp,
    Crown
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------- STATIC DATA (FALLBACK) ---------------- */
const staticCourses = [
    {
        id: 1,
        title: "Complete MERN Stack Development",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        category: "Development",
        livePrice: "PKR-120",
        recordedPrice: "PKR-70",
        batch: "Batch 12",
        trainer: "Yasin Sakir",
        reviews: 4.8,
        enrolled: 1240,
        premium: true,
        profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Professional UI/UX Design",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
        category: "Design",
        livePrice: "PKR-90",
        recordedPrice: "PKR-45",
        batch: "Batch 08",
        trainer: "Yasin Sakir",
        reviews: 4.2,
        enrolled: 950,
        premium: true,
        profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Advanced Digital Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        category: "Marketing",
        livePrice: "PKR-100",
        recordedPrice: "PKR-60",
        batch: "Batch 15",
        trainer: "Yasin Sakir",
        reviews: 3.9,
        enrolled: 410,
        premium: true,
        profile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "React JS Masterclass",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
        category: "Development",
        livePrice: "PKR-80",
        recordedPrice: "PKR-40",
        batch: "Batch 05",
        trainer: "Yasin Sakir",
        reviews: 4.5,
        enrolled: 2330,
        premium: true,
        profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
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
                    size={11}
                    className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}
                    fill={i < Math.round(rating) ? "currentColor" : "none"}
                />
            ))}
        </div>
    );
};

const dynamicTrainers = [
    { name: "Yasin Sakir", profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" },
    { name: "Yasin Sakir", profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" },
    { name: "Yasin Sakir", profile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100" },
    { name: "Yasin Sakir", profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" },
    { name: "Yasin Sakir", profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100" }
];

/* ---------------- SKELETON LOADER CARD COMPONENT ---------------- */
const CourseSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden border border-gray-100 animate-pulse">
            {/* Thumbnail Area Skeleton */}
            <div className="w-full aspect-video bg-gray-200 relative">
                {/* Trainer Badge Skeleton */}
                <div className="absolute top-2 left-2 w-24 h-5 bg-gray-300 rounded-full" />
                {/* Premium Tag Skeleton */}
                <div className="absolute bottom-2 left-2 w-16 h-5 bg-gray-300 rounded" />
            </div>
            {/* Content Area Skeleton */}
            <div className="p-3.5 flex flex-col gap-3 flex-1">
                <div>
                    {/* Category & Batch */}
                    <div className="h-3 bg-gray-200 rounded w-1/3 mb-2" />
                    {/* Title Lines */}
                    <div className="h-4 bg-gray-200 rounded w-11/12 mb-1.5" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
                    {/* Stars */}
                    <div className="h-3 bg-gray-200 rounded w-1/4 mt-2" />
                    {/* Price Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-4 bg-gray-50 p-2 rounded-xl">
                        <div className="h-8 bg-gray-200 rounded" />
                        <div className="h-8 bg-gray-200 rounded" />
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="flex justify-between items-center border-t pt-2 border-gray-100 mt-auto">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-7 bg-gray-200 rounded w-20" />
                </div>
            </div>
        </div>
    );
};

function Courses() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showMore, setShowMore] = useState(false);
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true); // Loading State Added
    const [isApiFailed, setIsApiFailed] = useState(false); // Check if fallback should be used
    const perPage = 6;

    // Loading ke dauran static courses show nahi honge, sirf tabhi honge jab API fail ho jaye
    const mergedCourses = !loading && courses.length === 0 && isApiFailed ? staticCourses : courses;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://new.lifechangersclub.pk/course/getcourse");
                const data = await res.json();
                const allCourses = data.courses || [];

                if (allCourses.length === 0) {
                    setIsApiFailed(true);
                }

                const processedCourses = allCourses.map((course, idx) => {
                    const stringId = course.id || course._id || String(idx);
                    let charSum = 0;
                    for (let i = 0; i < stringId.length; i++) {
                        charSum += stringId.charCodeAt(i);
                    }

                    const calculatedReview = course.reviews && course.reviews !== 4.2 
                        ? course.reviews 
                        : parseFloat((3.8 + (charSum % 12) * 0.1).toFixed(1));

                    const calculatedEnrolled = course.enrolled && course.enrolled !== 100 
                        ? course.enrolled 
                        : (20 + (charSum % 43) * 10);

                    const trainerIndex = charSum % dynamicTrainers.length;
                    const selectedTrainer = dynamicTrainers[trainerIndex];

                    return {
                        ...course,
                        reviews: calculatedReview,
                        enrolled: calculatedEnrolled,
                        trainer: course.trainer || selectedTrainer.name,
                        profile: course.profile || selectedTrainer.profile
                    };
                });

                setCourses(processedCourses);

                const uniqueCategories = [
                    "All",
                    ...new Set(processedCourses.map((item) => item.category))
                ];
                setCategories(uniqueCategories);
            } catch (err) {
                console.log(err);
                setIsApiFailed(true); // API fail hone par fallback enable karein
            } finally {
                setLoading(false); // Loader ko rok dein
            }
        };

        fetchCourses();
    }, []);

    const renderCardMedia = (url) => {
        if (!url) {
            return (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                    No Media Available
                </div>
            );
        }

        const cleanUrl = url.trim().toLowerCase();
        const isYouTube = cleanUrl.includes("youtube.com") || cleanUrl.includes("youtu.be");

        if (isYouTube) {
            let videoId = "";
            if (cleanUrl.includes("shorts/")) {
                videoId = url.split("shorts/")[1]?.split(/[?&]/)[0];
            } else if (cleanUrl.includes("v=")) {
                videoId = url.split("v=")[1]?.split("&")[0];
            } else if (cleanUrl.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1]?.split(/[?&]/)[0];
            } else if (cleanUrl.includes("embed/")) {
                videoId = url.split("embed/")[1]?.split(/[?&]/)[0];
            }

            if (videoId) {
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                return (
                    <div className="w-full h-full">
                        <img
                            src={thumbnailUrl}
                            alt="YouTube Thumbnail"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }}
                        />
                    </div>
                );
            }
        }

        if (
            cleanUrl.endsWith(".mp4") ||
            cleanUrl.endsWith(".webm") ||
            cleanUrl.endsWith(".ogg") ||
            cleanUrl.endsWith(".mov") ||
            cleanUrl.endsWith(".mkv") ||
            cleanUrl.includes(".mp4?") ||
            cleanUrl.includes("video")
        ) {
            return (
                <div className="w-full h-full">
                    <video
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                    >
                        <source src={url} type="video/mp4" />
                    </video>
                </div>
            );
        }

        return (
            <img
                src={url}
                alt="Course Thumbnail"
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                            Invalid Link
                        </div>
                    `;
                }}
            />
        );
    };

    const filtered = mergedCourses.filter((c) => {
        const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
        const matchCat = selectedCategory === "All" || c.category === selectedCategory;
        return matchSearch && matchCat;
    });

    const pages = Math.ceil(filtered.length / perPage);
    const data = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="w-full min-h-screen bg-[#f8fafc]">

            {/* HERO */}
            <div className="w-full py-14 bg-gradient-to-br from-indigo-950 via-black to-gray-900 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <span className="inline-block px-5 py-2 text-xs bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-md mb-5">
                            🎓 Upgrade Your Busines Skills
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                           OUR BUSINESS  <span className="text-indigo-400">COURSES</span>
                        </h1>
                        <p className="text-gray-300 mt-5 text-base md:text-lg">
                            Learn practical business skills which give you instant results
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="grid grid-cols-3 gap-4">
                            {loading ? (
                                // Hero section circles loading state
                                Array.from({ length: 6 }).map((_, idx) => (
                                    <div key={idx} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-700/50 animate-pulse border-4 border-white/10" />
                                ))
                            ) : (
                                mergedCourses.slice(0, 9).map((course, index) => {
                                    const mediaLink = course.mediaUrl || course.videoUrl || course.imageUrl || course.image;
                                    return (
                                        <div
                                            key={index}
                                            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-110 transition duration-300"
                                        >
                                            {renderCardMedia(mediaLink)}
                                            <div className="absolute inset-0 bg-white/5 hover:bg-transparent transition"></div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* BODY */}
            <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">

                {/* FILTER */}
                <div className="w-full lg:w-[280px] bg-white p-4 rounded-2xl shadow-sm h-fit">
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

                    {loading ? (
                        <div className="space-y-2">
                            <div className="h-8 bg-gray-200 rounded-xl w-full animate-pulse" />
                            <div className="h-8 bg-gray-200 rounded-xl w-full animate-pulse" />
                            <div className="h-8 bg-gray-200 rounded-xl w-full animate-pulse" />
                        </div>
                    ) : (
                        (showMore ? categories : categories.slice(0, 12)).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`w-full text-left p-2 rounded-xl mb-2 text-sm ${
                                    selectedCategory === cat ? "bg-red-500 text-white" : "bg-gray-100"
                                }`}
                            >
                                {cat}
                            </button>
                        ))
                    )}

                    {!loading && categories.length > 12 && (
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="flex items-center gap-1 text-sm text-red-500 mt-2"
                        >
                            {showMore ? "Show Less" : "More Categories"}
                            {showMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                    )}
                </div>

                {/* COURSES AREA */}
                <div className="flex-1">
                    <div className="flex justify-between mb-4">
                        <h2 className="font-bold text-xl">Courses</h2>
                        <span className="text-red-500 text-sm">
                            {loading ? "Loading..." : `${filtered.length} Results`}
                        </span>
                    </div>

                    {/* COMPACT & SMART GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {loading ? (
                            // Jab tak load ho raha hai, 6 beautiful skeletons dikhao
                            Array.from({ length: perPage }).map((_, index) => (
                                <CourseSkeleton key={index} />
                            ))
                        ) : data.length > 0 ? (
                            data.map((course) => {
                                const mediaLink = course.mediaUrl || course.videoUrl || course.imageUrl || course.image;

                                return (
                                    <div
                                        key={course.id || course._id}
                                        className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100"
                                    >
                                        {/* IMAGE AREA */}
                                        <div className="relative w-full aspect-video bg-gray-50 overflow-hidden shrink-0">
                                            {renderCardMedia(mediaLink)}

                                            <div className="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1 z-10 shadow-sm">
                                                <Crown size={11} />
                                                Premium
                                            </div>

                                            <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
                                                <img
                                                    src={course.profile}
                                                    className="w-5 h-5 rounded-full object-cover border border-white/20"
                                                    alt="trainer"
                                                />
                                                <span className="text-white font-medium text-[10px]">
                                                    {course.trainer}
                                                </span>
                                            </div>
                                        </div>

                                        {/* CONTENT AREA */}
                                        <div className="p-3.5 flex flex-col justify-between flex-1 gap-3">
                                            <div>
                                                <p className="text-[11px] font-semibold text-red-500 uppercase tracking-wider mb-0.5">
                                                    {course.category} • {course.batch || "Batch 01"}
                                                </p>

                                                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-[40px] leading-snug">
                                                    {course.title}
                                                </h3>

                                                <div className="flex items-center gap-1.5 mt-1">
                                                    <Stars rating={course.reviews} />
                                                    <span className="text-[11px] font-bold text-gray-500">
                                                        {course.reviews}
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-1 mt-3 bg-gray-50 p-2 rounded-xl border border-gray-100">
                                                    <div className="text-center border-r border-gray-200">
                                                        <p className="text-[10px] font-medium text-green-600">Live</p>
                                                        <p className="font-bold text-xs text-gray-700">
                                                            {course.price ? `PKR-${course.price}` : course.livePrice || "N/A"}
                                                        </p>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="text-[10px] font-medium text-blue-600">Recorded</p>
                                                        <p className="font-bold text-xs text-gray-700">
                                                            {course.discount ? `PKR-${course.discount}` : course.recordedPrice || "N/A"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* BOTTOM ACTIONS */}
                                            <div className="flex justify-between items-center text-xs border-t pt-2 border-gray-100">
                                                <div className="flex items-center gap-1 text-gray-500 font-medium text-[11px]">
                                                    <Users size={13} className="text-gray-400" />
                                                    {course.enrolled} Trainees
                                                </div>
                                                <Link to={`/course/${course.slug || course.id}`}>
                                                    <span className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg inline-block cursor-pointer transition duration-300 shadow-sm">
                                                        More Detail
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500 text-sm">
                                No courses found matching your criteria.
                            </div>
                        )}
                    </div>

                    {/* PAGINATION */}
                    {!loading && pages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-8">
                            <button
                                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 transition rounded-lg text-sm font-medium"
                                disabled={page === 1}
                            >
                                Prev
                            </button>

                            {Array.from({ length: pages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i + 1)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
                                        page === i + 1 ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setPage((p) => Math.min(p + 1, pages))}
                                className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 transition rounded-lg text-sm font-medium"
                                disabled={page === pages}
                            >
                                Next
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Courses;