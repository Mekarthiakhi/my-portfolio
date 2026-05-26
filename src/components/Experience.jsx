import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const accentColors = ['#3b82f6','#8b5cf6','#06b6d4','#10b981','#f59e0b'];

const cv = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.12}} };
const iv = { hidden:{opacity:0,y:32}, visible:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} };

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="absolute bottom-0 right-0 pointer-events-none"
        style={{ width:480, height:480, background:'radial-gradient(circle at bottom right, rgba(99,102,241,0.06) 0%,transparent 70%)' }} />

      <div className="container" style={{ position:'relative',zIndex:1 }}>
        <motion.div ref={ref} variants={cv} initial="hidden" animate={inView?'visible':'hidden'}>

          {/* Header */}
          <motion.div variants={iv} style={{ marginBottom:64 }}>
            <div className="section-tag"><span>●</span> Professional Experience</div>
            <h2 className="section-title">Where I've <span className="gradient-text">built</span> things</h2>
            <p className="section-subtitle">Real production work, measurable impact, and full system ownership.</p>
          </motion.div>

          {/* Timeline */}
          <div style={{ position:'relative' }}>
            {/* Vertical line */}
            <div style={{
              position:'absolute', left:20, top:24, bottom:24, width:2,
              background:'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
              display:'none',
            }} className="md-timeline-line" />

            <div style={{ display:'flex', flexDirection:'column', gap:40 }}>
              {experience.map((exp, idx) => (
                <motion.div key={idx} variants={iv} style={{ display:'flex', gap:36 }}>

                  {/* Dot (visible md+) */}
                  <div style={{
                    display:'flex', flexDirection:'column', alignItems:'center',
                    paddingTop:28, flexShrink:0,
                  }} className="hidden md:flex">
                    <div style={{
                      width:14, height:14, borderRadius:'50%',
                      background:'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      border:'3px solid var(--bg-primary)',
                      boxShadow:'0 0 12px rgba(99,102,241,0.5)',
                      position:'relative', zIndex:1,
                    }} />
                  </div>

                  {/* Card */}
                  <div className="glass-card" style={{ flex:1, padding:'36px 36px', position:'relative', overflow:'hidden' }}>
                    {/* Accent top line */}
                    <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:'linear-gradient(90deg,#3b82f6,#8b5cf6,#06b6d4)' }} />

                    {/* Header */}
                    <div style={{ display:'flex',flexWrap:'wrap',gap:16,justifyContent:'space-between',alignItems:'flex-start',marginBottom:20 }}>
                      <div>
                        <h3 style={{ fontSize:'1.35rem',fontWeight:800,color:'var(--text-primary)',marginBottom:10 }}>
                          {exp.role}
                        </h3>
                        <div style={{ display:'flex',flexWrap:'wrap',gap:'8px 20px',fontSize:'0.82rem',color:'var(--text-secondary)' }}>
                          <span style={{ display:'flex',alignItems:'center',gap:6,color:'#818cf8',fontWeight:600 }}>
                            <Briefcase size={14} /> {exp.company}
                          </span>
                          <span style={{ display:'flex',alignItems:'center',gap:5 }}>
                            <MapPin size={13} /> {exp.location}
                          </span>
                          <span style={{ display:'flex',alignItems:'center',gap:5 }}>
                            <Calendar size={13} /> {exp.period}
                          </span>
                        </div>
                      </div>
                      <span style={{
                        padding:'5px 14px', borderRadius:999, fontSize:'0.68rem', fontWeight:800,
                        textTransform:'uppercase', letterSpacing:'0.1em', flexShrink:0,
                        background:'rgba(16,185,129,0.09)', border:'1px solid rgba(16,185,129,0.3)', color:'#34d399',
                      }}>
                        {exp.type}
                      </span>
                    </div>

                    <p style={{ fontSize:'0.9rem',color:'var(--text-secondary)',lineHeight:1.8,marginBottom:32 }}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:20 }}>
                        <TrendingUp size={15} style={{ color:'#818cf8' }} />
                        <h4 style={{ fontSize:'0.68rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'var(--text-secondary)' }}>
                          Measurable Impact &amp; Achievements
                        </h4>
                      </div>
                      <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,260px),1fr))',gap:16 }}>
                        {exp.achievements.map((ach, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ y:-3, transition:{duration:0.15} }}
                            style={{
                              display:'flex',alignItems:'flex-start',gap:14,
                              padding:'18px 18px',borderRadius:12,
                              background:`${accentColors[i%accentColors.length]}07`,
                              border:`1px solid ${accentColors[i%accentColors.length]}18`,
                            }}
                          >
                            <div style={{
                              padding:'5px 12px',borderRadius:8,fontSize:'0.8rem',fontWeight:800,
                              flexShrink:0,whiteSpace:'nowrap',
                              background:`${accentColors[i%accentColors.length]}16`,
                              border:`1px solid ${accentColors[i%accentColors.length]}30`,
                              color:accentColors[i%accentColors.length],
                            }}>
                              {ach.metric}
                            </div>
                            <div>
                              <p style={{ fontSize:'0.82rem',fontWeight:700,color:'var(--text-primary)',marginBottom:4 }}>
                                {ach.label}
                              </p>
                              <p style={{ fontSize:'0.75rem',color:'var(--text-secondary)',lineHeight:1.65 }}>
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

          {/* Footer pill */}
          <motion.div variants={iv} style={{ marginTop:52,display:'flex',alignItems:'center',gap:24,justifyContent:'center' }}>
            <div style={{ flex:1,height:1,background:'var(--border)' }} className="hidden md:block" />
            <div style={{
              display:'flex',alignItems:'center',gap:10,padding:'12px 24px',
              borderRadius:999,background:'var(--glass)',border:'1px solid var(--glass-border)',
              fontSize:'0.82rem',fontWeight:600,color:'var(--text-secondary)',
            }}>
              <CheckCircle size={15} style={{ color:'#34d399' }} />
              Currently scaling solutions at Medicover Hospitals
            </div>
            <div style={{ flex:1,height:1,background:'var(--border)' }} className="hidden md:block" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
