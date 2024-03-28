import React, { useContext, useEffect, useState } from "react";
import searchIcon from "../../assets/website-design/search-icon.svg";
import cartIcon from "../../assets/website-design/cart-icon.svg";
import profileIcon from "../../assets/website-design/profile-icon.svg";
import Context from "../../store/Context";
import SearchBar from "../SearchBar";


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
                setIconHTML(
                    <div className="flex items-center relative">
                    <img
                        src={cartIcon}
                        alt="cart icon"
                        className="cart-icon-img"
                    />
                    {state.cart?.length > 0 && (
                        <span className="cart-item-count text-red-700 absolute top-0 left-8 inline-flex items-center justify-center w-5 h-5 bg-white/50 rounded-full shadow">
                        {state.cart.length}
                      </span>
                         )}
                    </div>
                );

                setHandleClick(() => () => {
                    dispatch({ type: "product/toggle-cartVisibility" });
                });
                break;
            case "profile":
                setIconHTML(
                    <img
                        src={profileIcon}
                        alt="profile icon"
                        className="prof-icon"
                    />,
                );
                setHandleClick(() => () => {
                    dispatch({ type: "profile/toggle-profileVisibility" });
                });
                break;
            default:
                return null;
        }
    };
    return (
        <>
            {showIcon && (
                <div className="cart-icon w-10">
                    <div onClick={handleClick}>{iconHTML}</div>
                </div>
            )}
        </>
    );
};

export default Icon;
