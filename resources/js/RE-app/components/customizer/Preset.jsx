import { useEffect, useState } from "react";
import React from "react";

import CustomButton from "../buttons/CustomButton";
import PresetIcon from "../../assets/preset.png";
import logo1 from "/public/img/logo1.png";
import logo2 from "/public/img/logo2.png";
import logo3 from "/public/img/logo3.png";
import logo4 from "/public/img/logo4.png";
import logo5 from "/public/img/logo5.png";
import logo6 from "/public/img/logo6.png";
import pattern1 from "/public/img/pattern1.jpg";
import pattern2 from "/public/img/pattern2.png";
import pattern3 from "/public/img/pattern7.jpg";
import pattern4 from "/public/img/pattern4.jpg";

const Preset = ({ file, setFile, handleFile }) => {
    const [showBtn, setShowBtn] = useState(false);

    //    const  getImage = async () => {
    //     const response = await fetch ('/api/presets');
    //     const presets = await response.json();

    //     display(presets);
    //    }

    const presets = [
        {
            file: logo1,
            description: "Logo of RE2",
        },
        {
            file: logo2,
            description: "Logo of RE2",
        },
        {
            file: logo3,
            description: "Logo of RE2",
        },
        {
            file: logo4,
            description: "Logo of RE2",
        },
        {
            file: logo5,
            description: "Logo of RE2",
        },
        {
            file: logo6,
            description: "Logo of RE2",
        },
        {
            file: pattern1,
            description: "Logo of RE2",
        },
        {
            file: pattern2,
            description: "Logo of RE2",
        },
        {
            file: pattern3,
            description: "Logo of RE2",
        },
        {
            file: pattern4,
            description: "Logo of RE2",
        },
        {
            file: logo5,
            description: "Logo of RE2",
        },
        {
            file: logo5,
            description: "Logo of RE2",
        },
        {
            file: logo5,
            description: "Logo of RE2",
        },
        {
            file: logo5,
            description: "Logo of RE2",
        },
    ];
    const display = (presetImgs) => {
        return presetImgs.map((preset, i) => (
            <div key={preset.file + i}>
                <PresetIcon
                    src={preset.file}
                    name={preset.file}
                    setFile={setFile}
                    setShowBtn={setShowBtn}
                />
            </div>
        ));
    };

    return (
        <>
            <div className="preset-container flex flex-col overflow-auto scrollbar-hidden">
                <div className="flex flex-wrap gap-1 flex-grow min-h-0">
                    {display(presets)}
                </div>
            </div>
            {showBtn && (
                <div
                    className="preset-container flex flex-row absolute m-0 ml-3 gap-3"
                    style={{ top: "117%", height: "60px" }}
                >
                    <CustomButton
                        type="outline"
                        title="Logo"
                        handleClick={() => {
                            handleFile("logo", file);
                        }}
                        customStyles="text-xs"
                    />
                    <CustomButton
                        type="filled"
                        title="Full"
                        handleClick={() => handleFile("full", file)}
                        customStyles="text-xs"
                    />
                </div>
            )}
        </>
    );
};

export default Preset;
