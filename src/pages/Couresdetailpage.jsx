import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
    Clock,
    Star,
    PlayCircle,
    BookOpen,
    Award,
    User,
    MessageCircle,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

function CourseDetailPage() {
    const { slug } = useParams();
    const location = useLocation();
    
    const [openFAQ, setOpenFAQ] = useState(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [course, setCourse] = useState(location.state?.course || null);
    const [loading, setLoading] = useState(!location.state?.course);
    const [selectedVideo, setSelectedVideo] = useState("");

    // Extracts YouTube ID correctly from various link formats
    const getYoutubeId = (url = "") => {
        if (!url) return "";
        const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^&?/]+)/;
        const match = url.match(regExp);
        return match ? match[1] : "";
    };

    // Checks if the given URL is a YouTube video
    const isYouTubeUrl = (url = "") => {
        if (!url) return false;
        const cleanUrl = url.trim().toLowerCase();
        return cleanUrl.includes("youtube.com") || cleanUrl.includes("youtu.be");
    };

    // Checks if the link is a direct video file
    const isDirectVideoUrl = (url = "") => {
        if (!url) return false;
        const cleanUrl = url.trim().toLowerCase();
        return (
            cleanUrl.endsWith(".mp4") ||
            cleanUrl.endsWith(".webm") ||
            cleanUrl.endsWith(".ogg") ||
            cleanUrl.endsWith(".mov") ||
            cleanUrl.endsWith(".mkv") ||
            cleanUrl.includes(".mp4?") ||
            cleanUrl.includes("video")
        );
    };

    // Fetch fallback only if state was not transferred via Link router
    useEffect(() => {
        if (!course) {
            const fetchCourse = async () => {
                try {
                    const res = await fetch(`https://new.lifechangersclub.pk/course/slug/${slug}`);
                    const data = await res.json();
                    if (data.success) {
                        setCourse(data.course);
                    }
                } catch (err) {
                    console.error("Error fetching course details:", err);
                } finally {
                    setLoading(false);
                }
            };
            fetchCourse();
        }
    }, [slug, course]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const faqs = [
        {
            question: "Is that an online or physical course?",
            answer: "Yes, it's online/recorded courses.",
        },
        {
            question: "Can I ask questions if I want during the session?",
            answer: "Yes, you can ask questions to take more benefits from our training.",
        },
        {
            question: "Is the certificate provided?",
            answer: "Yes, the certificate is provided on the completion.",
        },
        {
            question: "Can I get membership for more discounts?",
            answer: "Yes, we offer special discounts on yearly membership plans.",
        },
        {
            question: "How long will I have access?",
            answer: "You will get full-time access to all course materials and updates.",
        },
    ];

    if (loading && !course) {
        return (
            <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Not Found</h2>
                <p className="text-gray-500">The course you are looking for doesn't exist or has been moved.</p>
            </div>
        );
    }

    // ================= DYNAMIC MEDIA RESOLVER FOR DETAIL PAGE =================
    const rawMediaLink = course.mediaUrl || course.videoUrl || course.imageUrl || course.image || "";
    
    const isYouTube = isYouTubeUrl(rawMediaLink);
    const isDirectVideo = isDirectVideoUrl(rawMediaLink);
    const hasVideo = isYouTube || isDirectVideo;
    
    // Fallback static image path if no video file detected
    const displayImage = !hasVideo && rawMediaLink ? rawMediaLink : "https://placeholder.pics/svg/500x350/e2e8f0/94a3b8/No%20Image";

    return (
        <div className="w-full min-h-screen bg-gray-50">

            {/* HERO SECTION */}
            <div className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-12 px-4 md:px-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="bg-white/20 inline-block px-4 py-2 rounded-full text-sm mb-4">
                            Live & Recording Courses
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
                            {course?.title}
                        </h1>

                        {/* STATS */}
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="bg-white/10 px-4 py-3 rounded-xl flex items-center gap-2">
                                <User size={18} />
                                <span>Expert Trainer</span>
                            </div>

                            <div className="bg-white/10 px-4 py-3 rounded-xl flex items-center gap-2">
                                <Star size={18} />
                                <span>4.9 Rating</span>
                            </div>

                          
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
                                Enroll Now
                            </button>

                            <a
                                href="https://wa.me/923000372774"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition shadow-lg"
                            >
                                <MessageCircle size={20} />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE/VIDEO PREVIEW */}
                    <div className="relative flex justify-center group w-full">
                        {isDirectVideo ? (
                            <div className="w-full max-w-[500px] h-[220px] sm:h-[300px] md:h-[350px] relative rounded-3xl shadow-2xl overflow-hidden">
                                <video
                                    className="w-full h-full object-cover"
                                    src={rawMediaLink}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                />
                            </div>
                        ) : isYouTube ? (
                            <div className="relative w-full max-w-[500px] rounded-3xl shadow-2xl overflow-hidden h-[220px] sm:h-[300px] md:h-[350px]">
                                <img
                                    src={`https://img.youtube.com/vi/${getYoutubeId(rawMediaLink)}/hqdefault.jpg`}
                                    alt="course preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <img
                                src={displayImage}
                                alt="course preview"
                                className="w-full max-w-[500px] rounded-3xl shadow-2xl object-cover h-[220px] sm:h-[300px] md:h-[350px]"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placeholder.pics/svg/500x350/e2e8f0/94a3b8/Invalid%20Image";
                                }}
                            />
                        )}

                        {/* PLAY BUTTON OVERLAY */}
                        {hasVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => {
                                        setSelectedVideo(rawMediaLink);
                                        setIsVideoOpen(true);
                                    }}
                                    className="bg-white p-4 rounded-full shadow-2xl transform transition group-hover:scale-110 duration-200"
                                    aria-label="Play Course Video Preview"
                                >
                                    <PlayCircle className="text-red-600" size={40} />
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-3 gap-8">

                {/* LEFT SIDE (DETAILS, CONTENT & FAQS) */}
                <div className="lg:col-span-2">

                    {/* ABOUT COURSE */}
                    <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-5 text-gray-800">
                            About This Course
                        </h2>
                        <p className="text-gray-600 leading-8">
                            {course?.description || course?.discruption} 
                        </p>
                    </div>

                    {/* COURSE CONTENT */}
                    <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            Course Content
                        </h2> 

                        {course?.whatYouWillLearn && course.whatYouWillLearn.length > 0 ? (
                            course.whatYouWillLearn.map((lesson, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b last:border-0 py-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="text-red-500 flex-shrink-0" size={20} />
                                        <p className="font-medium text-gray-700">{lesson}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                                        Day {index + 1}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No course content available</p>
                        )}
                    </div>

                    {/* TRAINER SECTION */}
                    <div className="bg-white rounded-2xl shadow-md p-5 md:p-7 mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                            Trainer
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col items-center min-w-[180px]">
                                <img
                                    src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
                                    alt="Yasin Sakir"
                                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-[3px] border-red-500 shadow-md"
                                Mention standard profile assets unchanged />
                                <h3 className="mt-3 text-xl font-bold text-red-600 text-center">
                                    Yasin Sakir
                                </h3>
                                <p className="text-gray-500 text-sm text-center">
                                    CEO of LifeChangers Club
                                </p>
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap gap-4 md:gap-6 text-slate-800 font-semibold text-sm md:text-base mb-5">
                                    <div className="flex items-center gap-2">⭐ Coach/Trainer</div>
                                    <div className="flex items-center gap-2">👥 450,123 Trainees</div>
                                    <div className="flex items-center gap-2">📚 150+ Courses</div>
                                </div>

                                <p className="text-gray-700 text-sm md:text-base leading-7">
                                    Yasin Shakir is a seasoned business coach, career development
                                    trainer, mental wellness partner & relationship consultant with
                                    over 10 years of experience. He has helped thousands of students,
                                    entrepreneurs and business owners achieve personal and professional
                                    growth through practical training programs and mentorship.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ SECTION */}
                    <div className="bg-white rounded-3xl shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition">
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
                                    >
                                        <span>{faq.question}</span>
                                        {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>

                                    {openFAQ === index && (
                                        <div className="px-5 pb-5 text-gray-600 leading-7 bg-white">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE STICKY PURCHASING CARD */}
                <div>
                    <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-5 border border-gray-100">
                        <div
                            className="relative mb-5 cursor-pointer group"
                            onClick={() => {
                                if (hasVideo) {
                                    setSelectedVideo(rawMediaLink);
                                    setIsVideoOpen(true);
                                }
                            }}
                        >
                            {isDirectVideo ? (
                                <video
                                    className="w-full h-52 object-cover rounded-2xl"
                                    src={rawMediaLink}
                                    muted
                                />
                            ) : isYouTube ? (
                                <img
                                    src={`https://img.youtube.com/vi/${getYoutubeId(rawMediaLink)}/hqdefault.jpg`}
                                    alt="course visual"
                                    className="w-full h-52 object-cover rounded-2xl"
                                />
                            ) : (
                                <img
                                    src={displayImage}
                                    alt="course visual"
                                    className="w-full h-52 object-cover rounded-2xl"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placeholder.pics/svg/500x350/e2e8f0/94a3b8/Invalid%20Image";
                                    }}
                                />
                            )}

                            {/* PLAY ICON OVERLAY */}
                            {hasVideo && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl group-hover:bg-black/40 transition">
                                    <PlayCircle size={50} className="text-white drop-shadow-md" />
                                </div>
                            )}
                        </div>

                        {/* PRICE SECTION */}
                        <div className="mb-5 space-y-3">
                            <div className="flex items-center justify-between bg-red-50 p-3 rounded-xl border border-red-200">
                                <span className="text-gray-600 font-medium">Live Class</span>
                                <span className="text-red-600 font-bold">PKR {course?.price}</span>
                            </div>

                            <div className="flex items-center justify-between bg-green-50 p-3 rounded-xl border border-green-200">
                                <span className="text-gray-600 font-medium">Recorded Course</span>
                                <span className="text-green-600 font-bold">PKR {course?.discount}</span>
                            </div>
                        </div>

                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition mb-4 shadow-md">
                            Enroll Now
                        </button>

                        <a
                            href="https://wa.me/923009408054"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition shadow-md"
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </a>

                        {/* ADDITIONAL FEATURES */}
                        <div className="mt-8 space-y-4 text-sm">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Trainer</span>
                                <span className="font-semibold text-gray-800">Yasin Sakir</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Lifetime access</span>
                                <span className="font-semibold text-gray-800">Full</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Q/A Facility</span>
                                <span className="font-semibold text-gray-800">7 Days</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-gray-500">Certificate</span>
                                <span className="font-semibold text-gray-800 flex items-center gap-1">
                                    <Award size={16} className="text-amber-500" />
                                    Yes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* MODAL PREVIEW VIDEO */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4 transition-opacity">
                    <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl">
                        
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center z-50 text-sm transition font-bold"
                        >
                            ✕
                        </button>

                        {/* RENDERING ENGINE */}
                        {isYouTubeUrl(selectedVideo) ? (
                            <iframe
                                className="w-full aspect-video"
                                src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo)}?autoplay=1`}
                                title="Course Preview Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video
                                className="w-full aspect-video"
                                src={selectedVideo}
                                autoPlay
                                controls
                                controlsList="nodownload"
                                disablePictureInPicture
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CourseDetailPage;