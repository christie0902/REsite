import { useEffect, useState } from "react";
import React from "react";

import CustomButton from "../buttons/CustomButton";
import PresetIcon from "./PresetIcon.jsx";


const Preset = ({ file, setFile, handleFile }) => {
    const [showBtn, setShowBtn] = useState(false);

    //    const  getImage = async () => {
    //     const response = await fetch ('/api/presets');
    //     const presets = await response.json();

    //     display(presets);
    //    }

    const presets = [
        {
            file:  "https://res.cloudinary.com/diwszstai/image/upload/v1711449113/site-assets/14_j3645v.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449111/site-assets/13_c4tafx.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449104/site-assets/9_unvphx.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449097/site-assets/2_w4an5h.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449065/site-assets/1_ejjoe4.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449107/site-assets/10_fexe5z.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449389/site-assets/texture_hs1q9g.jpg",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449391/site-assets/texture1_v1n5zn.jpg",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449394/site-assets/texture2_mj9gbh.jpg",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449109/site-assets/12_gwz012.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449391/site-assets/texture1_v1n5zn.jpg",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449065/site-assets/1_ejjoe4.png",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449389/site-assets/texture_hs1q9g.jpg",
            description: "Logo of RE2",
        },
        {
            file: "https://res.cloudinary.com/diwszstai/image/upload/v1711449111/site-assets/13_c4tafx.png",
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
                    style={{ top: "100%", height: "60px" }}
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
