"use client"

import dynamic from "next/dynamic"
import { Suspense, useRef } from "react"
import { useFrame, Canvas } from "@react-three/fiber"
import type * as THREE from "three"

function FloatingElements() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshPhongMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.2} />
    </mesh>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#d4af37" />
      <FloatingElements />
    </>
  )
}

const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Loading experience...</p>
      </div>
    </div>
  ),
})

export default function Interactive3DHero() {
  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur">
      <Suspense
        fallback={
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Loading experience...</p>
            </div>
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 4] }} className="!h-full">
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
