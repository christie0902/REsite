import React, { useContext, useEffect, useState } from "react";
import ImgSlider from "./ImgSlider";
import CustomButton from "../buttons/CustomButton";
import Context from "../../store/Context";

const EditImage = () => {
    const { state, dispatch } = useContext(Context);
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [editMode, setEditMode] = useState("logo");

    useEffect(() => {
        const convertScaleToSliderValue = (modelValue) => {
            return (modelValue - 0.1) * (100 / 1.9);
        };
    
        const convertRotationToSliderValue = (modelValue) => {
            return modelValue * (100 / 6.283);
        };
    
        const convertPositionToSliderValue = (modelValue) => {
            return (modelValue + 0.2) * 250; // Converts from -0.2 to 0.2 range to 0 to 100 range
        };
    
        if (editMode === "logo") {
            setXPosition(convertPositionToSliderValue(state.customizerState.logoImg.xPosition));
            setYPosition(convertPositionToSliderValue(state.customizerState.logoImg.yPosition));
            setScale(convertScaleToSliderValue(state.customizerState.logoImg.scale));
            setRotation(convertRotationToSliderValue(state.customizerState.logoImg.rotation));
        } else {
            setXPosition(convertPositionToSliderValue(state.customizerState.fullImg.xPosition));
            setYPosition(convertPositionToSliderValue(state.customizerState.fullImg.yPosition));
            setScale(convertScaleToSliderValue(state.customizerState.fullImg.scale));
            setRotation(convertRotationToSliderValue(state.customizerState.fullImg.rotation));
        }
    }, [editMode, state.customizerState]);

    // newValue=min+(sv/100)∗(max−min)
    const handleXChange = (value) => {
        setXPosition(-0.3 + (value / 100) * (0.6));
        dispatch({
            type:
                editMode === "logo"
                    ? "logo/set-x-position"
                    : "full/set-x-position",
            payload: { xPosition: xPosition },
        });
    };

    const handleYChange = (value) => {
        setYPosition(-0.3 + (value / 100) * (0.6));
        dispatch({
            type:
                editMode === "logo"
                    ? "logo/set-y-position"
                    : "full/set-y-position",
            payload: { yPosition: yPosition },
        });
    };

    const handleScaleChange = (value) => {
        setScale(0.1 + (value / 100) * (1.9));
        dispatch({
            type: editMode === "logo" ? "logo/set-scale" : "full/set-scale",
            payload: { scale: scale },
        });
    };

    const handleRotationChange = (value) => {
        setRotation(0 + (value/100) * (6.283))
        dispatch({
            type: editMode === "logo" ? "logo/rotate" : "full/rotate",
            payload: { rotation: value },
        });
    };

    const reset = () => {
        dispatch({
            type: "RESET_CUSTOMIZATION",
        });
    };

    return (
        <div className="edit-container">
            <div className="flex-1 flex flex-col">
                {editMode ==="logo" ? (<h1 className="font-bold text-md text-yellow-500 ml-1">Edit Logo</h1>) : (<h1 className="font-bold text-md text-yellow-500 ml-1">Edit Texture</h1>)}
                <div className="flex flex-col items-center mb-2 mt-5">
                    <ImgSlider
                        label="Change X"
                        // value={xPosition}
                        onChange={handleXChange}
                        containerClassName="mb-2"
                        // min={-1}
                        // max={1}
                    />
                    <ImgSlider
                        label="Change Y"
                        // value={yPosition}
                        onChange={handleYChange}
                        containerClassName="mb-2"
                        // min={-1}
                        // max={1}
                    />
                    <ImgSlider
                        label="Change Scale"
                        // value={scale}
                        onChange={handleScaleChange}
                        containerClassName="mb-2"
                        // min={0.1}
                        // max={2}
                    />
                    <ImgSlider
                        label="Rotate"
                        // value={rotation}
                        onChange={handleRotationChange}
                        // min={0}
                        // max={6.283}                    
                        />
                </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
                <CustomButton
                    type="filled"
                    title="Logo"
                    handleClick={() => setEditMode("logo")}
                    customStyles="text-xs"
                />

                <CustomButton
                    type="static"
                    title="Full"
                    handleClick={() => setEditMode("full")}
                    customStyles="text-xs"
                />

                <CustomButton
                    type="outline"
                    title="Reset"
                    handleClick={reset}
                    customStyles="text-xs"
                />
            </div>
        </div>
    );
};

export default EditImage;
