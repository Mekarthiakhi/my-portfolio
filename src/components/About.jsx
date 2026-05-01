import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { education, awards } from "../data/portfolio";
import {
  GraduationCap,
  Trophy,
  MapPin,
  Zap,
  Shield,
  Cpu,
  Activity,
} from "lucide-react";

const strengths = [
  { label: "Scalable System Design", icon: Cpu },
  { label: "Real-Time Systems", icon: Activity },
  { label: "Clean Architecture", icon: Shield },
  { label: "Performance Optimization", icon: Zap },
];

const stats = [
  { label: "Years Exp", value: "2+" },
  { label: "Daily Txns", value: "1K+" },
  { label: "LC Problems", value: "300+" },
  { label: "Projects", value: "6+" },
];

export default function About() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const summary = `
Full Stack Developer with 2+ years of experience building scalable, high-performance applications in production.

Currently working at Medicover Hospitals, developing systems handling 1000+ daily transactions with focus on performance optimization, real-time architecture, and clean system design.

I specialize in React.js and Node.js, building reliable, maintainable, and efficient systems.
`;

  return (
    <section
      id="about"
      style={{
        padding: "clamp(80px, 10vw, 120px) 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* HEADER */}
        <motion.div variants={itemVariants} style={{ marginBottom: 50 }}>
          <div className="section-tag">
            <span>●</span> About Me
          </div>

          <h2 className="section-title">
            Building scalable <span className="gradient-text">systems</span>
          </h2>

          <p className="section-subtitle" style={{ maxWidth: 700 }}>
            {summary}
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
          }}
        >
          {/* LEFT SIDE */}
          <div>
            {/* STATS */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
                marginBottom: 30,
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      background: "linear-gradient(90deg,#6366f1,#22d3ee)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* STRENGTHS */}
            <motion.div variants={itemVariants}>
              <h3
                style={{
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "var(--text-primary)",
                }}
              >
                Core Strengths
              </h3>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {strengths.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="glass-card"
                      style={{
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <Icon size={18} color="#6366f1" />
                      <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              variants={itemVariants}
              className="glass-card"
              style={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 20,
              }}
            >
              <MapPin size={18} color="#22d3ee" />
              <span style={{ fontSize: "0.9rem" }}>Hyderabad, India</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* EXPERIENCE HIGHLIGHT */}
            <motion.div
              variants={itemVariants}
              className="glass-card"
              style={{ padding: "20px" }}
            >
              <h3 style={{ marginBottom: 10 }}>Current Role</h3>

              <p style={{ fontWeight: 700 }}>Software Developer</p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                }}
              >
                Medicover Hospitals • Hyderabad
              </p>

              <ul
                style={{
                  marginTop: 12,
                  paddingLeft: 16,
                  fontSize: "0.85rem",
                }}
              >
                <li>Handled 1000+ daily transactions</li>
                <li>Reduced manual effort by 40%</li>
                <li>Improved DB performance by 30%</li>
                <li>Built real-time notification system</li>
              </ul>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              variants={itemVariants}
              className="glass-card"
              style={{ padding: "20px" }}
            >
              <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <GraduationCap size={18} color="#8b5cf6" />
                <h3>Education</h3>
              </div>

              <p style={{ fontWeight: 700 }}>{education.degree}</p>
              <p style={{ fontSize: "0.85rem" }}>{education.university}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                {education.period} • GPA: {education.gpa}
              </p>
            </motion.div>

            {/* AWARDS */}
            <motion.div
              variants={itemVariants}
              className="glass-card"
              style={{ padding: "20px" }}
            >
              <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Trophy size={18} color="#f59e0b" />
                <h3>Awards</h3>
              </div>

              {awards.map((award, i) => (
                <p key={i} style={{ fontSize: "0.85rem" }}>
                  🏆 {award}
                </p>
              ))}
            </motion.div>

            {/* PHILOSOPHY */}
            <motion.div
              variants={itemVariants}
              style={{
                padding: "20px",
                borderRadius: 14,
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(34,211,238,0.1))",
              }}
            >
              <p style={{ fontStyle: "italic" }}>
                "I build production systems, not just projects."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
