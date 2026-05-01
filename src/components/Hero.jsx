import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  ChevronRight,
  Sparkles,
  Code2,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import akki from "../../public/akki.png"; // 👉 replace with your image path



export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          gap: 60,
          maxWidth: 1100,
          width: "100%",
          zIndex: 2,
        }}
      >
        {/* 🔥 LEFT SIDE (ICON / IMAGE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              padding: 4,
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.6), rgba(34,211,238,0.6))",
              boxShadow: "0 0 60px rgba(99,102,241,0.3)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#0B0F19",
              }}
            >
              <img
                src={akki} // 👉 replace with your image path
                alt="Akhilesh"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* 🔥 RIGHT SIDE */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            <Sparkles size={12} />
            Available for Opportunities
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: 10,
              lineHeight: 1.2,
            }}
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="gradient-text">{word}</span> : word}
                {i === 0 ? " " : ""}
              </span>
            ))}
          </motion.h1>

          {/* ROLE */}
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            {personalInfo.role}
          </p>

          {/* TAGLINE */}
          <p
            style={{
              maxWidth: 500,
              color: "var(--text-secondary)",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              View Projects <ChevronRight size={14} />
            </a>

            <a href="/Akhilesh.pdf" className="btn-secondary">
              <Download size={14} /> Resume
            </a>
          </div>

          {/* SOCIAL (SVG FIXED 🔥) */}
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            {/* GitHub */}
            <a href={personalInfo.github} target="_blank" style={iconStyle}>
              <svg width="18" height="18" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96..." />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href={personalInfo.linkedin} target="_blank" style={iconStyle}>
              <svg width="18" height="18" fill="currentColor">
                <path d="M4.98 3.5C4.98 5 3.87 6 2.5 6S0 5 0 3.5 1.12 1 2.5 1 4.98 2 4.98 3.5zM.5 8h4v12h-4zM7.5 8h3.6v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V20h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}

const iconStyle = {
  padding: "10px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "var(--text-secondary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
