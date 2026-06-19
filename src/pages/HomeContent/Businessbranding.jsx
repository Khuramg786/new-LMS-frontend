import React from "react";
import { useNavigate } from "react-router-dom"; // For page redirection
import {
  Globe,
  Search,
  Smartphone,
  Bot,
  MessageCircle,
  BarChart3,
  CheckCircle,
  LayoutDashboard,
  ArrowRight,
  Shield,
  Layers,
  Cpu
} from "lucide-react";

function BusinessBranding() {
  const navigate = useNavigate(); // Navigation function

  const services = [
    {
      id: "seo",
      icon: <Search size={40} />,
      title: "SEO Services",
      desc: "Rank higher on Google and attract more customers with professional SEO solutions.",
      path: "/SEODetails"
    },
    {
      id: "smm",
      icon: <BarChart3 size={40} />,
      title: "Social Media Marketing",
      desc: "Grow your business on Facebook, Instagram, TikTok, LinkedIn and other platforms.",
      path: "/DigitalMarketingDetails"
    },
    {
      id: "web",
      icon: <Globe size={40} />,
      title: "Website Development",
      desc: "Modern, fast and responsive websites designed to convert visitors into customers.",
      path: "/WebDevelopmentDetails"
    },
    {
      id: "app",
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      desc: "Android and iOS applications tailored to your business requirements.",
      path: "/MobileAppDevelopmentDetails"
    },
    {
      id: "erp",
      icon: <LayoutDashboard size={40} />,
      title: "ERP Systems",
      desc: "Custom ERP software to streamline your business operations, inventory, and finance.",
      path: "/ERPDetails"
    },
    // {
    //   id: "ai",
    //   icon: <Bot size={40} />,
    //   title: "AI Solutions",
    //   desc: "AI-powered systems, chatbots and business automation tools for modern companies.",
    //   path: "/AISolutionsDetails"
    // },
    // {
    //   id: "whatsapp",
    //   icon: <MessageCircle size={40} />,
    //   title: "WhatsApp Automation",
    //   desc: "Automate customer support, lead generation and sales using WhatsApp AI Chatbots.",
    //   path: "/WhatsAppAutomationDetails"
    // }
  ];

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white py-28 px-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
         Digital Busines  Solutions
          </span>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mt-6 mb-6 max-w-4xl mx-auto leading-tight">
            Complete Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">Branding & Tech</span> Solutions
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            We help businesses scale online through expert SEO, impactful Social Media Marketing,
            Premium Web & Mobile Apps, Custom ERP Systems, and Cutting-edge AI Automation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-1">
              Get Free Consultation
            </button>
            <button className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 backdrop-blur-sm">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* ERP Flagship Banner (With Mockup Image on Right) */}
      <section className="max-w-7xl mx-auto pt-24 px-5">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-red-500/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-red-600 text-white text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md inline-block">
                Our Core Expertise & Flagship Service
              </span>
              
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">ERP Systems</span> Built For Small, Medium Enterprise 
              </h2>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                We don't just build software; we put your entire business operations on autopilot. 
                Our flagship expertise lies in engineering robust, high-performance ERP systems 
                that unify your live inventory, corporate finance, HR, manufacturing pipelines, 
                and sales intelligence into one centralized hub.
              </p>

              {/* Mini Features Grid inside Banner */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 text-slate-300">
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Shield size={18} className="text-red-400 shrink-0" />
                  <span className="text-xs font-bold">100% Secure Architecture</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Layers size={18} className="text-amber-400 shrink-0" />
                  <span className="text-xs font-bold">Real-Time Inventory</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Cpu size={18} className="text-blue-400 shrink-0" />
                  <span className="text-xs font-bold">Automated Ledger Accounting</span>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => navigate("/ERPDetails")}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2 group/btn"
                >
                  Explore ERP Solutions
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* ERP Dashboard Mockup Image on Right Side */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[460px] aspect-[4/3] bg-slate-900 rounded-2xl border border-white/10 shadow-2xl p-2 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Top Browser Bar Effect */}
                <div className="flex items-center gap-1.5 pb-2 px-2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <div className="h-3.5 w-32 bg-white/5 rounded-md ml-4 text-[9px] text-slate-500 flex items-center px-2">erp.yourbrand.com</div>
                </div>
                
                {/* Simulated Premium Interface Image */}
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Premium ERP Dashboard Analytics" 
                  className="w-full h-full object-cover rounded-b-xl opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Overlay Badge for aesthetic touch */}
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg text-white flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-[10px] font-bold tracking-wide uppercase text-slate-300">Live Analytics Engine</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-24 px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Premium Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">Everything your business needs to dominate the digital landscape.</p>
        </div>

        {/* Dynamic Grid for 7 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)} 
              className={`group bg-white rounded-3xl p-8 border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 ${
                service.id === "erp" 
                  ? "border-red-500/40 ring-4 ring-red-500/5 relative overflow-hidden" 
                  : "border-slate-100 hover:border-red-500/20"
              }`}
            >
              {service.id === "erp" && (
                <span className="absolute top-0 right-0 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
                  Main Service
                </span>
              )}

              <div>
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-700 group-hover:text-white transition-all duration-300 shadow-inner ${
                  service.id === "erp" ? "bg-red-600 text-white" : "bg-red-50 text-red-600"
                }`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-50 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                  Learn more &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Solver Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.08),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Growing Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">Business?</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light leading-relaxed">
              Struggling to manage marketing, websites, social media, customer support, and operations all at once?
            </p>

            <p className="text-red-400 text-lg mt-4 font-semibold tracking-wider uppercase">
              We handle the tech work while you focus on sales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              {[
                "😕 Website not generating leads?",
                "😕 No time for professional SEO?",
                "😕 Social media channels inactive?",
              ].map((text, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl px-6 py-5 shadow-xl backdrop-blur-md transform hover:-translate-x-1 transition-all duration-200">
                  <p className="text-slate-200 font-medium text-lg">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center order-1 lg:order-2 my-8 lg:my-0">
              <div className="relative group">
                <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] " />
                <img
                  src="https://contentcolin.com/wp-content/uploads/2025/09/colin_plates.png"
                  alt="Business Growth Illustration"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[550px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

            <div className="space-y-6 order-3">
              {[
                "😕 Need scalable WhatsApp Automation?",
                "😕 Overwhelmed managing everything alone?",
                "😕 No robust ERP system in place?",
              ].map((text, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl px-6 py-5 shadow-xl backdrop-blur-md transform hover:translate-x-1 transition-all duration-200">
                  <p className="text-slate-200 font-medium text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">Why Partner With Us?</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Experienced Team", desc: "Professional developers, automation experts, and certified SEO/Marketing gurus." },
              { title: "Complete Digital Solutions", desc: "From branding and software architecture to ERP deployment under one single roof." },
              { title: "Affordable & Transparent Pricing", desc: "Highly cost-effective and scalable packages tailored for both startups and enterprises." },
              { title: "24/7 Dedicated Support", desc: "Reliable, round-the-clock technical monitoring for all automation workflows and servers." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={26} />
                <div>
                  <h4 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-5 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Ready To Multiply Your Business Revenue?
          </h2>

          <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto font-light">
            Let's customize a roadmap for your brand using advanced SEO, high-converting websites, 
            tailored ERP Systems, and next-gen AI automation workflows.
          </p>

          <button className="bg-white text-red-700 hover:bg-red-50 px-10 py-4 rounded-2xl font-extrabold text-lg shadow-xl shadow-red-950/20 transition-all duration-300 transform hover:-translate-y-1">
            Contact Us Today
          </button>
        </div>
      </section>

    </div>
  );
}

export default BusinessBranding;