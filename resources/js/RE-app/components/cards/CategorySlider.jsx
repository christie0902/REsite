import React, { useState, useEffect } from "react";
import apparel from "../../assets/categories/apparel2.jpg";
import collectibles from "../../assets/categories/collectibles4.jpg";
import costume from "../../assets/categories/cosplay.jpg";
import model from "../../assets/categories/model5.jpg";

const CategorySlider = () => {
    const [currentBgImage, setCurrentBgImage] = useState(collectibles);
    const [transitionImage, setTransitionImage] = useState(collectibles);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleItemClick = (newBgImage) => {
        setIsTransitioning(true);
        setTransitionImage(newBgImage);
    };

    useEffect(() => {
        if (isTransitioning) {
            // Wait for the transition to finish before setting the final state
            const transitionTimeout = setTimeout(() => {
                setCurrentBgImage(transitionImage);
                setIsTransitioning(false);
            }, 400);

            return () => clearTimeout(transitionTimeout);
        }
    }, [isTransitioning, transitionImage]);

    const commonBgStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 10%",
    };
    return (
        <div className="category-slider">
            <div className="category-slide">
                <div
                    className="category-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentBgImage})`,
                        ...commonBgStyle,
                        opacity: isTransitioning ? 0 : 1,
                    }}
                ></div>

                <div className="category-container">
                    <div
                        className="category-item"
                        onClick={() => handleItemClick(collectibles)}
                        style={{
                            backgroundImage: `url(${collectibles})`,
                            ...commonBgStyle,
                        }}
                    >
                        <div className="category-content">
                            <div className="category-name">COLLECTIBLES</div>
                        </div>
                    </div>
                    <div
                        className="category-item"
                        onClick={() => handleItemClick(costume)}
                        style={{
                            backgroundImage: `url(${costume})`,
                            ...commonBgStyle,
                        }}
                    >
                        <div className="category-content">
                            <div className="category-name">COSTUME</div>
                        </div>
                    </div>
                    <div
                        className="category-item"
                        onClick={() => handleItemClick(model)}
                        style={{
                            backgroundImage: `url(${model})`,
                            ...commonBgStyle,
                        }}
                    >
                        <div className="category-content">
                            <div className="category-name">MODELS</div>
                        </div>
                    </div>
                    <div
                        className="category-item"
                        onClick={() => handleItemClick(apparel)}
                        style={{
                            backgroundImage: `url(${apparel})`,
                            ...commonBgStyle,
                        }}
                    >
                        <div className="category-content">
                            <div className="category-name">APPAREL</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;
