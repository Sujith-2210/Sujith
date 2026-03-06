'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function RotatingBrain() {
  const groupRef = useRef<THREE.Group>(null)

  // Create a stylized brain shape using spheres and torus
  const createBrainGeometry = () => {
    const group = new THREE.Group()
    
    // Main brain lobes
    const leftLobe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 4),
      new THREE.MeshPhongMaterial({ 
        color: '#6b8e4f',
        emissive: '#5a7a42',
        shininess: 100
      })
    )
    leftLobe.position.set(-0.8, 0.2, 0)
    leftLobe.scale.set(1, 1.1, 0.9)
    
    const rightLobe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 4),
      new THREE.MeshPhongMaterial({ 
        color: '#7fa361',
        emissive: '#6a8e52',
        shininess: 100
      })
    )
    rightLobe.position.set(0.8, 0.2, 0)
    rightLobe.scale.set(1, 1.1, 0.9)
    
    // Connective tissue (corpus callosum)
    const connector = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.15, 16, 100),
      new THREE.MeshPhongMaterial({ 
        color: '#d4a574',
        emissive: '#c89463',
        shininess: 80
      })
    )
    connector.rotation.x = Math.PI / 2
    connector.position.set(0, 0.1, 0)
    
    group.add(leftLobe, rightLobe, connector)
    return group
  }

  useEffect(() => {
    if (groupRef.current) {
      const brain = createBrainGeometry()
      groupRef.current.add(brain)
    }
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return <group ref={groupRef} />
}
