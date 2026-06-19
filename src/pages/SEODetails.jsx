import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  TrendingUp,
  Globe,
  CheckCircle2,
  Users,
  Zap,
  ArrowLeft,
  MousePointerClick,
  ShoppingBag
} from "lucide-react";

function SEODetails() {
  const navigate = useNavigate();

  // Automatically scroll to the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800 min-h-screen selection:bg-red-500 selection:text-white">
      
      {/* Sticky Header with Back Button */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate("/BusinessBranding")}
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-red-600 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Branding Business
          </button>
          <span className="text-xs font-black tracking-widest uppercase text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            Grow Organically
          </span>
        </div>
      </header>

      {/* Hero Section: Simple & Clear Explanation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white py-20 px-5 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Direct & Easy Text */}
            <div className="lg:col-span-6 space-y-6">
         
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Get Found on Google <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-400">
                  When Customers Search!
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Imagine you have a beautiful shop, but it is located in a dark empty street where nobody walks. That is a website without SEO! 
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-semibold border-l-4 border-red-500 pl-4">
                SEO is the magic that shifts your website from that empty street onto the main highway of Google, so buyers see you first.
              </p>
              <div className="pt-2">
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-red-950/50 transition-all duration-300">
                  Book Website Review Call
                </button>
              </div>
            </div>
            
            {/* Right Side: The Visual Google Search Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border-2 border-slate-700 relative">
                {/* Google Top Bar Mimic */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 text-xs text-slate-400">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="ml-2 font-mono text-[10px]">www.google.com</span>
                </div>

                {/* Google Search Bar Mockup */}
                <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2.5 mb-6 border border-slate-200">
                  <Search size={16} className="text-slate-400" />
                  <span className="text-xs md:text-sm font-semibold text-slate-700">"best service near me" or "buy product online"</span>
                </div>

                {/* Simulated SEO Result #1 */}
                <div className="space-y-1 bg-gradient-to-r from-red-50 to-transparent p-4 rounded-xl border-l-4 border-red-500 relative animate-pulse">
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest shadow-md">
                    ★ Your Website (Rank #1)
                  </span>
                  <p className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    https://yourcompany.com <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 rounded">✔ Verified Business</span>
                  </p>
                  <h3 className="text-sm md:text-base font-black text-blue-800 hover:underline cursor-pointer">
                    The Best Service & Top Quality Products in Town
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Stop searching! We offer fast delivery, highly affordable rates, and 100% premium customer support. Click here to talk to us now...
                  </p>
                </div>

                {/* Visual Arrow Indicator */}
                <div className="mt-4 flex justify-end items-center gap-2 text-red-600 text-xs font-black tracking-wider bg-slate-50 p-2 rounded-lg">
                  <MousePointerClick size={16} className="animate-bounce" />
                  <span>90% of buyers click the first link they see!</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 3-Step Simple Explanation (How it works in Real Life) */}
      <section className="max-w-7xl mx-auto py-24 px-5">
        <div className="text-center mb-16 space-y-3">
          <span className="text-red-600 text-xs font-black tracking-widest uppercase block">No Technical Jargon</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How Does SEO Help Your Website?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We do three basic things to make sure your website turns into a money-making machine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 font-black text-lg">
              1
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Finding the Right Words</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We find out exactly what phrases or words your customers type into Google when they want to buy. We then place those exact words naturally inside your website.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 font-black text-lg">
              2
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Making it Super Fast & Clean</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Google hates slow websites. We clean up your pages, make them load in less than 2 seconds, and ensure it looks perfect on all smartphones and tabs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 font-black text-lg">
              3
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Building Trust on Internet</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We connect your website with other massive, trusted platforms online. When Google sees big websites pointing to you, it automatically boosts your business to page 1.
            </p>
          </div>

        </div>
      </section>

      {/* Clear Imagery Sections: Showing what happens */}
      <section className="bg-slate-900 text-white py-24 px-5 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Visual Block 1: The Result of SEO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Clear Image 1 */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80" 
                  alt="Customers finding business" 
                  className="w-full h-72 object-cover rounded-xl opacity-90"
                />
              </div>
            </div>
            
            {/* Explanatory Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center border border-red-500/20">
                <Users size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Real High-Intent Traffic, Not Empty Clicks</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                When you run standard social media ads, you are showing your banner to people who are just scrolling or watching videos. They might not want to buy anything at that moment.
              </p>
              <p className="text-slate-300 font-bold text-sm md:text-base">
                But with SEO, a customer is actively typing "buy product now" on Google. They already have their credit card in hand—they just need to see your website first!
              </p>
            </div>
          </div>

          {/* Visual Block 2: Long Term Value */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Explanatory Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/20">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Your Website Grows Even While You Sleep</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Paid advertisements stop bringing customers the second your daily budget ends. SEO is a long-term business investment. Once you rank high, your listing stays there premiumly.
              </p>
              <div className="flex gap-4 items-center bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <Zap size={24} className="text-amber-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Continuous leads, constant phone calls, and automated email orders 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>

            {/* Clear Image 2 */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Business growth statistics chart" 
                  className="w-full h-72 object-cover rounded-xl opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Core Benefits Checklist */}
      <section className="max-w-4xl mx-auto py-24 px-5">
        <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-12">
          Why SEO is Best For a Savvy Businessman
        </h3>
        <div className="space-y-4">
          {[
            { title: "Reduces Heavy Ad Overheads", text: "You don't need to depend on paying platforms daily to maintain your brand baseline." },
            { title: "Builds Ultimate Market Trust", text: "People naturally trust top Google links way more than sponsored commercial ads." },
            { title: "Brings local customers directly", text: "If someone nearby searches for your product, Google shows your shop map location immediately." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                <p className="text-slate-500 text-sm mt-0.5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Call to Action */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <ShoppingBag className="mx-auto text-red-200 animate-bounce" size={48} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Bring Massive Customers to Your Website?
          </h2>
          <p className="text-base md:text-lg text-red-100 max-w-xl mx-auto leading-relaxed">
            Don't worry about technical things. Let us handle the strategy, while you handle the real sales and growing profit.
          </p>
          <div className="pt-4">
            <button className="bg-white text-red-700 hover:bg-red-50 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Analyze My Website Strategy
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SEODetails;