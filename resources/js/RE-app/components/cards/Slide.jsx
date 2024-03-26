import React, { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import { Link } from "react-router-dom";

const Slider = () => {
    const bgImage1="https://res.cloudinary.com/diwszstai/image/upload/v1711380644/site-assets/category_img_nmyn62.png";
    const bgImage2="https://res.cloudinary.com/diwszstai/image/upload/v1711443635/site-assets/category_img2_osja1d.png"

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
            <h1 className="text-6xl font-bold text-yellow-500 mb-4 md:text-7xl font-bebas-neue">LET'S EXPLORE OUR COLLECTION!</h1>
            <Link to="/shop"><button class="bg-red-800 text-white px-5 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 glassmorphism-button mt-5">Shop Now</button></Link>
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
                <h1 className="mb-4 text-center text-4xl font-bold text-yellow-500 md:mb-6 md:text-4xl mt-5 font-bebas-neue">
                    Categories
                </h1>
                <p className="text-md text-gray-300">
                    Explore our amazing models, realistic collectibles,
                    impressive costume and a lot more in our shop! Explore our shop today and get the best collections of all fans!
                </p>
                <ul className="text-left mt-10">
                    <li className="mb-3 flex items-center ">
                        <span className="mr-2 ">🎮</span> Models
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
