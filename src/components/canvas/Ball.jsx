import React, { useRef, useState } from "react";
import { Canvas, useFrame , useLoader  } from "@react-three/fiber";
import { OrbitControls, Stars} from "@react-three/drei";
import * as THREE from 'three';

function Cube(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const texture = useLoader(THREE.TextureLoader, props.imgUrl);

  useFrame(({ clock }) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.material.color.setHSL(0.1, hovered ? 1 : 0.5, 0.5 + Math.sin(clock.elapsedTime) * 0.5);
  });

  return (
    <mesh 
      {...props} 
      ref={mesh} 
      scale={[2.75, 2.75, 2.75]}
      onClick={() => setHover(!hovered)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

function Particle({ position, velocity, color, life }) {
  const mesh = useRef();
  const [time, setTime] = useState(0);

  useFrame(({ delta }) => {
    setTime((time) => time + delta);
    mesh.current.position.add(velocity.clone().multiplyScalar(delta));

    if (time >= life) {
      mesh.current.visible = false;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereBufferGeometry args={[0.1, 4, 4]} />
      <meshBasicMaterial color={color} transparent opacity={1 - time / life} />
    </mesh>
  );
}

function Particles({ count, position }) {
  const particles = [...Array(count)].map(() => {
    const velocity = new THREE.Vector3(Math.random() * 0.3 - 0.15, Math.random() * 0.3 - 0.15, Math.random() * 0.3 - 0.15);
    const color = new THREE.Color(Math.random(), Math.random(), Math.random());

    return { position: position.clone(), velocity, color, life: Math.random() * 2 + 1 };
  });

  return (
    <>
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </>
  );
}

function CubeCanvas({ icon }) {
  const controlsRef = useRef();

  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
      <OrbitControls ref={controlsRef} enableZoom={false} />
      <Stars radius={100} count={5000} factor={4} saturation={0} fade />

      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <spotLight position={[0, 20, 10]} penumbra={1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

      <Cube imgUrl={icon} />
      <Particles count={200} position={new THREE.Vector3(0, 0, 0)} />
    </Canvas>
  );
}

export default CubeCanvas;
