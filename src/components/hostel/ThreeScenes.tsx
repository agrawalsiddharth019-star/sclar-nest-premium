import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Mesh, Group } from "three";

import { hostelConfig } from "@/config/hostel";

function FloatingBuilding() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y = pointer.x * 0.14 + Math.sin(clock.elapsedTime * 0.35) * 0.035;
    group.rotation.x = -0.08 + pointer.y * 0.06;
    group.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.08;
  });

  const windows = useMemo(() => {
    const items: Array<[number, number, number]> = [];
    for (let floor = 0; floor < 4; floor += 1) {
      for (let col = 0; col < 5; col += 1) {
        items.push([-1.55 + col * 0.78, -0.82 + floor * 0.55, 0.91]);
      }
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.4, 3.3, 1.55]} />
        <meshStandardMaterial color="#23324a" roughness={0.42} metalness={0.12} />
      </mesh>
      <mesh position={[0, 1.88, 0]} castShadow>
        <boxGeometry args={[4.75, 0.26, 1.85]} />
        <meshStandardMaterial color="#0e1726" roughness={0.5} />
      </mesh>
      <mesh position={[0, -1.82, 0.18]} receiveShadow>
        <boxGeometry args={[5.2, 0.24, 2.15]} />
        <meshStandardMaterial color="#132033" roughness={0.7} />
      </mesh>
      {windows.map(([x, y, z], index) => (
        <mesh key={`${x}-${y}-${index}`} position={[x, y, z]}>
          <boxGeometry args={[0.38, 0.32, 0.045]} />
          <meshStandardMaterial color={index % 3 === 0 ? "#8be9ff" : "#f9d884"} emissive={index % 3 === 0 ? "#1f8aaa" : "#b77c25"} emissiveIntensity={0.32} roughness={0.18} />
        </mesh>
      ))}
      {[-1.45, 0, 1.45].map((x) => (
        <mesh key={x} position={[x, 0.08, 1.02]}>
          <boxGeometry args={[0.7, 0.08, 0.23]} />
          <meshStandardMaterial color="#91a3b9" metalness={0.28} roughness={0.24} />
        </mesh>
      ))}
      <mesh position={[0, -1.28, 1.04]}>
        <boxGeometry args={[0.78, 0.82, 0.08]} />
        <meshStandardMaterial color="#55c7dd" emissive="#17697a" emissiveIntensity={0.25} />
      </mesh>
      {[-2.55, 2.55].map((x) => (
        <group key={x} position={[x, -1.35, 1.08]}>
          <mesh position={[0, 0.42, 0]}>
            <coneGeometry args={[0.36, 0.86, 8]} />
            <meshStandardMaterial color="#2f8d68" roughness={0.6} />
          </mesh>
          <mesh position={[0, -0.16, 0]}>
            <cylinderGeometry args={[0.08, 0.11, 0.42, 8]} />
            <meshStandardMaterial color="#7c593d" roughness={0.7} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, -2.05, 1.25]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.9, 48]} />
        <meshStandardMaterial color="#102033" transparent opacity={0.46} />
      </mesh>
    </group>
  );
}

export function HostelBuildingScene() {
  return (
    <Canvas shadows dpr={[1, 1.5]} className="h-full w-full">
      <PerspectiveCamera makeDefault position={[0, 1.2, 7.4]} fov={42} />
      <ambientLight intensity={1.35} />
      <directionalLight position={[4, 6, 5]} intensity={2.1} castShadow />
      <pointLight position={[-3, 2.8, 3.2]} intensity={2.2} color="#52d9ff" />
      <FloatingBuilding />
    </Canvas>
  );
}

