import React from "react";
import CustomButton from "./buttons/CustomButton";
import { Link } from "react-router-dom";

const CustomizerSection = () => {
    return (
        <div className="bg-black text-white py-10 px-2 lg:px-10 w-9/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between items-center mt-5 relative">
                <video
                    autoPlay
                    loop
                    muted
                    className="relative inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://res.cloudinary.com/diwszstai/video/upload/v1711469496/site-assets/Customizer_home_z5x3qx.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <h1 className="text-8xl font-bold absolute top-10 left-1/2 transform -translate-x-3/4 -translate-y-1/2 -skew-y-6  z-10 text-yellow-500 font-bebas-neue">
                    Custom 3D Tee Creator
                </h1>
                <h3
                    className="text-md font-semibold mb- text-gray-200 absolute top-10 left-full transform -translate-x-3/4 -translate-y-1/2 bg-cover bg-center rounded-full py-3 px-4 w-64 h-48 flex justify-center items-center text-center -skew-y-6"
                    style={{
                        backgroundImage:
                            'url("https://res.cloudinary.com/diwszstai/image/upload/v1711472150/site-assets/text-bg_1_vanvnr.png")',
                    }}
                >
                    <div className="w-24">Design Your Ultimate Fan T-Shirt</div>
                </h3>

                <h3
                    className="text-md font-semibold text-gray-200 absolute top-1/2 left-full transform -translate-x-3/4 -translate-y-1/5 bg-cover bg-center rounded-full py-3 px-4 w-64 h-48 flex justify-center items-center text-center -skew-y-6"
                    style={{
                        backgroundImage:
                            'url("https://res.cloudinary.com/diwszstai/image/upload/v1711472150/site-assets/text-bg_2_bg4pyv.png")',
                    }}
                >
                    <div className="w-30">Pick Your Color</div>
                </h3>

                <h3
                    className="text-md font-semibold text-gray-200 absolute top-1/3 left-full transform -translate-x-1/2 -translate-y-1/4 bg-cover bg-center rounded-full py-3 px-4 w-64 h-48 flex justify-center items-center text-center  -skew-y-6"
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
                    className="text-md absolute top-1/3 left-full transform -translate-x-3/4 -translate-y-3/4 py-3 px-4 w-72 h-48 flex justify-center items-center text-center  -skew-y-6 z-10">
                     <button className="inline-block border border-orange-500 text-orange-500 uppercase py-2 px-4 mt-2 ml-2 w-1/2 rounded-md shadow-md cursor-pointer transition-transform transition-shadow duration-300 hover:transform hover:shadow-lg hover:bg-yellow-700 hover:text-white z-30">
                        Try Now
                    </button>
                    <div className="w-30"></div>
                </h3></Link>
                

                {/* <img
                    className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8"
                    src="https://res.cloudinary.com/diwszstai/image/upload/v1710504767/Featured%20Products/3D-shirt-theme_kig4rd.png"
                    alt="tshirt"
                />
               
                    <h3 className="text-2xl font-semibold mb-2 text-yellow-700">
                        Design Your Ultimate Fan T-Shirt
                    </h3>
                    <p className="mb-6">
                        Dive into the world of Resident Evil with a unique
                        T-shirt that screams 'you'! Here's how to make it yours:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-6">
                        <li>
                            <span className="font-semibold text-red-700">
                                Pick Your Color:
                            </span>{" "}
                            Start with the perfect base.
                        </li>
                        <li>
                            <span className="font-semibold text-red-700">
                                Add Your Flair:
                            </span>{" "}
                            Upload your favorite logos and patterns.
                        </li>
                        <li>
                            <span className="font-semibold text-red-700">
                                Make It Official:
                            </span>{" "}
                            Save your masterpiece and place your order.
                        </li>
                    </ol>
                    <Link to="/customizer">
                        <CustomButton type="static" title="TRY NOW" />
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default CustomizerSection;
