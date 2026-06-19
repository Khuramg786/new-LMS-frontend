import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle2, 
  BarChart3, 
  ShoppingBag, 
  Package, 
  Cpu, 
  HardDrive, 
  Layers, 
  Users2, 
  HeartHandshake, 
  GitBranch,
  Target,
  FileCheck,
  ShieldAlert,
  Coins,
  Combine,
  Clock,
  ArrowRight
} from "lucide-react";

function ERPDetails() {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState("sales");

  // پیج لوڈ ہونے پر اسکرین ٹاپ پر جائے گی
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // تمام 9 ماڈیولز کا منفرد اور معلوماتی ڈیٹا
  const erpModules = [
    {
      id: "sales",
      title: "Sales Management",
      icon: <BarChart3 className="text-blue-600" size={24} />,
      tagline: "Quotation to Cash Automation",
      desc: "Boost your sales and productivity by smartly managing your sales cycle from quotation to sales invoice.",
      highlights: ["Instant Invoice Generation", "Sales Pipeline Tracking", "Customer Credit Limits", "Automated Tax Calculations"]
    },
    {
      id: "procurement",
      title: "Procurement & Sourcing",
      icon: <ShoppingBag className="text-cyan-600" size={24} />,
      tagline: "Smart Spending & Supplier Controls",
      desc: "Enhance your supplier management while efficiently tracking your cost. Efficient tracking of your spending and suppliers.",
      highlights: ["Purchase Requisitions (PR)", "Supplier Comparison Grids", "Automated PO Approvals", "Land Cost Calculations"]
    },
    {
      id: "inventory",
      title: "Inventory & Warehouse",
      icon: <Package className="text-amber-600" size={24} />,
      tagline: "Real-Time Multi-Location Stock Tracking",
      desc: "Monitor your product levels, orders, deliveries, and multiple warehouse locations fluidly without human errors.",
      highlights: ["Reorder Point Alerts", "Batch & Serial Management", "Stock Auditing Logs", "Inter-Branch Stock Transfer"]
    },
    {
      id: "production",
      title: "Assembling & Production",
      icon: <Cpu className="text-red-600" size={24} />,
      tagline: "Advanced Manufacturing Control",
      desc: "Provides ease of multi batch production system, time and item based job costing and helps to track your BOM.",
      highlights: ["Multi-Stage Bill of Materials", "Live Job Costing Analytics", "Work-in-Progress (WIP) Tracking", "Batch Production Planning"]
    },
    {
      id: "assets",
      title: "Asset Management",
      icon: <HardDrive className="text-purple-600" size={24} />,
      tagline: "Lifecycle Tracking & Valuations",
      desc: "Record and track your asset's details, allocation, movement, depreciation, and final disposal status.",
      highlights: ["Automated Depreciation Matrix", "Asset Audit Tracker", "Maintenance Logs", "Location-Wise Allocation"]
    },
    {
      id: "finance",
      title: "Financial Management",
      icon: <Layers className="text-emerald-600" size={24} />,
      tagline: "Fiscal Governance & Ledgers",
      desc: "Keep a close eye on your cash flows, budgeting, financial reporting, and comprehensive multi-currency ledgers.",
      highlights: ["Real-Time P&L Statements", "Automated Balance Sheets", "Cash Flow Forecasting", "Multi-Currency Alignment"]
    },
    {
      id: "hr",
      title: "HRM & Smart Payroll",
      icon: <Users2 className="text-indigo-600" size={24} />,
      tagline: "Workforce Lifecycle Automation",
      desc: "Effectively manage full employee life cycle from recruiting, biometric attendance synchronization, up to final separation.",
      highlights: ["Biometric Attendance Sync", "One-Click Payroll Generation", "Leave Approval Portal", "Expense Claims Tracker"]
    },
    {
      id: "crm",
      title: "CRM Solutions",
      icon: <HeartHandshake className="text-pink-600" size={24} />,
      tagline: "Customer Retention & Growth",
      desc: "Maximize your sales efforts, streamline customer interactions, and enhance your long-term engagement metrics.",
      highlights: ["Lead Tracking Pipeline", "Customer Interaction History", "Follow-Up Auto Reminders", "Support Ticket Management"]
    },
    {
      id: "projects",
      title: "Project Management",
      icon: <GitBranch className="text-teal-600" size={24} />,
      tagline: "Milestone & Execution Matrix",
      desc: "Efficient planning, initiation, executing, monitoring and closing of complex industrial or service projects.",
      highlights: ["Gantt Chart Timelines", "Task-Wise Resource Costing", "Project Burn-Rate Alerts", "Milestone Delivery Tracker"]
    }
  ];

  // Eccountant گروتھ اور ویلیو کارڈز
  const businessValues = [
    { icon: <Target className="text-blue-600" />, title: "Improved Decision Making", desc: "Live operational intelligence dashboards give executives complete data metrics to act instantly." },
    { icon: <Combine className="text-cyan-600" />, title: "Better Integration", desc: "Seamlessly binds all business functions from sales and shop floor directly to the accounting ledger." },
    { icon: <Coins className="text-emerald-600" />, title: "Best Value for Money", desc: "No complex licensing structures or hidden per-user cost traps. Highly scalable and cost-effective." },
    { icon: <Clock className="text-amber-600" />, title: "Improved Efficiency", desc: "Removes spreadsheet dependencies and human errors by automating daily redundant tasks." },
    { icon: <FileCheck className="text-indigo-600" />, title: "Scalability & Flexibility", desc: "Adaptable structures that grow organically alongside your business expansions and branch networks." },
    { icon: <ShieldAlert className="text-red-600" />, title: "Cloud Storage & Data Security", desc: "Bank-grade data encryption safeguards your unique formulas, BOM lists, and financial logs safely." }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate("/BusinessBranding")}
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Corporate Portal
          </button>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Eccountant Cloud Core
            </span>
          </div>
        </div>
      </header>

      {/* Hero Presentation Section */}
      <section className="bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pt-20 pb-16 px-5 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Next-Gen <span className="text-blue-600">ERP Solution</span> <br />
            Built for Modern Enterprises
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Elevate your business performance, reduce costs, and stay ahead in the competitive landscape with the centralized power of our cloud-based ERP system.
          </p>
        </div>
      </section>

      {/* INTERACTIVE EXPERIENCE: Split Dashboard View */}
      <section className="max-w-7xl mx-auto py-20 px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">Architecture Showcase</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Functional Modules
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-md">
            Click on any business segment to visualize how our unified software replaces manual friction with absolute automation.
          </p>
        </div>

        {/* Master Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 9 Modules Selectors */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {erpModules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex gap-4 items-center ${
                  activeModule === mod.id 
                    ? "bg-white border-blue-600 shadow-md ring-1 ring-blue-100 text-slate-900 translate-x-1" 
                    : "bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  activeModule === mod.id ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-500"
                }`}>
                  {mod.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm md:text-base tracking-tight text-slate-900">{mod.title}</h3>
                  <p className="text-xs text-slate-400 font-medium truncate mt-0.5">{mod.tagline}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Live Presentation Viewport */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 sticky top-24">
            {erpModules.map((mod) => {
              if (mod.id !== activeModule) return null;
              return (
                <div key={mod.id} className="space-y-6 animate-fadeIn">
                  
                  {/* Title Bar */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      {mod.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">{mod.title}</h3>
                      <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase">{mod.tagline}</p>
                    </div>
                  </div>

                  {/* Core Description Text */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Module Functionality</h4>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-normal">
                      {mod.desc}
                    </p>
                  </div>

                  {/* Dynamic Custom Capabilities Checkboxes */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Operational Architecture Includes:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {mod.highlights.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-2xs">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          <span className="text-xs md:text-sm text-slate-600 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* More Details Click Action Button */}
                 {/* More Details Click Action Button */}
<div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
  <span className="text-xs font-medium text-slate-400">Want to explore documentation & analytics?</span>
  <button 
    onClick={() => navigate("/erp/SalesManager", { state: { targetModule: mod.id } })} // یہاں آپ کا فکسڈ روٹ استعمال ہوا ہے
    className="inline-flex items-center gap-2 text-xs font-bold bg-slate-950 text-white px-5 py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-xs group"
  >
    More Details
    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
  </button>
</div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES / WHY ECCOUNTANT GRID */}
      <section className="bg-white py-20 px-5 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Eccountant Can Help to Grow Your Business!
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Discover how integrating our unified infrastructure maximizes returns and deletes operating bottlenecks.
            </p>
          </div>

          {/* Value Cards Grid System */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessValues.map((val, i) => (
              <div key={i} className="bg-slate-50/50 border border-slate-200/80 p-6 rounded-xl hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-slate-200 mb-4 shadow-2xs group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                  {val.icon}
                </div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-5xl mx-auto py-20 px-5 text-center">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 md:p-16 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent)] pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-xl mx-auto leading-tight">
            Ready to Centralize Your Factory & Store Workflows?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto font-normal opacity-90">
            Let's map out your existing spreadsheets and build a highly scalable, automated cloud hub tailored completely around your team.
          </p>
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base">
              Schedule a Custom Demo Meeting
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ERPDetails;