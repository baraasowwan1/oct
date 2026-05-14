import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function CarModel({ color = '#ff0000', ...props }: { color?: string; [key: string]: any }) {
  const group = useRef<THREE.Group>(null);
  
  // We use a free placeholder Porsche model from pmndrs
  const { nodes, materials } = useGLTF('https://vazxmixyzorokpkymkzz.supabase.co/storage/v1/object/public/models/porsche-911/model.gltf') as any;
  
  // Update the car body material color
  if (materials.paint) {
    materials.paint.color = new THREE.Color(color);
  }

  // Find the root object
  const rootObject = nodes.Scene || nodes._rootJoint || Object.values(nodes)[0];

  return (
    <group ref={group} {...props} dispose={null}>
      {rootObject && <primitive object={rootObject} />}
    </group>
  );
}

useGLTF.preload('https://vazxmixyzorokpkymkzz.supabase.co/storage/v1/object/public/models/porsche-911/model.gltf');
