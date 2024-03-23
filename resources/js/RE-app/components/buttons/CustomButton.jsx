import React, { useContext } from "react";
import { getContrastingColor } from "../../lib/config/helpers";
import Context from "../../store/Context";

const CustomButton = ({
    type,
    title,
    customStyles,
    handleClick,
    allowSearch,
}) => {
    const { state, dispatch } = useContext(Context);
    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: state.customizerState.color,
                color: getContrastingColor(state.customizerState.color),
            };
        } else if (type === "outline") {
            return {
                borderWidth: "1px",
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
            };
        } else if (type === "static") {
            return {
                color: "#FFFFFF",
                backgroundColor: "rgba(139, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                webkitBackdropFilter: "blur(10px)", // For Safari compatibility
                borderRadius: "10px",
            };
        }
    };

    return (
        <button
            className={`px-5 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
            data-allowsearch={allowSearch}
        >
            {/* {type ==="gradient" ? <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{title}</span> : <span>{title}</span>} */}
            {title}
        </button>
    );
};

export default CustomButton;
