import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

export default function HologramAvatar() {
  const meshRef = useRef();
  const pointsRef = useRef();
  const outerRingRef = useRef();
  
  // State for mouse positions
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  // Handle mouse move on window to get coordinates
  if (typeof window !== 'undefined') {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates (-1 to 1)
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
  }

  // Generate particle positions for the sphere
  const particleCount = 1200;
  const spherePositions = useRef();
  if (!spherePositions.current) {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Spherical coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      const r = 1.6 + Math.random() * 0.3; // radius with some noise
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    spherePositions.current = positions;
  }

  // Generate outer ring particles
  const ringCount = 400;
  const ringPositions = useRef();
  if (!ringPositions.current) {
    const positions = new Float32Array(ringCount * 3);
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      const r = 3.5 + Math.random() * 0.4;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.2; // slight thickness
      positions[i * 3 + 2] = Math.sin(angle) * r;
    }
    ringPositions.current = positions;
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Smooth mouse interpolation (spring effect)
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, targetMouse.current.x, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, targetMouse.current.y, 0.05);

    // 1. Central Wireframe Sphere Animations
    if (meshRef.current) {
      // Gentle floating drift
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.15;
      meshRef.current.position.x = Math.cos(time * 0.6) * 0.1;
      
      // Rotate core sphere
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = time * 0.1;

      // Warp sphere scaling dynamically based on mouse coordinate distance
      const dist = Math.sqrt(mouse.current.x * mouse.current.x + mouse.current.y * mouse.current.y);
      const scaleVal = 1.0 + Math.sin(time * 2) * 0.05 + dist * 0.15;
      meshRef.current.scale.set(scaleVal, scaleVal, scaleVal);

      // Follow mouse movement (magnetic attraction)
      meshRef.current.position.x += mouse.current.x * 0.8;
      meshRef.current.position.y += mouse.current.y * 0.6;
      
      // Tilt based on mouse velocity/coordinates
      meshRef.current.rotation.z = mouse.current.x * -0.4;
      meshRef.current.rotation.x = time * 0.1 + mouse.current.y * 0.4;
    }

    // 2. Sphere Particles Animation
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -time * 0.1;
      pointsRef.current.rotation.x = -time * 0.05;
      
      // Magnetic offset
      pointsRef.current.position.x = mouse.current.x * 0.9;
      pointsRef.current.position.y = mouse.current.y * 0.75;
      pointsRef.current.position.z = Math.sin(time * 0.5) * 0.1;
    }

    // 3. Outer Floating Ring Animation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y = time * 0.05;
      outerRingRef.current.rotation.x = 0.5 + Math.sin(time * 0.3) * 0.1; // tilted orbit
      outerRingRef.current.rotation.z = time * 0.02;

      // Magnetic offset (slightly lagged)
      outerRingRef.current.position.x = mouse.current.x * 0.5;
      outerRingRef.current.position.y = mouse.current.y * 0.4;
    }
  });

  return (
    <group>
      {/* Central Holographic Wireframe Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          wireframe 
          transparent 
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Floating Sparkles/Particles (Sphere) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            args={[spherePositions.current, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          color="#06b6d4" 
          size={0.05} 
          sizeAttenuation 
          transparent 
          opacity={0.8} 
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Orbiting Tech Ring */}
      <points ref={outerRingRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            args={[ringPositions.current, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          color="#10b981" 
          size={0.06} 
          sizeAttenuation 
          transparent 
          opacity={0.7} 
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
