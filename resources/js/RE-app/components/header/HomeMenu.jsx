import React, { useState } from "react";
import burgerMenu from "../../assets/website-design/hamburger-menu.svg";
import SidebarMenu from "../cards/SidebarMenu";
import { Link } from "react-router-dom";

const HomeMenu = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <Link to="/">
                <div className="logo w-16 md:block hidden ml-10">
                    <img
                        src="https://res.cloudinary.com/diwszstai/image/upload/v1710794902/site-assets/threejs_uqluzs.png"
                        alt="logo"
                    />
                </div>
            </Link>

            <div
                className="burger-menu w-14 md:hidden block"
                onClick={() => setMenuActive(true)}
            >
                <img src={burgerMenu} alt="hamburger-menu" />
            </div>
            {menuActive && (
                <SidebarMenu
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
            )}
        </>
    );
};

export default HomeMenu;
