'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Helpers ───────────────────────────────────────────── */
const BLUE    = '#1a50d4'
const VIOLET  = '#7c3aed'
const CYAN    = '#06b6d4'
const NAVY    = '#0a1640'

/* ── Ambient particle cloud ────────────────────────────── */
function AmbientParticles({ count = 320 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const geo = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      pos[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i*3+2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.025
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.015) * 0.06
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[geo, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#94a3e8" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

/* ── Holographic rings ─────────────────────────────────── */
function HoloRing({ radius, tube, rotation, speed, color, opacity = 0.45 }: {
  radius: number; tube: number; rotation: [number,number,number]
  speed: number; color: string; opacity?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.z = clock.getElapsedTime() * speed
  })
  return (
    <mesh rotation={rotation} ref={ref}>
      <torusGeometry args={[radius, tube, 8, 140]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

/* ── Glass panels ──────────────────────────────────────── */
function GlassPanel({ pos, rot, w, h, idx }: {
  pos: [number,number,number]; rot: [number,number,number]
  w: number; h: number; idx: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ref.current) return
    ref.current.position.y = pos[1] + Math.sin(t * 0.5 + idx * 1.3) * 0.12
    ref.current.rotation.y = rot[1] + Math.sin(t * 0.3 + idx) * 0.08
  })
  return (
    <mesh ref={ref} position={pos} rotation={rot}>
      <planeGeometry args={[w, h]} />
      <meshPhysicalMaterial
        color={BLUE} transparent opacity={0.055}
        roughness={0} metalness={0.1} side={THREE.DoubleSide}
      />
    </mesh>
  )
}

/* ── Neural nodes + connection mesh ───────────────────── */
const NODE_POS: [number,number,number][] = [
  [ 2.2,  0.4,  0.4],
  [-2.1,  0.7,  0.3],
  [ 0.5,  2.3, -0.2],
  [ 0.3, -2.2,  0.5],
  [ 1.6,  1.6,  0.9],
  [-1.5, -1.7,  0.6],
  [ 2.0, -1.1, -0.8],
  [-0.6,  1.7,  2.0],
  [-2.0,  0.4, -1.6],
  [ 1.0, -1.4, -2.1],
]

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.1
    groupRef.current.rotation.x = Math.sin(t * 0.06) * 0.15
  })

  const lines = useMemo(() => {
    const pts: number[] = []
    for (let i = 0; i < NODE_POS.length; i++) {
      for (let j = i + 1; j < NODE_POS.length; j++) {
        const a = new THREE.Vector3(...NODE_POS[i])
        const b = new THREE.Vector3(...NODE_POS[j])
        if (a.distanceTo(b) < 2.8) pts.push(...NODE_POS[i], ...NODE_POS[j])
      }
    }
    return new Float32Array(pts)
  }, [])

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={BLUE} transparent opacity={0.18} />
      </lineSegments>
      {NODE_POS.map((p, i) => <NeuralNode key={i} pos={p} idx={i} />)}
    </group>
  )
}

function NeuralNode({ pos, idx }: { pos: [number,number,number]; idx: number }) {
  const core = useRef<THREE.Mesh>(null)
  const halo = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const s = 0.85 + Math.sin(t * 1.3 + idx * 1.1) * 0.15
    if (core.current) core.current.scale.setScalar(s)
    if (halo.current) {
      halo.current.scale.setScalar(1 + Math.sin(t + idx) * 0.25);
      (halo.current.material as THREE.MeshBasicMaterial).opacity = 0.05 + Math.sin(t + idx) * 0.03
    }
  })
  const color = idx % 3 === 0 ? VIOLET : idx % 3 === 1 ? BLUE : CYAN
  return (
    <group position={pos}>
      <mesh ref={halo}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} />
      </mesh>
      <mesh ref={core}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} roughness={0.2} metalness={0.3} />
      </mesh>
    </group>
  )
}

/* ── Data stream particles ─────────────────────────────── */
const STREAM_WAYPOINTS: [number,number,number][][] = [
  [[ 0,.2,.1],[1.2,.9,.5],[2.2,.4,.4],[2.8,1.1,.8]],
  [[ 0,.2,.1],[-1.0,.6,.8],[-2.1,.7,.3],[-2.8,1.2,.5]],
  [[ 0,.2,.1],[.4,1.4,-.3],[.5,2.3,-.2],[.8,3.0,.2]],
  [[ 0,-.2,0],[1.1,-1.3,.4],[2.0,-1.1,-.8],[2.6,-1.8,-.4]],
  [[ 0,-.2,0],[-.8,-.8,.9],[-1.5,-1.7,.6],[-2.2,-2.3,.8]],
  [[ 0,.1,.2],[.5,.4,-1.2],[1.0,-1.4,-2.1],[1.5,-2.0,-2.5]],
]

