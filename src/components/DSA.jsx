import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { dsaStats } from '../data/portfolio';
import { Code2, Brain, Zap, Target, BarChart3 } from 'lucide-react';

const topics = [
  { name: 'Arrays & Strings', icon: '📐', level: 95, color: '#3b82f6' },
  { name: 'Trees & Graphs', icon: '🌳', level: 88, color: '#8b5cf6' },
  { name: 'Dynamic Programming', icon: '♾️', level: 82, color: '#06b6d4' },
  { name: 'Sorting & Searching', icon: '🔍', level: 92, color: '#10b981' },
  { name: 'Linked Lists', icon: '🔗', level: 90, color: '#f59e0b' },
  { name: 'Backtracking', icon: '🧩', level: 78, color: '#ef4444' },
];

export default function DSA() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section
      id="dsa"
      style={{
        padding: 'clamp(80px, 10vw, 120px) 24px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: 64 }}>
          <div className="section-tag"><span>●</span> Problem Solving</div>
          <h2 className="section-title">
            Built on a foundation of <span className="gradient-text">algorithms</span>
          </h2>
          <p className="section-subtitle">
            Strong DSA skills that translate into writing efficient, optimal production code.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
          {/* Left - Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* LeetCode card */}
            <motion.div
              variants={itemVariants}
              className="glass-card"
              style={{ padding: '36px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                border: '2px solid rgba(59, 130, 246, 0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '2rem',
              }}>
                🧠
              </div>
              <div style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {dsaStats.solved}
              </div>
              <p style={{ fontSize: '0.95rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                Problems Solved
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>on LeetCode</p>
            </motion.div>

            {/* Strengths */}
            <motion.div variants={itemVariants} className="glass-card" style={{ padding: '28px' }}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Target size={16} color="#3b82f6" /> Key Strengths
              </h4>
              {dsaStats.strengths.map((strength, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < dsaStats.strengths.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <Zap size={14} color="#f59e0b" />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{strength}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Topic proficiency */}
          <motion.div variants={itemVariants} className="glass-card" style={{ padding: '32px' }}>
            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 28, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <BarChart3 size={16} color="#8b5cf6" /> Topic Proficiency
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {topics.map((topic, i) => (
                <div key={topic.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: '1rem' }}>{topic.icon}</span>
                      <span style={{ fontSize: '0.88rem', fontFamily: 'Syne, sans-serif', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {topic.name}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: topic.color }}>{topic.level}%</span>
                  </div>
                  <div style={{
                    height: 6, borderRadius: 100,
                    background: 'var(--border)',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${topic.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        borderRadius: 100,
                        background: `linear-gradient(90deg, ${topic.color}, ${topic.color}80)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border)',
              display: 'flex', gap: 20, flexWrap: 'wrap',
            }}>
              {[
                { label: 'Approach', value: 'Optimal First' },
                { label: 'Analysis', value: 'Big-O Focus' },
                { label: 'Style', value: 'Pattern Based' },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'Syne, sans-serif', marginTop: 2 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
