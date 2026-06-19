import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Zap,
  Check,
  MessageSquare,
  Users,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
  Send,
  Sliders,
  CheckCircle2
} from "lucide-react";

function WhatsAppAutomationDetails() {
  const navigate = useNavigate();

  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-800 min-h-screen selection:bg-emerald-600 selection:text-white">
      
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
          <span className="text-xs font-black tracking-widest uppercase text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5">
            <MessageCircle size={12} className="text-emerald-600" /> Enterprise Chat Solutions
          </span>
        </div>
      </header>

      {/* Hero Section: Sleek, High-Impact Communication Concept */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-24 px-5 border-b border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: Dynamic Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-emerald-950/40">
                <Sparkles size={12} /> High-Conversion Chat Ecosystems
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Engage & Sell Instantly on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  WhatsApp Automation
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Meet your global audience where they are already active. We build intelligent, highly reliable WhatsApp automation engines that instantly handle customer support, execute fully automated lead generation funnels, and capture direct orders over secure chat interfaces.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-semibold border-l-4 border-emerald-500 pl-4">
                Utilizing the official, robust WhatsApp Cloud API infrastructure to ensure zero phone number bans—we layout intelligent messaging structures that keep your company operational every single minute of the day.
              </p>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 hover:from-emerald-500 hover:via-emerald-600 hover:to-teal-500 text-white px-10 py-5 rounded-2xl font-black text-base shadow-xl shadow-emerald-950/50 transition-all duration-300 hover:-translate-y-1">
                  Launch Your WhatsApp Automation Strategy
                </button>
              </div>
            </div>
            
            {/* Right Side: Hero Visual Wrapper */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-800 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Customer interactive chat layout visual reference" 
                    className="w-full h-96 object-cover rounded-2xl opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">98% Average Open Rate</p>
                    <p className="text-sm font-bold text-white mt-0.5">Instant Broadcasting, API Webhooks & Live CRM Routing</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SPECIFIC AUTOMATION WEB SOLUTIONS WE BUILD */}
      <section className="bg-white py-24 px-5 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-emerald-600 text-xs font-black tracking-widest uppercase block">Our Implementations</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Turn Inbound WhatsApp Chats Into Revenue Pipelines
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              We specialize in setting up clean, friction-free conversational experiences that move customers from inquiry to purchase in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1: Intelligent AI Support Bots */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=600&q=80" 
                  alt="Customer support assistant digital workspace mapping setup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Automated Intake</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    AI Customer Support <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Instantly answer FAQs, share digital product catalogs, track outstanding order shipments, and process structured trouble tickets without requiring manual customer service staff intervention.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">FAQ Database</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Instant Retain</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Automated Lead Generation & Broadcasts */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                  alt="Digital analytical business marketing conversion pipelines" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">High Conversion</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Smart Lead Generation <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Capture user emails, verify telephone contact variables via automated OTP workflows, and execute clean interactive chat quizzes to qualify serious inbound sales candidates instantly.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">OTP Tracking</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Lead Capture</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Live Human Takeover & Team Routing */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-2612b75d8953?auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration customer support agents sitting together working" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Team Routing</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Multi-Agent Dashboards <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    When complex inquiries require direct human intervention, the AI seamlessly routes the active chat to specialized account managers on your team without disconnecting the live customer.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Live Chat Sync</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Team Inbox</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPREHENSIVE WHATSAPP INTEGRATION TECH STACK (Using Simple Icons CDN) */}
      <section className="max-w-7xl mx-auto py-24 px-5">
        <div className="text-center mb-16 space-y-3">
          <span className="text-emerald-600 text-xs font-black tracking-widest uppercase block">Ecosystem Integrity</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            The Integration Stack We Master
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We directly orchestrate official automation pathways to connect your customer chats to your internal corporate operational data structures.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Official WhatsApp Cloud API Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#25D366] hover:shadow-emerald-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/whatsapp/25D366" 
                  alt="WhatsApp Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Official Cloud API</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct integration with Meta's developer servers. Guarantees high-speed automated bulk broadcasting pipelines, webhooks, and long-term hosting safety parameters.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#25D366]" /> Official Meta Pipelines
            </div>
          </div>

          {/* Node.js Core Automation Engines Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#339933] hover:shadow-green-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/nodedotjs/339933" 
                  alt="NodeJS Official Server Code Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Node.js Backends</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lightning-fast server layers built to process incoming webhooks, maintain conversation state memory, and instantly trigger conditional text messaging answers.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#339933]" /> High-Concurrent Logic
            </div>
          </div>

          {/* Dialogflow NLU Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#FF9800] hover:shadow-orange-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/dialogflow/FF9800" 
                  alt="Google Dialogflow Intelligent Intent Icon" 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Intelligent NLU</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google Dialogflow and custom NLP frameworks that analyze user underlying intent, allowing the system to comprehend typos, local slang, and unstructured requests accurately.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#FF9800]" /> Natural Intent Decoding
            </div>
          </div>

          {/* CRM Hubspot / Custom DB Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#FF7A59] hover:shadow-orange-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-deep-orange-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/hubspot/FF7A59" 
                  alt="Hubspot External Corporate CRM Data Platform Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">CRM Synchronization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Flawless connections linking chat data directly to Hubspot, Salesforce, or your own internal custom database structures to log leads instantly.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#FF7A59]" /> Automated Lead Syncing
            </div>
          </div>

        </div>
      </section>

      {/* CORE INFRASTRUCTURE WORKFLOW METHODOLOGY */}
      <section className="bg-slate-950 text-white py-24 px-5 border-y border-slate-900">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Section 1: Interaction Architecture */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="Software development team tracking analytical user interface logs" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Interactive Quick Replies & Dynamic Rich Media Messaging</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Simple walls of text turn potential buyers away. We craft highly interactive conversation trees with crisp choice buttons, quick product list components, layout carousels, and automated PDF invoice generation modules. This structured layout makes it incredibly simple for users to navigate options and complete transactions inside a native message box.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Actionable CTA Buttons</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Instant Media Pipelines</span>
              </div>
            </div>
          </div>

          {/* Section 2: Security & Official API Architecture */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Enterprise Security Guardrails & Meta Compliance Protocols</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Using unverified third-party scraping scripts or custom modifications to automate messages will result in complete account termination from Meta. We build exclusively on top of verified corporate webhook endpoints, utilizing your direct developer cloud tokens to preserve absolute compliance parameters and data protection standards.
              </p>
              <div className="flex gap-4 items-center bg-slate-900 p-4 rounded-xl border border-slate-800/80">
                <Smartphone size={24} className="text-emerald-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Every conversational automation sequence is fully monitored by live diagnostics analytics dashboards, tracking your delivery percentages, user response ratios, and intake performance metrics.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                  alt="High-security mobile device layout checking network logs" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STRATEGIC ADVANTAGE CHECKLIST */}
      <section className="max-w-4xl mx-auto py-24 px-5">
        <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-12">
          Operational Benchmarks of Our Conversational Engines
        </h3>
        <div className="space-y-4">
          {[
            { id: "01", title: "Instant Inbound Response Speeds", text: "Eliminate customer drop-off completely. The system registers incoming webhooks instantly and shoots back highly contextual replies in under 200 milliseconds." },
            { id: "02", title: "Massive Drop in Inbound Call Center Expenses", text: "By allowing automated conversation structures to handle over 80% of repetitive order tracking and baseline FAQ queries, your staff stays hyper-focused on high-tier sales operations." },
            { id: "03", title: "Direct Cloud Source Infrastructure Ownership", text: "All API integrations, conversation flow code architectures, and developer portal permissions remain 100% your exclusive, secure organizational property." }
          ].map((item) => (
            <div key={item.id} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-0.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xs shrink-0">
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
      <section className="bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-3xl mx-auto px-5 space-y-6 relative z-10">
          <MessageCircle className="mx-auto text-emerald-400 animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Automate Inbound Customer Conversations?
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stop losing premium business leads to sluggish response delays. Let our development team build a fast, officially compliant chat ecosystem tailored for your growth targets.
          </p>
          <div className="pt-4">
            <button className="bg-white text-slate-950 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Initiate Your Automated Chat Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default WhatsAppAutomationDetails;