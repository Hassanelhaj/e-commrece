// components/Model.js
import React, { useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/path/to/your/model.gltf'); // Replace with your model path
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.yourModelMesh.geometry} material={materials.yourModelMaterial} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}