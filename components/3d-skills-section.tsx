'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

function SkillCube({ color, position }: { color: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const floatOffset = useRef(Math.random() * Math.PI * 2)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime + floatOffset.current) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.2} shininess={100} />
    </mesh>
  )
}

function SkillsGrid() {
  const skills = useMemo(() => [
    { color: '#6b8e4f', position: [-3, 2, 0] as [number, number, number] },
    { color: '#d4a574', position: [0, 2, 0] as [number, number, number] },
    { color: '#e8956f', position: [3, 2, 0] as [number, number, number] },
    { color: '#6b8e4f', position: [-3, -1, 0] as [number, number, number] },
    { color: '#d4a574', position: [0, -1, 0] as [number, number, number] },
    { color: '#e8956f', position: [3, -1, 0] as [number, number, number] },
  ], [])

  return (
    <>
      {skills.map((skill, idx) => (
        <SkillCube key={idx} {...skill} />
      ))}
    </>
  )
}

export default function Skills3DSection() {
  return (
    <section className="w-full h-screen bg-background dark:bg-card flex items-center justify-center relative">
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <SkillsGrid />
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-10, -10, 5]} intensity={0.4} color="#d4a574" />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="absolute top-20 left-10 text-foreground dark:text-foreground z-10">
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground dark:text-muted-foreground max-w-md">
          Interactive 3D cubes representing my technical abilities in AI, web development, and computer vision.
        </p>
      </div>
    </section>
  )
}
