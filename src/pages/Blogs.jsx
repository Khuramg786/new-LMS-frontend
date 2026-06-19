import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

function Blogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const perPage = 6;
  const authorName = "Yasin Sakir";
  const authorImg = "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406";
  const totalPages = Math.ceil(blogs.length / perPage);

  const paginatedBlogs = blogs.slice(
    (page - 1) * perPage,
    page * perPage
  );

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://new.lifechangersclub.pk/blog/getblogs");
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">
      {/* HERO SECTION */}
      <div className="w-full py-14 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Soft glowing background circles */}
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
              {blogs && blogs.slice(0, 9).map((blog, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl hover:scale-110 hover:border-red-400 transition-all duration-300"
                >
                  <img
                    src={blog.imageUrl}
                    alt="blog thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white/5 hover:bg-transparent transition"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        {isLoading ? (
          /* ZOOM IN / ZOOM OUT LOADER */
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-16 h-16 bg-red-500 rounded-full animate-ping opacity-75"></div>
            <p className="text-gray-500 font-medium text-sm tracking-wider animate-pulse">
              Life Changers Club Pakistan...
            </p>
          </div>
        ) : blogs.length === 0 ? (
          /* NO BLOGS FOUND STATE */
          <div className="text-center py-20 text-gray-500">
            No articles available at the moment.
          </div>
        ) : (
          <>
            {/* BLOG GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedBlogs.map((blog) => (
                <div
                  key={blog.id || blog._id}
                  onClick={() => {
                    const targetSlug = blog.slug || blog.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || blog._id || blog.id;
                    navigate(`/blog/${targetSlug}`);
                  }}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* IMAGE WRAPPER */}
                    <div className="relative">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-[200px] object-cover"
                      />

                      {/* AUTHOR BADGE */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 px-2 py-1 rounded-full shadow">
                        <img
                          src={authorImg}
                          alt={authorName}
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
                          {blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })
                            : "Recent"}
                        </span>
                      </div>

                      <h2 className="font-bold text-lg mt-1 line-clamp-2 text-gray-800">
                        {blog.title}
                      </h2>

                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {blog.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button className="text-red-500 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                      Read More &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  className={`px-4 py-2 rounded font-medium text-sm transition ${page === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded text-sm font-semibold transition ${page === i + 1
                        ? "bg-red-500 text-white shadow"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  className={`px-4 py-2 rounded font-medium text-sm transition ${page === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blogs;