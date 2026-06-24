import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillGalaxy from './components/SkillGalaxy';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { audio } from './utils/AudioEngine';
import { Power, Settings2 } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [systemReady, setSystemReady] = useState(false);
  const [systemInitialized, setSystemInitialized] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [gravityMode, setGravityMode] = useState('zero'); // 'zero', 'normal', 'hyper'

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!systemInitialized) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [systemInitialized]);

  // 2. Preloader countdown to simulate zero-g station bootup
  useEffect(() => {
    const timer = setTimeout(() => {
      setSystemReady(true);
    }, 2400); 
    return () => clearTimeout(timer);
  }, []);

  const handleInitialize = () => {
    audio.init();
    audio.playClick();
    audio.speakIntro();
    setSystemInitialized(true);
    setLoading(false);
  };

  const handleGravityToggle = () => {
    audio.playGravityShift();
    setGravityMode(prev => {
      if (prev === 'zero') return 'normal';
      if (prev === 'normal') return 'hyper';
      return 'zero';
    });
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-violet-500/30 selection:text-violet-200">
      <AnimatePresence mode="wait">
        {!systemInitialized ? (
          // Immersive Futuristic Preloader
          <motion.div
            key="preloader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="absolute w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[70px] -translate-x-12 translate-y-12" />

            <motion.div 
              className="relative w-20 h-20 rounded-full border border-violet-500/30 flex items-center justify-center mb-8"
              animate={{ 
                rotate: 360,
                scale: [1, 1.08, 1],
                borderColor: ["rgba(139, 92, 246, 0.3)", "rgba(6, 182, 212, 0.5)", "rgba(139, 92, 246, 0.3)"]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 blur-sm opacity-80 animate-ping" />
              <div className="absolute w-12 h-12 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '6s' }} />
            </motion.div>

            <div className="text-center font-mono h-24 flex flex-col items-center justify-center">
              {!systemReady ? (
                <>
                  <motion.h1 
                    className="text-lg font-bold tracking-[0.25em] text-white mb-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ANTIGRAVITY STATION
                  </motion.h1>
                  <p className="text-xs text-slate-500 tracking-wider uppercase">Calibrating Thrusters...</p>
                  
                  <div className="w-48 h-[2px] bg-slate-900 rounded-full mt-6 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-violet-600 via-cyan-400 to-emerald-400"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.1, ease: "easeInOut" }}
                    />
                  </div>
                </>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInitialize}
                  onMouseEnter={() => audio.playHover()}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                    <Power size={24} className="text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-400 group-hover:text-white transition-colors">Initialize System</span>
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          // Main Zero Gravity Portfolio Website
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {/* Scroll depth neon bar */}
            <div 
              className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-violet-600 via-cyan-400 to-emerald-400 z-50 transition-all duration-100"
              style={{ width: `${scrollProgress}%` }}
            />

            {/* Gravity HUD Control */}
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, type: "spring" }}
              onClick={handleGravityToggle}
              onMouseEnter={() => audio.playHover()}
              className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-2 rounded-full zero-g-glass border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all cursor-pointer group"
            >
              <Settings2 size={16} className="text-violet-400 group-hover:rotate-180 transition-transform duration-700" />
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase">Gravity Array</span>
                <span className="text-xs font-bold tracking-wider text-white uppercase">
                  {gravityMode === 'zero' ? 'Zero-G (0x)' : gravityMode === 'normal' ? 'Normal (1x)' : 'Hyper (3x)'}
                </span>
              </div>
            </motion.button>

            {/* Glassmorphic Header Navigation */}
            <Navbar />
            
            <main>
              {/* Hero Section with 3D Holographic Canvas */}
              <Hero />
              
              {/* About Section */}
              <About />
              
              {/* Interactive Zero-G Skill Galaxy */}
              <SkillGalaxy gravityMode={gravityMode} />
              
              {/* Vertical timeline experience */}
              <Experience />
              
              {/* Certifications list */}
              <Certifications />
              
              {/* Parallax depth projects list */}
              <Projects />
              
              {/* Glassmorphic contact interface */}
              <Contact />
            </main>
            
            {/* Sci-fi Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
