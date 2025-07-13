import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

import * as THREE from 'three';

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center font-sans text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Module Title 1: Your First 3d Scene with Three.js and React
      </h1>

      <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl px-4">
        Below is a basic 3D scene with a spinning cube.
      </p>

      {/* 3D Canvas Container */}
      <div className="w-full max-w-4xl h-96 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <Canvas
          camera={{ fov: 75, position: [0, 0, 5] }}
          shadows
          gl={{ antialias: true }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(window.devicePixelRatio);
          }}
        >
          <Suspense
            fallback={
              <Html center className="text-white text-2xl">
                Loading 3D scenario
              </Html>
            }
          >
            <SceneContent />
          </Suspense>
        </Canvas>
      </div>
      <div className="mt-8 text-gray-400 text-sm text-center px-4">
        <p>Use your mouse to interact:</p>
        <p>Left-click and drag: **Rotate camera**</p>
        <p>Right-click and drag (or Ctrl + Left-click): **Pan camera**</p>
        <p>Scroll wheel: **Zoom in/out**</p>
      </div>
    </div>
  );
};

const SceneContent = () => {};

export default App;
