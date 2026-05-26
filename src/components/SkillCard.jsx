import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPhp, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiFirebase, SiRedux, SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs, SiVite } from 'react-icons/si';

// Map skill names to icons (fallback to generic icon)
const iconMap = {
  'React.js': <FaReact className="text-blue-500" />, // Tailwind will style
  'React': <FaReact className="text-blue-500" />, // alias
  'Node.js': <FaNodeJs className="text-green-500" />,
  'PHP': <FaPhp className="text-indigo-600" />,
  'JavaScript': <FaJs className="text-yellow-500" />,
  'TypeScript': <SiTypescript className="text-blue-600" />, 
  'HTML5': <FaHtml5 className="text-orange-500" />, 
  'CSS3': <FaCss3Alt className="text-blue-600" />, 
  'Firebase': <SiFirebase className="text-rose-500" />, 
  'Redux': <SiRedux className="text-purple-500" />, 
  'Tailwind CSS': <SiTailwindcss className="text-sky-500" />, 
  'Git': <FaGitAlt className="text-red-500" />, 
  'MySQL': <FaDatabase className="text-orange-500" />, 
  'MongoDB': <SiMongodb className="text-green-600" />, 
  'Docker': <FaDocker className="text-blue-600" />, 
  'AWS': <FaAws className="text-orange-500" />, 
  // Add more mappings as needed
};

// Helper to get icon for a skill name
function getSkillIcon(name) {
  return iconMap[name] || <FaDatabase className="text-gray-400" />; // default
}

export default function SkillCard({ category, items, color, icon }) {
  // For demo, assign a random proficiency (70-95) per item
  const getProficiency = () => Math.floor(Math.random() * 26) + 70;

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ padding: '28px', position: 'relative' }}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-2 rounded-t-lg"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-md"
          style={{ background: `${color}18`, border: `1px solid ${color}35` }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
          {category}
        </h3>
      </div>
      {/* Skill list */}
      <div className="grid grid-cols-1 gap-3">
        {items.map((skill) => {
          const prog = getProficiency();
          return (
            <div key={skill} className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                {getSkillIcon(skill)}
              </div>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {skill}
              </span>
              <div className="flex-1 h-2 bg-gray-700/30 rounded-full overflow-hidden ml-2">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                  style={{ width: `${prog}%` }}
                />
              </div>
              <span className="text-xs text-white ml-2">{prog}%</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
