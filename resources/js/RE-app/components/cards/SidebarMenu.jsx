import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const SidebarMenu = ({ menuActive, setMenuActive }) => {
    const [currentPage, setCurrentPage] = useState("Home");
    const baseStyle = "text-2xl font-normal ";

    const generateCustomStyle = (label) => {
        return label === currentPage
            ? "text-2xl font-bold text-red-900"
            : baseStyle;
    };
    const sidebarStyle = {
        transform: menuActive ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-out",
        zIndex: "999",
    };

    return (
        <>
            <div
                className="absolute z-20 left-0 top-0 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/30 text-gray-700 h-[calc(100vh-2rem)] w-full h-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border border-gray-200/30"
                style={sidebarStyle}
            >
                <button
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-500 transition-colors"
                    onClick={() => setMenuActive(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="mb-2 mr-auto p-4 flex items-center">
                    <div className="logo w-16 md:block hidden ml-0">
                        <img
                            src="src\assets\website-design\logo.png"
                            alt="logo"
                        />
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-red-800">
                        R.E MALL
                    </h5>
                </div>
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
                    <div
                        role="button"
                        tabIndex="0"
                        className="flex flex-col items-left w-full p-3 rounded-lg text-start leading-tight transition-all outline-none"
                    >
                        <Link to="/">
                            <MenuItem
                                label="Home"
                                url="#"
                                customStyles={generateCustomStyle("Home")}
                                onClick={() => setCurrentPage("Home")}
                            />
                        </Link>

                        <Link to="/shop">
                            <MenuItem
                                label="Shop"
                                url="#"
                                customStyles={generateCustomStyle("Shop")}
                                onClick={() => setCurrentPage("Shop")}
                            />
                        </Link>

                        <Link to="/customizer">
                            <MenuItem
                                label="Customizer"
                                url="#"
                                customStyles={generateCustomStyle("Customizer")}
                                onClick={() => setCurrentPage("Customizer")}
                            />
                        </Link>

                        <Link to="/community">
                            <MenuItem
                                label="Community"
                                url="#"
                                customStyles={generateCustomStyle("Community")}
                                onClick={() => setCurrentPage("Community")}
                            />
                        </Link>

                        <Link to="/contact">
                            <MenuItem
                                label="Contact"
                                url="#"
                                customStyles={generateCustomStyle("Contact")}
                                onClick={() => setCurrentPage("Contact")}
                            />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default SidebarMenu;
