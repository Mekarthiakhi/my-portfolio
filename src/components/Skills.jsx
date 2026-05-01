import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';

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
              <motion.div
                key={category.category}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card"
                style={{ padding: '28px', cursor: 'default', overflow: 'hidden', position: 'relative' }}
              >
                {/* Card accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${category.color}, transparent)`,
                  borderRadius: '16px 16px 0 0',
                }} />

                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: 14,
                    background: `${category.color}18`,
                    border: `1px solid ${category.color}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                    }}>
                      {category.category}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                      {category.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {category.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 100,
                        fontSize: '0.78rem',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 600,
                        background: `${category.color}12`,
                        border: `1px solid ${category.color}25`,
                        color: category.color,
                        transition: 'all 0.2s',
                        cursor: 'default',
                      }}
                      whileHover={{
                        background: `${category.color}25`,
                        border: `1px solid ${category.color}50`,
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
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
