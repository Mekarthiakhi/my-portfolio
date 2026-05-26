import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, ShieldCheck, BookOpen } from 'lucide-react';

const certs = [
  {
    title: "Advanced React & Redux",
    issuer: "Udemy / Meta",
    year: "2023",
    icon: Award,
    iconColor: '#3b82f6',
    accentColor: '#3b82f6',
    skills: ['React Hooks', 'Redux Toolkit', 'Context API'],
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Chandigarh University",
    year: "2023",
    icon: ShieldCheck,
    iconColor: '#10b981',
    accentColor: '#10b981',
    skills: ['Node.js', 'MySQL', 'REST APIs'],
  },
  {
    title: "Database Design & SQL Optimization",
    issuer: "Oracle / Coursera",
    year: "2022",
    icon: BookOpen,
    iconColor: '#06b6d4',
    accentColor: '#06b6d4',
    skills: ['Query Optimization', 'Indexing', 'Schema Design'],
  },
];

const cv = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.1}} };
const iv = { hidden:{opacity:0,y:24}, visible:{opacity:1,y:0,transition:{duration:0.5,ease:'easeOut'}} };

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section
      id="certifications"
      style={{
        background: 'var(--bg-secondary)',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container" style={{ position:'relative',zIndex:1 }}>
        <motion.div ref={ref} variants={cv} initial="hidden" animate={inView?'visible':'hidden'}>

          {/* Header */}
          <motion.div variants={iv} style={{ marginBottom:56 }}>
            <div className="section-tag"><span>●</span> Qualifications</div>
            <h2 className="section-title">Certifications &amp; <span className="gradient-text">Badges</span></h2>
            <p className="section-subtitle">Verified credentials backed by hands-on production experience.</p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={i}
                  variants={iv}
                  whileHover={{ y:-5, transition:{duration:0.18} }}
                  className="glass-card"
                  style={{ padding:'30px 28px', position:'relative', overflow:'hidden' }}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 16px 44px ${cert.accentColor}15`;}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';}}
                >
                  <div style={{ position:'absolute',top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${cert.accentColor},transparent)` }} />

                  <div style={{ width:46,height:46,borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20,background:`${cert.accentColor}12`,border:`1px solid ${cert.accentColor}28` }}>
                    <Icon size={22} style={{ color:cert.iconColor }} />
                  </div>

                  <h3 style={{ fontSize:'0.95rem',fontWeight:800,color:'var(--text-primary)',marginBottom:6 }}>{cert.title}</h3>
                  <p style={{ fontSize:'0.82rem',fontWeight:600,color:'var(--text-secondary)',marginBottom:18 }}>{cert.issuer}</p>

                  <div style={{ display:'flex',flexWrap:'wrap',gap:7,marginBottom:20 }}>
                    {cert.skills.map(s => (
                      <span key={s} style={{ fontSize:'0.68rem',padding:'4px 10px',borderRadius:6,fontWeight:600,background:`${cert.accentColor}0a`,border:`1px solid ${cert.accentColor}1a`,color:cert.accentColor }}>{s}</span>
                    ))}
                  </div>

                  <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:16,borderTop:'1px solid var(--border)' }}>
                    <span style={{ fontSize:'0.68rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:'var(--text-muted)' }}>
                      Issued {cert.year}
                    </span>
                    <span style={{ fontSize:'0.68rem',fontWeight:700,padding:'3px 9px',borderRadius:6,background:'rgba(16,185,129,0.08)',border:'1px solid rgba(16,185,129,0.2)',color:'#34d399' }}>
                      Verified ✓
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
