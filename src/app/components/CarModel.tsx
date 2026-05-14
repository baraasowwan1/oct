tsx
import React, { useRef, useEffect } from 'react';
import { useGLTF, ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export function CarModel(){ color = '#111111' }: { color?: string }) {
  const group = useRef<THREE.Group>(null);

  // 🚗 موديل Defender المحلي
  const { scene } = useGLTF('/models/defender.glb');

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material = child.material.clone();
        }

        const name = child.name?.toLowerCase?.() || '';
        const matName = child.material?.name?.toLowerCase?.() || '';

        if (name.includes('body') || matName.includes('body')) {
          child.material.color = new THREE.Color(color);
          child.material.metalness = 0.6;
          child.material.roughness = 0.35;
        }
      }
    });
  }, [scene, color]);

  return (
    <>
      {/* 🌍 إضاءة واقعية HDR */}
      <Environment preset="studio" />

      {/* 💡 ظل تحت السيارة */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.6}
        scale={10}
        blur={2.5}
        far={4}
      />

      {/* 🎮 تحكم بالكاميرا */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={1}
      />

      {/* 🚗 السيارة */}
      <group ref={group}>
        <primitive
          object={scene}
          scale={1.7}
          position={[0, -1.3, 0]}
          rotation={[0, Math.PI / 4, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload('/models/defender.glb');
