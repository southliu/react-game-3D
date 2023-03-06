import { Canvas } from '@react-three/fiber'

function Game() {
  return (
    <div>
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />

        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color='pink' transparent />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Game