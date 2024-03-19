import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import Context from "../../store/Context";

const ProfileMenu = () => {
  const {state, dispatch} = useContext(Context)
  const handleLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
    
      });

      if (response.ok) {
        dispatch({ type: 'user/logout'});
      } else {
        console.error("Logout request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during logout request:", error);
    }
  };

  return (
    state.profileActive && (
    <div
      id="dropdownDivider"
      className="z-10 divide-y divide-gray-500 rounded-sm shadow-lg backdrop-blur-lg bg-opacity-30 bg-gray-600 border border-gray-600 w-44 dark:divide-gray-600 absolute top-10 right-12"
      style={{ backdropFilter: 'blur(10px)' }}
    >
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
      </ul>
      <div className="py-2">
        <MenuItem label="Log Out" customStyles="text-sm text-gray-300" onClick={handleLogout}/>
      </div>
    </div>)
    );
};

export default ProfileMenu;
