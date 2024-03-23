import React, { useEffect, useMemo } from "react";
import SliderItem from "./SliderItem";
import { motion } from "framer-motion";
// import mockProducts from "../../lib/utils/mockProducts";

const SliderShowcase = ({
    activeIndex,
    featuredProducts,
    triggerAnimation,
}) => {
    const item = featuredProducts[activeIndex];
    return (
        <div className="list">
            {item && (
                <SliderItem
                    product={item}
                    triggerAnimation={triggerAnimation}
                />
            )}
        </div>
    );
};

export default SliderShowcase;
