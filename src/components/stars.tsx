
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function Stars() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.z += 0.0001
    }
  })

  const starCount = 500
  const positionArray = new Float32Array(starCount * 3)

  for (let i = 0; i < starCount * 3; i += 3) {
    positionArray[i] = (Math.random() - 0.5) * 50
    positionArray[i + 1] = (Math.random() - 0.5) * 50
    positionArray[i + 2] = (Math.random() - 0.5) * 50
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3))

  return (
    <points ref={starsRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial attach="material" size={0.1} color="#ffffff" sizeAttenuation transparent />
    </points>
  )
}
