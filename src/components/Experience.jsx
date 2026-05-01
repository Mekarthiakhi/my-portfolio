import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const exp = experience[0];
  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

  return (
    <section id="experience" style={{ padding: 'clamp(80px, 10vw, 120px) 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: 64 }}>
          <div className="section-tag"><span>●</span> Work Experience</div>
          <h2 className="section-title">
            Where I've <span className="gradient-text">built</span> things
          </h2>
          <p className="section-subtitle">
            Real production work, measurable impact, and ownership at scale.
          </p>
        </motion.div>

        {/* Experience card */}
        <motion.div
          variants={itemVariants}
          className="glass-card"
          style={{ padding: 'clamp(24px, 4vw, 48px)', position: 'relative', overflow: 'hidden' }}
        >
          {/* Background decoration */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
            borderRadius: '16px 16px 0 0',
          }} />

          {/* Job header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start', marginBottom: 36 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', flexShrink: 0,
            }}>
              🏥
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                <h3 style={{ fontFamily: 'DM Sans', fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--text-primary)' }}>
                  {exp.role}
                </h3>
                <span style={{
                  padding: '4px 12px', borderRadius: 100, fontSize: '0.72rem',
                  background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)',
                  color: '#22c55e', fontFamily: 'DM Sans', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  {exp.type}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#3b82f6', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '1rem' }}>
                  <Briefcase size={15} />{exp.company}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <MapPin size={14} />{exp.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Calendar size={14} />{exp.period}
                </span>
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', marginBottom: 36, lineHeight: 1.7 }}>{exp.description}</p>

          {/* Achievements */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <TrendingUp size={18} color="#3b82f6" />
              <h4 style={{ fontFamily: 'DM Sans', fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                Key Achievements
              </h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
              {exp.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  style={{
                    padding: '20px',
                    borderRadius: 14,
                    background: `${colors[i % colors.length]}08`,
                    border: `1px solid ${colors[i % colors.length]}20`,
                    display: 'flex',
                    gap: 16,
                  }}
                >
                  <div style={{
                    padding: '8px 12px',
                    borderRadius: 10,
                    background: `${colors[i % colors.length]}18`,
                    border: `1px solid ${colors[i % colors.length]}35`,
                    fontFamily: 'DM Sans',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: colors[i % colors.length],
                    whiteSpace: 'nowrap',
                    height: 'fit-content',
                    flexShrink: 0,
                  }}>
                    {achievement.metric}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: 6 }}>
                      {achievement.label}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {achievement.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline indicator */}
        <motion.div variants={itemVariants} style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: 100,
            background: 'var(--glass)', border: '1px solid var(--glass-border)',
            fontSize: '0.8rem', color: 'var(--text-secondary)',
            fontFamily: 'DM Sans', fontWeight: 600,
          }}>
            <CheckCircle size={14} color="#22c55e" />
            Currently at Medicover Hospitals
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
