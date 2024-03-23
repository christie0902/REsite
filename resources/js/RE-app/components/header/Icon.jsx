import React, { useContext, useEffect, useState } from "react";
import searchIcon from "../../assets/website-design/search-icon.svg";
import cartIcon from "../../assets/website-design/cart-icon.svg";
import profileIcon from "../../assets/website-design/profile-icon.svg";

import SearchBar from "../SearchBar";
import Context from "../../store/Context";

const Icon = ({ type }) => {
    const { state, dispatch } = useContext(Context);
    const [iconHTML, setIconHTML] = useState(null);
    const [showIcon, setShowIcon] = useState(true);
    const [handleClick, setHandleClick] = useState(null);

    useEffect(() => {
        generateContent(type);
    }, [type, state]);

    const generateContent = (type) => {
        switch (type) {
            case "search":
                setShowIcon(!state.searchActive);
                setIconHTML(
                    <img
                        src={searchIcon}
                        alt="search icon"
                        data-allowsearch="true"
                    />,
                );
                setHandleClick(() => () => {
                    dispatch({
                        type: "search/set-searchVisibility",
                        payload: true,
                    });
                });
                break;
            case "cart":
                setIconHTML(<img src={cartIcon} alt="cart icon" />);
                setHandleClick(() => () => {
                    dispatch({ type: "product/toggle-cartVisibility" });
                });
                break;
            case "profile":
                setIconHTML(<img src={profileIcon} alt="profile icon" />);
                setHandleClick(() => () => {
                    dispatch({ type: "profile/toggle-profileVisibility" });
                });
                break;
            default:
                return null;
        }
    };
    return (
        <div className="cart-icon w-10">
            {
                <>
                    <div onClick={handleClick}>{showIcon && iconHTML}</div>
                </>
            }
        </div>
    );
};

export default Icon;
