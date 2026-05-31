import React, { memo } from "react";

const books = [
  {
    id: 1,
    title: "MEETHI ZINDAG",
    image:
      "https://ik.imagekit.io/b6iqka2sz/book-meethi-zindagi.webp",
    author: "Yasin Sakir",
    authorImg:
      "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    desc: `This book is a practical step-by-step 30-day training on goal setting and actionable activities to bring results. Whether you are confused about life, or you set and plan goals but fail again and again, or you try very hard but consistency and direction become roadblocks, this "MEETHI ZINDAGI" book is a special gift for you. Order it, read it, and turn your dreams and wishes into achievable goals. These achievements will make your life "sweet".`,
    price: 80,
    discountPrice: 49,
    discount: 39,
    comingSoon: false,
 
  },
  {
    id: 2,
    title: "MEETHI ZINDAG",
     image:
      "",
    author: "Yasin Sakir",
    authorImg:
      "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    desc: `This book is a practical step-by-step 30-day training on goal setting and actionable activities to bring results. Whether you are confused about life, or you set and plan goals but fail again and again, or you try very hard but consistency and direction become roadblocks, this "MEETHI ZINDAGI" book is a special gift for you. Order it, read it, and turn your dreams and wishes into achievable goals. These achievements will make your life "sweet".`,
    price: 70,
    discountPrice: 39,
    discount: 45,
    comingSoon: true,
    points: [
      "Figma & Adobe XD tools",
      "User experience research",
      "Color theory & typography",
      "Modern dashboard design",
    ],
  },
  {
    id: 3,
    title: "MEETHI ZINDAG",
    image:
      "",
    author: "Yasin Sakir",
    authorImg:
      "https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406",
    desc: `This book is a practical step-by-step 30-day training on goal setting and actionable activities to bring results. Whether you are confused about life, or you set and plan goals but fail again and again, or you try very hard but consistency and direction become roadblocks, this "MEETHI ZINDAGI" book is a special gift for you. Order it, read it, and turn your dreams and wishes into achievable goals. These achievements will make your life "sweet".`,
    price: 90,
    discountPrice: 55,
    discount: 35,
    comingSoon: true,
    points: [
      "SEO Optimization",
      "Facebook & Google Ads",
      "Content Marketing",
      "Lead Generation Systems",
    ],
  },
];

