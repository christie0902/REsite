import { isDragActive } from "framer-motion";
import React, { useContext } from "react";
import { getContrastingColor } from "../../lib/config/helpers";
import Context from "../../store/Context";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
    const { state, dispatch } = useContext(Context);
    const activeStyles =
        isFilterTab && isActiveTab
            ? { backgroundColor: state.customizerState.color, opacity: 1 }
            : { backgroundColor: "transparent", opacity: 0.8 };
    return (
        <div
            key={tab.name}
            className={`tab-btn flex flex-col items-center justify-center' : 'rounded-lg flex flex-col items-center justify-center ${isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`}
            onClick={handleClick}
            style={activeStyles}
        >
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"}`}
            />
            <span
                className={`font-bold ${isFilterTab ? "text-xs" : "text-sm"}`}
                style={{
                    color: getContrastingColor(state.customizerState.color),
                }}
            >
                {tab.label}
            </span>
        </div>
    );
};

export default Tab;
