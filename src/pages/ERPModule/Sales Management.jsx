import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, ShieldCheck, FileText, BadgeDollarSign,
  History, BellRing, BarChart3, CalendarDays,
  Briefcase, Users, Timer, Layers,
  MapPin, RefreshCw, Barcode, AlertTriangle,
  Settings, Layers3, Cpu, Hammer, ShoppingCart,
  Building2, Landmark, Wallet, Scale, LineChart,
  UserCheck, Clock, CalendarX, Banknote, Scissors,
  FileSpreadsheet, Target, MessageSquare, Users2, Megaphone,
  MonitorDot, Store, Layers2, FileBox, Calculator, PieChart
} from 'lucide-react';

const SalesManager = () => {
  // Animation Variants for Framer Motion
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans selection:bg-blue-500 selection:text-white">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-900/60">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight leading-tight">
            Eccountant ERP Core Capabilities
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive, structured solution crafted to transform sales, operations, logistics, and corporate administration.
          </p>
        </div>
      </header>

      {/* Main Content Modules */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24 md:space-y-32">

        {/* MODULE 01: Commercial Sales Hub */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 01</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Commercial Sales Hub</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Retaining customers is the ultimate goal for any business. In a highly competitive marketplace, efficient operations management is key to converting that goal into reality. Recognizing this, <span className="font-semibold text-blue-600">Eccountant</span> delivers deep visibility into client interactions, supporting everything from transaction history and product mapping to full or partial payment recoveries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BadgeDollarSign className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Price Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Control pricing tiers and matrices.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileText className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Sales Quotations Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Generate and dispatch strategic quotes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <TrendingUp className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Sales Order Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Track pipeline deals to fulfillment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <ShieldCheck className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Sales Approval System</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Multi-level authorization workflows.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileText className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Online Sales Invoicing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Instant, secure digital billing operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <History className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">History of Previous Sales</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Deep records of client transactions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BellRing className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Customer Payment Reminders</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated prompts for due balances.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BarChart3 className="text-blue-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Sales Reports</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Comprehensive real-time analytics.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://www.gep.com/prod/s3fs-public/blog-images/smart-inventory-management-system.jpg"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>


        {/* MODULE 02: Acquisition & Procurement Hub */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://flexi-project.com/wp-content/uploads/2026/05/Project-Management-Maturity-in-IT-What-the-COI-Study-Reveals-and-How-FlexiProject-Closes-the-Gaps.png"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 02</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Acquisition & Procurement Hub</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Enterprises frequently face roadblocks when dealing with complex corporate workflows involving numerous stakeholders. Without a unified strategic methodology, delivering projects on schedule while maintaining top-tier quality standards is challenging. This module establishes a concrete structure to harmonize vendor relations and purchase operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <CalendarDays className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Planning and Scheduling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Establish project maps & milestones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Briefcase className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Project Budgeting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Control operational cash allocations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Users className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Resource Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Optimize staff and task matches.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Layers className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Team Collaboration</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Central messaging environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Timer className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Time Tracking</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Log operational project durations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BarChart3 className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Reporting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Analytical insights into completions.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* MODULE 03: Stock & Inventory Infrastructure */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 03</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Stock & Inventory Infrastructure</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              This framework is engineered specifically to match the unique operating needs of local manufacturing ecosystems. From goods receipt and pipeline listing to automatic document matching, information flows naturally. It delivers precise governance over logistics using barcode and RFID utilities to track item placement seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Settings className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Manage Products</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Centralized item classification matrix.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <RefreshCw className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Inventory Adjustment</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Reconcile current balances dynamically.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <MapPin className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Track Product’s Location</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Pinpoint items in storage facilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Layers3 className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Internal Transfer</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Move goods between storage complexes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Cpu className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Items Processing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Streamline routing and picking queues.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Barcode className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Bar codes and scanning</h4>
                  <p className="text-xs text-slate-500 mt-0.5">RFID scanning configurations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100 sm:col-span-2">
                <AlertTriangle className="text-amber-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Notification to vendors</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated communications for immediate stock replenishments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://www.ramco.com/hs-fs/hubfs/resources-images/logistics/role-of-the-wms.webp?width=1000&height=667&name=role-of-the-wms.webp"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>


        {/* MODULE 04: Production & Assembly Core */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://interlakemecalux.cdnwm.com/img/blog/make-to-order.1.9.jpg"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 04</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Production & Assembly Core</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Operating as an assemble-to-order (ATO) system means managing tailored configurations constantly. Our interface delivers live stock assessments, layered bills of materials, and production sequencing. Track materials by lot or serial keys across various nationwide processing setups while linking internal logistics directly with your core database.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Cpu className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Resource Planning</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Optimize plant assets and floor materials.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BarChart3 className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Labor Reporting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Log personnel efficiency statistics.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Layers className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Item sets</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Bundle component items efficiently.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileText className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Bills of Material</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Manage multi-level assembly recipes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Hammer className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Production orders</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Dispatch and execute shop floor jobs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BadgeDollarSign className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Item cost calculation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Trace explicit landing and processing costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <ShoppingCart className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Make to order</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Instantly trigger production from sales validation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <RefreshCw className="text-violet-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Product Life Cycle Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Trace items from conceptualization to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* MODULE 05: Corporate Asset Registry */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 05</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Corporate Asset Registry</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Overseeing hundreds of corporate holdings can be complex. Utilizing a centralized registry structure helps companies audit physical holdings, industrial machinery, facility fixtures, or intangible holdings through one unified terminal. Cross-departmental evaluation reduces operational overheads and capital expenditures drastically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Building2 className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Asset Registration</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Log new machinery and property nodes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Settings className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Asset Classification</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Categorize tangible and digital items.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Landmark className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Multiple Depreciation methods</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Apply straight-line or reducing balances.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Layers className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Composite Assets</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Group independent sub-units safely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Scale className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Asset Disposal/Retire</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Record write-offs and scrap operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <LineChart className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Asset Revaluation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Recalculate fair values based on markets.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC3ibAI8htuv-QYtGrdJ6AMOg0-qvvfKR6A&s"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>


        {/* MODULE 06: Financial & Ledger Management */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://images.business.com/app/uploads/2022/03/23020223/taxes_pano_Prostock-Studio_getty-3.jpg"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 06</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Financial & Ledger Management</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Corporate accounting is the structural bedrock of any enterprise. Maintaining optimal profit parameters demands meticulous supervision over cash balances, expenses, and liability listings. This matrix streamlines tracking of vouchers, balances, and operational cash-flows while removing double-entry redundancies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileText className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Bookkeeping system</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated accounting ledger trails.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Wallet className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">General Accounting Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Unified accounting sheet infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <ShieldCheck className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Online Voucher Approval system</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Authorize vouchers from remote terminals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Briefcase className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Budget Management System</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Set thresholds on organizational divisions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <TrendingUp className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Cash flow Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Monitor inbound and outbound assets.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <LineChart className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Planning and Forecasting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Model financial trajectories securely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100 sm:col-span-2">
                <BarChart3 className="text-teal-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Financial Reporting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Produce balance summaries and profit statements instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* MODULE 07: Human Capital Management (HRM) */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 07</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Human Capital Management (HRM)</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Human resources form the vital operational spine of sustainable business groups. Automated workflow architectures allow managers to eliminate time-consuming, repetitive logging. This helps shift internal focuses back toward employee culture, long-term talent retention, and optimized structural outputs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <UserCheck className="text-rose-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Attendance management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Biometric logs and attendance recording.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Clock className="text-rose-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Shifts management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Configure alternate multi-tier team shifts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <CalendarX className="text-rose-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Leave management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Track paid and medical leave requests.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Banknote className="text-rose-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Payroll and compensation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated salary distributions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Scissors className="text-rose-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Benefits and deductions</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Track custom additions and policy bounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Scale className="text-rose-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Localized payroll taxation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Inbuilt regulatory legal parameters.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://www.intuit.com/oidam/intuit/ies/en_us/blog/learning-management-system-header-image-us-en.jpg"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>


        {/* MODULE 08: Relations & CRM Suite */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://www.netsuite.com/portal/assets/img/business-articles/thumbnails/thmb-575x383-erp-vs-crm.jpg"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 08</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Relations & CRM Suite</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Inbound revenue channels depend entirely on stable consumer engagement. Deeply evaluating consumer intent remains a critical operational directive. Our CRM builds integrated data landscapes, allowing client care agents to optimize dialogue setups and analyze historical patterns with structured pipelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Target className="text-indigo-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Customer leads and opportunity Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Route pipeline leads smoothly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <MessageSquare className="text-indigo-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Customer inquiries and activities Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Log queries and resolutions centrally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Users2 className="text-indigo-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Sales Team Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Assign regional territories to agents.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileText className="text-indigo-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Contact Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Store comprehensive profile data directories.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileSpreadsheet className="text-indigo-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Schedules reports</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Deliver analytics to inboxes automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Megaphone className="text-indigo-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">CRM campaigns</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Execute structured digital marketing campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* MODULE 09: Enterprise Project Architecture */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-fuchsia-100 text-fuchsia-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 09</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Enterprise Project Architecture</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              Complex client initiatives frequently trigger project overruns when multiple variables interact across siloed structures. Lacking clear workflow transparency makes maintaining scope parameters near impossible. Our module supplies a clear framework that brings absolute order to milestone tracking and deliverable management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <CalendarDays className="text-fuchsia-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Planning and scheduling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Map explicit task timelines and dependencies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Briefcase className="text-fuchsia-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Project Budgeting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Control operational cost margins safely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Users className="text-fuchsia-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Resource Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Balance workforce allocations dynamically.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Layers className="text-fuchsia-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Team collaboration</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Synchronize teams across task nodes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Timer className="text-fuchsia-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Time tracking</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Audit specific hour logs accurately.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <BarChart3 className="text-fuchsia-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Reporting</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Extract detailed performance progress reports.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://media.licdn.com/dms/image/v2/D4D12AQGzDLsJzRnnaQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1730115598830?e=2147483647&v=beta&t=NIVMccPSsCenLvnP8IbZbiDolMGH_J0PUlEPTF_IvMA"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>


        {/* MODULE 10: Retail Omni-Channel POS */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://oceansls.com/wp-content/uploads/2026/04/From-Tool-Collections-to-Integrated-Systems-950x500.webp"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 10</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Retail Omni-Channel POS</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              This terminal provides immediate centralized command over diverse retail complexes. Run multiple stores, introduce new storefronts, and push catalog menu changes instantly across geographical areas. Cross-store analytical frameworks provide deep clarity regarding cash tallies, store inventory levels, and employee activity metrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <MonitorDot className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Head Office Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Central administrative control terminal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Store className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Multiple Outlets management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Govern detached physical retail layers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Layers2 className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Counter wise sale management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Track individual billing lanes accurately.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <ShoppingCart className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Outlet wise purchases</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Log location-specific intake receipts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <FileBox className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Outlet wise stock Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Audit stock numbers per warehouse/shop.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100">
                <Calculator className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Outlet wise Account Management</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Isolate financial reports of individual stores.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100 text-orange-900">
                <BarChart3 className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Outlets Comparative reports</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Contrast performance indexes easily.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-100 text-orange-900">
                <Settings className="text-orange-600 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Integrated with Eccountant ERP</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Native real-time data sync with central server databases.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* MODULE 11: Enterprise Business Intelligence & Reports */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">Module 11</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Business Intelligence & Reports</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              This intelligence module correlates multifaceted financial inputs across functional divisions to provide an overall view of organization health. This framework minimizes risk parameters and structural calculation overheads, ensuring records remain fully prepared for compliance audits at any time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { name: "Financial reports", desc: "Core cash data logs." },
                { name: "Balance sheet", desc: "Assets vs liabilities." },
                { name: "Profit and loss account", desc: "Detailed margin analyses." },
                { name: "Comparison reports", desc: "Evaluate phase milestones." },
                { name: "Cash flow statement reports", desc: "Liquid capital metrics." },
                { name: "Forecasting reports", desc: "Predict future channels." },
                { name: "Payroll Reports", desc: "Track personnel costs." },
                { name: "Banking Reports", desc: "Reconcile account books." },
                { name: "Sales& Purchase reports", desc: "Trace pipeline deals." },
                { name: "Inventory Reports", desc: "Audit stock quantities." },
                { name: "Receivable/Payable reports", desc: "Outstandings vs credits." },
                { name: "Trend reports", desc: "Examine seasonal patterns." }
              ].map((report, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-cyan-300 transition-colors duration-200">
                  <PieChart className="text-cyan-600 w-4 h-4 mb-1" />
                  <h5 className="font-semibold text-xs text-slate-900 leading-tight">{report.name}</h5>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{report.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl h-80 md:h-[450px] shadow-inner border border-slate-200/60 flex items-center justify-center group overflow-hidden relative">
            {/* Hover Effect Layer */}
            <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

            {/* Asal Image Tag */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/559929f0e4b0e9cbf62bbbb4/1641827953410-M2LZ1F4CBHEU4URUYRGX/AdobeStock_447703909.jpeg"
              alt="Project Workspace & Gantt Flow Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.section>

      </main>


    </div>
  );
};

export default SalesManager;