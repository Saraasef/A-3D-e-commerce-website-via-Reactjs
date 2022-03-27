// import React from "react";
// import { MeshDistortMaterial, Sphere } from "@react-three/drei";

// export default function AnimatedSphere() {
//   return (
//     <Sphere visible args={[1, 100, 100]} scale={2}>
//       <MeshDistortMaterial
//         color="#8352FD"
//         attach="material"
//         distort={0.3}
//         speed={4}
//         roughness={0}
//       />
//     </Sphere>
//   );
// }
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

// import texture from "../images/map.jpg";

export default function AnimatedSphere() {
  const colorMap = useLoader(TextureLoader, texture);

    return (


    
    <mesh rotation={[90, 0, 20]} >
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
      {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
  );
}