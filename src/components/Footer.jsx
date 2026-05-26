import { motion } from 'framer-motion';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
    >
      {/* Subtle top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.35), transparent)' }}
      />

      <div className="container py-12">
        {/* Top row */}
        <div className="flex flex-wrap gap-8 items-center justify-between mb-10">

          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 no-underline">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              <Code2 size={18} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="block text-sm font-extrabold" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--text-primary)' }}>
                Akhilesh Mekarthi
              </span>
              <span className="block text-[10px] font-semibold tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold transition-colors no-underline"
                style={{ color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={label}
                className="icon-btn"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollTop}
              title="Back to top"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center border-none cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 4px 16px rgba(99,102,241,0.25)' }}
            >
              <ArrowUp size={15} color="white" />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'var(--border)' }} />

        {/* Bottom bar */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
            © {year} Akhilesh Mekarthi · Built with
            <Heart size={11} className="inline animate-pulse" style={{ color: '#f43f5e' }} />
            using React, Vite &amp; Framer Motion
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full status-ping" style={{ background: '#10b981' }} />
            <span className="text-xs font-semibold" style={{ color: '#34d399' }}>Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
