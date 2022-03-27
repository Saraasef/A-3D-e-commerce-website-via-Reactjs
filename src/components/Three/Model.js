import React from "react";
import { Suspense } from "react";
import "./Model.css";
import styled from "styled-components";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import AnimatedSphere from "../Three/AnimatedSphere";
import Womens_bag from "../Three/Womens_bag";
import Shoe from "../Three/Shoe"; 
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import Background from '../Three/Background'; 
import { useState, useEffect } from "react";

export default function Model() {
 

 
  const [hovered, hover] = useState(true)
  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'pointer'
      : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 30 30, auto"
  }, [hovered])
  
  return (
    <Wrapper className="canvas">
    <Background />
      <Canvas >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[-8, 10, 20]} />
        <Suspense fallback={null}>
        <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation-x={Math.PI * 0.5}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <Womens_bag hover={hovered} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}



const Wrapper = styled.div`
  position: relative;
  background: whith;

  ${"" /* canvas {
    height: 386px;
    width: 300px;
    background-color: khaki;
  } */};
`;
