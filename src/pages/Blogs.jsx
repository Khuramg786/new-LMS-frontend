import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
const blogs = [
  {
    id: 1,
    title: "How to Become a MERN Stack Developer",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "16 May 2026",
    desc: "Learn full MERN stack development roadmap...",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
  },
  {
    id: 2,
    title: "Top 10 UI/UX Design Tips",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    date: "14 May 2026",
    desc: "Improve your UI/UX design skills with these tips...",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
  },
  {
    id: 3,
    title: "SEO Complete Guide 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    date: "10 May 2026",
    desc: "Learn SEO ranking strategy step by step...",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "08 May 2026",
    desc: "Marketing roadmap for beginners...",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406g",
  },
  {
    id: 5,
    title: "Freelancing Complete Guide",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "05 May 2026",
    desc: "Earn money online with freelancing skills...",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
  },
];

function Blogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 3;
  const authorName = "Yasin Sakir";
  const authorImg = "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406";
  const totalPages = Math.ceil(blogs.length / perPage);

  const paginatedBlogs = blogs.slice(
    (page - 1) * perPage,
    page * perPage
  );
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://lms-backend-umup.onrender.com/blog/getblogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">

      {/* HERO */}
      <div className="w-full py-14 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">

        {/* soft glowing background circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">

          {/* LEFT SIDE TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <span className="inline-block px-5 py-2 text-xs tracking-wide bg-white/10 border border-white/20 text-white rounded-full mb-5 backdrop-blur-md">
               Latest Articles & Insights
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Explore Our <span className="text-red-400">Blog</span> Stories
            </h1>

            <p className="text-gray-300 mt-5 text-base md:text-lg">
              Learn, grow, and stay updated with the latest tutorials, guides, and expert tips from our team.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <span className="text-gray-200">Total Blogs:</span>
              <span className="font-bold text-red-400 text-lg">{blogs.length}</span>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE CIRCLES */}
          <div className="w-full md:w-1/2 flex justify-center">

            <div className="grid grid-cols-3 gap-5">

              {blogs.slice(0, 9).map((blog, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-110 hover:border-red-400 transition-all duration-300"
                >
                  <img
                    src={blog.imageUrl}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />

                  {/* glow overlay */}
                  <div className="absolute inset-0 bg-white/5 hover:bg-transparent transition"></div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* BLOG LIST */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {paginatedBlogs.map((blog) => (
            <div
              key={blog.id}
             onClick={() => navigate(`/blog/${blog._id}`)}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >

              {/* IMAGE WRAPPER */}
              <div className="relative">

                <img
                  src={blog.imageUrl}
                  className="w-full h-[200px] object-cover"
                />

                {/* AUTHOR BADGE */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 px-2 py-1 rounded-full shadow">

                  <img
                    src={authorImg}
                    className="w-8 h-8 rounded-full object-cover border"
                  />

                  <span className="text-xs font-semibold text-gray-700">
                    {authorName}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-4">

       <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">

  <Calendar size={14} />

  <span>
    {new Date(blog.createdAt).toLocaleDateString()}
  </span>

</div>

                <h2 className="font-bold text-lg mt-1 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {blog.desc}
                </p>

                <button className="text-red-500 text-sm mt-3 font-semibold">
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-10">

          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded ${page === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages))
            }
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Blogs;