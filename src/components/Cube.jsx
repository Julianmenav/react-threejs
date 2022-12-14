import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures"

const Cube = ({position, texture}) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))
  const activeTexture = textures[texture + "Texture"]
  
  
  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  )
}

export default Cube;
