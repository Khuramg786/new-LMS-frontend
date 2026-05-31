import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, User, Clock } from "lucide-react";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `https://lms-backend-umup.onrender.com/blog/${id}`
      );
      const data = await res.json();
      setBlog(data.blog);
    };

    fetchBlog();
  }, [id]);

  if (!blog)
    return <div className="p-10 text-center">Loading blog...</div>;

  // SIMPLE READING TIME CALCULATION
  const wordCount = blog.descruption ? blog.descruption.split(" ").length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  const seconds = wordCount % 60;

  return (
    <div className="w-full bg-[#f9fafb] min-h-screen">

      {/* HERO SECTION */}
      <div className="relative w-full h-[320px] md:h-[450px] overflow-hidden">
        <img
          src={blog.imageUrl}
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end px-6 md:px-20 pb-10">

          <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight max-w-4xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mt-3 text-gray-200 text-sm">

            <span className="flex items-center gap-1">
              <User size={14} /> {blog.createdby}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={14} /> {new Date(blog.createdAt).toLocaleDateString()}
            </span>

            {/* READING TIME */}
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {minutes} min {seconds} sec read
            </span>

          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col lg:flex-row gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:w-[70%]">

          {/* BLOG CONTENT */}
         <div className="bg-white p-6 rounded-xl shadow-sm ">

            <p className="text-lg text-gray-600 leading-7 mb-6">
              {blog.title} is a modern guide designed to help you understand the concept in a simple and practical way.
            </p>
  <img
              src={blog.imageUrl}
              className="w-full rounded-xl mt-8 shadow"
            />
            <div
              className="prose max-w-none text-gray-800 leading-7"
              dangerouslySetInnerHTML={{ __html: blog.descruption }}
            />

          
          </div>
        </div>

      {/* RIGHT SIDEBAR (FULL RIGHT FIXED STYLE) */}
<div className="lg:w-[30%] space-y-5 sticky top-5">

  {/* AUTHOR / INSTRUCTOR CARD */}
  <div className="w-full">
    <div className="bg-white shadow-md border rounded-2xl p-5 flex items-center gap-4 w-full">

      {/* IMAGE */}
      <img
        src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
        className="w-16 h-16 rounded-full object-cover"
        alt="author"
      />

      {/* INFO */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          {blog.createdby}
        </h2>

        <p className="text-red-500 text-sm font-medium">
          Content Creator
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Passionate writer sharing knowledge and insights.
        </p>
      </div>

    </div>
  </div>

  {/* BLOG INFO CARD */}
  <div className="w-full bg-white p-5 rounded-xl shadow border">

    <div className="space-y-3 text-sm">

      <div>
        <p className="text-gray-500">Category</p>
        <p className="font-semibold">{blog.categary}</p>
      </div>

      <div>
        <p className="text-gray-500">Reading Time</p>
        <p className="font-semibold">
          {minutes} min {seconds} sec
        </p>
      </div>

    </div>
  </div>

  {/* SECOND CARD */}
  <div className="w-full bg-white p-5 rounded-xl shadow border">

    <h3 className="text-lg font-bold mb-3">
      About Blog
    </h3>

    <p className="text-sm text-gray-600 leading-6">
      This blog is created to provide high-quality educational content for students and developers.
      You will learn real-world concepts in simple language.
    </p>

  </div>

</div>

      </div>
  
    </div>
    
  );
}

export default BlogDetail;