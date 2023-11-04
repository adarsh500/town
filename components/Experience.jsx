import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from './AnimatedWoman';

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <Model />
      <Environment preset="city" />
    </>
  );
};
