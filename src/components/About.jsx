import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { education, awards } from "../data/portfolio";
import { GraduationCap, Trophy, Cpu, Activity, Shield, Zap, TrendingUp } from "lucide-react";

const strengths = [
  { label: "Scalable System Design",  icon: Cpu,      desc: "Fault-tolerant architectures, load-balanced microservices, and distributed systems." },
  { label: "Real-Time Systems",        icon: Activity, desc: "Async event buses, Firebase FCM push queues, and WebSocket pipelines." },
  { label: "Clean Architecture",       icon: Shield,   desc: "Low coupling, high cohesion, SOLID design principles throughout." },
  { label: "Performance Optimization", icon: Zap,      desc: "Database index tuning, Redis-based caching, and query optimization strategies." },
];

const stats = [
  { value: "2+",   label: "Years Experience",    color: "#3b82f6" },
  { value: "1K+",  label: "Daily Txns Secured",  color: "#8b5cf6" },
  { value: "300+", label: "LeetCode Solutions",  color: "#06b6d4" },
  { value: "8+",   label: "Production Apps",     color: "#10b981" },
];

const cv = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const iv = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      style={{
        background: "var(--bg-primary)",
        paddingTop: "clamp(80px, 10vw, 130px)",
        paddingBottom: "clamp(80px, 10vw, 130px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle at top right, rgba(99,102,241,0.06) 0%, transparent 65%)",
        }}
      />

      <motion.div
        ref={ref}
        className="container"
        variants={cv}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* ── Section Header ── */}
        <motion.div variants={iv} style={{ marginBottom: 64 }}>
          <div className="section-tag"><span>●</span> Professional Profile</div>
          <h2 className="section-title">
            Architecting high-performance{" "}
            <span className="gradient-text">software</span>
          </h2>
          <p className="section-subtitle">
            Full Stack Engineer with 2+ years specializing in the design, optimization, and scaling of
            high-performance web applications — including mission-critical healthcare systems processing
            thousands of daily transactions and real-time push infrastructures.
          </p>
        </motion.div>

        {/* ── Main 2-Column Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "clamp(32px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          {/* LEFT — Stats + Core Strengths */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Stats row */}
            <motion.div
              variants={iv}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: "28px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}
                >
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: `linear-gradient(90deg, ${s.color}, ${s.color}50)`,
                    }}
                  />
                  <p style={{ fontSize: "1.9rem", fontWeight: 900, lineHeight: 1 }} className="gradient-text">
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-secondary)", marginTop: 8 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Core Strengths */}
            <motion.div variants={iv}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <TrendingUp size={16} style={{ color: "#3b82f6" }} />
                <h3 style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-secondary)" }}>
                  Core Engineering Strengths
                </h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                {strengths.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="glass-card"
                      style={{ padding: "20px 18px", display: "flex", alignItems: "flex-start", gap: 14 }}
                    >
                      <div
                        style={{
                          width: 36, height: 36, borderRadius: 10,
                          background: "rgba(99,102,241,0.08)",
                          border: "1px solid rgba(99,102,241,0.18)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, color: "#818cf8",
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 5 }}>
                          {item.label}
                        </h4>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Role + Education + Awards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Current Role */}
            <motion.div variants={iv} className="glass-card" style={{ padding: "28px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #10b981, #06b6d4)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text-secondary)", marginBottom: 4 }}>
                    Current Deployment
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    Medicover Hospitals
                  </p>
                </div>
                <span style={{
                  padding: "4px 10px", borderRadius: 6, fontSize: "0.65rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399",
                }}>Active</span>
              </div>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>
                Software Developer (Full-Stack)
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Processing 1,000+ daily financial & registration logs securely.",
                  "Automated billing pipelines capturing ~40% manual effort reduction.",
                  "Refactored DB layers with index schemas, shaving latency by ~30%.",
                  "Implemented real-time push notification microservices with zero message loss.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#34d399", marginTop: 7, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div variants={iv} className="glass-card" style={{ padding: "24px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #8b5cf6, #3b82f6)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <GraduationCap size={18} style={{ color: "#a78bfa" }} />
                <h3 style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-secondary)" }}>
                  Academic Background
                </h3>
              </div>
              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                {education.degree}
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 16 }}>
                {education.university}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                <span>{education.period}</span>
                <span style={{ fontWeight: 600, color: "var(--accent-blue)" }}>Graduated</span>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div variants={iv} className="glass-card" style={{ padding: "24px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #f59e0b, #ef4444)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Trophy size={18} style={{ color: "#fbbf24" }} />
                <h3 style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-secondary)" }}>
                  Distinctions &amp; Honors
                </h3>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {awards.map((award, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.83rem", color: "var(--text-secondary)" }}>
                    <span>🏆</span>
                    <span style={{ fontWeight: 500 }}>{award}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
