import React  from 'react';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import './styles.css';
import Model from './Model';

export default function Three() {

 
 return(
 <div>
    <Suspense fallback={null}>
       <Model />
    </Suspense>
    <Loader />
  </div>
   );
}