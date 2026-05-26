import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import {
  SiReact, SiNodedotjs, SiFirebase, SiPhp, SiMysql, SiRedux,
  SiHtml5, SiJavascript, SiExpress, SiSocketdotio,
  SiRedis, SiGit, SiPython, SiBootstrap,
} from 'react-icons/si';
import { FaDatabase, FaJava, FaCss3Alt } from 'react-icons/fa';

const iconMap = {
  'React.js':     { icon: SiReact,      color: '#61DAFB' },
  'Node.js':      { icon: SiNodedotjs,  color: '#68A063' },
  'Firebase FCM': { icon: SiFirebase,   color: '#FFCA28' },
  'Firebase':     { icon: SiFirebase,   color: '#FFCA28' },
  'PHP':          { icon: SiPhp,        color: '#8993be' },
  'MySQL':        { icon: SiMysql,      color: '#4479A1' },
  'Redux':        { icon: SiRedux,      color: '#764ABC' },
  'HTML5':        { icon: SiHtml5,      color: '#E34F26' },
  'CSS3':         { icon: FaCss3Alt,    color: '#1572B6' },
  'JavaScript':   { icon: SiJavascript, color: '#F7DF1E' },
  'Express.js':   { icon: SiExpress,   color: '#888' },
  'Socket.io':    { icon: SiSocketdotio,color: '#aaa' },
  'WebSockets':   { icon: SiSocketdotio,color: '#aaa' },
  'Redis':        { icon: SiRedis,      color: '#DC382D' },
  'Git':          { icon: SiGit,        color: '#F05032' },
  'Python':       { icon: SiPython,     color: '#3776AB' },
  'Java':         { icon: FaJava,       color: '#007396' },
  'Bootstrap':    { icon: SiBootstrap,  color: '#7952B3' },
  'REST APIs':    { icon: FaDatabase,   color: '#06b6d4' },
};

const profMap = {
  'React.js':92,'Node.js':88,'JavaScript':95,'PHP':82,'MySQL':85,
  'Firebase FCM':80,'Firebase':80,'HTML5':95,'CSS3':90,'Redux':75,
  'Express.js':84,'WebSockets':78,'Socket.io':76,'Redis':70,
  'Git':88,'Python':65,'Java':62,'Bootstrap':82,'REST APIs':88,
  'jQuery':80,'DSA':78,'OOP':85,'System Design':75,'Caching':72,
  'Load Balancing':68,'Query Optimization':83,'Indexing':82,
  'Database Design':80,'C++':60,
};

const categories = ['All','Frontend','Backend','Database','Tools & Platforms','Languages','Core Concepts'];

const cv = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.07}} };
const iv = { hidden:{opacity:0,y:26}, visible:{opacity:1,y:0,transition:{duration:0.5,ease:'easeOut'}} };

