import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Zap,
  Check,
  Cpu,
  ShieldCheck,
  CloudLightning,
  Layers,
  ArrowUpRight,
  AppWindow
} from "lucide-react";

function MobileAppDevelopmentDetails() {
  const navigate = useNavigate();

  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800 min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
          <span className="text-xs font-black tracking-widest uppercase text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Smartphone size={12} className="text-blue-600" /> Premium Mobile Engineering
          </span>
        </div>
      </header>

      {/* Hero Section: Dynamic, Clean & Immersive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 px-5 border-b border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: High-Impact Agency Copy */}
            <div className="lg:col-span-7 space-y-6">
            
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Building Custom Apps <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  That Users Love Every Day
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                In today's digital economy, your mobile app is your direct bridge to your customer's pocket. We engineer fast, highly secure, and visually stunning mobile applications tailored to drive massive user retention, engagement, and flawless automated workflows.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-semibold border-l-4 border-indigo-500 pl-4">
                From high-growth cross-platform setups using React Native and Flutter, to highly optimized native code deployment for iOS and Android platforms—we turn your raw business concepts into ready-to-launch App Store realities.
              </p>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-500 hover:via-blue-600 hover:to-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-base shadow-xl shadow-blue-950/50 transition-all duration-300 hover:-translate-y-1">
                  Discuss Your Mobile App Idea
                </button>
              </div>
            </div>
            
            {/* Right Side: Hero Image Component */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-800 overflow-hidden group">
                  <img 
                    src="https://rehmanwebsitedeveloper.com/wp-content/uploads/2022/01/portfolio-06.jpg" 
                    alt="Premium Mobile User Interface Layout Design" 
                    className="w-full h-96 object-cover rounded-2xl opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">Engineered for Performance</p>
                    <p className="text-sm font-bold text-white mt-0.5">Fluid UI, Native Experience & Secure Scaling</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE MOBILE APPS WE BUILD SECTION */}
      <section className="bg-white py-24 px-5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">Our Specializations</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Mobile App Solutions Built For Serious Scale
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              We focus on building intuitive mobile architectures that fit perfectly into your target audience's routine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* App Type 1: On-Demand & Service Apps */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80" 
                  alt="Mobile App Development Interface Design Mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Real-Time Data</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    On-Demand Portals <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Designed for maximum performance. Features include seamless map tracking tools, live push notifications, fast instant search engines, and real-time synchronization systems.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Live Map APIs</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Push Sync</span>
                </div>
              </div>
            </div>

            {/* App Type 2: E-Commerce Mobile Applications */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80" 
                  alt="E-Commerce Mobile Shopping Application Interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">High Retention</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Mobile Commerce <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Turn visual window shoppers into buyers with ultra-fast native checkout processes, integrated shopping carts, smart product filters, and secure localized credit card processing.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Secure Checkout</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Store Systems</span>
                </div>
              </div>
            </div>

            {/* App Type 3: Enterprise Business Dashboards */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Data Analytics and Custom Mobile Dashboard Layout" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Secure Management</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Business Dashboards <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Custom administrative systems engineered to manage operations on the go. Complete with clean charts, user logs, status trackers, and protected authentication mechanisms.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Admin Panels</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">JWT Encryption</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE MOBILE FRAMEWORKS & LANGUAGES TECHNOLOGY STACK */}
      <section className="max-w-7xl mx-auto py-24 px-5">
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">Technology Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Languages & Frameworks We Dominate
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We develop utilizing industry-standard languages to ensure your mobile asset remains modern, lightning fast, and highly reliable.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* React Native Framework */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#61DAFB] hover:shadow-cyan-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/react/61DAFB" 
                  alt="React Native Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">React Native</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build native iOS and Android apps using a single high-efficiency JavaScript codebase. Highly fluid, scalable, and easy to maintain long term.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#61DAFB]" /> Cross-Platform Power
            </div>
          </div>

          {/* Flutter Framework */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#02569B] hover:shadow-blue-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/flutter/02569B" 
                  alt="Flutter Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Flutter / Dart</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google's premium UI toolkit engineered for crafting beautifully compiled, high-performance mobile software with unique interactive layouts.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#02569B]" /> Custom Pixel Engine
            </div>
          </div>

          {/* Swift Architecture */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#F05138] hover:shadow-orange-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/swift/F05138" 
                  alt="Swift Language Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Swift (iOS Native)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Apple’s native development language. Engineered for enterprise iOS experiences that utilize deep device-level hardware capabilities.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#F05138]" /> Full Apple Ecosystem
            </div>
          </div>

          {/* Kotlin Architecture */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#7F52FF] hover:shadow-purple-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/kotlin/7F52FF" 
                  alt="Kotlin Language Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Kotlin (Android)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google's preferred native language for modern, stable Android architectures. Delivers smooth performance and flawless device hardware integrations.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#7F52FF]" /> Native Core Android
            </div>
          </div>

          {/* Backend Engines */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#FFCA28] hover:shadow-amber-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/firebase/FFCA28" 
                  alt="Firebase Backend Database Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Cloud Backends</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Powered by secure frameworks like Firebase and Node.js. Handles user accounts, databases, and push updates flawlessly.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#FFCA28]" /> Real-time Cloud Engines
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED ENGINEERING CORE STANDARDS WORKFLOW */}
      <section className="bg-slate-950 text-white py-24 px-5 border-y border-slate-900">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Section 1: Flawless UI/UX */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile UX Design Wireframes and Application Planning Layout" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/20">
                <Cpu size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">60FPS Native Fluidity & Beautiful Mobile Interactions</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Users leave clunky, slow apps within seconds. We thoroughly optimize execution rendering patterns to guarantee a fluid 60FPS interaction standard. From seamless page transitions to lightweight background caching structures, your app will run beautifully on old and new mobile chipsets alike.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Optimized Frame Rendering</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Native Interaction Feel</span>
              </div>
            </div>
          </div>

          {/* Section 2: Security & App Store Compliance */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Secure API Channels & App Store Compliance</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Deploying an app requires adhering to tight Apple App Store and Google Play Store safety regulations. We manage the entire store submission process, utilizing secure data pathways and encrypted authentication variables to guarantee your architecture passes verification protocols effortlessly.
              </p>
              <div className="flex gap-4 items-center bg-slate-900 p-4 rounded-xl border border-slate-800/80">
                <CloudLightning size={24} className="text-amber-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Every pipeline layout is integrated with robust analytical framework dashboards, allowing you to instantly observe user engagement, active sessions, and crash diagnostics.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                  alt="Software Engineer Testing and Debugging Mobile Code Infrastructure" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PREMIUM STRATEGY CHECKLIST */}
      <section className="max-w-4xl mx-auto py-24 px-5">
        <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-12">
          Our Strategic Mobile Execution Model
        </h3>
        <div className="space-y-4">
          {[
            { id: "01", title: "Clean Modular Source Code Architectures", text: "We construct completely decoupled, neat code frameworks. This allows other teams to smoothly scale your mobile application over time without codebase friction." },
            { id: "02", title: "Advanced Local Data Caching & Offline Support", text: "We integrate lightweight on-device database caches, allowing crucial components of your app to pull historical information instantly even without internet coverage." },
            { id: "03", title: "Full Codebase Transfer & App Deployment Control", text: "Once live deployment is complete, 100% of the repository source code and master application store distribution keys belong strictly to you." }
          ].map((item) => (
            <div key={item.id} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs shrink-0">
                {item.id}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Conversion Call to Action Section */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-3xl mx-auto px-5 space-y-6 relative z-10">
          <AppWindow className="mx-auto text-indigo-400 animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Launch on App Stores?
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stop letting messy code slow your company down. Let our mobile engineering team layout a clean system structured for absolute high performance.
          </p>
          <div className="pt-4">
            <button className="bg-white text-slate-950 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Mobile Strategy Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default MobileAppDevelopmentDetails;