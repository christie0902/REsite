import React, {useRef} from 'react'
import { easing } from 'maath';
import { TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';



const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
        ref={shadows}
        temporal //smooth out the edges of the shadows over time
        frames={60} //render at 60 frames
        alphaTest={.1} //transparency of the shadows
        scale={10}
        rotation={[Math.PI / 2,0,0]} //Math.PI = 180 degrees
        position={[0,0,-0.14]}
    >
        
        <RandomizedLight
            amount={4}
            radius={9} //the larger the more difused the shadow is
            intensity={0.35}
            ambient={0.25}
            position={[5,5,-10]}
        />
        <RandomizedLight
            amount={4}
            radius={9} //the larger the more difused the shadow is
            intensity={0.35}
            ambient={0.25}
            position={[5,5,-10]}
        />

    </AccumulativeShadows>
  )
}


export default Backdrop