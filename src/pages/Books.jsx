import React, { memo } from "react";

const books = [
  {
    id: 1,
    title: "MEETHI ZINDAGI",
    image: "https://ik.imagekit.io/iaef5pysh/WhatsApp%20Image%202026-06-18%20at%209.36.02%20PM.jpeg",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    desc: `Meethi Zindagi is a symbolic name for the life full of happiness, satisfaction & achievements. This book is a practical step by step training on GOAL SETTING & GETTING DONE. The main goal of this book is to turn dreams and wishes into achieveable realistic goals. My philosophy is that when we achieve goals, it gives us inner peace & pleasure. This inner peace, pleasure, satisfaction & the sense of achievement, sweetens life as a whole. On the other hand, those who fail to materialize their dreams become distressed & live a dejected life of desperation & stress. My aim is to bring people back to reality, bringing them out of their unrealistic dream, wishes & scattered goals into structured goals & actions leading to the sweet results that can turn their lives into MEETHI ZINDAGI. Once you read the book, you will wish it to be read a decade or so early in your life. This book is alike beneficial for you and your kids.`,
    price: 1250,
    discountPrice: 940,
    discount: 25,
    comingSoon: false,
  },
  {
    id: 2,
    title: "CHARISMATIC CONVERSATION",
    image: "https://ik.imagekit.io/iaef5pysh/WhatsApp%20Image%202026-06-18%20at%209.35.42%20PM.jpeg",
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    desc: `Krishmaati Guftagoo is such a charisma training which can transform you from an ordinary speaker to a magical heart winner. I believe words are energy and we transfer energy through words. This book trains you in the mastery of thoughts & speech & actions. Once you go through this book, you will become a charismatic heart winner around the corner.`,
    price: 1250,
    discountPrice: 940,
    discount: 25,
    comingSoon: false,
    points: [
      "Speech & Communication Mastery",
      "Energy Transfer Through Words",
      "Confidence Building Tactics",
      "Winning Hearts & Minds"
    ]
  },
  {
    id: 3,
    title: "SUCCESSFUL MANAGEMENT SKILLS",
    image: "", // Empty so no image tries to load
    author: "Yasin Sakir",
    authorImg: "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    desc: `Master executive administration, operational strategies, and high-performance leadership fundamentals. This detailed upcoming blueprint is crafted specifically for emerging corporate leaders, business administrators, and scaling startup entrepreneurs looking to properly streamline team tasks, maximize workflow productivity, and effortlessly manage business milestones with absolute professional precision.`,
    price: 1250,
    discountPrice: 940,
    discount: 25,
    comingSoon: true,
    points: [
      "Strategic Business Leadership",
      "Team Workflow Optimization",
      "Productivity Funnel Mechanics",
      "Corporate Execution Models"
    ]
  },
];

const BookCard = memo(({ book, i }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        i % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE / COMING SOON CONTAINER */}
      <div className="w-full md:w-1/2 relative group overflow-hidden rounded-3xl bg-slate-900 flex items-center justify-center h-[520px] shadow-2xl border border-gray-200">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-red-400/10 blur-3xl rounded-3xl pointer-events-none"></div>

        {/* BOOK IMAGE - [RENDER ONLY IF NOT COMING SOON] */}
        {!book.comingSoon ? (
          <img
            src={book.image}
            alt={book.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain p-4 transition duration-700 group-hover:scale-105"
          />
        ) : (
          // [UPDATED]: Agar book comingSoon hai toh image bilkul render nahi hogi, sirf text center panel aayega
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-850">
            <div className="bg-black/60 border border-white/10 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl mx-4">
              <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-widest animate-pulse text-center">
                COMING SOON
              </h2>
            </div>
          </div>
        )}

        {/* AUTHOR BADGE */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full shadow-lg z-30">
          <img
            src={book.authorImg}
            alt={book.author}
            loading="lazy"
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="text-[11px] font-bold text-gray-700">
            {book.author}
          </span>
        </div>

        {/* DISCOUNT BADGE */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[11px] px-3 py-1.5 rounded-full font-bold shadow-xl z-30">
          {book.discount}% OFF
        </div>
      </div>

      {/* CONTENT PANEL */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          {book.title}
        </h2>

        <p className="text-gray-600 mt-4 leading-8 text-[16px] md:text-lg whitespace-pre-line">
          {book.desc}
        </p>

        {/* BOOK HIGHLIGHT POINTS */}
        {book.points && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            {book.points.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <span className="text-green-500 font-bold">✓</span> {point}
              </div>
            ))}
          </div>
        )}

        {/* PRICE DISPLAY */}
        <div className="mt-6 flex items-center gap-4">
          <span className="text-gray-400 line-through text-xl md:text-2xl">
            PKR {book.price}
          </span>
          <span className="text-red-600 text-3xl md:text-4xl font-black">
            PKR {book.discountPrice}
          </span>
        </div>

        {/* ACTION BUTTON */}
        <button
          disabled={book.comingSoon}
          className={`mt-8 px-8 py-3.5 rounded-2xl text-white font-bold text-base md:text-lg transition duration-300 shadow-xl w-full sm:w-auto ${
            book.comingSoon
              ? "bg-gray-400 cursor-not-allowed shadow-none"
              : "bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 active:scale-95"
          }`}
        >
          {book.comingSoon ? "Coming Soon" : "Order Now"}
        </button>
      </div>
    </div>
  );
});

