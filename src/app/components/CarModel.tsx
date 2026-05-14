import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function CarModel({
  color = '#111111',
  ...props
}: {
  color?: string;
  [key: string]: any;
}) {

  const group = useRef<THREE.Group>(null);

  // موديل الـ Defender
  const { scene } = useGLTF(
  'https://rawcdn.githack.com/KhronosGroup/glTF-Sample-Models/master/2.0/Car/glTF-Binary/Car.glb'
  );

  useEffect(() => {

    if (!scene) return;

    scene.traverse((child: any) => {

      if (child.isMesh) {

        child.castShadow = true;
        child.receiveShadow = true;

        // تغيير لون البودي فقط
        const materialName =
          child.material?.name?.toLowerCase?.() || '';

        const meshName =
          child.name?.toLowerCase?.() || '';

        if (
          materialName.includes('body') ||
          materialName.includes('paint') ||
          materialName.includes('car') ||
          meshName.includes('body')
        ) {

          child.material = child.material.clone();

          child.material.color = new THREE.Color(color);

          child.material.metalness = 0.7;
          child.material.roughness = 0.35;

        }
      }
    });

  }, [scene, color]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >

      <primitive
        object={scene}
        scale={1.6}
        position={[0, -1.2, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />

    </group>
  );
}

useGLTF.preload('/models/defender.glb');
