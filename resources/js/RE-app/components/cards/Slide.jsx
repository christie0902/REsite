import React, { useState } from "react";
import CustomButton from "../buttons/CustomButton";

const Slider = ({
    header,
    description2,
    description1,
    categoryName1,
    bgImage1,
    bgImage2,
}) => {
    const [bgStyle, setBgStyle] = useState({
        backgroundImage: `url(${bgImage1})`,
        left: "0%",
    });

    const handleMouseEnter = () => {
        setBgStyle({
            backgroundImage: `url(${bgImage2})`,
            left: "50%",
        });
    };

    const handleMouseLeave = () => {
        setBgStyle({
            backgroundImage: `url(${bgImage1})`,
            left: "0%",
        });
    };

    return (
        <section
            className="slider-container slide-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="slider-2">
            <h1 className="mb-4 text-center text-4xl font-bold text-yellow-500 md:mb-6 md:text-4xl mt-5">Check out our Shop now
                </h1>
                <p className="mb-6 text-2xl text-gray-300">Explore our amazing models, realistic collectibles,
                    impressive costume and a lot more in our shop! Explore our shop today and get the best collections of all fans!</p>
                <CustomButton type="static" title="Shop Now"/>
            </div>
            <div
                className="slider-image"
                style={{
                    ...bgStyle,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                    position: "absolute",
                    transition:
                        "1s left ease-in-out, 1s background ease-in-out",
                    width: "50%",
                }}
            ></div>
            <div className="slider-1">
                <h1 className="mb-4 text-center text-4xl font-bold text-yellow-500 md:mb-6 md:text-4xl mt-5">
                    {header}
                </h1>
                <p className="mb-6 text-2xl text-gray-300">
                    Explore our amazing models, realistic collectibles,
                    impressive costume and a lot more in our shop! Explore our shop today and get the best collections of all fans!
                </p>
                <ul className="text-left mt-10">
                    <li className="mb-3 flex items-center ">
                        <span className="mr-2">🎮</span> Models
                    </li>
                    <li className="mb-3 flex items-center ">
                        <span className="mr-2">🎮</span> Gifts & Collectibles
                    </li>
                    <li className="mb-3 flex items-center ">
                        <span className="mr-2">🎮</span> Customized T-shirt
                    </li>
                    <li className="flex items-center ">
                        <span className="mr-2">🎮</span> Apparels
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Slider;
