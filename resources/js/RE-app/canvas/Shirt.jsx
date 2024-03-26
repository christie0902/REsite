import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useContext } from "react";
import Context from "../store/Context";

const Shirt = () => {
    const { state: appState, dispatch } = useContext(Context);
    const { nodes, materials } = useGLTF(
        "https://res.cloudinary.com/diwszstai/image/upload/v1710794781/site-assets/shirt_baked_lfhhqu.glb",
    );
        console.log(appState);
    const logoTexture = useTexture(appState.customizerState.logoDecal);
    const fullTexture = useTexture(appState.customizerState.fullDecal);

    useFrame((state, delta) =>
        easing.dampC(
            materials.lambert1.color,
            appState.customizerState.color,
            0.25,
            delta,
        ),
    );
    const stateString = JSON.stringify(appState.customizerState);
    return (
        <group key={stateString}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            >
                {appState.customizerState.isFullTexture && (
                    <Decal
                        position={[
                            appState.customizerState.fullImg.xPosition,
                            appState.customizerState.fullImg.yPosition,
                            0,
                        ]}
                        rotation={[0, 0, appState.customizerState.fullImg.rotation]}
                        scale={appState.customizerState.fullImg.scale}
                        map={fullTexture}
                    />
                )}

                {appState.customizerState.isLogoTexture && (
                    <Decal
                        position={[
                            appState.customizerState.logoImg.xPosition,
                            appState.customizerState.logoImg.yPosition,
                            0.15,
                        ]}
                        rotation={[0, 0, appState.customizerState.logoImg.rotation]}
                        scale={appState.customizerState.logoImg.scale}
                        map={logoTexture}
                        anisotropy={16}
                        depthTest={false}
                        depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    );
};

export default Shirt;
