import React, { useContext, useEffect, useState } from "react";
import ImgSlider from "./ImgSlider";
import CustomButton from "../buttons/CustomButton";
import Context from "../../store/Context";

const EditImage = () => {
    const { state, dispatch } = useContext(Context);
    const [editMode, setEditMode] = useState("logo");

    // newValue=min+(sv/100)∗(max−min)
    const handleXChange = (value) => {
        dispatch({
            type:
                editMode === "logo"
                    ? "logo/set-x-position"
                    : "full/set-x-position",
            payload: { xPosition: (-0.1 + ((value / 100) * (-.2 + .4))) },
        });
    };

    const handleYChange = (value) => {
        dispatch({
            type:
                editMode === "logo"
                    ? "logo/set-y-position"
                    : "full/set-y-position",
            payload: { yPosition: (-0.1 + ((value / 100) * (-.1 + .4))) },
        });
    };

    const handleScaleChange = (value) => {
        dispatch({
            type: editMode === "logo" ? "logo/set-scale" : "full/set-scale",
            payload: { scale: (0.04 + ((value / 100) * (.36))) },
        });
    };

    const  handleRotationChange = (value) => {
        console.log(value);
        dispatch({
            type: editMode === "logo" ? "logo/rotate" : "full/rotate",
            payload: { rotation: (value/100) * (12.55) }, 
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
