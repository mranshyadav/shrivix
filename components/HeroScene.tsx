'use client'
import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── Particles ─────────────────────────────────────────────────── */
function Particles({ count = 280 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.04
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#6b8eea" transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

/* ─── Neural Network Nodes + Lines ──────────────────────────────── */
const NODE_POSITIONS: [number, number, number][] = [
  [2.6, 0.4, 0.8],  [-2.4, 0.6, 0.4],  [0.8, 2.4, -0.4],
  [0.4, -2.6, 0.6], [1.8, 1.4, 1.6],   [-1.6, -1.8, 0.8],
  [2.2, -1.0, -1.2],[-0.8, 1.8, 2.0],  [-2.0, 0.6, -1.8],
  [1.0, -1.6, -2.2],[0.2, 2.6, 1.2],   [-2.4, -0.8, 1.4],
]

function NeuralNodes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.12
    groupRef.current.rotation.x = Math.sin(t * 0.07) * 0.18
  })

  const linePoints = useMemo(() => {
    const pts: number[] = []
    const threshold = 2.8
    for (let i = 0; i < NODE_POSITIONS.length; i++) {
      for (let j = i + 1; j < NODE_POSITIONS.length; j++) {
        const a = new THREE.Vector3(...NODE_POSITIONS[i])
        const b = new THREE.Vector3(...NODE_POSITIONS[j])
        if (a.distanceTo(b) < threshold) {
          pts.push(...NODE_POSITIONS[i], ...NODE_POSITIONS[j])
        }
      }
    }
    return new Float32Array(pts)
  }, [])

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePoints, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#1a50d4" transparent opacity={0.22} />
      </lineSegments>

      {/* Nodes */}
      {NODE_POSITIONS.map((pos, i) => (
        <PulsingNode key={i} position={pos} index={i} />
      ))}
    </group>
  )
}

function PulsingNode({ position, index }: { position: [number, number, number]; index: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      const s = 0.88 + Math.sin(t * 1.4 + index * 0.9) * 0.12
      ref.current.scale.setScalar(s)
    }
    if (glowRef.current) {
      const gs = 1 + Math.sin(t * 1.4 + index * 0.9 + 0.5) * 0.3
      glowRef.current.scale.setScalar(gs);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.06 + Math.sin(t + index) * 0.04
    }
  })

  return (
    <group position={position}>
      {/* Glow halo */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial color="#4d7fff" transparent opacity={0.08} />
      </mesh>
      {/* Core */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color="#5b8fff"
          emissive="#1a50d4"
          emissiveIntensity={3}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

/* ─── Orbital Rings ──────────────────────────────────────────────── */
function OrbitalRing({ rotation, speed, color }: {
  rotation: [number, number, number]
  speed: number
  color: string
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.z = clock.getElapsedTime() * speed
  })
  return (
    <mesh rotation={rotation} ref={ref}>
      <torusGeometry args={[2.1, 0.008, 12, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  )
}

/* ─── Core Sphere ────────────────────────────────────────────────── */
function CoreSphere() {
  const innerRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (innerRef.current) innerRef.current.rotation.y = t * 0.08
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.06
      wireRef.current.rotation.x = t * 0.04
    }
    if (outerRef.current) {
      const s = 1 + Math.sin(t * 0.9) * 0.015;
      (outerRef.current.material as THREE.MeshBasicMaterial).opacity = 0.04 + Math.sin(t * 0.7) * 0.02
      outerRef.current.scale.setScalar(s)
    }
  })

  return (
    <group>
      {/* Outer ambient glow */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#1a50d4" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      {/* Wireframe layer */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.26, 28, 28]} />
        <meshBasicMaterial color="#3a6fff" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Solid core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshPhysicalMaterial
          color="#0a1020"
          metalness={0.95}
          roughness={0.05}
          reflectivity={1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Equatorial glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.12, 0.02, 8, 80]} />
        <meshBasicMaterial color="#1a50d4" transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

/* ─── Mouse-parallax root group ─────────────────────────────────── */
function SceneRoot({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += (mouseX.current * 0.4 - groupRef.current.rotation.y) * 0.04
    groupRef.current.rotation.x += (-mouseY.current * 0.25 - groupRef.current.rotation.x) * 0.04
  })

  return (
    <group ref={groupRef}>
      <CoreSphere />
      <NeuralNodes />
      <OrbitalRing rotation={[0.3, 0, 0.1]} speed={0.18} color="#1a50d4" />
      <OrbitalRing rotation={[1.1, 0.4, 0.2]} speed={-0.12} color="#6b8eea" />
      <OrbitalRing rotation={[0.6, 0.8, 1.5]} speed={0.09} color="#4d7fff" />
    </group>
  )
}

/* ─── Canvas export ──────────────────────────────────────────────── */
export default function HeroScene({
  mouseX,
  mouseY,
}: {
  mouseX: React.MutableRefObject<number>
  mouseY: React.MutableRefObject<number>
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 52 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={30} color="#1a50d4" />
      <pointLight position={[-4, -2, -4]} intensity={20} color="#6b3fff" />
      <pointLight position={[0, 6, 2]} intensity={15} color="#ffffff" />
      <pointLight position={[0, -5, 0]} intensity={8} color="#1a50d4" />

      <Particles />
      <SceneRoot mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  )
}
