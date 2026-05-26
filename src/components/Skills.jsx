import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import SkillCard from './SkillCard';

export default function Skills() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(80px, 10vw, 120px) 24px',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.06)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={cardVariants} style={{ marginBottom: 64 }}>
            <div className="section-tag"><span>●</span> Technical Skills</div>
            <h2 className="section-title">
              My <span className="gradient-text">tech stack</span>
            </h2>
            <p className="section-subtitle">
              Tools and technologies I use to build production-grade systems.
            </p>
          </motion.div>

          {/* Skill grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {skills.map((category, i) => (
              <SkillCard
                key={category.category}
                category={category.category}
                items={category.items}
                color={category.color}
                icon={category.icon}
              />
            ))}
          </div>

          {/* Bottom highlight */}
          <motion.div
            variants={cardVariants}
            style={{
              marginTop: 48,
              padding: '28px 32px',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08))',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              display: 'flex',
              gap: 48,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {[
              { label: 'Frontend', value: 'React.js + JS/TS ecosystem' },
              { label: 'Backend', value: 'Node.js + PHP + REST APIs' },
              { label: 'Infra', value: 'Firebase + Redis + MySQL' },
              { label: 'Patterns', value: 'OOP + DSA + System Design' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center', minWidth: 140 }}>
                <p style={{ fontSize: '0.72rem', color: '#3b82f6', fontFamily: 'Syne, sans-serif', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
