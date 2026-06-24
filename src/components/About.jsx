import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { education, awards, personalInfo } from "../data/portfolio";
import { GraduationCap, Trophy, Cpu, Activity, Shield, Zap, Terminal } from "lucide-react";

const strengths = [
  { label: "Scalable System Design",  icon: Cpu,      desc: "High-throughput architectures, optimized microservices, and secure distributed nodes.", color: "rgba(139, 92, 246, 0.3)" },
  { label: "Real-Time Systems",        icon: Activity, desc: "Asynchronous event queues, Firebase FCM pipelines, and active Socket.io hubs.", color: "rgba(6, 182, 212, 0.3)" },
  { label: "Clean Architecture",       icon: Shield,   desc: "Robust SOLID patterns, loose coupling, high cohesion, and scalable modular code.", color: "rgba(16, 185, 129, 0.3)" },
  { label: "Performance Optimization", icon: Zap,      desc: "Database indexing tuning, Redis caching layers, and high-performance SQL query design.", color: "rgba(245, 158, 11, 0.3)" },
];

const stats = [
  { value: "2+",   label: "Years Experience",    color: "neon-glow-cyan" },
  { value: "1K+",  label: "Daily Txns Secured",  color: "neon-glow-violet" },
  { value: "300+", label: "LeetCode Solutions",  color: "neon-glow-emerald" },
  { value: "8+",   label: "Production Apps",     color: "neon-glow-cyan" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 w-full overflow-hidden bg-[#030712]"
    >
      {/* Soft background glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            01 / System Telemetry
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
            Architecting high-performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">software.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Full Stack Developer with 2+ years of expertise designing, optimizing, and scaling web infrastructure. I bridge responsive frontend visual excellence with highly optimized backend and database layers, ensuring mission-critical reliability at Medicover Hospitals.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN — Stats and Strengths */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Quick Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`zero-g-glass rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 ${s.color} hover:scale-[1.02]`}
                >
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/50 to-cyan-400/50" />
                  <div className="text-3xl font-black text-white font-mono tracking-tight">{s.value}</div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-slate-400 mt-2 font-bold">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Core Architecture Strengths */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <Terminal size={14} className="text-cyan-400" />
                <h3 className="text-xs uppercase font-mono tracking-widest text-slate-300 font-bold">
                  Core Engineering Directives
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="zero-g-glass rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-all"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                        style={{ 
                          background: item.color.replace('0.3', '0.08'), 
                          border: `1px solid ${item.color.replace('0.3', '0.25')}` 
                        }}
                      >
                        <Icon size={15} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white mb-1.5 uppercase tracking-wider">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN — Active Deployment & Education */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Active Deployment Card */}
            <motion.div 
              variants={itemVariants} 
              className="zero-g-glass rounded-2xl p-6 relative overflow-hidden neon-glow-emerald hover:scale-[1.01] transition-transform"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-400" />
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold block mb-1">
                    Current Deployment
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Medicover Hospitals
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-pulse">
                  ACTIVE
                </span>
              </div>

              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
                Full-Stack Software Developer
              </h5>
              
              <ul className="flex flex-col gap-3.5">
                {[
                  "Architect and scale core modules of internal hospital management systems processing 1,000+ daily transactions.",
                  "Engineered automated billing integrations, saving ~40% manual operational processing effort.",
                  "Refactored complex database schemas and index strategies to reduce query response times by ~30%.",
                  "Built high-reliability real-time push notification pipelines utilizing Firebase FCM service workers.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[11px] text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Academic Matrix Card */}
            <motion.div 
              variants={itemVariants} 
              className="zero-g-glass rounded-2xl p-6 relative overflow-hidden neon-glow-violet hover:scale-[1.01] transition-transform"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold block mb-0.5">
                    Academic Vector
                  </span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {education.degree}
                  </h4>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xs font-mono font-semibold text-slate-400 border-b border-white/5 pb-3 mb-3">
                <span>{education.university}</span>
                <span className="text-violet-400">{education.period}</span>
              </div>
              
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>GPA Score Matrix</span>
                <span className="font-bold text-white font-mono">{education.gpa}</span>
              </div>
            </motion.div>

            {/* Honors and Accolades */}
            <motion.div 
              variants={itemVariants} 
              className="zero-g-glass rounded-2xl p-5 relative overflow-hidden hover:scale-[1.01] transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Trophy size={14} />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Operational Awards
                </h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {awards.map((award, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