function RoomModel() {
  const groupRef = useRef<Group>(null);
  const [active, setActive] = useState(0);
  const hotspots = hostelConfig.roomHotspots;

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y = Math.sin(clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -0.65, 0]} rotation={[0.12, -0.35, 0]}>
      <mesh position={[0, -0.08, 0]} receiveShadow>
        <boxGeometry args={[5.6, 0.16, 4.2]} />
        <meshStandardMaterial color="#d6c7ad" roughness={0.72} />
      </mesh>
      <mesh position={[0, 1.08, -2.08]} receiveShadow>
        <boxGeometry args={[5.6, 2.45, 0.12]} />
        <meshStandardMaterial color="#dce7ef" roughness={0.6} />
      </mesh>
      <mesh position={[-2.74, 1.08, 0]} receiveShadow>
        <boxGeometry args={[0.12, 2.45, 4.2]} />
        <meshStandardMaterial color="#e6ded0" roughness={0.65} />
      </mesh>
      <mesh position={[1.35, 0.35, -0.72]} castShadow>
        <boxGeometry args={[1.8, 0.35, 2.25]} />
        <meshStandardMaterial color="#334257" roughness={0.45} />
      </mesh>
      <mesh position={[1.35, 0.62, -0.72]} castShadow>
        <boxGeometry args={[1.72, 0.12, 2.1]} />
        <meshStandardMaterial color="#e7ecf0" roughness={0.52} />
      </mesh>
      <mesh position={[-1.52, 0.58, 0.65]} castShadow>
        <boxGeometry args={[1.9, 0.16, 0.78]} />
        <meshStandardMaterial color="#c9975b" roughness={0.42} />
      </mesh>
      <mesh position={[-2.2, 1.08, 1.34]} castShadow>
        <boxGeometry args={[0.62, 2, 0.92]} />
        <meshStandardMaterial color="#273247" roughness={0.48} />
      </mesh>
      <mesh position={[0.7, 1.16, -2.0]}>
        <boxGeometry args={[1.15, 0.9, 0.08]} />
        <meshStandardMaterial color="#8fe9ff" emissive="#207e92" emissiveIntensity={0.28} roughness={0.2} />
      </mesh>
      <mesh position={[-0.98, 1.96, -0.15]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#f6d782" emissive="#f6b739" emissiveIntensity={0.62} />
      </mesh>
      {hotspots.map((hotspot, index) => {
        const positions: Array<[number, number, number]> = [
          [1.35, 1.02, 0.2],
          [-1.55, 0.95, 1.1],
          [-2.16, 1.95, 1.33],
          [-0.98, 2.22, -0.15],
          [0.7, 1.78, -1.88],
          [1.95, 0.68, -1.5],
        ];
        const position = positions[index] ?? [0, 1, 0];
        return (
          <group key={hotspot.label} position={position}>
            <mesh
              onPointerOver={() => setActive(index)}
              onClick={() => setActive(index)}
              scale={active === index ? 1.28 : 1}
            >
              <sphereGeometry args={[0.09, 24, 24]} />
              <meshStandardMaterial color="#61dafb" emissive="#1c91aa" emissiveIntensity={0.75} />
            </mesh>
            {active === index ? (
              <Html distanceFactor={8} center>
                <div className="room-hotspot-card">
                  <strong>{hotspot.label}</strong>
                  <span>{hotspot.detail}</span>
                </div>
              </Html>
            ) : null}
          </group>
        );
      })}
    </group>
  );
}

export function StudentRoomScene() {
  return (
    <Canvas shadows dpr={[1, 1.5]} className="h-full w-full">
      <PerspectiveCamera makeDefault position={[4.6, 3.1, 5.5]} fov={42} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 6, 3]} intensity={2.35} castShadow />
      <pointLight position={[-2, 2.8, 2]} intensity={1.25} color="#f7cf8b" />
      <RoomModel />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={0.75} maxPolarAngle={1.35} rotateSpeed={0.38} />
    </Canvas>
  );
}

function ShieldModel() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.y = Math.sin(clock.elapsedTime * 0.55) * 0.25;
    mesh.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.07;
  });

  return (
    <group>
      <mesh ref={meshRef} castShadow>
        <octahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#4ed8ee" emissive="#14596a" emissiveIntensity={0.25} metalness={0.18} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, 0.82]}>
        <torusGeometry args={[0.72, 0.045, 12, 64]} />
        <meshStandardMaterial color="#f7d37b" emissive="#9f681d" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

export function SecurityShieldScene() {
  return (
    <Canvas shadows dpr={[1, 1.5]} className="h-full w-full">
      <PerspectiveCamera makeDefault position={[0, 0.3, 4.5]} fov={42} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[2.6, 4.5, 3.2]} intensity={2.3} castShadow />
      <pointLight position={[-2, 1.6, 1.8]} intensity={1.4} color="#53d9ff" />
      <ShieldModel />
    </Canvas>
  );
}
