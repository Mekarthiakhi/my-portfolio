import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';

export default function SkillGalaxy({ gravityMode = 'zero' }) {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isOver: false });
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  const gravityRef = useRef(gravityMode);
  useEffect(() => {
    gravityRef.current = gravityMode;
  }, [gravityMode]);

  // Flatten the skills array to get all items with their category color and icon
  const allSkills = skills.flatMap(cat => 
    cat.items.map(item => ({
      name: item,
      category: cat.category,
      color: cat.color,
      icon: cat.icon
    }))
  );

  // References to the DOM elements of the badges
  const badgeRefs = useRef([]);

  // Initialize dimensions on mount and resize
  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const updateDimensions = () => {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width || 800,
          height: rect.height || 500
        });
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  // Physics setup
  useEffect(() => {
    if (dimensions.width === 0 || allSkills.length === 0) return;

    const width = dimensions.width;
    const height = dimensions.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Physics parameters
    const friction = 0.95;       // velocity dampening
    const driftStrength = 0.05;  // random weightless drift
    const springStrength = 0.015; // orbital attraction pull
    const repulsionRadius = 160; // distance at which mouse repels badges
    const repulsionStrength = 2.2; // force of repulsion
    const elasticity = 0.75;      // bounce energy conservation

    // Initialize physics state for each skill badge
    const items = allSkills.map((skill, index) => {
      // Distribute home positions across 3 concentric orbital rings
      const ringIndex = index % 3;
      const ringRadius = 120 + ringIndex * 70; // 120px, 190px, 260px
      const ringSpeed = 0.001 * (ringIndex % 2 === 0 ? 1 : -1) * (3 - ringIndex);
      
      // Calculate initial position on the ring
      const initialAngle = (index / allSkills.length) * Math.PI * 2;
      const x = centerX + Math.cos(initialAngle) * ringRadius;
      const y = centerY + Math.sin(initialAngle) * ringRadius;

      return {
        ...skill,
        index,
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        ringRadius,
        ringSpeed,
        angle: initialAngle,
        width: 130, // estimated width for bounds collision
        height: 42  // estimated height for bounds collision
      };
    });

    // Handle mouse movement relative to the container
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isOver: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, isOver: false };
    };

    // Touch events for mobile support
    const handleTouchMove = (e) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
        isOver: true
      };
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleMouseLeave);

    let time = 0;

    // Core Physics Loop
    const updatePhysics = () => {
      time += 0.5;
      const currentCenterX = containerRef.current ? containerRef.current.clientWidth / 2 : centerX;
      const currentCenterY = containerRef.current ? containerRef.current.clientHeight / 2 : centerY;
      const currentGravity = gravityRef.current;

      items.forEach((item) => {
        const el = badgeRefs.current[item.index];
        if (!el) return;

        // Get actual badge dimensions dynamically if possible
        const badgeWidth = el.clientWidth || item.width;
        const badgeHeight = el.clientHeight || item.height;

        if (currentGravity === 'zero') {
          // 1. Orbital Gravity (Calculate dynamic target coordinate moving along the orbit)
          item.angle += item.ringSpeed;
          const targetX = currentCenterX + Math.cos(item.angle) * item.ringRadius - badgeWidth / 2;
          const targetY = currentCenterY + Math.sin(item.angle) * item.ringRadius - badgeHeight / 2;

          // 2. Apply spring force pulling badge to target orbital position
          const forceX = (targetX - item.x) * springStrength;
          const forceY = (targetY - item.y) * springStrength;
          item.vx += forceX;
          item.vy += forceY;

          // 3. Apply random zero-gravity drift
          item.vx += (Math.random() - 0.5) * driftStrength;
          item.vy += (Math.random() - 0.5) * driftStrength;
        } else {
          // Apply downward gravity force
          const gForce = currentGravity === 'hyper' ? 2.5 : 0.8;
          item.vy += gForce;
        }

        // 4. Mouse Repulsion Physics
        if (mouseRef.current.isOver) {
          // Calculate distance from center of badge to mouse
          const badgeCenterX = item.x + badgeWidth / 2;
          const badgeCenterY = item.y + badgeHeight / 2;
          
          const dx = badgeCenterX - mouseRef.current.x;
          const dy = badgeCenterY - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius && distance > 10) {
            // Stronger repulsion force when closer
            const force = (repulsionRadius - distance) / repulsionRadius;
            const push = force * repulsionStrength;
            
            // Push velocities outward
            item.vx += (dx / distance) * push;
            item.vy += (dy / distance) * push;
          }
        }

        // 5. Update positions with velocities
        item.vx *= friction;
        item.vy *= friction;
        item.x += item.vx;
        item.y += item.vy;

        // 6. Boundary Collisions (Bounce elastically off container borders)
        const containerW = containerRef.current ? containerRef.current.clientWidth : width;
        const containerH = containerRef.current ? containerRef.current.clientHeight : height;

        if (item.x < 10) {
          item.x = 10;
          item.vx = -item.vx * elasticity;
        } else if (item.x > containerW - badgeWidth - 10) {
          item.x = containerW - badgeWidth - 10;
          item.vx = -item.vx * elasticity;
        }

        if (item.y < 10) {
          item.y = 10;
          item.vy = -item.vy * elasticity;
        } else if (item.y > containerH - badgeHeight - 10) {
          item.y = containerH - badgeHeight - 10;
          item.vy = -item.vy * elasticity;
          
          if (currentGravity !== 'zero') {
             item.vx *= 0.8; // Apply floor friction
          }
        }

        // 7. Update DOM elements directly via transforms for ultimate performance
        el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
      });

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    // Start physics loop
    requestRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(requestRef.current);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleMouseLeave);
    };
  }, [dimensions, allSkills.length]);

  return (
    <section id="skills" className="relative w-full min-h-screen py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">
      {/* Visual background rings and grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glowing center node */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Antigravity <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">Skill Galaxy</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Hover your cursor over the galaxy to perturb the gravitational field. Watch the weightless technologies drift, repel, and orbit elastically in zero-g space.
        </p>
      </div>

      {/* Galaxy Physics Container */}
      <div 
        ref={containerRef}
        className={`relative w-full max-w-5xl h-[450px] sm:h-[550px] rounded-3xl border border-white/5 bg-slate-950/20 backdrop-blur-md overflow-hidden cursor-crosshair transition-shadow duration-1000 shadow-2xl ${gravityMode === 'hyper' ? 'shadow-red-950/40' : 'shadow-violet-950/10'}`}
      >
        {/* Orbital Guidance Rings in Background */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-dashed transition-colors duration-1000 pointer-events-none ${gravityMode !== 'zero' ? 'border-red-500/10' : 'border-white/5'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed transition-colors duration-1000 pointer-events-none ${gravityMode !== 'zero' ? 'border-red-500/10' : 'border-white/5'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed transition-colors duration-1000 pointer-events-none ${gravityMode !== 'zero' ? 'border-red-500/10' : 'border-white/5'}`} />

        {/* Central Core Hologram Representation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
          <div className={`w-16 h-16 rounded-full blur-md animate-pulse opacity-60 transition-colors duration-1000 ${gravityMode !== 'zero' ? 'bg-gradient-to-tr from-red-600 to-orange-500' : 'bg-gradient-to-tr from-violet-600 to-cyan-500'}`} />
          <div className="absolute text-center mt-2">
            <span className={`text-[10px] uppercase font-mono tracking-widest transition-colors duration-1000 ${gravityMode !== 'zero' ? 'text-red-400/80' : 'text-violet-400/80'}`}>Core</span>
          </div>
        </div>

        {/* Physics-driven badges */}
        {allSkills.map((skill, index) => (
          <div
            key={index}
            ref={el => badgeRefs.current[index] = el}
            className="absolute left-0 top-0 select-none px-3.5 py-2 rounded-xl border flex items-center gap-2 text-xs font-semibold text-white transition-all duration-300 pointer-events-auto shadow-lg shadow-black/30 backdrop-blur-md"
            style={{
              borderColor: `${skill.color}20`,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              boxShadow: `0 0 15px ${skill.color}08, inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            <span className="text-sm">{skill.icon}</span>
            <span>{skill.name}</span>
            
            {/* Tiny hover glow indicator */}
            <span 
              className="w-1 h-1 rounded-full animate-ping"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
