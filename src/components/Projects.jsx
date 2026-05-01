import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolio";
import { GitFork, ExternalLink, Sparkles } from "lucide-react";

export default function Projects() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      style={{
        padding: "clamp(80px, 10vw, 120px) 24px",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.05)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={cardVariants} style={{ marginBottom: 48 }}>
            <div className="section-tag">
              <span>●</span> Projects
            </div>
            <h2 className="section-title">
              Things I've <span className="gradient-text">shipped</span>
            </h2>
            <p className="section-subtitle">
              Production systems built with performance, scalability and clean
              architecture in mind.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            variants={cardVariants}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 40,
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 100,
                  fontSize: "0.82rem",
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  border: "none",
                  background:
                    filter === cat
                      ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                      : "var(--glass)",
                  color: filter === cat ? "white" : "var(--text-secondary)",
                  backdropFilter: "blur(8px)",
                  outline:
                    filter !== cat ? "1px solid var(--glass-border)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 24,
              }}
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  onMouseEnter={() => setHovered(project.title)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -8 }}
                  className="glass-card"
                  style={{
                    padding: "28px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                    transition: "box-shadow 0.3s",
                    boxShadow:
                      hovered === project.title
                        ? `0 24px 60px ${project.color}25`
                        : "none",
                  }}
                >
                  {/* Top accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${project.color}, transparent)`,
                      borderRadius: "16px 16px 0 0",
                      opacity: hovered === project.title ? 1 : 0.6,
                      transition: "opacity 0.3s",
                    }}
                  />

                  {/* Glow */}
                  {hovered === project.title && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        top: -50,
                        right: -50,
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: `${project.color}10`,
                        filter: "blur(40px)",
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: `${project.color}18`,
                        border: `1px solid ${project.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                      }}
                    >
                      {project.icon}
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: "var(--glass)",
                          border: "1px solid var(--glass-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-secondary)",
                          transition: "all 0.2s",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.borderColor =
                            "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-secondary)";
                          e.currentTarget.style.borderColor =
                            "var(--glass-border)";
                        }}
                      >
                        <GitFork size={16} />
                      </a>
                      <a
                        href={project.demo}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: `${project.color}18`,
                          border: `1px solid ${project.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: project.color,
                          transition: "all 0.2s",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${project.color}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${project.color}18`;
                        }}
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Category badge */}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: 100,
                      fontSize: "0.7rem",
                      fontFamily: "DM Sans",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}25`,
                      color: project.color,
                      marginBottom: 10,
                    }}
                  >
                    {project.category}
                  </span>

                  <h3
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                      marginBottom: 10,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Key features */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {project.features.map((feat) => (
                        <span
                          key={feat}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: "0.75rem",
                            color: "var(--text-secondary)",
                            padding: "4px 10px",
                            borderRadius: 6,
                            background: "var(--glass)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <Sparkles
                            size={10}
                            style={{ color: project.color }}
                          />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      paddingTop: 16,
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "DM Sans",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: 6,
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}25`,
                          color: project.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