function StreamParticle({ waypoints, offset }: {
  waypoints: [number,number,number][]; offset: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  const curve = useMemo(() => new THREE.CatmullRomCurve3(waypoints.map(p => new THREE.Vector3(...p))), [waypoints])
  const t = useRef(offset)
  useFrame(() => {
    t.current = (t.current + 0.004) % 1
    if (!ref.current) return
    const pt = curve.getPoint(t.current)
    ref.current.position.copy(pt)
    const a = Math.sin(t.current * Math.PI)
    ref.current.scale.setScalar(a * 0.9 + 0.1);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = a * 0.9 + 0.1
  })
  const color = offset > 0.5 ? CYAN : offset > 0.25 ? BLUE : VIOLET
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={1} />
    </mesh>
  )
}

function DataStreams() {
  const particles = useMemo(() => {
    const ps: { waypoints: [number,number,number][]; offset: number }[] = []
    STREAM_WAYPOINTS.forEach((wp) => {
      for (let i = 0; i < 4; i++) {
        ps.push({ waypoints: wp, offset: i / 4 })
      }
    })
    return ps
  }, [])
  return <>{particles.map((p, i) => <StreamParticle key={i} {...p} />)}</>
}

/* ── Floating architecture chips ─────────────────────── */
function ArchChip({ pos, rot, idx }: {
  pos: [number,number,number]; rot: [number,number,number]; idx: number
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ref.current) return
    ref.current.position.y = pos[1] + Math.sin(t * 0.6 + idx * 2.1) * 0.1
    ref.current.rotation.y = rot[1] + t * 0.08 * (idx % 2 === 0 ? 1 : -1)
  })
  return (
    <group ref={ref} position={pos} rotation={rot}>
      <mesh>
        <boxGeometry args={[0.55, 0.32, 0.04]} />
        <meshPhysicalMaterial color={NAVY} metalness={0.95} roughness={0.05} transparent opacity={0.85} />
      </mesh>
      {/* chip grid lines */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(0.55, 0.32, 0.04)]} />
        <lineBasicMaterial color={BLUE} transparent opacity={0.5} />
      </lineSegments>
    </group>
  )
}

const CHIP_CONFIG = [
  { pos: [ 3.2,  1.0,  0.6] as [number,number,number], rot: [0.2, -0.4, 0.1] as [number,number,number] },
  { pos: [-3.0, -0.6,  0.3] as [number,number,number], rot: [0.1,  0.5,-0.1] as [number,number,number] },
  { pos: [ 0.8,  3.0, -0.5] as [number,number,number], rot: [-0.4, 0.1, 0.2] as [number,number,number] },
  { pos: [-1.2, -3.0,  0.8] as [number,number,number], rot: [0.3, -0.2, 0.4] as [number,number,number] },
]