function Books() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      
      {/* HERO BANNER SECTION */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#3b0764] to-[#7f1d1d] text-white min-h-[45vh] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

        {/* BACKGROUND AMBIENT GLOWS */}
        <div className="absolute w-[450px] h-[450px] bg-pink-500/25 blur-[130px] rounded-full top-[-120px] left-[-120px]"></div>
        <div className="absolute w-[450px] h-[450px] bg-orange-500/25 blur-[130px] rounded-full bottom-[-120px] right-[-120px]"></div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* LEFT DECORATIVE FLOATING COVERS */}
          <div className="hidden md:flex flex-col gap-6">
            <img
              src="https://ik.imagekit.io/iaef5pysh/WhatsApp%20Image%202026-06-18%20at%209.35.42%20PM.jpeg"
              alt="book"
              className="w-36 rounded-2xl shadow-2xl rotate-[-8deg] hover:scale-105 transition duration-500 h-48 object-cover"
            />
            <img
              src="https://ik.imagekit.io/iaef5pysh/WhatsApp%20Image%202026-06-18%20at%209.35.42%20PM.jpeg"
              alt="book"
              className="w-28 rounded-2xl shadow-2xl rotate-[8deg] ml-10 hover:scale-105 transition duration-500 h-36 object-cover"
            />
          </div>

          {/* CENTRE BRANDING ANNOUNCEMENT */}
          <div className="text-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Premium Books Library
            </h1>
            <p className="text-gray-200 mt-4 text-sm md:text-lg leading-7">
             Learning business skills through our step by step practical training books
            </p>
          </div>

          {/* RIGHT DECORATIVE FLOATING COVERS */}
          <div className="hidden md:flex flex-col gap-6">
            <img
              src="https://ik.imagekit.io/iaef5pysh/WhatsApp%20Image%202026-06-18%20at%209.36.02%20PM.jpeg"
              alt="book"
              className="w-36 rounded-2xl shadow-2xl rotate-[8deg] hover:scale-105 transition duration-500 h-48 object-cover"
            />
            <img
              src="https://ik.imagekit.io/iaef5pysh/WhatsApp%20Image%202026-06-18%20at%209.36.02%20PM.jpeg"
              alt="book"
              className="w-28 rounded-2xl shadow-2xl rotate-[-8deg] mr-10 hover:scale-105 transition duration-500 h-36 object-cover"
            />
          </div>
        </div>
      </div>

      {/* RENDERED INTERACTIVE BOOK LIST */}
      <div className="py-20 px-4 space-y-28 max-w-7xl mx-auto">
        {books.map((book, i) => (
          <BookCard key={book.id} book={book} i={i} />
        ))}
      </div>

      {/* EXECUTIVE AUTHOR PROFILE CARDS */}
      <div className="max-w-7xl mx-auto px-4 py-6 mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-gray-100">
          
          {/* PROFILE BRANDING LAYOUT */}
          <div className="relative flex flex-col items-center">
            <div className="absolute w-64 h-64 bg-red-400/20 blur-3xl rounded-full"></div>
            <img
              src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
              alt="author"
              className="w-52 h-52 object-cover rounded-full border-4 border-red-500 shadow-xl relative z-10"
            />
            <h2 className="text-2xl font-bold mt-6">Yasin Shakir</h2>
            <p className="text-gray-500 text-center">Founder & CEO</p>
            <p className="text-gray-600 text-center text-sm mt-1">
              Business Coach, Trainer, NLP 
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="font-bold">4.9</span>
              <span className="text-gray-400">| 10+ Years Experience</span>
            </div>
          </div>

          {/* BIO DETAILS DESCRIPTION */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center md:text-left">
              About the Author
            </h1>
            <p className="text-gray-600 mt-6 leading-8 text-center md:text-left text-[15px] md:text-base">
              Yasin Shakir is an entrepreneur with a unique growth mindset. He believes multi-talented individuals achieve more success in life compared to specialization seekers. 
             
              <br />
              He is a Gold Medalist having an M Phil in English Applied Linguistics, LLM & BS Psychology. He also has earned coaching & training certifications from UK & USA to hone his coaching & training skills. As a founder & CEO, his mission is to help SMEs in Pakistan, Bangladesh, India & of Overseas Pakistani's grow, scale, and succeed in a competitive business world of today.
            </p>

            {/* INDUSTRY TARGET SKILL TAGS */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium text-xs md:text-sm">
                Business Coaching
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full font-medium text-xs md:text-sm">
                Team Training
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-medium text-xs md:text-sm">
                Career Growth
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium text-xs md:text-sm">
                Brand Building
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default memo(Books);