const BookCard = memo(({ book, i }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 ${
        i % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="md:w-1/2 relative group overflow-hidden rounded-3xl">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-red-300 blur-3xl opacity-20 rounded-3xl"></div>

        {/* BOOK IMAGE */}
        <img
          src={book.image}
          loading="lazy"
          decoding="async"
          className={`relative w-full h-[470px] object-cover rounded-3xl shadow-2xl transition duration-700 group-hover:scale-105 ${
            book.comingSoon ? "brightness-50" : ""
          }`}
        />

        {/* COMING SOON */}
        {book.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-black/80 border border-white/20 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl">
              <h2 className="text-white text-2xl md:text-4xl font-extrabold tracking-widest animate-pulse">
                COMING SOON
              </h2>
            </div>
          </div>
        )}

        {/* AUTHOR */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full shadow-lg z-30">
          <img
            src={book.authorImg}
            alt={book.author}
            loading="lazy"
            className="w-9 h-9 rounded-full object-cover"
          />

          <span className="text-xs font-bold text-gray-700">
            {book.author}
          </span>
        </div>

        {/* DISCOUNT */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-xl z-30">
          {book.discount}% OFF
        </div>
      </div>

      {/* CONTENT */}
      <div className="md:w-1/2">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          {book.title}
        </h2>

        <p className="text-gray-600 mt-4 leading-8 text-lg">
          {book.desc}
        </p>

        {/* PRICE */}
        <div className="mt-6 flex items-center gap-4">
          <span className="text-gray-400 line-through text-2xl">
            PKR {book.price}
          </span>

          <span className="text-red-600 text-4xl font-extrabold">
            PKR {book.discountPrice}
          </span>
        </div>

      

      

        {/* BUTTON */}
        <button
          disabled={book.comingSoon}
          className={`mt-8 px-8 py-4 rounded-2xl text-white font-bold text-lg transition duration-300 shadow-xl ${
            book.comingSoon
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105"
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
      
     {/* HERO */}
{/* HERO */}
<div className="bg-gradient-to-br from-[#0f172a] via-[#3b0764] to-[#7f1d1d] text-white min-h-[45vh] flex items-center justify-center px-4 relative overflow-hidden">

  {/* DARK OVERLAY (premium effect) */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

  {/* BG BLUR */}
  <div className="absolute w-[450px] h-[450px] bg-pink-500/25 blur-[130px] rounded-full top-[-120px] left-[-120px]"></div>

  <div className="absolute w-[450px] h-[450px] bg-orange-500/25 blur-[130px] rounded-full bottom-[-120px] right-[-120px]"></div>

  {/* MAIN CONTENT */}
  <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

    {/* LEFT BOOKS */}
    <div className="hidden md:flex flex-col gap-6">
      <img
        src="https://ik.imagekit.io/b6iqka2sz/book-meethi-zindagi.webp"
        alt="book"
        className="w-36 rounded-2xl shadow-2xl rotate-[-8deg] hover:scale-105 transition duration-500"
      />

      <img
        src="https://ik.imagekit.io/b6iqka2sz/book-meethi-zindagi.webp"
        alt="book"
        className="w-28 rounded-2xl shadow-2xl rotate-[8deg] ml-10 hover:scale-105 transition duration-500"
      />
    </div>

    {/* CENTER TEXT */}
    <div className="text-center max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-black leading-tight">
        Premium Books Library
      </h1>

      <p className="text-gray-200 mt-4 text-sm md:text-lg leading-7">
        Learn high-demand skills with our professional books
        designed for developers, designers, marketers, and entrepreneurs.
      </p>
    </div>

    {/* RIGHT BOOKS */}
    <div className="hidden md:flex flex-col gap-6">
      <img
        src="https://ik.imagekit.io/b6iqka2sz/book-meethi-zindagi.webp"
        alt="book"
        className="w-36 rounded-2xl shadow-2xl rotate-[8deg] hover:scale-105 transition duration-500"
      />

      <img
        src="https://ik.imagekit.io/b6iqka2sz/book-meethi-zindagi.webp"
       
        className="w-28 rounded-2xl shadow-2xl rotate-[-8deg] mr-10 hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</div>

      {/* BOOKS */}
      <div className="py-20 px-4 space-y-28 max-w-7xl mx-auto">
        {books.map((book, i) => (
          <BookCard key={book.id} book={book} i={i} />
        ))}
      </div>


      {/* ABOUT AUTHOR SECTION */}
<div className="max-w-7xl mx-auto px-4 py-1">

  <div className="bg-white rounded-3xl  p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">

    {/* LEFT IMAGE CARD */}
    <div className="relative flex flex-col items-center">

      {/* glow ring */}
      <div className="absolute w-64 h-64 bg-red-400/20 blur-3xl rounded-full"></div>

      <img
        src="https://ik.imagekit.io/b6iqka2sz/best.png?updatedAt=1765137170406"
        alt="author"
        className="w-52 h-52 object-cover rounded-full border-4 border-red-500 shadow-xl relative z-10"
      />

      <h2 className="text-2xl font-bold mt-6">Yasin Shakir</h2>

      <p className="text-gray-500 text-center">
        Founder & CEO
      </p>

      <p className="text-gray-600 text-center text-sm mt-1">
        Business Coach, Trainer, NLP & CEO
      </p>

      {/* rating */}
      <div className="flex items-center gap-3 mt-4">
        <span className="text-yellow-500 text-xl">⭐</span>
        <span className="font-bold">4.9</span>
        <span className="text-gray-400">| 10+ Years Experience</span>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1">

      <h1 className="text-3xl md:text-4xl font-extrabold text-center md:text-left">
        About the Author
      </h1>

      <p className="text-gray-600 mt-6 leading-8 text-center md:text-left">
        Yasin Shakir is an entrepreneur with a unique growth mindset.
        He believes multi-talented individuals achieve more success in life
        compared to single-skilled people. He holds a Master’s in English
        Linguistics and is a gold medalist in academics.
        <br /><br />
        He specializes in psychology, NLP, team building, and business
        transformation coaching. As a founder of multiple organizations,
        his mission is to help SMEs grow, scale, and succeed in a competitive world.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">

        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
          Business Coaching
        </span>

        <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full font-medium">
          Team Training
        </span>

        <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-medium">
          Career Growth
        </span>

        <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium">
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