tsx id="carmodel_fixed"
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type CarProps = {
  color?: string;
};

export function CarModel({ color = '#111111' }: CarProps) {
  const group = useRef<THREE.Group>(null);

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
    <group ref={group}>
      <primitive
        object={scene}
        scale={1.7}
        position={[0, -1.3, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/defender.glb');

