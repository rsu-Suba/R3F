import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";
import { Cube } from "./Cube.tsx";

const store = createXRStore()

export default function App() {
   return (
      <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <div className="mb-4">
      <button onClick={() => store.enterAR()}>Enter AR</button>
      </div>
         <Canvas
            flat
            linear
            camera={{
               fov: 70,
               near: 0.1,
               far: 1000,
               position: [5, 5, 5],
            }}
         >
          <XR store={store}>
            <directionalLight position={[1, 1, 1]} intensity={5} />
            <ambientLight args={[0xffffff]} intensity={0.2} />
            <gridHelper />
            <Cube />
            <Stars
               radius={100} // 星の点滅(拡大)度合い
               depth={50} // 星の深さ
               count={5000} // 星の数
               factor={5} // 星の大きさ
               saturation={100} // 星の彩度
               speed={3} // 点滅のスピード
            />
            <OrbitControls />
            </XR>
         </Canvas>
      </div>
   );
}