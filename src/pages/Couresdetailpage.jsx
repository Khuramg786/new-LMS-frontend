import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Clock,
    Star,
    PlayCircle,
    BookOpen,
    CheckCircle,
    Award,
    User,
    MessageCircle,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

function Couresdetailpage() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedCourses, setRelatedCourses] = useState([]);
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch(`https://lms-backend-umup.onrender.com/course/${id}`);
                const data = await res.json();

                if (data.success) {
                    setCourse(data.course);
                }

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);
    useEffect(() => {
    const fetchRelatedCourses = async () => {
        try {
            const res = await fetch("https://lms-backend-umup.onrender.com/course");
            const data = await res.json();

            if (data.success) {
                const filtered = data.courses.filter(
                    (c) => c._id !== id
                );

                setRelatedCourses(filtered);
            }
        } catch (err) {
            console.log(err);
        }
    };

    fetchRelatedCourses();
}, [id]);
    const faqs = [
        {
            question: "Is that an online or physical course?",
            answer:
                "Yes, it's online/recorded courses.",
        },
        {
            question: "Can I ask questions if I want during the session?",
            answer:
                "Yes, you can ask questions to take more benefits from our training.",
        },
        {
            question: "Is the certificate provided?",
            answer:
                "Yes, the certificate is provided on the completion.",
        },
        {
            question: "Can I get membership for more discounts?",
            answer:
                "Yes, we offer special discounts on yearly membership plan.",
        },
        {
            question: "How long will I have access?",
            answer:
                "You will get full-time access to all course materials and updates.",
        },
    ];

    return (
        <div className="w-full min-h-screen bg-gray-50">

            {/* HERO SECTION */}
            <div className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-12 px-4 md:px-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="bg-white/20 inline-block px-4 py-2 rounded-full text-sm mb-4">
                            Live & Recoding Courses
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

                            <div className="bg-white/10 px-4 py-3 rounded-xl flex items-center gap-2">
                                <Clock size={18} />
                                <span>12 Hours</span>
                            </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4">

                            <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                                Enroll Now
                            </button>

                            <a
                                href="https://wa.me/923000372774"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
                            >
                                <MessageCircle size={20} />
                                WhatsApp
                            </a>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">

                        <img
                            src={course?.imageUrl}
                            alt="course"
                            className="w-full max-w-[500px] rounded-3xl shadow-2xl object-cover h-[220px] sm:h-[300px] md:h-[350px]"
                        />

                        {/* PLAY BUTTON */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="bg-white p-4 rounded-full shadow-xl hover:scale-110 transition"
                            >
                                <PlayCircle className="text-red-600" size={40} />
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-3 gap-8">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2">

                    {/* ABOUT COURSE */}
                    <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

                        <h2 className="text-2xl font-bold mb-5">
                            About This Course
                        </h2>

                        <p className="text-gray-600 leading-8">
                            {course?.discruption}
                        </p>

                    </div>

                    {/* WHAT YOU WILL LEARN */}
                    {/* <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

                        <h2 className="text-2xl font-bold mb-6">
                            What You Will Learn
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">

                           {course?.whatYouWillLearn?.map((item, index) => (
    <div
        key={index}
        className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"
    >
        <CheckCircle className="text-green-500" size={20} />
        <span className="text-gray-700">{item}</span>
    </div>
))}

                        </div>

                    </div> */}

                    {/* COURSE CONTENT */}
                    <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

                        <h2 className="text-2xl font-bold mb-6">
                            Course Content
                        </h2>

                        {course?.whatYouWillLearn?.length > 0 ? (
                            course.whatYouWillLearn.map((lesson, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b py-4"
                                >

                                    {/* LEFT SIDE */}
                                    <div className="flex items-center gap-3">
                                        <BookOpen className="text-red-500" size={20} />

                                        <p className="font-medium">
                                            {lesson}
                                        </p>
                                    </div>

                                    {/* RIGHT SIDE */}
                                    <span className="text-xs text-gray-400 whitespace-nowrap">
                                        Lesson {index + 1}
                                    </span>

                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">
                                No course content available
                            </p>
                        )}

                    </div>
{/* TRAINER SECTION */}
<div className="bg-white rounded-2xl shadow-md p-5 md:p-7 mb-8">

  <h2 className="text-2xl md:text-3xl font-bold text-[#081B44] mb-6">
    Instructor
  </h2>

  <div className="flex flex-col lg:flex-row gap-6">

    {/* LEFT SIDE */}
    <div className="flex flex-col items-center min-w-[180px]">

      <img
        src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
        alt="Yasin Sakir"
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-[3px] border-red-500 shadow-md"
      />

      <h3 className="mt-3 text-xl font-bold text-red-600 text-center">
        Yasin Sakir
      </h3>

      <p className="text-gray-500 text-sm text-center">
        CEO of LifeChangers Club
      </p>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1">

      {/* STATS */}
      <div className="flex flex-wrap gap-4 md:gap-6 text-[#081B44] font-semibold text-sm md:text-base mb-5">

        <div className="flex items-center gap-2">
          ⭐ Coach/Trainer
        </div>

        <div className="flex items-center gap-2">
          👥 450,123 Trainees
        </div>

        <div className="flex items-center gap-2">
          📚 150+ Courses
        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-sm md:text-lg leading-7">
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

                        <h2 className="text-2xl font-bold mb-6">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">

                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border rounded-2xl overflow-hidden"
                                >

                                    <button
                                        onClick={() =>
                                            setOpenFAQ(openFAQ === index ? null : index)
                                        }
                                        className="w-full flex items-center justify-between p-5 text-left font-semibold"
                                    >
                                        {faq.question}

                                        {openFAQ === index ? (
                                            <ChevronUp />
                                        ) : (
                                            <ChevronDown />
                                        )}
                                    </button>

                                    {openFAQ === index && (
                                        <div className="px-5 pb-5 text-gray-600 leading-7">
                                            {faq.answer}
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE CARD */}
                <div>

                    <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-5">

                        <div className="relative mb-5 cursor-pointer" onClick={() => setIsVideoOpen(true)}>

                            <img
                                src={course?.imageUrl}
                                alt="course"
                                className="w-full h-52 object-cover rounded-2xl"
                            />

                            {/* PLAY ICON */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
                                <PlayCircle size={50} className="text-white" />
                            </div>

                        </div>

                        {/* PRICE SECTION */}
                        <div className="mb-5 space-y-3">

                            {/* LIVE PRICE */}
                            <div className="flex items-center justify-between bg-red-50 p-3 rounded-xl border border-red-200">
                                <span className="text-gray-600 font-medium">Live Class</span>
                                <span className="text-red-600 font-bold">   PKR-{course?.price}</span>
                            </div>

                            {/* RECORDED PRICE */}
                            <div className="flex items-center justify-between bg-green-50 p-3 rounded-xl border border-green-200">
                                <span className="text-gray-600 font-medium">Recorded Course</span>
                                <span className="text-green-600 font-bold">    PKR-{course?.discount}</span>
                            </div>



                        </div>

                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition mb-4">
                            Enroll Now
                        </button>

                        <a
                            href="https://wa.me/923009408054"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                        >
                            <MessageCircle size={20} />
                            Chat Free on WhatsApp
                        </a>

                        {/* FEATURES */}
                        <div className="mt-8 space-y-4">

                            <div className="flex justify-between">
                                <span className="text-gray-500">Instructor</span>
                                <span className="font-semibold">Yasin Sakir</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Lifetime access</span>
                                <span className="font-semibold">Full</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Q/A Facility</span>
                                <span className="font-semibold">7 Days</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Certificate</span>
                                <span className="font-semibold flex items-center gap-1">
                                    <Award size={16} />
                                    Yes
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* VIDEO MODAL */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

                    <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-3 right-3 text-white bg-red-600 rounded-full px-3 py-1 z-50"
                        >
                            ✕
                        </button>

                        {/* YOUTUBE VIDEO */}
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/od_9Wyw_QUc"
                            title="Course Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />

                    </div>

                </div>
            )}
        </div>
    );
}

export default Couresdetailpage;