export default function Skills() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section
      id="skills"
      style={{
        background: 'var(--bg-secondary)',
        paddingTop: 'clamp(80px, 10vw, 130px)',
        paddingBottom: 'clamp(80px, 10vw, 130px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width:480,height:480,background:'radial-gradient(circle at top right,rgba(139,92,246,0.06) 0%,transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width:480,height:480,background:'radial-gradient(circle at bottom left,rgba(6,182,212,0.06) 0%,transparent 70%)' }} />

      <div className="container" style={{ position:'relative',zIndex:1 }}>
        <motion.div ref={ref} variants={cv} initial="hidden" animate={inView?'visible':'hidden'}>

          {/* Header */}
          <motion.div variants={iv} style={{ marginBottom:56 }}>
            <div className="section-tag"><span>●</span> Technical Expertise</div>
            <h2 className="section-title">My <span className="gradient-text">Tech Stack</span></h2>
            <p className="section-subtitle">Hands-on technologies powering production healthcare and real-time systems.</p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={iv} style={{ display:'flex',flexWrap:'wrap',gap:10,marginBottom:44 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding:'8px 18px',
                  borderRadius:999,
                  fontSize:'0.72rem',
                  fontWeight:700,
                  letterSpacing:'0.05em',
                  transition:'all 0.2s',
                  cursor:'pointer',
                  ...(active === cat
                    ? { background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',color:'#fff',boxShadow:'0 4px 18px rgba(99,102,241,0.3)',border:'none' }
                    : { background:'var(--glass)',border:'1px solid var(--glass-border)',color:'var(--text-secondary)' }
                  ),
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{opacity:0,y:14}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-14}}
              transition={{duration:0.22}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{opacity:0,y:24}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:i*0.055}}
                  whileHover={{y:-5,transition:{duration:0.18}}}
                  className="glass-card"
                  style={{ padding:'28px 24px',position:'relative',overflow:'hidden' }}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 16px 44px ${cat.color}14`;}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';}}
                >
                  <div style={{ position:'absolute',top:0,left:0,right:0,height:3,borderRadius:'16px 16px 0 0',background:`linear-gradient(90deg,${cat.color},transparent)` }} />

                  {/* Card header */}
                  <div style={{ display:'flex',alignItems:'center',gap:14,marginBottom:24 }}>
                    <div style={{ width:42,height:42,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,background:`${cat.color}12`,border:`1px solid ${cat.color}28`,flexShrink:0 }}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize:'0.9rem',fontWeight:700,color:'var(--text-primary)',marginBottom:2 }}>{cat.category}</h3>
                      <p style={{ fontSize:'0.72rem',color:'var(--text-secondary)' }}>{cat.items.length} technologies</p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <div style={{ display:'flex',flexDirection:'column',gap:14 }}>
                    {cat.items.map((skill, j) => {
                      const meta = iconMap[skill];
                      const Icon = meta?.icon;
                      const iColor = meta?.color || cat.color;
                      const pct = profMap[skill] || 70;
                      return (
                        <div key={skill}>
                          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:6 }}>
                            <div style={{ display:'flex',alignItems:'center',gap:6 }}>
                              {Icon && <Icon size={13} style={{color:iColor}} />}
                              <span style={{ fontSize:'0.78rem',fontWeight:600,color:'var(--text-secondary)' }}>{skill}</span>
                            </div>
                            <span style={{ fontSize:'0.65rem',fontWeight:800,color:cat.color }}>{pct}%</span>
                          </div>
                          <div style={{ height:5,borderRadius:3,overflow:'hidden',background:'rgba(255,255,255,0.05)' }}>
                            <motion.div
                              style={{ height:'100%',borderRadius:3,background:`linear-gradient(90deg,${cat.color},${cat.color}70)` }}
                              initial={{width:0}}
                              animate={inView?{width:`${pct}%`}:{width:0}}
                              transition={{duration:0.85,delay:i*0.04+j*0.035+0.3,ease:'easeOut'}}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Summary strip */}
          <motion.div
            variants={iv}
            style={{ marginTop:56,padding:'32px 40px',borderRadius:16,display:'flex',flexWrap:'wrap',gap:40,alignItems:'center',justifyContent:'center',background:'rgba(99,102,241,0.04)',border:'1px solid rgba(99,102,241,0.12)' }}
          >
            {[
              { label:'Primary Stack', value:'React.js · Node.js · PHP' },
              { label:'Real-Time',     value:'Socket.io · Firebase FCM' },
              { label:'Databases',     value:'MySQL · Optimized Indexing' },
              { label:'Methodology',   value:'OOP · DSA · System Design' },
            ].map(item => (
              <div key={item.label} style={{ textAlign:'center',minWidth:130 }}>
                <p style={{ fontSize:'0.65rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.18em',color:'#818cf8',marginBottom:6 }}>{item.label}</p>
                <p style={{ fontSize:'0.875rem',fontWeight:600,color:'var(--text-primary)' }}>{item.value}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
