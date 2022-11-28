import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

studio.initialize()
studio.extend(extension)

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

const App = () => {
  return (
    <Canvas style={{position: "absolute", width: "100vw", height: "100vh", margin: 0, right: "0", top: "0", bottom: "0", left: "0", background: "#111"}}>
      {/* <PerspectiveCamera makeDefault position={[5, 5, -5]} fov={75} /> */}
      <OrbitControls/>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 10, 10]}/>
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}

createRoot(document.getElementById('root')!).render(<App />)