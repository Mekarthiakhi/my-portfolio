// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ArrowDown, Download, ChevronRight, Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import akki from "../../public/akki.png";
import TechIcons from "./TechIcons";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Mesh grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      {/* Floating Tech Icons */}
      <TechIcons />

      {/* ── Main Content ── */}
      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-14 py-28 md:py-20">

        {/* LEFT — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="shrink-0 flex justify-center w-full md:w-auto"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-[3px] rounded-full blur-[6px] opacity-60"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)" }}
            />
            {/* Image */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 rounded-full overflow-hidden border border-white/10">
              <img
                src={akki}
                alt={`${personalInfo.name} — Portfolio Photo`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap"
              style={{
                background: "rgba(6,11,22,0.92)",
                border: "1px solid rgba(16,185,129,0.35)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-ping" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">
                Open to work
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <div className="flex-1 text-center md:text-left min-w-0">

          {/* Badge */}
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.3)",
            }}>
            <Sparkles size={12} className="text-indigo-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wide uppercase text-indigo-300">
              Full Stack · Healthcare · Real-Time Apps
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fade(0.08)}
            className="font-black mb-2 leading-none"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)" }}
          >
            {personalInfo.name.split(" ").map((w, i) =>
              i === 1
                ? <span key={i} className="gradient-text"> {w}</span>
                : <span key={i}>{w}</span>
            )}
          </motion.h1>

          {/* Sub-title */}
          <motion.h2
            {...fade(0.14)}
            className="mb-3"
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            Building Scalable Healthcare &amp; Modern Web Applications
          </motion.h2>

          {/* Typing */}
          <motion.div {...fade(0.18)} className="mb-4 flex items-center gap-1.5 justify-center md:justify-start">
            <span className="text-sm font-semibold text-indigo-400">I'm a </span>
            <ReactTyped
              strings={["Frontend Developer", "React Developer", "Full Stack Developer", "Software Engineer"]}
              typeSpeed={55}
              backSpeed={38}
              loop
              className="text-sm font-semibold"
              style={{ color: "var(--text-secondary)" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fade(0.22)}
            className="mb-8 leading-relaxed"
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            2+ years building high-performance production systems. Specializing in
            React.js, Node.js, Firebase, PHP, real-time architectures, and optimised database design.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            {...fade(0.27)}
            className="flex flex-wrap gap-3 items-center justify-center md:justify-start mb-8"
          >
            <motion.a href="#projects" className="btn-primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <ChevronRight size={15} />
              View Projects
            </motion.a>
            <motion.a href="/Akhilesh_1.pdf" download className="btn-secondary" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Download size={15} />
              Resume
            </motion.a>

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { href: personalInfo.github,            Icon: FaGithub,   label: "GitHub" },
                { href: personalInfo.linkedin,           Icon: FaLinkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`,  Icon: Mail,       label: "Email" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  title={label}
                  className="icon-btn"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            {...fade(0.36)}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {["React.js", "Node.js", "Firebase", "PHP", "MySQL", "Real-Time"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(99,102,241,0.07)",
                  border: "1px solid rgba(99,102,241,0.18)",
                  color: "#a5b4fc",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ opacity: 0.4 }}
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.9 }}
      >
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          scroll
        </span>
        <ArrowDown size={13} style={{ color: "var(--text-muted)" }} />
      </motion.div>
    </section>
  );
}
