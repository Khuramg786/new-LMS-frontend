import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useParams } from "react-router-dom";
function UpcomingCourseDetailPage() {

  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);


  const faqs = [
    {
      question: "When will this course start?",
      answer: "This course will start on the mentioned date. You can reserve your seat now.",
    },
    {
      question: "Is this live or recorded?",
      answer: "This is a fully live interactive course with recordings available after Session.",
    },
    {
      question: "Will I get certificate?",
      answer: "Yes, you will receive a professional certificate after completion.",
    },
    {
      question: "Can I ask questions during Session?",
      answer: "Yes, live Q&A sessions are included.",
    },
  ];

  const { id } = useParams();
  console.log("Course ID:", id);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourse();
  }, []);

  const getCourse = async () => {
    try {
      console.log(id);

      const res = await axios.get(
        `https://new.lifechangersclub.pk/upcomings/slug/${id}`
      );

      console.log("API Response:", res.data);

      setCourse(res.data.upcoming);
    } catch (error) {
      console.log(error);
    }
  };

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-extrabold">
              Upcoming Live Course
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 mb-5">
              {course?.title}
            </h1>


            <div className="flex flex-wrap gap-5 mt-6 items-center">
              <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                <User size={18} />
                Expert Trainer
              </div>

              <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                <Clock size={18} />
                {course?.duration} Days
              </div>

              <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                <Star size={18} />
                4.9 Rating
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {course?.videoUrl ? (
              <video
                className="w-full rounded-3xl h-[350px] object-cover"
                muted
                autoPlay
                loop
                playsInline
                src={course.videoUrl}
              />
            ) : (
              <img
                src={course?.imageUrl || "/placeholder.jpg"}
                className="w-full rounded-3xl h-[350px] object-cover"
                alt="course"
              />
            )}

            {/* PLAY BUTTON */}
            <button
              onClick={() => {
                setSelectedVideo(course?.videoUrl);
                setIsVideoOpen(true);
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-3xl"
            >
              <PlayCircle size={70} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2">

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-3xl shadow mb-6">
            <h2 className="text-xl font-bold mb-3">About Course</h2>
            <p className="text-gray-600 leading-7">
              {course.discruption}
            </p>
          </div>

          {/* DETAILS */}
          <div className="bg-white p-6 rounded-3xl shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Schedule Details</h2>

            <div className="space-y-3">
              <div className="flex justify-between bg-gray-50 p-3 rounded-xl">
                <span>Start Date</span>
                <b>{course.recordingDate}</b>
              </div>

              <div className="flex justify-between bg-gray-50 p-3 rounded-xl">
                <span>Time</span>
                <b>
                  {new Date(`1970-01-01T${course.time}`).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </b>
              </div>

              <div className="flex justify-between bg-gray-50 p-3 rounded-xl">
                <span>Duration</span>
                <b>{course?.duration} Days</b>
              </div>

              <div className="flex justify-between bg-gray-50 p-3 rounded-xl">
                <span>Remaining</span>
                <b className="text-red-600">9 Days Left</b>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow mb-6">
            <h2 className="text-xl font-bold mb-4">
              What You'll Learn
            </h2>

            <div className="space-y-3">
              {course.whatYouWillLearn?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-green-500"
                    size={18}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white p-6 rounded-3xl shadow">

            <h2 className="text-xl font-bold mb-4">FAQs</h2>

            {faqs.map((faq, i) => (
              <div key={i} className="border-b py-3">

                <button
                  className="flex justify-between w-full font-semibold"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  {faq.question}
                  {openFAQ === i ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openFAQ === i && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-white p-4 rounded-3xl shadow-xl sticky top-5 self-start">

          <div className="relative mb-5 cursor-pointer" onClick={() => {
            setSelectedVideo(course?.videoUrl);
            setIsVideoOpen(true);
          }}>

            {course?.videoUrl ? (
              <video
                className="w-full h-50 object-cover rounded-2xl"
                src={course.videoUrl}
                muted
              />
            ) : (
              <img
                src={course?.imageUrl || "/placeholder.jpg"}
                className="w-full h-50 object-cover rounded-2xl"
                alt="course"
              />
            )}

            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
              <PlayCircle size={50} className="text-white" />
            </div>
          </div>



          <p className="text-gray-500 mb-5">
            Upcoming Professional Batch
          </p>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-2xl mb-5 text-center">
            <p className="font-bold text-yellow-800 text-sm">
              🔥 Early Bird Offer
            </p>
            <p className="text-xs text-gray-700">
              Free WhatsApp Support Included
            </p>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl mb-3">
            Reserve Seat
          </button>

          <a
            href="https://wa.me/923000372774"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex justify-center items-center gap-2"
          >
            <MessageCircle size={18} />
            Free WhatsApp Chat
          </a>
          {/* COURSE INFO POINTS */}
          <div className="mt-3 bg-gray-50 p-4 rounded-2xl shadow-sm space-y-2">

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600 font-medium">Instructor</span>
              <span className="font-semibold text-gray-900">Yasin Sakir</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600 font-medium">
                Enrolled
              </span>
              <span className="font-semibold text-gray-900">
                {course?.studentenroll}
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600 font-medium">Duration</span>
              <span className="font-semibold text-gray-900">  {course?.duration} Days</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              Lifetime access
              <span className="font-semibold text-gray-900">Full</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Certificate</span>
              <span className="font-semibold text-green-600">Yes</span>
            </div>

          </div>

        </div>

      </div>
      {/* INSTRUCTOR SECTION */}
      <div className="w-full px-4 md:px-8 pb-10">
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300 max-w-4xl ml-20 md:ml-24">

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Instructor
          </h2>

          {/* Name + Role */}
          <div className="mb-5">
            <h3 className="text-xl font-bold text-red-600 underline">
              Yasin Shakir
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              CEO of LifeChangers Club
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* IMAGE */}
            <div className="flex-shrink-0">
              <img
                src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
                alt="Yasin Shakir"
                className="w-28 h-28 rounded-full border-4 border-red-500 object-cover shadow-sm"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium text-black">
                <div className="bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  Coach / Trainer
                </div>
                <div className="bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  85,200 Reviews
                </div>
                <div className="bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  450,123 Trainees
                </div>
                <div className="bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  150+ Courses
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base leading-7">
                Yasin Shakir is a seasoned business coach, career development trainer, mental wellness partner & relationship consultant with over 10 years of experience.
              </p>

            </div>
          </div>

        </div>
      </div>
      {/* VIDEO MODAL */}
    {/* VIDEO MODAL */}
{isVideoOpen && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onContextMenu={(e) => e.preventDefault()}   // disable right click
  >
    <div className="w-full max-w-4xl relative bg-black rounded-2xl overflow-hidden">

      {/* CLOSE */}
      <button
        onClick={() => setIsVideoOpen(false)}
        className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full z-10"
      >
        ✕
      </button>

      {/* VIDEO PLAYER */}
      {selectedVideo && (
        <video
          className="w-full aspect-video"
          src={selectedVideo}
          autoPlay
          controls

          // 🔥 IMPORTANT: remove download UI
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture

          // 🔥 block right click on video itself
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

    </div>
  </div>
)}

    </div>
  );
}

export default UpcomingCourseDetailPage;