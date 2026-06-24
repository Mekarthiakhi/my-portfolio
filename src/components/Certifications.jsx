import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, ShieldCheck, BookOpen } from 'lucide-react';

const certs = [
  {
    title: "Advanced React & Redux",
    issuer: "Udemy / Meta",
    year: "2023",
    icon: Award,
    iconColor: '#8b5cf6',
    skills: ['React Hooks', 'Redux Toolkit', 'Context API'],
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Chandigarh University",
    year: "2023",
    icon: ShieldCheck,
    iconColor: '#10b981',
    skills: ['Node.js', 'MySQL', 'REST APIs'],
  },
  {
    title: "Database Design & SQL Optimization",
    issuer: "Oracle / Coursera",
    year: "2022",
    icon: BookOpen,
    iconColor: '#06b6d4',
    skills: ['Query Optimization', 'Indexing', 'Schema Design'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 w-full overflow-hidden bg-[#030712]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={itemVariants} className="mb-14 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-cyan-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Credentials Verification
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Badges &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">Verifications.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Verified certifications and core academic milestones backing up hands-on execution.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => {
              const Icon = cert.icon;
              const bobAnimation = i % 2 === 0 ? "animate-drift-1" : "animate-drift-2";
              
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className={`zero-g-glass rounded-3xl p-6 relative overflow-hidden transition-all duration-300 ${bobAnimation} hover:neon-glow-cyan`}
                >
                  {/* Top glowing colored strip */}
                  <span 
                    className="absolute top-0 left-0 right-0 h-[2px]" 
                    style={{ background: `linear-gradient(90deg, ${cert.iconColor}, transparent)` }}
                  />

                  {/* Icon Frame */}
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ 
                      backgroundColor: `${cert.iconColor}12`,
                      border: `1px solid ${cert.iconColor}25` 
                    }}
                  >
                    <Icon size={18} style={{ color: cert.iconColor }} />
                  </div>

                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1">{cert.title}</h3>
                  <p className="text-xs text-slate-400 mb-4">{cert.issuer}</p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map(s => (
                      <span 
                        key={s} 
                        className="text-[9px] font-bold font-mono px-2.5 py-1 rounded"
                        style={{
                          backgroundColor: `${cert.iconColor}0a`,
                          border: `1px solid ${cert.iconColor}1a`,
                          color: cert.iconColor
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    <span>
                      Issued {cert.year}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                      VERIFIED ✓
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
