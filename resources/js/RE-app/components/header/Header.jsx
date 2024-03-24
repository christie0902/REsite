import React, { useEffect } from "react";
import NavItem from "./NavItem";
import { useState, useContext } from "react";
import HomeMenu from "./HomeMenu";
import Icon from "./Icon";
import SearchBar from "../SearchBar";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "../cards/ProfileMenu";
import Context from "../../store/Context";
import Register from "../../pages/Register";

const Header = () => {
    const { state, dispatch } = useContext(Context);
    
    return (
        <>
            <div className="header-container flex justify-between items-center bg-black">
                <div className="home-menu">
                    <HomeMenu />
                </div>
                <div className="navbar flex-row justify-between sm:w-7/12 lg:w-4/12 md:flex hidden">
                    <Link to="/">
                        <NavItem title="Home" path={"/"}/>
                    </Link>
                    <Link to="/shop">
                        <NavItem title="Shop" path={"/shop"}/>
                    </Link>
                    <Link to="/customizer">
                        <NavItem title="Customizer" path={"/customizer"}/>
                    </Link>
                    <Link to="/community">
                        <NavItem title="Community" path={"/community"}/>
                    </Link>
                    <Link to="/contact">
                        <NavItem title="Contact" path={"/contact"}/>
                    </Link>
                </div>
                <div className="icon-container flex flex-row mr-10 gap-2 justify-end">
                    {state.searchActive && <SearchBar />}
                    <ProfileMenu />
                    <Icon type={"search"} />
                    <Icon type={"cart"} />
                    <Icon type={"profile"} />
                </div>
            </div>
        </>
    );
};

export default Header;
