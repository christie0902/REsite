import React from "react";
import CustomButton from "./buttons/CustomButton";
import { Link } from "react-router-dom";

const CustomizerSection = () => {
    return (
        <div className="bg-black text-white py-8 px-4 md:px-8 lg:px-16 w-9/12 mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between items-center mt-10">
                <img
                    className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8"
                    src="https://res.cloudinary.com/diwszstai/image/upload/v1710504767/Featured%20Products/3D-shirt-theme_kig4rd.png"
                    alt="tshirt"
                />
                <div className="text-lg">
                    <h1 className="text-5xl font-bold mb-4 mt-20">
                        Custom 3D Tee Creator
                    </h1>
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
                </div>
            </div>
        </div>
    );
};

export default CustomizerSection;
