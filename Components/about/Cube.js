// components/Cube.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} /> {/* Creates a cube with width, height, and depth of 2 units */}
      <meshStandardMaterial color="blue" /> {/* Sets the cube's color to blue */}
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} /> {/* Adds ambient light to the scene */}
      <pointLight position={[10, 10, 10]} /> {/* Adds a point light to the scene */}
      <Cube />
      <OrbitControls enableZoom={true} autoRotate /> {/* Allows user interaction and auto-rotation */}
    </Canvas>
  );
}