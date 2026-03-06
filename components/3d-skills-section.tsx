'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import * as THREE from 'three'

function SkillCube({ label, color, position }: { label: string; color: string; position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        <meshStandardMaterial wireframe={false} />
      </mesh>
    </Float>
  )
}

function SkillsGrid() {
  const skills = useMemo(() => [
    { label: 'Python', color: '#6b8e4f', position: [-3, 2, 0] as [number, number, number] },
    { label: 'LLMs', color: '#d4a574', position: [0, 2, 0] as [number, number, number] },
    { label: 'Vision', color: '#e8956f', position: [3, 2, 0] as [number, number, number] },
    { label: 'React', color: '#6b8e4f', position: [-3, -1, 0] as [number, number, number] },
    { label: 'Agents', color: '#d4a574', position: [0, -1, 0] as [number, number, number] },
    { label: 'RAG', color: '#e8956f', position: [3, -1, 0] as [number, number, number] },
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
    <section className="w-full h-screen bg-background dark:bg-slate-900 flex items-center justify-center">
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} />
            <SkillsGrid />
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="absolute top-20 left-10 text-foreground dark:text-foreground z-10">
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground dark:text-muted-foreground max-w-md">
          Interactive 3D representation of my technical abilities. Each cube represents a key skill in my arsenal.
        </p>
      </div>
    </section>
  )
}
