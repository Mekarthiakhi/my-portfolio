import { motion } from 'framer-motion';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const socials = [
  { icon: FaGithub,   href: personalInfo.github,                label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.linkedin,              label: 'LinkedIn' },
  { icon: Mail,       href: `mailto:${personalInfo.email}`,     label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5 bg-[#020612]"
    >
      {/* Laser thin glowing beam at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[1px] pointer-events-none bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Navigation & Brand Row */}
        <div className="flex flex-wrap gap-8 items-center justify-between mb-10">

          {/* Sci-Fi Brand logo */}
          <a href="#hero" className="flex items-center gap-3 no-underline">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-violet-600 to-cyan-400 shadow-md shadow-violet-950/50"
            >
              <Code2 size={16} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="block text-sm font-black text-white tracking-wider font-mono">
                AKHILESH MEKARTHI
              </span>
              <span className="block text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                Frontend &amp; Full Stack
              </span>
            </div>
          </a>

          {/* Footer Navigation links */}
          <nav className="hidden md:flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200 uppercase tracking-wider font-mono text-[10px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to top button */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={label}
                className="w-9 h-9 rounded-full border border-white/5 bg-slate-950/20 hover:border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                whileHover={{ y: -3, scale: 1.08 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
            
            <motion.button
              onClick={scrollTop}
              title="Back to top"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-violet-600 to-cyan-400 text-white cursor-pointer shadow-lg shadow-violet-950/40"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-white/5 mb-6" />

        {/* Bottom Credits Row */}
        <div className="flex flex-wrap gap-4 items-center justify-between text-[11px] text-slate-500">
          <p className="flex items-center gap-1.5 font-mono">
            © {year} Akhilesh Mekarthi. Orbiting with
            <Heart size={11} className="inline text-rose-500 animate-pulse" />
            using React, Vite &amp; Framer Motion
          </p>
          
          <div className="flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider">Open for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
