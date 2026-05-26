import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolio";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, BookOpen, X, Layers, CheckCircle2, Cpu, TrendingUp } from "lucide-react";

const caseStudies = {
  "Real-Time Notification System": {
    summary: "High-throughput token delivery gateway delivering instant notifications to medical personnel across desktop and mobile.",
    problem: "Legacy polling created massive server overhead and delayed life-critical notifications by up to 5 minutes.",
    architecture: "Event-driven pub-sub engine using Node.js + WebSockets for active channels and Firebase FCM for background workers.",
    optimizations: "Connection pooling, batch scheduling, and service worker token compression — reducing delivery overhead by 42%.",
    challenges: "Handling background notifications reliably across strict Android/iOS power management profiles and sleep states.",
    impact: "100% delivery rate for critical alerts; latency reduced from minutes to sub-second (<250ms).",
    role: "Lead Systems Engineer — Designed the notification dispatch scheduler and integrated background service worker push-receivers."
  },
  "Hospital Management System": {
    summary: "Robust admin panel automating medical flow, billing transactions, and operational logs.",
    problem: "Manual queue entries created massive registration bottlenecks causing client delays and human error.",
    architecture: "Modular PHP backend with MySQL relational schema, transitioned to service-oriented layers.",
    optimizations: "Optimized indexing and denormalized tables for high-frequency queries, cutting billing load time by 30%.",
    challenges: "Assuring zero downtime and complete data integrity during migration of legacy patient archives.",
    impact: "Reduced billing registration bottleneck by ~40%, increasing patient intake velocity significantly.",
    role: "Lead Full-Stack Developer — Refactored SQL schema and implemented background billing automation pipeline."
  },
  "Patient Portal Dashboard": {
    summary: "Secure patient-centric portal delivering instantly downloadable radiology, pathology, and lab diagnostic reports.",
    problem: "Physical report retrieval required clinic visits, increasing waiting room congestion and delaying patient care.",
    architecture: "Decoupled React.js frontend authenticated via OTP, backed by a robust Node.js API.",
    optimizations: "Client-side rendering with optimistic UI updates and static asset caching for near-instant navigation.",
    challenges: "Ensuring HIPAA compliance and securing sensitive medical PDF assets at rest and in transit.",
    impact: "Eliminated physical pick-up waiting times by 100%; increased secure digital delivery efficiency.",
    role: "Frontend Architect — Built the responsive dashboard UI and engineered securely signed PDF retrieval APIs."
  },
  "URL Shortener": {
    summary: "High-performance microservice for lightning-fast URL redirects with minimal resource overhead.",
    problem: "Traditional SQL lookups caused high latency and database CPU spikes under viral traffic.",
    architecture: "Express.js REST microservice + Redis cache write-through buffer on top of MySQL persistent store.",
    optimizations: "Aggressive Redis cache eviction strategies yielding sub-millisecond redirect processing.",
    challenges: "Resolving race conditions on rapid analytic counts and horizontal scale-out spikes.",
    impact: "Redirect resolution time brought down to <2ms under stress test conditions.",
    role: "Backend Engineer — Set up Redis caching layer, optimized DB indexes, and built the analytics ingestion queue."
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
  "E-Commerce Platform": {
    summary: "Modern store with shopping cart, fast search, and secure payment processing.",
    problem: "Slow checkout funnels and layout shifts caused user friction and lower conversion rates.",
    architecture: "React context-based global store + Express.js backend API + MySQL.",
    optimizations: "Image compression pipelines and query optimizations for dynamic inventory filtering.",
    challenges: "Integrating third-party payment gateways while maintaining clean state validation rollback rules.",
    impact: "Reduced average checkout load speed by 35% with a polished user flow.",
    role: "Full-Stack Engineer — Built cart manager, catalog components, and integrated secure payment modules."
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
};

const filters = ["All", "Full Stack", "Backend", "Frontend", "Healthcare", "Real-Time"];

const matchFilter = (p, f) => {
  if (f === "All") return true;
  if (f === "Healthcare") return ["Hospital Management System","Patient Portal Dashboard","Real-Time Notification System"].includes(p.title);
  if (f === "Real-Time") return p.title.includes("Notification") || p.title.includes("Chat");
  return p.category === f || p.tech.some(t => t.toLowerCase().includes(f.toLowerCase()));
};

const cv = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.07}} };
const cardV = { hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:0.45}} };

