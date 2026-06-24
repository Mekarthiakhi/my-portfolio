import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolio";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, BookOpen, X, Layers, CheckCircle2, Cpu, TrendingUp } from "lucide-react";

const caseStudies = {
  "Auto Job Apply Bot": {
    summary: "High-performance automated job application engine built with TypeScript and Puppeteer to streamline the job hunting workflow.",
    problem: "Manual job applications are repetitive, slow, and take hundreds of hours of manual copy-pasting, making it hard to apply at scale.",
    architecture: "Modular TypeScript application using Puppeteer for automated browser control, with support for custom configuration profiles.",
    optimizations: "Request interception to block image/stylesheet downloads, cutting network bandwidth and execution speed by over 60%.",
    challenges: "Bypassing bot detection measures and parsing highly dynamic, nested form layouts across disparate job portals.",
    impact: "Successfully automates application submission under 15 seconds per job, reducing manual tracking effort by 90%.",
    role: "Lead Engineer — Designed the browser automation flows, form selector parser, and state persistence manager."
  },
  "DSA Practice Visualizer": {
    summary: "Interactive educational platform visualizing complex call stacks, recursion trees, and algorithm execution flows.",
    problem: "Abstract DSA concepts like recursion, backtracking, and tree traversals are difficult to debug and visualize for students.",
    architecture: "React SPA utilizing Framer Motion for execution step animations, powered by a sandboxed code runner.",
    optimizations: "Virtual DOM diffing optimizations to render highly complex trees and graphs at 60 FPS during fast animation playback.",
    challenges: "Creating a step-by-step state capture hook that accurately snapshots recursion depths and variable frames.",
    impact: "Delivers an intuitive call stack visualizer helping developers solve complex algorithmic exercises 50% faster.",
    role: "Frontend Architect — Crafted the interactive node-link graph layouts and custom step-execution hooks."
  },
  "Compliance Graph Visualizer": {
    summary: "Interactive force-directed node relationship graph mapping medical compliance rules and hierarchical structures.",
    problem: "Healthcare compliance systems contain thousands of nested, complex legal rules that are hard to audit manually.",
    architecture: "D3.js force layout integrated into a React SPA, rendering interactive SVG nodes representing compliance items.",
    optimizations: "Quadtree optimization for fast collision detection in force layouts, rendering 500+ nodes smoothly on mobile browsers.",
    challenges: "Maintaining SVG scale-to-fit coordinates and smooth zooming/panning transitions on smaller viewports.",
    impact: "Reduced audit times for compliance specialists by 70%, making rule conflicts visually obvious.",
    role: "Lead UI Developer — Designed the D3 force-directed canvas, search indices, and path-tracing logic."
  },
  "Real-Time Chat App": {
    summary: "Responsive instant messaging application with real-time persistence and presence tracking.",
    problem: "Unreliable WebSocket reconnections led to lost messages and out-of-order conversations.",
    architecture: "React.js + Socket.io, backed by Firebase dynamic persistent layers for offline mode support.",
    optimizations: "Local-storage message queuing and lazy thread queries to reduce client load times.",
    challenges: "Maintaining message consistency and typing state during intermittent cellular dropouts.",
    impact: "Seamless real-time syncing with under 50ms message propagation time.",
    role: "Frontend Developer — Engineered Socket.io state manager, presence-indicator tracking, and chat lists."
  },
  "DealScout AI Dashboard": {
    summary: "High-performance web dashboard displaying real-time deals with AI product comparisons.",
    problem: "Recurrent API queries to deal aggregators resulted in rate limits and slow load times.",
    architecture: "Vite + React SPA with smart request throttling and Node.js server proxies.",
    optimizations: "Fixed skeleton states and pixel-precise element dimensions to eliminate layout shifts.",
    challenges: "Integrating disparate API payloads into a standardised comparison schema dynamically.",
    impact: "Live deal discovery from multiple sources in under 400ms.",
    role: "Frontend Developer — Engineered comparison dashboard UI, skeleton placeholders, and AI comparison views."
  },
  "Loan Management System": {
    summary: "Interactive financial app with advanced amortization calculation engines and CSV export.",
    problem: "Legacy spreadsheet tools led to calculation errors and lacked centralised access.",
    architecture: "React SPA backed by Firebase Cloud Firestore with Tailwind CSS styling.",
    optimizations: "Optimized component re-rendering cycles for real-time interest calculation charts.",
    challenges: "Implementing client-side exports of massive financial datasets without blocking main JS thread.",
    impact: "Reduced loan tracking inaccuracies to 0% and dramatically simplified account audits.",
    role: "Frontend Developer — Built dynamic financial calculators, dashboard statistics, and dark mode features."
  },
  "Real-Time Notification System": {
    summary: "High-throughput token delivery gateway delivering instant notifications to medical personnel across desktop and mobile.",
    problem: "Legacy polling created massive server overhead and delayed life-critical notifications by up to 5 minutes.",
    architecture: "Event-driven pub-sub engine using Node.js + WebSockets for active channels and Firebase FCM for background workers.",
    optimizations: "Connection pooling, batch scheduling, and service worker token compression — reducing delivery overhead by 42%.",
    challenges: "Handling background notifications reliably across strict Android/iOS power management profiles and sleep states.",
    impact: "100% delivery rate for critical alerts; latency reduced from minutes to sub-second (<250ms).",
    role: "Lead Systems Engineer — Designed the notification dispatch scheduler and integrated background service worker push-receivers."
  },
  "Patient Portal Dashboard": {
    summary: "Secure patient-centric portal delivering instantly downloadable radiology, pathology, and lab diagnostic reports.",
    problem: "Physical report retrieval required clinic visits, increasing waiting room congestion and delaying patient care.",
    architecture: "Decoupled React.js frontend authenticated via OTP, backed by a robust Node.js API.",
    optimizations: "Client-side rendering with optimistic UI updates and static asset caching for near-instant navigation.",
    challenges: "Ensuring HIPAA compliance and securing sensitive medical PDF assets at rest and in transit.",
    impact: "Eliminated physical pick-up waiting times by 100%; increased secure digital delivery efficiency.",
    role: "Frontend Architect — Built the responsive dashboard UI and engineered securely signed PDF retrieval APIs."
  }
};

