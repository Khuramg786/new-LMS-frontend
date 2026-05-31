import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

function CategoryCourses() {
  const { category } = useParams();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      `https://lms-backend-umup.onrender.com/course/coursebycategory/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
      })
      .catch((err) => console.log(err));
  }, [category]);

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
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-full max-w-[280px] bg-white rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-[160px] object-cover"
                  />

                  {/* TRAINER */}
                  <div className="absolute top-2 left-2 bg-black/70 rounded-full px-2 py-1 flex items-center gap-2">
                    <img
                      src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
                      alt="trainer"
                      className="w-6 h-6 rounded-full border border-white"
                    />

                    <span className="text-white text-[10px] font-medium">
                      Yasin Sakir
                    </span>
                  </div>

                  {/* TRAINEES */}
                  <div className="absolute bottom-2 left-2 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold shadow">
                    👨‍🎓 {course.enrolled || 120} Trainees
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-3">
                  {/* RATING */}
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star
                      size={14}
                      fill="currentColor"
                    />
                    <span className="font-semibold text-sm">
                      4.5
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="font-bold text-[16px] leading-6 mt-2 min-h-[48px] line-clamp-2 text-gray-800">
                    {course.title}
                  </h2>

                  <hr className="my-3" />

                  {/* PRICE */}
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

                  {/* BUTTON */}
                  <Link to={`/course/${course._id}`}>
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryCourses;