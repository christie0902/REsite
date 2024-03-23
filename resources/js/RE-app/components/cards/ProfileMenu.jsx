import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import Context from "../../store/Context";
import "../../../bootstrap.js";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
    const { state, dispatch } = useContext(Context);
    const handleLogout = async () => {
        axios
            .post("/logout")
            .then((response) => {
                console.log("Logged out successfully");
                localStorage.removeItem("session");
                dispatch({ type: 'user/logout' });
                location.reload();
            })
            .catch((error) => {
                console.error("Logout error", error);
            });
    };

    return (
        state.profileActive && (
            <div
                id="dropdownDivider"
                className="z-10 divide-y divide-gray-500 rounded-sm shadow-lg backdrop-blur-lg bg-opacity-30 bg-gray-600 border border-gray-600 w-44 dark:divide-gray-600 absolute top-10 right-12 z-50"
                style={{ backdropFilter: "blur(10px)" }}
            >
                {state.user === null ? (
                    <ul
                        className="py-2 text-sm text-gray-300"
                        aria-labelledby="dropdownDividerButton"
                    >
                        <li>
                            <Link to="/login">
                                <MenuItem label="Sign In" />
                            </Link>
                            <Link to="/register">
                                <MenuItem label="Register" />
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <>
                        <ul
                            className="py-2 text-sm text-gray-300"
                            aria-labelledby="dropdownDividerButton"
                        >
                            <li>
                                <MenuItem label="Profile" url="#" />
                            </li>
                            <li>
                                <MenuItem label="Order" url="#" />
                            </li>
                            <li>
                                <MenuItem label="Setting" url="#" />
                            </li>
                        
                        {state.user && state.user.role === "admin" && (
                            <li className="font-bold text-yellow-600">
                                <MenuItem label="Admin Hub" url="/admin/dashboard" />
                            </li>
                        )}
                        </ul>
                        <div className="py-2">
                            <MenuItem
                                label="Log Out"
                                customStyles="text-sm text-gray-300"
                                onClick={handleLogout}
                            />
                        </div>
                    </>
                )}
            </div>
        )
    );
};

export default ProfileMenu;
