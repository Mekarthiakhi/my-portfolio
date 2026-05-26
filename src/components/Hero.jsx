// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  ArrowDown,
  Download,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import akki from "../../public/akki.png";
import TechIcons from "./TechIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen p-8 bg-gradient-to-r from-brand-indigo to-brand-cyan animate-gradient-move overflow-hidden"
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient background glows for high-end aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Tech Stack Icons */}
      <TechIcons />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-6 md:px-12 py-12">
        {/* LEFT SIDE (Profile Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="p-4 md:p-6 rounded-full">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
              <img src={akki} alt={personalInfo.name} className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Content) */}
        <div style={{ padding: "18px" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              marginBottom: 20,
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#6366f1",
            }}
          >
            <Sparkles size={12} className="animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.2rem,4vw,3rem)] font-extrabold mb-3 leading-snug"
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="gradient-text">{word}</span> : word}
                {i === 0 ? " " : ""}
              </span>
            ))}
          </motion.h1>

          {/* Premium Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[var(--text-secondary)] mb-4"
          >
            Building Scalable Healthcare & Modern Web Applications
          </motion.h2>

          {/* TYPING ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactTyped
              strings={["Frontend Developer", "React Developer", "Full Stack Developer", "Software Engineer"]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="text-lg text-[var(--text-secondary)] font-semibold inline-block mb-3"
            />
          </motion.div>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              maxWidth: 500,
              color: "var(--text-secondary)",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
          >
            {/* Icon-based CTA Buttons */}
            <a
              href="#projects"
              className="icon-btn p-2 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
              title="Projects"
            >
              <ChevronRight size={20} />
            </a>
            <a
              href="/Akhilesh_Resume.pdf"
              className="icon-btn p-2 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
              download
              title="Resume"
            >
              <Download size={20} />
            </a>
            <a
              href={"mailto:" + personalInfo.email}
              className="icon-btn p-2 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
              title="Email"
            >
              {/* Simple mail icon using inline SVG */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                <path d="M2 4v16h20V4H2zm18 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v12z" />
              </svg>
            </a>
            {/* Icon-based Social Links alongside main buttons for a clean UI */}
            <div style={{ display: "flex", gap: 10, marginLeft: 8 }}>
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                title="GitHub"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                title="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={18} className="text-white animate-pulse" />
      </motion.div>
    </section>
  );
}
