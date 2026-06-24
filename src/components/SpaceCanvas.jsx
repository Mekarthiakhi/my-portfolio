import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import HologramAvatar from './HologramAvatar';
import { Suspense } from 'react';

export default function SpaceCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-[#020617] overflow-hidden">
      {/* Dark gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/40 to-slate-950 z-[1] pointer-events-none" />
      
      {/* Neon glowing radial backdrops */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-600/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-600/10 rounded-full blur-[70px] sm:blur-[120px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          {/* Ambient space dust lights */}
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
          
          {/* Glowing starfield background */}
          <Stars 
            radius={80} 
            depth={60} 
            count={1500} 
            factor={6} 
            saturation={0.5} 
            fade 
            speed={1.5} 
          />
          
          {/* Floating space dust (custom slow moving particle group) */}
          <SpaceDust count={250} />

          {/* Central Holographic Particle Avatar */}
          <HologramAvatar />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Sub-component to render floating ambient space dust
function SpaceDust({ count = 200 }) {
  const pointsRef = useRef();
  
  // Generate random positions spread across a wide range
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;     // X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // Z
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (pointsRef.current) {
      // Drift dust slowly
      pointsRef.current.rotation.y = time * 0.01;
      pointsRef.current.rotation.x = time * 0.005;
      
      // Floating wave movement
      pointsRef.current.position.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#ffffff" 
        size={0.03} 
        sizeAttenuation 
        transparent 
        opacity={0.4} 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
