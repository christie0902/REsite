import React, { useContext, useEffect, useState } from "react";
import ImgSlider from "./ImgSlider";
import CustomButton from "../buttons/CustomButton";
import Context from "../../store/Context";

const EditImage = () => {
    const { state, dispatch } = useContext(Context);
    const [editMode, setEditMode] = useState("logo");
    const [newXPosition, setNewXPosition] = useState(0);
    const [newYPosition, setNewYPosition] = useState(0.03);
    const [newScaleValue, setNewScaleValue] = useState(0.3);
    const [newRotateValue, setNewRotateValue] = useState(0);

    useEffect(() => {
        if (editMode === "logo") {
            setNewXPosition(0);
            setNewYPosition(0.03);
            setNewScaleValue(0.3);
            setNewRotateValue(0);
        } else if (editMode === "full") {
            setNewXPosition(0);
            setNewYPosition(0);
            setNewScaleValue(1);
            setNewRotateValue(0);
        }
    }, [editMode]);

    // newValue=min+(sv/100)∗(max−min)
    const handleXChange = (value) => {
        const newX = -0.1 + (value / 100) * (-0.2 + 0.4);
        setNewXPosition(newX);
        dispatch({
            type:
                editMode === "logo"
                    ? "logo/set-x-position"
                    : "full/set-x-position",
            payload: { xPosition: newX },
        });
    };

    const handleYChange = (value) => {
        const newY = -0.1 + (value / 100) * (-0.1 + 0.4);
        setNewYPosition(newY);
        dispatch({
            type:
                editMode === "logo"
                    ? "logo/set-y-position"
                    : "full/set-y-position",
            payload: { yPosition: newY },
        });
    };

    const handleScaleChange = (value) => {
        const newScale =
            editMode === "logo"
                ? 0.04 + (value / 100) * 0.36
                : 0.5 + (value / 100) * 2;
        setNewScaleValue(newScale);
        dispatch({
            type: editMode === "logo" ? "logo/set-scale" : "full/set-scale",
            payload: { scale: newScale },
        });
    };

    const handleRotationChange = (value) => {
        const newRotation = (value / 100) * 12.55;
        setNewRotateValue(newRotation);
        dispatch({
            type: editMode === "logo" ? "logo/rotate" : "full/rotate",
            payload: { rotation: newRotation },
        });
    };

    const reset = () => {
        dispatch({
            type: "RESET_CUSTOMIZATION",
        });
        if (editMode === "logo") {
            setNewXPosition(0);
            setNewYPosition(0.03);
            setNewScaleValue(0.3);
            setNewRotateValue(0);
        } else if (editMode === "full") {
            setNewXPosition(0);
            setNewYPosition(0);
            setNewScaleValue(1);
            setNewRotateValue(0);
        }
    };

    // Convert back to Slider value: sliderValue=100 × ((newVal−min​)/(max-min))
    const xSliderValue = parseFloat(
        ((100 * (newXPosition + 0.1)) / 0.2).toFixed(2),
    );
    const ySliderValue = parseFloat(
        ((100 * (newYPosition + 0.1)) / 0.3).toFixed(2),
    );
    const scaleSliderValue = parseFloat(
        (editMode === "logo"
            ? (100 * (newScaleValue - 0.04)) / 0.36
            : (100 * (newScaleValue - 0.5)) / 1.5
        ).toFixed(2),
    );
    const rotationSliderValue = parseFloat(
        ((newRotateValue / 12.55) * 100).toFixed(2),
    );

    return (
        <div className="edit-container">
            <div className="flex-1 flex flex-col">
                {editMode === "logo" ? (
                    <h1 className="font-bold text-md text-yellow-500 ml-1">
                        Edit Logo
                    </h1>
                ) : (
                    <h1 className="font-bold text-md text-yellow-500 ml-1">
                        Edit Texture
                    </h1>
                )}
                <div className="flex flex-col items-center mb-2 mt-5">
                    <ImgSlider
                        label="Change X"
                        value={xSliderValue}
                        onChange={handleXChange}
                        containerClassName="mb-2"
                    />
                    <ImgSlider
                        label="Change Y"
                        value={ySliderValue}
                        onChange={handleYChange}
                        containerClassName="mb-2"
                    />
                    <ImgSlider
                        label="Change Scale"
                        value={scaleSliderValue}
                        onChange={handleScaleChange}
                        containerClassName="mb-2"
                        step={editMode === "logo" ? 0.01 : 0.1}
                    />
                    <ImgSlider
                        label="Rotate"
                        value={rotationSliderValue}
                        onChange={handleRotationChange}
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
