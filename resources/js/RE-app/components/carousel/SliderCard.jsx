import React from "react";

const SliderCard = ({
    name,
    price,
    img,
    setActiveIndex,
    index,
    setTriggerAnimation,
    setTimeKey,
}) => {
    return (
        <>
            <div
                onClick={() => {
                    setActiveIndex(index);
                    setTimeKey("timeKey" + Date.now());
                    setTriggerAnimation((prev) => prev + 1);
                }}
                className="item"
            >
                <img src={img}></img>
                <div className="content">
                    <div className="title">{name}</div>
                    <div className="des">{price}</div>
                </div>
            </div>
        </>
    );
};

export default SliderCard;
