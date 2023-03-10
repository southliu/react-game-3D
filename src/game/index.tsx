import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FullScreen from '../components/FullScreen'
import { DoubleSide } from 'three'

function Game() {
  return (
    <FullScreen>
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <directionalLight color='pink' position={[0, 0, 5]} />
        
        <mesh>
          <planeGeometry args={[5, 5, 5]} />
          <meshBasicMaterial color='#fff' transparent side={DoubleSide} />
        </mesh>

        <OrbitControls makeDefault />
      </Canvas>
    </FullScreen>
  )
}

export default Game