import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function CarModel({ color = '#ff0000', ...props }: { color?: string; [key: string]: any }) {
  const group = useRef<THREE.Group>(null);
  
  // We use a free Ferrari model from three.js examples
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb') as any;
  
  // The ferrari model has a body material
  if (materials.body) {
    materials.body.color = new THREE.Color(color);
  }

  // Find the root object
  const rootObject = nodes.Scene || nodes._rootJoint || Object.values(nodes)[0];

  return (
    <group ref={group} {...props} dispose={null}>
      {rootObject && <primitive object={rootObject} />}
    </group>
  );
}

useGLTF.preload('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb');
