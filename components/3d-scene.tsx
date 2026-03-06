'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Html } from '@react-three/drei'
import { Suspense } from 'react'
import RotatingBrain from './rotating-brain'

export default function Scene3D() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="studio" />
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
        />
        
        <Suspense fallback={null}>
          <RotatingBrain />
        </Suspense>
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  )
}
