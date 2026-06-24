import { motion } from "framer-motion";
import { ArrowDown, Download, ChevronRight, Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import SpaceCanvas from "./SpaceCanvas";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
    >
      {/* 1. 3D Space & Holographic Avatar Backdrop */}
      <SpaceCanvas />

      {/* 2. Floating Tech Badges (Weightless 2D elements orbiting in front) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
        {/* React Badge */}
        <motion.div 
          className="absolute top-[22%] left-[12%] px-3 py-1.5 rounded-full border border-cyan-500/20 bg-slate-950/40 backdrop-blur-md text-[11px] font-mono text-cyan-400 font-bold shadow-lg shadow-cyan-950/20"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          ⚛️ REACT
        </motion.div>
        
        {/* Node.js Badge */}
        <motion.div 
          className="absolute top-[68%] left-[18%] px-3 py-1.5 rounded-full border border-emerald-500/20 bg-slate-950/40 backdrop-blur-md text-[11px] font-mono text-emerald-400 font-bold shadow-lg shadow-emerald-950/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        >
          🟢 NODE.JS
        </motion.div>

        {/* PHP Badge */}
        <motion.div 
          className="absolute top-[28%] right-[15%] px-3 py-1.5 rounded-full border border-violet-500/20 bg-slate-950/40 backdrop-blur-md text-[11px] font-mono text-violet-400 font-bold shadow-lg shadow-violet-950/20"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
        >
          🐘 PHP
        </motion.div>

        {/* REST API Badge */}
        <motion.div 
          className="absolute top-[62%] right-[12%] px-3 py-1.5 rounded-full border border-cyan-500/20 bg-slate-950/40 backdrop-blur-md text-[11px] font-mono text-cyan-400 font-bold shadow-lg shadow-cyan-950/20"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
        >
          ⚡ REST APIS
        </motion.div>
      </div>

      {/* 3. Main Text Content overlay */}
      <div className="container relative z-20 flex flex-col items-center justify-center text-center px-4 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          {/* Glowing Top Chip */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/10 backdrop-blur-md shadow-inner"
          >
            <Sparkles size={12} className="text-violet-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-violet-300 font-mono">
              Antigravity Station Online
            </span>
          </motion.div>

          {/* Core Headline Role */}
          <motion.h2 
            variants={itemVariants}
            className="text-sm sm:text-base font-bold tracking-[0.3em] uppercase text-cyan-400 font-mono"
          >
            Frontend Developer
          </motion.h2>

          {/* Immersive Space Name & Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-lg"
          >
            Akhilesh Mekarthi
          </motion.h1>

          <motion.h3
            variants={itemVariants}
            className="text-lg sm:text-2xl font-bold max-w-2xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300"
          >
            Building Modern Healthcare Solutions
          </motion.h3>

          {/* Short Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
          >
            Full Stack Engineer with 2+ years of experience specialized in building responsive, high-availability dashboard systems, real-time message architectures, and optimized databases.
          </motion.p>

          {/* Interactive CTA buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <motion.a 
              href="#projects" 
              className="px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-white shadow-lg shadow-violet-950/30"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              }}
              whileHover={{ 
                scale: 1.04,
                y: -2,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ChevronRight size={14} />
              Explore Work
            </motion.a>

            <motion.a 
              href="/Akhilesh_1.pdf" 
              download 
              className="px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-slate-300 hover:text-white border border-white/10 bg-slate-950/20 backdrop-blur-md transition-colors"
              whileHover={{ 
                scale: 1.04,
                y: -2,
                borderColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={14} />
              Get Resume
            </motion.a>
          </motion.div>

          {/* Social connections */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mt-6"
          >
            {[
              { href: personalInfo.github, Icon: FaGithub, label: "GitHub" },
              { href: personalInfo.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-slate-950/30 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:neon-glow-cyan"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Weightless Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-slate-500">
          Scroll to explore
        </span>
        <motion.div 
          className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
