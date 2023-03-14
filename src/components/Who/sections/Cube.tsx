import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'

const Cube = () => {
  const textRef = useRef<any>();
  useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2) )
  return (
    <mesh>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial>
            <PerspectiveCamera makeDefault position={[0,0,2]}/>
            <RenderTexture attach="map">
              <color attach="background" args={['#dc9dcd']}/>
              <Text ref={textRef} fontSize={2} color="#555">
                fourbit.io
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
  )
}

export default Cube