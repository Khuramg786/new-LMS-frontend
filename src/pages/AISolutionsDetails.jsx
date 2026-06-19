import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
  Sparkles,
  Zap,
  Check,
  Cpu,
  MessageSquare,
  Network,
  TrendingUp,
  BrainCircuit,
  ArrowUpRight,
  ShieldAlert,
  Sliders
} from "lucide-react";

function AISolutionsDetails() {
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
            <Bot size={12} className="text-blue-600" /> Next-Gen Automation
          </span>
        </div>
      </header>

      {/* Hero Section: Immersive Intelligent Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-24 px-5 border-b border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side: High-Impact Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-blue-950/40">
                <Sparkles size={12} /> Intelligent Business Automation
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Automate Your Workflows with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Custom AI Solutions
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Stop wasting valuable hours on repetitive, manual tasks. We build intelligent agent systems, custom natural language processing pipelines, and autonomous business operations tailored to cut overhead expenses, optimize accuracy, and scale your productivity 24/7.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-semibold border-l-4 border-indigo-500 pl-4">
                From human-like support chatbots powered by cutting-edge language models, to complete automated data-sync pipelines integrating your existing CRM tools—we deliver enterprise-grade intelligence.
              </p>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-500 hover:via-blue-600 hover:to-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-base shadow-xl shadow-blue-950/50 transition-all duration-300 hover:-translate-y-1">
                  Schedule an AI Strategy Audit
                </button>
              </div>
            </div>
            
            {/* Right Side: Hero Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-800 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                    alt="Premium Futuristic Tech Dashboard Abstract Mesh" 
                    className="w-full h-96 object-cover rounded-2xl opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">Autonomous Systems</p>
                    <p className="text-sm font-bold text-white mt-0.5">Custom LLMs, Automated Agents & Secure Data</p>
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
            <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">What We Deliver</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Custom AI Architecture Built For Modern Operations
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              We focus on building practical, secure software solutions that effortlessly take over high-friction operational bottle-necks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI Type 1: Intelligent Customer Support Bots */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80" 
                  alt="Customer support assistant artificial intelligence interface setup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">24/7 Availability</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Conversational AI Agents <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Trained directly on your company's knowledge base, internal manuals, and product lists. Handles complex customer support intake, processes dynamic orders, and qualifies sales leads perfectly.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Context Aware</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">CRM Sync</span>
                </div>
              </div>
            </div>

            {/* AI Type 2: Automated Workflow Integrations */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" 
                  alt="Digital structural automation data servers processing pipelines" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Zero Manual Work</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Workflow Automation <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Connects your databases, web forms, storage nodes, and email engines. Automatically parses unstructured customer invoices, flags accounting discrepancies, and updates client records instantaneously.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">API Integrations</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Data Parsing</span>
                </div>
              </div>
            </div>

            {/* AI Type 3: Predictive Analytics & Smart Dashboards */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  alt="Data analytical software framework running system metrics charts" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Strategic Insights</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 flex items-center justify-between">
                    Predictive Analytics <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Transform historical metrics into actionable choices. Custom algorithmic modules process internal metrics to forecast sales demands, analyze buyer trends, and protect inventory levels dynamically.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2 text-[10px] font-extrabold tracking-wider uppercase text-slate-600">
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Data Modeling</span>
                  <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Smart Charts</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FRAMEWORKS & MODELS TOOLKIT STACK (With Original Brand Colors via Simple Icons CDN) */}
      <section className="max-w-7xl mx-auto py-24 px-5">
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 text-xs font-black tracking-widest uppercase block">Ecosystem Architecture</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            The AI Frameworks We Deploy & Integrate
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            We build utilizing leading global artificial intelligence platforms to guarantee precision response metrics, robust safety parameters, and fast speeds.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* OpenAI Integration Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#00A170] hover:shadow-emerald-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/openai/00A170" 
                  alt="OpenAI Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">OpenAI Ecosystem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Advanced text processing setups utilizing custom GPT model integrations for semantic understanding, contextual chat, and programmatic text manipulation.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#00A170]" /> GPT-4o Integration Engines
            </div>
          </div>

          {/* Python Core Data Science Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#3776AB] hover:shadow-blue-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/python/3776AB" 
                  alt="Python Language Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Python Infrastructure</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The global gold-standard language for processing logic. Powers our complex scripts, predictive mathematics, data clustering models, and API relays.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#3776AB]" /> Hardcoded Automation Scripts
            </div>
          </div>

          {/* LangChain Automation Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#13294B] hover:shadow-slate-200 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/langchain/13294B" 
                  alt="LangChain Framework Official Brand Icon" 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">LangChain Routing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Advanced framework engineered to hook different model actions together, establishing dynamic context retrieval memory engines and logical multi-step prompts.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#13294B]" /> Multi-Agent Pipelines
            </div>
          </div>

          {/* Hugging Face / Open-Source Models Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-between group hover:border-[#FFD21E] hover:shadow-amber-100/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <img 
                  src="https://cdn.simpleicons.org/huggingface/FFD21E" 
                  alt="Hugging Face Official Brand Icon" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-slate-900">Open-Source Tech</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploying cost-effective, self-hosted localized open-source language engines (like Llama models) directly inside secure data walls to protect operational integrity.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 mt-6 text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
              <Check size={12} className="text-[#FFD21E]" /> Private On-Prem Data Control
            </div>
          </div>

        </div>
      </section>

      {/* ENGINEERING STANDARDS SHOWCASE: Contextual Images */}
      <section className="bg-slate-950 text-white py-24 px-5 border-y border-slate-900">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Section 1: Autonomous Workflow Systems */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                  alt="Intelligent silicon computer processing chipset circuitry architecture" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/20">
                <Network size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Robust API Layering & End-to-End Core Automation</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                An AI element is only as useful as its surrounding data communication stack. We build secure API routing relays that allow custom logic structures to communicate natively with legacy corporate databases, payment rails, and customer management systems. Every component operates under strict multi-layered monitoring loops to avoid loop errors.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Secure Webhook Arrays</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-slate-300">✓ Automated Error Fallbacks</span>
              </div>
            </div>
          </div>

          {/* Section 2: Data Security & Vector Databases */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                <BrainCircuit size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black">Vector Embedding Engines & Iron-Clad Data Privacy</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Corporate data confidentiality is non-negotiable. We configure private vector storage databases (like Pinecone and ChromaDB) using secure sanitation algorithms. This guarantees your internal proprietary information, commercial client trade records, and metrics never bleed into public public model training repositories.
              </p>
              <div className="flex gap-4 items-center bg-slate-900 p-4 rounded-xl border border-slate-800/80">
                <ShieldAlert size={24} className="text-cyan-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Every pipeline integration we deliver includes analytical optimization dials, giving your administrators precise authority parameters over response scoring thresholds and chat histories.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80" 
                  alt="Secure Encrypted Advanced Data Blocks Visualization Nodes" 
                  className="w-full h-72 object-cover rounded-2xl opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE STANDARDS STRATEGY CHECKLIST */}
      <section className="max-w-4xl mx-auto py-24 px-5">
        <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-12">
          The Practical Advantage of Our Intelligent Automations
        </h3>
        <div className="space-y-4">
          {[
            { id: "01", title: "Drastic Operational Overhead Reductions", text: "By deploying autonomous software loops to take over time-intensive document parsing, tier-1 customer inquiries, and data sync tasks, you instantly reallocate hours back to critical scaling operations." },
            { id: "02", title: "Deterministic Response Integrity Guardrails", text: "We explicitly craft fine-tuned validation guardrails, preventing AI conversational systems from producing hallucinated or unverified responses, keeping answers aligned with your actual policy data structures." },
            { id: "03", title: "Complete Independent Proprietary Asset Value", text: "All API keys, semantic database structures, custom scripting pipelines, and agent configuration models remain 100% your private organizational asset." }
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
          <Bot className="mx-auto text-cyan-400 animate-pulse" size={48} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Build a Frictionless Business Engine?
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stop losing thousands of technical production hours to outdated manual processing methods. Let our development team wire a reliable automated system.
          </p>
          <div className="pt-4">
            <button className="bg-white text-slate-950 hover:bg-slate-100 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Initiate Your AI Feasibility Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AISolutionsDetails;