'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface MacbookSceneProps {
  activeProject: number
}

const MacbookModel = ({ activeProject }: MacbookSceneProps) => {
  const macbookRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Mesh>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (macbookRef.current) {
      macbookRef.current.rotation.y += 0.001
      macbookRef.current.rotation.x = mousePosition.y * 0.15
      macbookRef.current.position.y = Math.sin(Date.now() * 0.0005) * 0.3
    }
  })

  const projects = [
    { title: 'Project Alpha', color: '#4f8cff' },
    { title: 'Project Beta', color: '#7c5cfc' },
    { title: 'Project Gamma', color: '#4f8cff' },
  ]

  const currentProject = projects[activeProject % projects.length]

  return (
    <group ref={macbookRef}>
      {/* Macbook body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.5, 0.3, 3.5]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>

      {/* Screen */}
      <mesh
        ref={screenRef}
        position={[0, 0.15, -0.2]}
        rotation={[-0.25, 0, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[5, 3, 0.1]} />
        <meshPhysicalMaterial
          color="#050816"
          emissive={currentProject.color}
          emissiveIntensity={0.2}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Screen glow */}
      <mesh position={[0, 0.15, -0.35]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[5.1, 3.1, 0.05]} />
        <meshBasicMaterial color={currentProject.color} transparent opacity={0.05} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.1, 0.3]}>
        <boxGeometry args={[5, 0.05, 2.5]} />
        <meshPhysicalMaterial color="#0f0f0f" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  )
}

export function MacbookScene({ activeProject }: MacbookSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        physicallyCorrectLights: true,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 1.5, 6]} />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, 3]} intensity={0.8} color="#4f8cff" />
      <pointLight position={[5, 3, -5]} intensity={0.6} color="#7c5cfc" />

      {/* Model */}
      <MacbookModel activeProject={activeProject} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.3}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  )
}
