import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  TrendingUp,
  MapPin,
  Star,
  MessageSquarePlus,
  Megaphone,
  MousePointerClick,
  Zap,
  Users
} from "lucide-react";

function DigitalMarketingDetails() {
  const navigate = useNavigate();

  // Automatically scroll to the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800 min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header with Back Button */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate("/BusinessBranding")}
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Branding Business
          </button>
          <span className="text-xs font-black tracking-widest uppercase text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Megaphone size={12} className="text-blue-600" /> Complete Digital Ecosystem
          </span>
        </div>
      </header>

      {/* Hero Section: Simple & Clear Explanation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-5 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Simple Explanation */}
            <div className="lg:col-span-6 space-y-6">
          
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Connect the Dots & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                  Multiply Your Business Sales!
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Running a business without Digital Marketing is like winking at someone in the dark—you know what you are doing, but nobody else does!
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-semibold border-l-4 border-blue-500 pl-4">
                We handle your entire online presence. From driving massive customer traffic across all social media networks to managing your top rankings on Google Maps—we turn online views into daily profit.
              </p>
              <div className="pt-2">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-blue-950/50 transition-all duration-300">
                  Book Business Strategy Call
                </button>
              </div>
            </div>
            
            {/* Right Side: The Visual Marketing Funnel Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border-2 border-slate-800 max-w-md mx-auto space-y-4">
                <h4 className="font-black text-sm uppercase tracking-wider text-slate-400 text-center">
                  How Customers Find You Online
                </h4>

                {/* Step 1: Social Media Traffic */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h5 className="font-bold text-xs md:text-sm text-slate-800">Omnichannel Attention</h5>
                      <p className="text-[11px] text-purple-700 font-medium">All Major Social Platforms Managed</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full font-bold">Step 1</span>
                </div>

                {/* Arrow down icon */}
                <div className="flex justify-center text-blue-500 py-0.5 animate-bounce">
                  <MousePointerClick size={16} />
                </div>

                {/* Step 2: Google Search Ranking */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h5 className="font-bold text-xs md:text-sm text-slate-800">Google Search & Maps</h5>
                      <p className="text-[11px] text-blue-700 font-medium">Top Rank & Google Business Setup</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-bold">Step 2</span>
                </div>

                {/* Arrow down icon */}
                <div className="flex justify-center text-emerald-500 py-0.5 animate-bounce">
                  <MousePointerClick size={16} />
                </div>

                {/* Step 3: Verified Sales Conversion */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-full bg-emerald-500/10 -skew-x-12"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <div>
                      <h5 className="font-black text-xs md:text-sm text-slate-900">Premium Conversions</h5>
                      <p className="text-[11px] text-emerald-800 font-semibold">Active WhatsApp Leads & Orders</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                    $$ Profit
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OMNI-PLATFORM MASTERY SECTION (With Original Offical Brand Logos) */}
      <section className="max-w-7xl mx-auto py-20 px-5">
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">Every Network Covered</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            We Run Campaigns Across All Major Platforms
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We target your precise audience wherever they hang out online, redirecting massive buyer traffic directly to your business storefront.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          
          {/* Facebook */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center space-y-3 group hover:border-[#1877F2] hover:shadow-blue-100/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src="https://cdn.simpleicons.org/facebook/1877F2" 
                alt="Facebook Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h4 className="font-black text-slate-800 text-sm">Facebook Ads</h4>
            <p className="text-[11px] text-slate-400">Massive Scale & Advanced Retargeting Campaigns</p>
          </div>

          {/* Instagram */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center space-y-3 group hover:border-[#E1306C] hover:shadow-pink-100/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src="https://cdn.simpleicons.org/instagram/E1306C" 
                alt="Instagram Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h4 className="font-black text-slate-800 text-sm">Instagram Marketing</h4>
            <p className="text-[11px] text-slate-400">Premium Visual Assets, Reels & Influencer Styling</p>
          </div>

          {/* TikTok */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center space-y-3 group hover:border-black hover:shadow-slate-200 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src="https://cdn.simpleicons.org/tiktok/000000" 
                alt="TikTok Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h4 className="font-black text-slate-800 text-sm">TikTok Campaigns</h4>
            <p className="text-[11px] text-slate-400">Viral Short-Form Video Strategy & Hook Concepts</p>
          </div>

          {/* Twitter / X */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center space-y-3 group hover:border-slate-800 hover:shadow-slate-100 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src="https://cdn.simpleicons.org/x/000000" 
                alt="X Logo" 
                className="w-9 h-9 object-contain"
              />
            </div>
            <h4 className="font-black text-slate-800 text-sm">Twitter (𝕏) Ads</h4>
            <p className="text-[11px] text-slate-400">Real-Time Industry Trends & High-Intent Authority</p>
          </div>

          {/* YouTube */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center space-y-3 group hover:border-[#FF0000] hover:shadow-red-100/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src="https://cdn.simpleicons.org/youtube/FF0000" 
                alt="YouTube Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h4 className="font-black text-slate-800 text-sm">YouTube & Shorts</h4>
            <p className="text-[11px] text-slate-400">High-Conversion Professional Video Ads</p>
          </div>

        </div>
      </section>

      {/* Google Business Profile (GBP) Management */}
      <section className="bg-slate-100 py-20 px-5 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Visual Mockup of Top Ranked Google Map Shop */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200 max-w-sm mx-auto space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 border-b border-slate-100 pb-2">
                <MapPin size={14} className="text-red-500" /> Google Maps Local Results
              </div>
              
              {/* Simulated Map Result Card */}
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-2 relative">
                <div className="absolute top-3 right-3 bg-emerald-600 text-white font-black text-[9px] uppercase px-1.5 py-0.5 rounded tracking-wider">
                  #1 Near Me
                </div>
                <h4 className="font-black text-sm text-slate-900">Your Business Location</h4>
                
                {/* 5 Star Rating Display */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-500" />
                  ))}
                  <span className="text-[11px] text-slate-600 font-bold ml-1">5.0 (184 Reviews)</span>
                </div>
                
                <p className="text-xs text-slate-500">Open • Closes 9:00 PM</p>
                <p className="text-[11px] text-slate-400 font-medium">📍 Main Commercial Market Area</p>
                
                <div className="pt-2 flex gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider block text-center shadow-md">
                    📞 Call Shop
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider block text-center">
                    🗺 Directions
                  </span>
                </div>
              </div>

              {/* Engagement Hook */}
              <p className="text-[11px] text-slate-500 italic text-center">
                Local buyers calling your business phone numbers straight from Google maps search profiles!
              </p>
            </div>
          </div>

          {/* Right Block: Content Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase inline-flex items-center gap-1.5">
              👑 Local SEO Domination
            </span>
            <h3 className="text-3xl font-black text-slate-900 leading-tight">
              Google Business Profile Setup & Daily Management
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When physical clients nearby search for your services or merchandise, they don't look past the map listings. If your shop profile isn't verified or optimized, you are losing high-volume local customer footprints every minute.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-2 items-start">
                <MessageSquarePlus size={16} className="text-emerald-600 shrink-0 mt-1" />
                <p className="text-xs text-slate-600 font-medium">Review Optimization & 5-Star Reputation Upkeep</p>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="text-emerald-600 shrink-0 mt-1" />
                <p className="text-xs text-slate-600 font-medium">Accurate Geo-Tagging for Perfect Map Local Visibility</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Clear Imagery Sections: Showing real results */}
      <section className="bg-slate-900 text-white py-24 px-5">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Visual Block 1 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Clear Image 1 */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Marketing Strategy Planning" 
                  className="w-full h-72 object-cover rounded-xl opacity-90"
                />
              </div>
            </div>
            
            {/* Explanatory Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Users size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Dominate Your Local Competitors Completely</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Most businesses just post random photos and sit waiting for magic to happen. True digital marketing requires a multi-step machine that captures attention, retains it, and continuously retargets interested leads.
              </p>
              <p className="text-slate-300 font-bold text-sm md:text-base">
                We design specific strategies around your company so that you become the ultimate default choice for customers within your market niche.
              </p>
            </div>
          </div>

          {/* Visual Block 2 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Explanatory Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Scale Up Your System Safely and Reliably</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Traditional print or billboard ads are hard to track and extremely expensive. Digital channels allow us to test layouts with smaller assets first, and once we identify what clicks, we scale the budget up seamlessly.
              </p>
              <div className="flex gap-4 items-center bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                <Zap size={24} className="text-cyan-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Every dollar spent is precisely optimized to bring in high-intent calls, qualified leads, and sustainable long-term business retention.
                </p>
              </div>
            </div>

            {/* Clear Image 2 */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" 
                  alt="Business Growth and Digital Performance Chart" 
                  className="w-full h-72 object-cover rounded-xl opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Advantages Checklist */}
      <section className="max-w-4xl mx-auto py-24 px-5">
        <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-12">
          The Tactical Advantage of Digital Automation
        </h3>
        <div className="space-y-4">
          {[
            { title: "Predictable Sales Pipelines", text: "Turn customer acquisition into a systematic machine rather than relying on luck or foot traffic." },
            { title: "Highest Ever Conversion Rates", text: "When you present your brand cleanly across all internet fronts, trust forms instantly." },
            { title: "Asset Value Appreciation", text: "Your optimized ads data, custom audiences, and high-ranking assets remain yours permanently." }
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

      {/* Action Call Section */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-700 to-emerald-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <Layers className="mx-auto text-blue-200 animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Build an Unstoppable Digital Presence?
          </h2>
          <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Stop running independent, messy setups. Let our team integrate a professional system tailored for serious growth.
          </p>
          <div className="pt-4">
            <button className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Analyze My Digital Strategy
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default DigitalMarketingDetails;