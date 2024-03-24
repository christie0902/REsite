import React, { useContext, useEffect, useState } from "react";
import Context from "../../store/Context";
import { useLocation } from "react-router";
const highlight = 'https://res.cloudinary.com/diwszstai/image/upload/v1711300062/site-assets/blood-splatter_xhvx2d.png'

const NavItem = ({ title, path}) => {
const [highlightStyle, setHighlightStyle] = useState('')
const { state, dispatch } = useContext(Context);
let location = useLocation();

useEffect(() => {
  if(location.pathname === path){
    setHighlightStyle("bloody")
  } else {
    setHighlightStyle('')
  }
  return () => {
  }
}, [location, path])


    return (
        <div
            className={`nav-item ${highlightStyle}`}
        >
            <a className="text-white text-xl" >
                {title}
            </a>
        </div>
    );
};

export default NavItem;
