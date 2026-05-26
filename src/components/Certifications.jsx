import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: "Advanced React & Redux",
    issuer: "Udemy / Meta",
    date: "2023",
    icon: <Award className="text-blue-500" />,
    url: "#"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Chandigarh University",
    date: "2023",
    icon: <ShieldCheck className="text-emerald-500" />,
    url: "#"
  },
  {
    title: "Database Design & SQL Optimization",
    issuer: "Oracle / Coursera",
    date: "2022",
    icon: <Award className="text-cyan-500" />,
    url: "#"
  }
];

export default function Certifications() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="py-16 px-6 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="section-tag"><span>●</span> Qualifications</div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex items-start gap-4 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500" />
              <div className="p-3 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 flex items-center justify-center">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-medium">
                  {cert.issuer}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold px-2 py-1 rounded bg-white/5 dark:bg-black/5 text-[var(--text-secondary)]">
                  Issued {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
