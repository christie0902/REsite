import React, { useContext, useEffect, useState } from "react";
import ImgSlider from "./ImgSlider";
import CustomButton from "../buttons/CustomButton";

const EditImage = () => {
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);

    const handleXChange = (value) => {
        setXPosition(value);
    };

    const handleYChange = (value) => {
        setYPosition(value);
    };

    const handleScaleChange = (value) => {
        setScale(value);
    };

    const handleRotationChange = (value) => {
        setRotation(value);
    };

    return (
        <div className="edit-container">
            
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-col items-center mb-2 mt-5">
                        <ImgSlider
                            label="Change X"
                            value={xPosition}
                            onChange={handleXChange}
                            containerClassName="mb-2"
                        />
                        <ImgSlider
                            label="Change Y"
                            value={yPosition}
                            onChange={handleYChange}
                            containerClassName="mb-2"
                        />
                        <ImgSlider
                            label="Change Scale"
                            value={scale}
                            onChange={handleScaleChange}
                            containerClassName="mb-2"
                        />
                        <ImgSlider
                            label="Rotate"
                            value={rotation}
                            onChange={handleRotationChange}
                        />
                    </div>
                </div>
            
            <div className="mt-3 flex flex-wrap gap-3">
                <CustomButton
                    type="outline"
                    title="Logo"
                    handleClick={() => readFile("logo")}
                    customStyles="text-xs"
                />

                <CustomButton
                    type="filled"
                    title="Full"
                    handleClick={() => readFile("full")}
                    customStyles="text-xs"
                />
            </div>
        </div>
    );
};

export default EditImage;
