import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, User, Clock } from "lucide-react";

function BlogDetail() {
  const params = useParams();
  const blogIdentifier = params.slug || params.id; 

  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [debugError, setDebugError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setDebugError("");
        console.log("Fetching details for identifier:", blogIdentifier);
        
        // Step 1: Pehle direct slug endpoint ko try karein
        const res = await fetch(`http://localhost:5000/blog/slug/${blogIdentifier}`);
        const data = await res.json();
        
        if (data && (data.success || data.blog) && data.blog) {
          setBlog(data.blog);
          return; // Data mil gaya toh yahin stop kar dein
        }

        // Step 2: FALLBACK BACKUP LOGIC (Agar backend slug route complete nahi hai)
        // Hum pure blogs fetch karke client-side par generate hone wale slug se match karenge
        console.log("Slug endpoint did not return blog. Trying fallback matching system...");
        const allBlogsRes = await fetch("http://localhost:5000/blog/getblogs");
        const allBlogsData = await allBlogsRes.json();
        
        if (allBlogsData && allBlogsData.blogs) {
          const matchedBlog = allBlogsData.blogs.find((b) => {
            // Blogs.jsx wali exact slug generation string lagayein
            const generatedSlug = b.slug || b.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || b._id || b.id;
            return generatedSlug === blogIdentifier || b._id === blogIdentifier || b.id === blogIdentifier;
          });

          if (matchedBlog) {
            setBlog(matchedBlog);
            return;
          }
        }
        
        setDebugError(data.message || "Blog not found in database matching this slug layout.");
      } catch (error) {
        setDebugError(error.message || "Network error tracking API backend.");
        console.error("Error fetching detail layout data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (blogIdentifier) {
      fetchBlog();
    } else {
      setIsLoading(false);
      setDebugError("No slug or ID detected in the browser URL.");
    }
  }, [blogIdentifier]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 bg-red-500 rounded-full animate-ping opacity-75"></div>
        <p className="text-gray-500 font-medium text-sm tracking-wider animate-pulse">
          Life Changers Club Pakistan...
        </p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="w-full min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-md">
          <p className="text-red-500 text-lg font-medium mb-2">Blog Not Found</p>
          <p className="text-sm text-gray-500 mb-4">
            URL Identifier parsed: <strong className="text-black">"{blogIdentifier}"</strong>
          </p>
          {debugError && (
            <div className="bg-red-50 p-3 rounded-lg text-xs text-red-600 font-mono text-left mb-4">
              <strong>Error Trace:</strong> {debugError}
            </div>
          )}
          <p className="text-xs text-gray-400">
            Fallback algorithm executed but database record mismatch found.
          </p>
        </div>
      </div>
    );
  }

  // READING TIME CALCULATION FROM RICH TEXT
  const plainText = blog.descruption ? blog.descruption.replace(/<[^>]*>/g, "") : "";
  const wordCount = plainText ? plainText.trim().split(/\s+/).filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  const seconds = wordCount % 60;

  return (
    <div className="w-full bg-[#f9fafb] min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-[320px] md:h-[450px] overflow-hidden">
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end px-6 md:px-20 pb-10">
          <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight max-w-4xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mt-3 text-gray-200 text-sm">
            <span className="flex items-center gap-1">
              <User size={14} /> {blog.createdby || "Yasin Sakir"}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={14} />{" "}
              {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric"
              }) : "Recent"}
            </span>

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
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-7 mb-6 font-medium">
              {blog.title} is a modern guide designed to help you understand the concept in a simple and practical way.
            </p>
            
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt="Body structural attachment"
                className="w-full rounded-xl my-6 shadow-sm object-cover max-h-[420px]"
              />
            )}
            
            {/* DYNAMIC RICH TEXT RENDERER */}
            <div
              className="prose max-w-none text-gray-800 leading-8 mt-6 space-y-4"
              dangerouslySetInnerHTML={{ __html: blog.descruption || blog.desc }}
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:w-[30%] space-y-5 lg:sticky lg:top-5 h-fit">
          {/* AUTHOR CARD */}
          <div className="w-full">
            <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-5 flex items-center gap-4 w-full">
              <img
                src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
                className="w-16 h-16 rounded-full object-cover border border-gray-500/10"
                alt="author asset"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {blog.createdby || "Yasin Sakir"}
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

          {/* SPECIFICATION METADATA CARD */}
          <div className="w-full bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 font-medium">Category</p>
                <p className="font-semibold text-gray-800 text-base mt-0.5">{blog.categary || "General"}</p>
              </div>
              <hr className="border-gray-100" />
              <div>
                <p className="text-gray-400 font-medium">Reading Speed</p>
                <p className="font-semibold text-gray-800 text-base mt-0.5">
                  {minutes} min {seconds} sec
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT SUMMARY INFO */}
          <div className="w-full bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-3 text-gray-900">
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