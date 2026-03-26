
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z += 0.001
    }
  })

  // Create particle system
  const particleGeometry = new THREE.BufferGeometry()
  const particleCount = 1000
  const positionArray = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10
  }

  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3))

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshPhongMaterial color="#d4af37" emissive="#d4af37" wireframe={false} emissiveIntensity={0.3} />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry attach="geometry" {...particleGeometry} />
        <pointsMaterial attach="material" size={0.02} color="#c8b6ff" sizeAttenuation transparent />
      </points>
    </>
  )
}
