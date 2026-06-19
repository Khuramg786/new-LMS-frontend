import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Laptop,
  Layers,
  Sparkles,
  ShoppingBag,
  Cpu,
  MonitorSmartphone,
  Server,
  Zap,
  Check,
  Building2,
  FileText,
  Briefcase,
  HelpCircle,
  ArrowUpRight
} from "lucide-react";

function WebDevelopmentDetails() {
  const navigate = useNavigate();

  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800 min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Premium Header */}
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
            <Code2 size={12} className="text-blue-600" /> Premium Web Development
          </span>
        </div>
      </header>

      {/* Hero Section: Dynamic & Immersive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 px-5 border-b border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: High-Impact Agency Copy */}
            <div className="lg:col-span-7 space-y-6">
            
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                  High-Performance Websites
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Your website is not just a digital brochure—it is your 24/7 automated storefront, lead generator, and closest business asset. We engineer blazing-fast, secure, and visually stunning web environments tailored to establish instant authority.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-semibold border-l-4 border-cyan-500 pl-4">
                Whether you need a high-converting Shopify store, a flexible enterprise WordPress architecture, or an entirely custom hard-coded system built from the ground up—we deliver absolute perfection.
              </p>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 text-white px-10 py-5 rounded-2xl font-black text-base shadow-xl shadow-blue-950/50 transition-all duration-300 hover:-translate-y-1">
                  Launch Your Project Today
                </button>
              </div>
            </div>
            
            {/* Right Side: Hero Imagery Component */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-800 overflow-hidden group">
                  <img 
                    src="https://www.afaicon.com/wp-content/uploads/2024/08/al-mehran-scaled.jpg" 
                    alt="Premium Minimalist Technical Workstation Layout" 
                    className="w-full h-96 object-cover rounded-2xl opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest">Built to Perform</p>
                    <p className="text-sm font-bold text-white mt-0.5">Clean UI, Scalable Backends & Fluid Codebases</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION: Explicitly details the types of websites built */}
      <section className="bg-white py-24 px-5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">Our Specializations</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Exactly What Websites We Create For You
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              We specialize across distinct web paradigms to align precisely with your exact monetization models and organizational workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Website Type 1: E-commerce Storefronts */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                  alt="E-commerce Analytics and Storefront Performance Mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">High Conversion</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    E-Commerce Stores <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Engineered for high volume sales traffic. Includes deep cart optimization, automated checkout flows, conversion tracking pixels, custom product variants, and localized payment gateway configurations.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Shopify Stores</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">WooCommerce</span>
                </div>
              </div>
            </div>

            {/* Website Type 2: Corporate & Business Portals */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" 
                  alt="Corporate Professional Enterprise Infrastructure Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Enterprise Grade</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Corporate Websites <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Designed to position multinational firms, B2B companies, and local service empires as the absolute authority. Built with dynamic case studies, team matrix displays, secure career portals, and advanced lead forms.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">WordPress CMS</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Custom Elements</span>
                </div>
              </div>
            </div>

            {/* Website Type 3: Custom Web Applications & Saas Panels */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Custom Full Stack React System with Visual Metrics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">100% Hard-Coded</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Custom Web Platforms <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    When templated drag-and-drop systems fall short, we build complex engines from code. Perfect for SaaS management dashboards, interactive client database portals, booking engines, and dynamic calculation panels.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">React & Next.js</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Tailwind Stack</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FRAMEWORKS & ECOSYSTEMS SECTION: Shows your platform mastery with original colored logos */}
      <section className="max-w-7xl mx-auto py-24 px-5">
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            The Platforms We Build On
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We operate utilizing top-tier ecosystems to guarantee maximum performance, longevity, and administrative ease-of-use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Shopify Platform Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#96bf48] hover:shadow-emerald-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/shopify/96bf48" 
                  alt="Shopify Official Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Shopify Ecosystem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Premium e-commerce scaling, product variants, dropshipping alignment, and lightning-fast storefront checkouts.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 space-y-1.5 text-[11px] font-bold text-slate-600">
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#96bf48]" /> Premium Themes</div>
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#96bf48]" /> Apps Integration</div>
            </div>
          </div>

          {/* WordPress Platform Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#21759b] hover:shadow-blue-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/wordpress/21759b" 
                  alt="WordPress Official Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">WordPress CMS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The world’s leading content platform. Integrated with Elementor Pro or customized blocks for visual control.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 space-y-1.5 text-[11px] font-bold text-slate-600">
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#21759b]" /> Full Admin Panel</div>
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#21759b]" /> Native SEO Control</div>
            </div>
          </div>

          {/* React Architecture Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#61DAFB] hover:shadow-cyan-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/react/61DAFB" 
                  alt="React Framework Official Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">React.js Custom</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hardcoded single-page systems designed with Tailwind CSS for zero lag, extreme fluidity, and beautiful modern interactions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 space-y-1.5 text-[11px] font-bold text-slate-600">
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#61DAFB]" /> Unique UI Execution</div>
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#61DAFB]" /> Ultimate Speed Metric</div>
            </div>
          </div>

          {/* Next.js/Data Platform Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#47A248] hover:shadow-emerald-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/mongodb/47A248" 
                  alt="MongoDB Database Architecture Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Full-Stack Data</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complex operations containing secure servers, databases, custom user management, and API integrations.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 space-y-1.5 text-[11px] font-bold text-slate-600">
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#47A248]" /> Database Engines</div>
              <div className="flex items-center gap-1.5"><Check size={12} className="text-[#47A248]" /> API Integrations</div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE STANDARDS SHOWCASE: Using multiple high-end images */}
      <section className="bg-slate-950 text-white py-24 px-5 border-y border-slate-900">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Visual Showcase Block 1 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Image Embed */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1400/1*rfgWE1ePoZrbaIdavxgmHg.jpeg" 
                  alt="Advanced Technical UI Component Mockups on Monitor" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
            
            {/* Content Context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center border border-cyan-500/20">
                <MonitorSmartphone size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">100% Fluid Fluid & Cross-Device Responsive Layouts</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Over 80% of your organic web consumers access your digital interface using a smart mobile phone. If your platform’s layout breaks or shifts incorrectly, your customer leaves instantly. We test every deployment line-by-line to execute beautiful layout experiences across 4K displays, modern tablets, and iOS/Android screen sizes.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Blazing Load Metrics</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Zero Shift Layouts</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Block 2 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content Context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Server size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Iron-Clad Security Protocols & Secure Deployments</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                We go well past surface-level design layers. Our web architectures utilize deep-level sitemaps, automated SSL configurations (Green Security Lock), domain mapping routing, and cloud staging optimizations to ensure your online ecosystem is fortified against modern exploits while maintaining a 99.9% runtime.
              </p>
              <div className="flex gap-4 items-center bg-slate-900 p-4 rounded-xl border border-slate-800/80">
                <Zap size={24} className="text-amber-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Every asset is optimized with clean semantic SEO code schemas allowing Google bots to efficiently scan, rank, and read your brand directly to the top.
                </p>
              </div>
            </div>

            {/* Visual Image Embed */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" 
                  alt="Software Engineer Auditing Web Server Security Architecture" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE STANDARDS PROGRESSION WORKFLOW */}
      <section className="max-w-4xl mx-auto py-24 px-5">
        <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-12">
          The Tactical Advantage of Our Development Workflow
        </h3>
        <div className="space-y-4">
          {[
            { id: "01", title: "Clean Semantic Code Infrastructure", text: "We avoid clunky, bloated extensions. Our frameworks are clean-coded, optimizing browser processing speeds to rank naturally on major search engines." },
            { id: "02", title: "Native UI Conversion Mechanics Integrated", text: "We perfectly integrate floating WhatsApp hubs, precise quick-action call buttons, and analytical intake forms in ideal friction-free spots." },
            { id: "03", title: "Absolute Ownership Transfer & Zero Hidden Fees", text: "Once deployment is final, 100% of master administrative credentials, server profiles, domains, and custom source assets belong exclusively to you." }
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

      {/* High Conversion Call to Action Section */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-3xl mx-auto px-5 space-y-6 relative z-10">
          <Laptop className="mx-auto text-cyan-400 animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Dominate the Digital Front?
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stop relying on old templates or messy site integrations. Let our engineering team wire a custom system structured for extreme performance.
          </p>
          <div className="pt-4">
            <button className="bg-white text-slate-950 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Free Web Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WebDevelopmentDetails;