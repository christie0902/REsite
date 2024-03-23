import React from "react";
import SliderCard from "./SliderCard";
import mockCardData from "../../lib/utils/mockProducts.js";

const SliderCardContainer = ({
    activeIndex,
    setActiveIndex,
    featuredProducts,
    setTriggerAnimation,
    setTimeKey,
}) => {
    return (
        <div className="thumbnail">
            {featuredProducts
                ?.slice(activeIndex + 1)
                .concat(featuredProducts.slice(0, activeIndex))
                .map((item, i) => {
                    return (
                        <SliderCard
                            key={i + "card"}
                            name={item.name}
                            price={item.price}
                            img={item.image_url}
                            index={featuredProducts.findIndex(
                                (card) => card.id === item.id,
                            )}
                            setActiveIndex={setActiveIndex}
                            setTriggerAnimation={setTriggerAnimation}
                            setTimeKey={setTimeKey}
                        />
                    );
                })}
        </div>
    );
};

export default SliderCardContainer;
