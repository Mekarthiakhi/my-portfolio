// src/components/TechIcons.jsx
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiFirebase, SiPhp, SiMysql } from "react-icons/si";

const icons = [
  { component: SiReact, color: "#61DAFB", positionClass: "left-[4%] top-[35%] md:left-[8%]" },
  { component: SiNodedotjs, color: "#68A063", positionClass: "left-[6%] top-[65%] md:left-[12%]" },
  { component: SiFirebase, color: "#FFCA28", positionClass: "right-[4%] top-[25%] md:right-[8%]" },
  { component: SiPhp, color: "#777BB4", positionClass: "right-[6%] top-[55%] md:right-[12%]" },
  { component: SiMysql, color: "#4479A1", positionClass: "right-[5%] top-[80%] md:right-[10%]" },
];

export default function TechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, idx) => {
        const Icon = icon.component;
        const size = 36;
        const delay = idx * 0.4;
        return (
          <motion.div
            key={idx}
            className={`absolute ${icon.positionClass} hidden sm:block z-0 pointer-events-auto`}
            initial={{ opacity: 0.6 }}
            animate={{ y: [0, -12, 0] }}
            whileHover={{ 
              scale: 1.2, 
              opacity: 1,
              transition: { duration: 0.2 } 
            }}
            transition={{ repeat: Infinity, duration: 4, delay, ease: "easeInOut" }}
          >
            <div 
              className="p-3 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300"
              style={{ 
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)',
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.08), 0 0 20px ${icon.color}15`,
              }}
            >
              <Icon 
                size={size} 
                color={icon.color} 
                style={{ filter: `drop-shadow(0 0 10px ${icon.color}50)` }} 
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