export default function Projects() {
  const [ref, inView] = useInView();
  const [activeFilter, setActiveFilter] = useState("All");
  const [caseStudy, setCaseStudy] = useState(null);
  const filtered = projects.filter(p => matchFilter(p, activeFilter));

  return (
    <section
      id="projects"
      style={{
        background: 'var(--bg-secondary)',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="absolute top-1/3 left-0 pointer-events-none" style={{ width:400,height:400,background:'radial-gradient(circle,rgba(99,102,241,0.05) 0%,transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 pointer-events-none"   style={{ width:400,height:400,background:'radial-gradient(circle,rgba(6,182,212,0.05) 0%,transparent 70%)' }} />

      <div className="container" style={{ position:'relative',zIndex:1 }}>
        <motion.div ref={ref} variants={cv} initial="hidden" animate={inView?"visible":"hidden"}>

          {/* Header */}
          <motion.div variants={cardV} style={{ marginBottom:56 }}>
            <div className="section-tag"><span>●</span> Featured Projects</div>
            <h2 className="section-title">Things I've <span className="gradient-text">Shipped</span></h2>
            <p className="section-subtitle">Production-grade systems built with performance, security, and scalability.</p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={cardV} style={{ display:'flex',flexWrap:'wrap',gap:10,marginBottom:44,paddingBottom:28,borderBottom:'1px solid var(--border)' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  padding:'8px 20px',borderRadius:999,fontSize:'0.72rem',fontWeight:700,
                  letterSpacing:'0.05em',transition:'all 0.2s',cursor:'pointer',
                  ...(activeFilter===f
                    ? { background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',boxShadow:'0 4px 18px rgba(99,102,241,0.3)',border:'none' }
                    : { background:'var(--glass)',border:'1px solid var(--glass-border)',color:'var(--text-secondary)' }
                  ),
                }}>{f}</button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-14}} transition={{duration:0.22}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, idx) => {
                const featured = idx===0 && activeFilter==="All";
                return (
                  <motion.div
                    key={project.title}
                    variants={cardV}
                    whileHover={{y:-5,transition:{duration:0.18}}}
                    className="glass-card"
                    style={{
                      padding:'28px 28px',position:'relative',overflow:'hidden',
                      display:'flex',flexDirection:'column',
                      ...(featured ? { gridColumn:'span 2' } : {}),
                    }}
                    onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 20px 48px ${project.color}18`;}}
                    onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';}}
                  >
                    <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${project.color},transparent)` }} />

                    {/* Top: icon + links */}
                    <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:20 }}>
                      <div style={{ width:46,height:46,borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,background:`${project.color}12`,border:`1px solid ${project.color}28`,flexShrink:0 }}>
                        {project.icon}
                      </div>
                      <div style={{ display:'flex',gap:8 }}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="icon-btn" style={{ width:36,height:36 }}>
                          <FaGithub size={14} />
                        </a>
                        {project.demo && project.demo!=='#' && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo"
                            style={{ width:36,height:36,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',background:`${project.color}12`,border:`1px solid ${project.color}28`,color:project.color }}>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title + badges */}
                    <div style={{ display:'flex',flexWrap:'wrap',alignItems:'center',gap:8,marginBottom:10 }}>
                      <h3 style={{ fontSize:'1rem',fontWeight:800,color:'var(--text-primary)' }}>{project.title}</h3>
                      {featured && (
                        <span style={{ padding:'3px 8px',borderRadius:5,fontSize:'0.62rem',fontWeight:800,textTransform:'uppercase',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.25)',color:'#fbbf24' }}>★ Featured</span>
                      )}
                      {(project.title.includes("Hospital")||project.title.includes("Patient")||project.title.includes("Notification")) && (
                        <span style={{ padding:'3px 8px',borderRadius:5,fontSize:'0.62rem',fontWeight:800,textTransform:'uppercase',background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)',color:'#f87171' }}>Healthcare</span>
                      )}
                    </div>

                    <p style={{ fontSize:'0.85rem',color:'var(--text-secondary)',lineHeight:1.75,marginBottom:18,flex:1 }}>{project.description}</p>

                    {/* Feature chips */}
                    <div style={{ display:'flex',flexWrap:'wrap',gap:7,marginBottom:20 }}>
                      {project.features.map(f => (
                        <span key={f} style={{ fontSize:'0.68rem',padding:'4px 10px',borderRadius:6,fontWeight:600,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',color:'var(--text-secondary)' }}>{f}</span>
                      ))}
                    </div>

                    {/* Footer: tech + case study */}
                    <div style={{ display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:12,paddingTop:16,borderTop:'1px solid var(--border)' }}>
                      <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
                        {project.tech.map(t => (
                          <span key={t} style={{ fontSize:'0.65rem',fontWeight:700,padding:'3px 8px',borderRadius:5,background:`${project.color}08`,border:`1px solid ${project.color}1a`,color:project.color }}>{t}</span>
                        ))}
                      </div>
                      <button
                        onClick={() => setCaseStudy(project.title)}
                        style={{ display:'flex',alignItems:'center',gap:5,fontSize:'0.78rem',fontWeight:700,color:'#818cf8',background:'none',cursor:'pointer' }}
                        onMouseEnter={e=>{e.currentTarget.style.color='var(--text-primary)';}}
                        onMouseLeave={e=>{e.currentTarget.style.color='#818cf8';}}
                      >
                        <BookOpen size={13} /> Case Study
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Slide-Over */}
      <AnimatePresence>
        {caseStudy && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={()=>setCaseStudy(null)}
              style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.65)',backdropFilter:'blur(4px)',zIndex:50,cursor:'pointer' }}
            />
            <motion.div
              initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}}
              transition={{type:'spring',damping:28,stiffness:200}}
              style={{
                position:'fixed',top:0,right:0,height:'100%',zIndex:51,
                width:'min(640px,100vw)',overflowY:'auto',
                background:'var(--bg-card)',borderLeft:'1px solid var(--glass-border)',
                boxShadow:'-20px 0 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Panel header */}
              <div style={{ position:'sticky',top:0,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 28px',background:'var(--bg-card)',borderBottom:'1px solid var(--border)',zIndex:1 }}>
                <div style={{ display:'flex',alignItems:'center',gap:12 }}>
                  <span style={{ fontSize:24 }}>{projects.find(p=>p.title===caseStudy)?.icon}</span>
                  <h3 style={{ fontSize:'0.95rem',fontWeight:800,color:'var(--text-primary)' }}>{caseStudy}</h3>
                </div>
                <button onClick={()=>setCaseStudy(null)}
                  style={{ display:'flex',alignItems:'center',gap:6,padding:'7px 14px',borderRadius:8,fontSize:'0.75rem',fontWeight:700,background:'var(--glass)',border:'1px solid var(--glass-border)',color:'var(--text-secondary)',cursor:'pointer' }}>
                  <X size={13} /> Close
                </button>
              </div>

              {/* Panel body */}
              {caseStudies[caseStudy] && (
                <div style={{ padding:'28px 28px',display:'flex',flexDirection:'column',gap:24,fontSize:'0.875rem',lineHeight:1.75,color:'var(--text-secondary)' }}>
                  <div>
                    <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:10 }}>
                      <CheckCircle2 size={14} style={{ color:'#818cf8' }} />
                      <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'var(--text-primary)' }}>Executive Summary</h4>
                    </div>
                    <p>{caseStudies[caseStudy].summary}</p>
                  </div>

                  <div style={{ padding:'18px 20px',borderRadius:12,background:'rgba(239,68,68,0.05)',border:'1px solid rgba(239,68,68,0.15)' }}>
                    <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'#f87171',marginBottom:8 }}>The Problem Solved</h4>
                    <p>{caseStudies[caseStudy].problem}</p>
                  </div>

                  <div>
                    <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:10 }}>
                      <Layers size={14} style={{ color:'#818cf8' }} />
                      <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'var(--text-primary)' }}>System Architecture</h4>
                    </div>
                    <p>{caseStudies[caseStudy].architecture}</p>
                  </div>

                  <div style={{ padding:'18px 20px',borderRadius:12,background:'rgba(16,185,129,0.05)',border:'1px solid rgba(16,185,129,0.15)' }}>
                    <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'#34d399',marginBottom:8 }}>Performance Optimizations</h4>
                    <p>{caseStudies[caseStudy].optimizations}</p>
                  </div>

                  <div>
                    <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:10 }}>
                      <Cpu size={14} style={{ color:'#818cf8' }} />
                      <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'var(--text-primary)' }}>Challenges &amp; Breakthroughs</h4>
                    </div>
                    <p>{caseStudies[caseStudy].challenges}</p>
                  </div>

                  <div style={{ padding:'22px 22px',borderRadius:12,background:'rgba(99,102,241,0.05)',border:'1px solid rgba(99,102,241,0.15)',display:'flex',flexDirection:'column',gap:18 }}>
                    <div>
                      <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'#818cf8',marginBottom:8 }}>My Role</h4>
                      <p style={{ color:'var(--text-primary)' }}>{caseStudies[caseStudy].role}</p>
                    </div>
                    <div>
                      <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:8 }}>
                        <TrendingUp size={13} style={{ color:'#818cf8' }} />
                        <h4 style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'#818cf8' }}>Measurable Impact</h4>
                      </div>
                      <p style={{ color:'var(--text-primary)',fontWeight:600,fontSize:'0.9rem' }}>{caseStudies[caseStudy].impact}</p>
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
