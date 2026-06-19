import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

function CategoryCourses() {
  const { category } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const slug = decodeURIComponent(category);
    console.log("URL SLUG:", slug);

    fetch(`https://new.lifechangersclub.pk/course/coursebycategory/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
        setCourses(data.courses || []);
      });
  }, [category]);

  // ================= HELPER FUNCTION TO SHOW ONLY THUMBNAIL/IMAGE =================
  const renderCardMedia = (url) => {
    // [FIXED]: Height ko 180px se badha kar 220px kar diya hai
    if (!url) {
      return (
        <div className="w-full h-[220px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          No Media Available
        </div>
      );
    }

    const cleanUrl = url.trim().toLowerCase();

    // 1. YouTube Detection - Extract ID and show official static thumbnail
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
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        return (
          // [FIXED]: Play button ka dark overlay completely hata diya hai
          <div className="relative w-full h-[220px] bg-black flex items-center justify-center overflow-hidden group">
            <img
              src={thumbnailUrl}
              alt="YouTube Thumbnail"
              className="w-full h-full object-contain opacity-100 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        );
      }
    }

    // 2. Direct Video - Show video frame without play button
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
        <div className="relative w-full h-[220px] bg-black flex items-center justify-center overflow-hidden">
          <video
            className="w-full h-full object-contain"
            muted
            preload="metadata"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
      );
    }

    // 3. Fallback: Standard Image
    return (
      <div className="w-full h-[220px] bg-black flex items-center justify-center overflow-hidden">
        <img
          src={url}
          alt="Course Thumbnail"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentNode.innerHTML = `
              <div class="w-full h-[220px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                Invalid Link
              </div>
            `;
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* HEADER */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 font-semibold text-sm"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <h1 className="text-lg md:text-2xl font-bold text-center">
            {decodeURIComponent(category)}
          </h1>

          <div className="text-sm font-semibold text-gray-600">
            {courses.length} Results
          </div>
        </div>
      </div>

      {/* COURSES */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {courses.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No Courses Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
            {courses.map((course) => {
              const mediaLink = course.mediaUrl || course.videoUrl || course.imageUrl || course.image;

              return (
                // [FIXED]: Max width ko 280px se thora badha kar 300px kiya taaki image khul kar show ho
                <div
                  key={course._id}
                  className="w-full max-w-[300px] bg-white rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition duration-300"
                >
                  {/* MEDIA SECTION */}
                  <div className="relative overflow-hidden h-[220px]">
                    {renderCardMedia(mediaLink)}

                    <div className="absolute top-2 left-2 bg-black/70 rounded-full px-2 py-1 flex items-center gap-2 z-10">
                      <img
                        src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
                        alt="trainer"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <span className="text-white text-[10px] font-medium">
                        Yasin Sakir
                      </span>
                    </div>

                    {/* <div className="absolute bottom-2 left-2 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold shadow z-10">
                      👨‍🎓 {course.enrolled || 120} Trainees
                    </div> */}
                  </div>

                  {/* CONTENT */}
                  <div className="p-3">
                   

                    <h2 className="font-bold text-[16px] leading-6 mt-2 min-h-[48px] line-clamp-2 text-gray-800">
                      {course.title}
                    </h2>

                    <hr className="my-3" />

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs uppercase font-semibold">
                          Live
                        </span>
                        <span className="font-bold text-[17px] text-green-600">
                          Rs {course.price}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs uppercase font-semibold">
                          Recording
                        </span>
                        <span className="font-bold text-[17px] text-red-600">
                          Rs {course.discount}
                        </span>
                      </div>
                    </div>

                    {/* VIEW DETAILS BUTTON WITH PASSING COMPLETE COURSE STATE */}
                    <Link to={`/course/${course.slug}`} state={{ course }}>
                      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryCourses;