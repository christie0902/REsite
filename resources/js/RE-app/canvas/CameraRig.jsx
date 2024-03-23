import React, { useContext, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Context from "../store/Context";

const CameraRig = ({ children }) => {
    const group = useRef();
    const { state: appState, dispatch } = useContext(Context);

    //react three/fiber hook
    //state is state of the application (brownser)
    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        let targetPosition = [-0.4, 0, 2];
        if (appState.customizerState.intro) {
            if (isBreakpoint) targetPosition = [0, 0, 2];
            if (isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            if (isMobile) targetPosition = [0, 0, 2.5];
            else targetPosition = [0, 0, 2];
        }

        //set model camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta);

        //set model rotation smoothly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.1,
            delta,
        );
    });

    //set model rotation
    return <group ref={group}>{children}</group>;
};

export default CameraRig;
