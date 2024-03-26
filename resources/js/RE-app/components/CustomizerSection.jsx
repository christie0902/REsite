import React from "react";
import CustomButton from "./buttons/CustomButton";
import { Link } from "react-router-dom";

const CustomizerSection = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-subcontainer">
                <video
                    autoPlay
                    loop
                    muted
                    className="homepage-video"
                >
                    <source
                        src="https://res.cloudinary.com/diwszstai/video/upload/v1711469496/site-assets/Customizer_home_z5x3qx.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <h1 className="homepage-hero-text">
                    Custom 3D Tee Creator
                </h1>
                <h3
                    className="homepage-first-info-box"
                    style={{
                        backgroundImage:
                            'url("https://res.cloudinary.com/diwszstai/image/upload/v1711472150/site-assets/text-bg_1_vanvnr.png")',
                    }}
                >
                    <div className="w-24">Design Your Ultimate Fan T-Shirt</div>
                </h3>

                <h3
                    className="homepage-third-info-box"
                    style={{
                        backgroundImage:
                            'url("https://res.cloudinary.com/diwszstai/image/upload/v1711472150/site-assets/text-bg_2_bg4pyv.png")',
                    }}
                >
                    <div className="w-30">Pick Your Color</div>
                </h3>

                <h3
                    className="homepage-second-info-box"
                    style={{
                        backgroundImage:
                            'url("https://res.cloudinary.com/diwszstai/image/upload/v1711472150/site-assets/text-bg_2_bg4pyv.png")',
                    }}
                >
                    <div className="w-30">
                        Upload your favorite logos and patterns
                    </div>
                </h3>

                <Link to="/customizer"><h3
                    className="customizer-link-wrapper">
                     <button className="customizer-link-btn">
                        Try Now
                    </button>
                    <div className="w-30"></div>
                </h3></Link>
            </div>
        </div>
    );
};

export default CustomizerSection;
