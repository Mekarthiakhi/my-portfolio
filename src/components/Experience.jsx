import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, TrendingUp, CheckCircle, Award } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto" style={{ scrollMarginTop: '80px' }}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="section-tag"><span>●</span> Professional Experience</div>
          <h2 className="section-title">
            Where I've <span className="gradient-text">built</span> things
          </h2>
          <p className="section-subtitle">
            Real production work, measurable impact, and system ownership.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-indigo-500/20 pl-8 ml-4 md:ml-6 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div 
                className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-[var(--bg-primary)] shadow-lg flex items-center justify-center transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)'
                }}
              />

              {/* Main Card */}
              <div className="glass-card p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                {/* Job Header */}
                <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                        <Briefcase size={16} /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={15} /> {exp.period}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {exp.type}
                  </span>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Measurable Achievements Grid */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp size={18} className="text-indigo-400" />
                    <h4 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider">
                      Measurable Impact & Achievements
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        className="p-5 rounded-xl border flex gap-4 transition-all duration-200"
                        style={{
                          background: 'rgba(255, 255, 255, 0.01)',
                          borderColor: 'var(--border)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                        }}
                      >
                        <div 
                          className="px-3 py-1.5 rounded-lg font-extrabold text-sm flex items-center justify-center self-start whitespace-nowrap"
                          style={{
                            background: `${colors[i % colors.length]}15`,
                            border: `1px solid ${colors[i % colors.length]}30`,
                            color: colors[i % colors.length]
                          }}
                        >
                          {achievement.metric}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-[var(--text-primary)] mb-1">
                            {achievement.label}
                          </p>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {achievement.detail}
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

        {/* Timeline Status */}
        <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6 justify-center">
          <div className="h-[1px] bg-[var(--border)] flex-1 hidden md:block" />
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--glass)] border border-[var(--glass-border)] text-sm text-[var(--text-secondary)] font-semibold">
            <CheckCircle size={16} className="text-emerald-500 animate-pulse" />
            Currently scaling solutions at Medicover Hospitals
          </div>
          <div className="h-[1px] bg-[var(--border)] flex-1 hidden md:block" />
        </motion.div>
      </motion.div>
    </section>
  );
}