const filters = ["All", "Full Stack", "Backend", "Frontend", "Automation"];

const matchFilter = (p, f) => {
  if (f === "All") return true;
  if (f === "Automation") return p.category?.toLowerCase().includes("automation") || p.tech.some(t => t.toLowerCase().includes("puppeteer") || t.toLowerCase().includes("automation"));
  return p.category === f || p.tech.some(t => t.toLowerCase().includes(f.toLowerCase()));
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Projects() {
  const [ref, inView] = useInView();
  const [activeFilter, setActiveFilter] = useState("All");
  const [caseStudy, setCaseStudy] = useState(null);
  const filtered = projects.filter(p => matchFilter(p, activeFilter));

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 w-full overflow-hidden bg-[#030712]"
    >
      {/* Visual glowing stars and radial overlays */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          
          {/* Section Title */}
          <motion.div variants={cardVariants} className="mb-14 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              03 / Digital Assets
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">Deployments.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Open-source modules, automation tools, and full-scale web platforms built with precision.
            </p>
          </motion.div>

          {/* Filter Toolbar */}
          <motion.div 
            variants={cardVariants} 
            className="flex flex-wrap gap-2.5 mb-10 pb-6 border-b border-white/5"
          >
            {filters.map(f => (
              <button 
                key={f} 
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-950/40 border border-violet-400/20 scale-[1.02]'
                    : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, idx) => {
                const isFeatured = project.title.includes("Auto Job") || project.title.includes("DSA Practice");
                const bobAnimation = idx % 2 === 0 ? "animate-drift-1" : "animate-drift-2";
                
                return (
                  <motion.div
                    key={project.title}
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    className={`zero-g-glass rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${bobAnimation} hover:neon-glow-violet`}
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {/* Top Accent Strip */}
                    <span 
                      className="absolute top-0 left-0 right-0 h-[2px]" 
                      style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                    />

                    <div>
                      {/* Top Bar: Icon + External Links */}
                      <div className="flex justify-between items-start mb-5">
                        <div 
                          className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
                          style={{
                            backgroundColor: `${project.color}12`,
                            border: `1px solid ${project.color}25`
                          }}
                        >
                          {project.icon}
                        </div>
                        
                        <div className="flex gap-2">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="GitHub Repository" 
                            className="w-8 h-8 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                          >
                            <FaGithub size={14} />
                          </a>
                          {project.demo && project.demo !== '#' && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              title="Live Deployment"
                              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                              style={{
                                backgroundColor: `${project.color}15`,
                                border: `1px solid ${project.color}30`,
                                color: project.color
                              }}
                            >
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Title + Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-base font-bold text-white tracking-wide">{project.title}</h3>
                        {isFeatured && (
                          <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/35 text-amber-400">
                            ★ Key Repo
                          </span>
                        )}
                        {project.title.toLowerCase().includes("graph") && (
                          <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider bg-violet-500/10 border border-violet-500/35 text-violet-400">
                            Hologram
                          </span>
                        )}
                      </div>

                      {/* Project Description */}
                      <p className="text-xs text-slate-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Feature Checklist Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.features.map(f => (
                          <span 
                            key={f} 
                            className="text-[9px] font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-400 uppercase tracking-wider"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Tech Icons + Case Study Trigger */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5 mt-auto">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map(t => (
                          <span 
                            key={t} 
                            className="text-[9px] font-bold font-mono px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: `${project.color}08`,
                              border: `1px solid ${project.color}15`,
                              color: project.color
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setCaseStudy(project.title)}
                        className="flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <BookOpen size={12} /> 
                        <span className="font-mono uppercase tracking-widest text-[9px]">Case Study</span>
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Futuristic Case Study Slide-Over Panel */}
      <AnimatePresence>
        {caseStudy && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setCaseStudy(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            />
            
            {/* Slide-over Container */}
            <motion.div
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 200 }}
              className="fixed top-0 right-0 h-full z-[55] w-full max-w-xl overflow-y-auto bg-[#050a15] border-l border-white/10 shadow-2xl shadow-black/80 flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-[#050a15]/90 backdrop-blur-md border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{projects.find(p => p.title === caseStudy)?.icon}</span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">{caseStudy}</h3>
                </div>
                <button 
                  onClick={() => setCaseStudy(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest bg-white/5 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={12} /> CLOSE
                </button>
              </div>

              {/* Case Study Details */}
              {caseStudies[caseStudy] && (
                <div className="p-6 sm:p-8 flex flex-col gap-6 text-xs sm:text-sm text-slate-400 leading-relaxed overflow-y-auto">
                  
                  {/* Summary */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <CheckCircle2 size={14} className="text-violet-400" />
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-white font-bold">Executive Overview</h4>
                    </div>
                    <p>{caseStudies[caseStudy].summary}</p>
                  </div>

                  {/* Problem statement (danger backdrop) */}
                  <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/15">
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-rose-400 font-bold mb-2">The Architecture Pain Point</h4>
                    <p className="text-slate-300">{caseStudies[caseStudy].problem}</p>
                  </div>

                  {/* System Architecture */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Layers size={14} className="text-violet-400" />
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-white font-bold">Structural Blueprint</h4>
                    </div>
                    <p>{caseStudies[caseStudy].architecture}</p>
                  </div>

                  {/* Performance Optimizations (success backdrop) */}
                  <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold mb-2">Telemetry Optimizations</h4>
                    <p className="text-slate-300">{caseStudies[caseStudy].optimizations}</p>
                  </div>

                  {/* Technical Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Cpu size={14} className="text-violet-400" />
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-white font-bold">Core Engineering Blockers</h4>
                    </div>
                    <p>{caseStudies[caseStudy].challenges}</p>
                  </div>

                  {/* Role and Impact Box */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-950/20 to-cyan-950/20 border border-white/5 flex flex-col gap-4">
                    <div>
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-violet-400 font-bold mb-2">My Deployment Vector</h4>
                      <p className="text-white font-semibold">{caseStudies[caseStudy].role}</p>
                    </div>
                    
                    <div className="border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={13} className="text-cyan-400" />
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-bold">Measurable Gains</h4>
                      </div>
                      <p className="text-cyan-300 font-bold text-sm sm:text-base font-mono">{caseStudies[caseStudy].impact}</p>
                    </div>
                  </div>

                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
