import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const accentColors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#3b82f6'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 w-full overflow-hidden bg-[#020617]"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref} 
          variants={containerVariants} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-violet-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              02 / Deployment Logs
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">Telemetry.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Real-world systems, measurable operational metrics, and full-stack technical ownership.
            </p>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative pl-6 md:pl-10">
            {/* Pulsing Neon Track */}
            <div className="absolute left-[7px] md:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-400 to-emerald-500/20 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.15)]" />

            <div className="flex flex-col gap-12">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants} 
                  className="relative flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Glowing Node Indicator */}
                  <div className="absolute left-[-23px] md:left-[-30px] top-4 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 border-4 border-[#020617] shadow-lg shadow-violet-500/50 scale-110" />
                    <div className="absolute w-4 h-4 rounded-full bg-cyan-400 animate-ping opacity-30" />
                  </div>

                  {/* Main Glass Experience Card */}
                  <div className="zero-g-glass rounded-3xl p-6 sm:p-8 flex-1 relative overflow-hidden neon-glow-violet hover:scale-[1.005] transition-transform">
                    {/* Top glowing neon beam */}
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" />

                    {/* Card Header */}
                    <div className="flex flex-wrap gap-4 justify-between items-start mb-6">
                      <div>
                        <h3 className="text-lg sm:text-2xl font-black text-white leading-tight mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-slate-400 font-mono">
                          <span className="flex items-center gap-1.5 text-violet-400">
                            <Briefcase size={12} /> {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} /> {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} /> {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <span className="px-3.5 py-1.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    {/* Achievements Orbit / Grid */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={13} className="text-violet-400" />
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold">
                          System Performance Matrix &amp; Gains
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {exp.achievements.map((ach, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 300, damping: 12 }}
                            className="zero-g-glass rounded-2xl p-4 flex items-start gap-4 hover:border-white/10"
                            style={{
                              backgroundColor: `${accentColors[i % accentColors.length]}04`,
                              borderColor: `${accentColors[i % accentColors.length]}18`,
                            }}
                          >
                            {/* Metric Badge */}
                            <div 
                              className="px-3 py-1.5 rounded-xl text-xs font-black font-mono flex-shrink-0"
                              style={{
                                backgroundColor: `${accentColors[i % accentColors.length]}12`,
                                border: `1px solid ${accentColors[i % accentColors.length]}25`,
                                color: accentColors[i % accentColors.length],
                              }}
                            >
                              {ach.metric}
                            </div>
                            
                            <div>
                              <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">
                                {ach.label}
                              </p>
                              <p className="text-[10px] text-slate-400 leading-relaxed">
                                {ach.detail}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom telemetry check status */}
          <motion.div 
            variants={itemVariants} 
            className="mt-16 flex items-center gap-4 justify-center"
          >
            <div className="hidden md:block flex-1 h-[1px] bg-white/5" />
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/5 bg-slate-950/20 backdrop-blur-md text-xs font-semibold text-slate-400 font-mono">
              <CheckCircle size={14} className="text-emerald-400" />
              <span>Calibrated: Serving hospital systems live at Medicover</span>
            </div>
            <div className="hidden md:block flex-1 h-[1px] bg-white/5" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
