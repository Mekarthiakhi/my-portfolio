import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above the middle of the viewport
          if (rect.top <= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.2 }}
          className={`w-full max-w-5xl h-14 sm:h-16 rounded-full flex items-center justify-between px-4 sm:px-8 pointer-events-auto transition-all duration-300 ${
            scrolled 
              ? 'bg-slate-950/40 backdrop-blur-xl border border-white/10 shadow-lg shadow-violet-950/10 neon-glow-violet' 
              : 'bg-slate-950/10 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Logo / Name */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-wider font-mono text-white"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-violet-600 to-cyan-400 relative group overflow-hidden shadow-md shadow-violet-950/50">
              <Code2 size={16} className="text-white z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="hidden xs:inline-block">AKHILESH.DEV</span>
            <span className="xs:hidden">AKHILESH</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }} // Zero-g hover drift
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Hire Me CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              className="hidden md:flex relative px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 shadow-md shadow-violet-950/30"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              }}
              whileHover={{ 
                scale: 1.03,
                y: -1,
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-white">Hire Me</span>
            </motion.a>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-4 right-4 z-40 rounded-3xl p-4 border border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-xl shadow-black/50"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-xs uppercase tracking-widest font-semibold transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-3 pt-3 border-t border-white/5">
                <a 
                  href="#contact" 
                  className="w-full h-11 rounded-full flex items-center justify-center text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
