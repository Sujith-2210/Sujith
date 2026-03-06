'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

// Simple rotating sphere component
function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial color="#6b8e4f" emissive="#5a7a3f" />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-200 to-green-100">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <RotatingSphere />
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#d4a574" />
        </Suspense>
      </Canvas>
    </div>
  )
}
