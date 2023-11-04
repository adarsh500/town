import { useGLTF } from '@react-three/drei';
import React from 'react';

const Item = (props) => {
  const { name } = props;

  const { scene } = useGLTF(`/models/items/${name}.glb`);
  return <primitive object={scene} /> ;
};

export default Item;