/* ── Core Intelligence Engine ──────────────────────────── */
function CoreEngine() {
  const outerWire = useRef<THREE.Mesh>(null)
  const innerSolid = useRef<THREE.Mesh>(null)
  const innerWire = useRef<THREE.Mesh>(null)
  const glowCore = useRef<THREE.Mesh>(null)
  const equator  = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (outerWire.current)  outerWire.current.rotation.y  = t * 0.07
    if (outerWire.current)  outerWire.current.rotation.z  = t * 0.04
    if (innerSolid.current) {
      innerSolid.current.rotation.y = -t * 0.12
      innerSolid.current.rotation.x = t * 0.09
    }
    if (innerWire.current) {
      innerWire.current.rotation.y = t * 0.15
      innerWire.current.rotation.z = -t * 0.07
    }
    if (glowCore.current) {
      const s = 1 + Math.sin(t * 1.1) * 0.04;
      (glowCore.current.material as THREE.MeshBasicMaterial).opacity = 0.09 + Math.sin(t * 0.8) * 0.03
      glowCore.current.scale.setScalar(s)
    }
    if (equator.current) equator.current.rotation.z = t * 0.2
  })

  return (
    <group>
      {/* Soft glow sphere */}
      <mesh ref={glowCore}>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>

      {/* Outer icosahedron wireframe */}
      <mesh ref={outerWire}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#5b8fff" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Inner dodecahedron solid */}
      <mesh ref={innerSolid}>
        <dodecahedronGeometry args={[0.78, 0]} />
        <meshPhysicalMaterial
          color={NAVY} metalness={0.96} roughness={0.04}
          transparent opacity={0.92} envMapIntensity={1.2}
        />
      </mesh>

      {/* Inner wireframe overlay */}
      <mesh ref={innerWire}>
        <icosahedronGeometry args={[0.92, 0]} />
        <meshBasicMaterial color="#3a6fff" wireframe transparent opacity={0.22} />
      </mesh>

      {/* Equatorial scan ring */}
      <mesh ref={equator} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.015, 8, 100]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.8} />
      </mesh>

      {/* Fixed equator glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.06, 8, 100]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.12} />
      </mesh>
    </group>
  )
}

/* ── Mouse-responsive root ─────────────────────────────── */
function SceneRoot({ mX, mY }: {
  mX: React.MutableRefObject<number>
  mY: React.MutableRefObject<number>
}) {
  const group   = useRef<THREE.Group>(null)
  const outer   = useRef<THREE.Group>(null)

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (mX.current * 0.35 - group.current.rotation.y) * 0.035
      group.current.rotation.x += (-mY.current * 0.22 - group.current.rotation.x) * 0.035
    }
    if (outer.current) {
      outer.current.rotation.y += (mX.current * 0.12 - outer.current.rotation.y) * 0.02
    }
  })

  const glassPanels = [
    { pos: [ 3.0,  0.6,  0.2] as [number,number,number], rot: [ 0.15, -0.5,  0.1] as [number,number,number], w: 1.9, h: 1.25 },
    { pos: [-2.7, -0.4,  0.4] as [number,number,number], rot: [ 0.1,   0.55,-0.1] as [number,number,number], w: 1.7, h: 1.1  },
    { pos: [ 0.6,  2.5, -0.4] as [number,number,number], rot: [-0.5,   0.1,  0.15] as [number,number,number], w: 1.5, h: 0.95 },
    { pos: [-0.4, -2.6,  0.6] as [number,number,number], rot: [ 0.4,  -0.15, 0.2] as [number,number,number], w: 1.6, h: 1.0  },
  ]

  return (
    <>
      {/* Slow outer layer - glass panels + chips */}
      <group ref={outer}>
        {glassPanels.map((p, i) => <GlassPanel key={i} idx={i} {...p} />)}
        {CHIP_CONFIG.map((c, i) => <ArchChip key={i} idx={i} {...c} />)}

        {/* Outer holographic rings */}
        <HoloRing radius={3.4} tube={0.008} rotation={[0.3,0,0.2]}   speed={0.06} color={BLUE}   opacity={0.25} />
        <HoloRing radius={3.8} tube={0.006} rotation={[1.0,0.5,0.1]} speed={-0.04} color={VIOLET} opacity={0.2} />
      </group>

      {/* Mid layer - neural network, data streams, inner rings */}
      <group ref={group}>
        <CoreEngine />
        <NeuralNetwork />
        <DataStreams />

        <HoloRing radius={2.1} tube={0.01} rotation={[0.28, 0, 0.1]} speed={0.18}  color={BLUE}   opacity={0.4} />
        <HoloRing radius={1.7} tube={0.012} rotation={[1.1, 0.4,0.2]} speed={-0.14} color={VIOLET} opacity={0.35} />
        <HoloRing radius={1.4} tube={0.014} rotation={[0.6, 0.8,1.5]} speed={0.1}   color={CYAN}   opacity={0.3} />
      </group>
    </>
  )
}

/* ── Canvas export ─────────────────────────────────────── */
export default function HeroScene({
  mouseX, mouseY,
}: {
  mouseX: React.MutableRefObject<number>
  mouseY: React.MutableRefObject<number>
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 48 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={2.5} color="#e8eeff" />
      <pointLight position={[ 5,  5,  5]} intensity={22} color={BLUE}   />
      <pointLight position={[-5, -3, -4]} intensity={16} color={VIOLET} />
      <pointLight position={[ 0,  7,  2]} intensity={28} color="#ffffff"  />
      <pointLight position={[ 2, -4,  3]} intensity={10} color={CYAN}   />

      <AmbientParticles />
      <SceneRoot mX={mouseX} mY={mouseY} />
    </Canvas>
  )
}
