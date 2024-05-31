import React, { useEffect, useRef, useState } from "react";
import SliderShowcase from "./SliderShowcase";
import SliderCardContainer from "./SliderCardContainer";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
// import mockProducts from "../../lib/utils/mockProducts";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("");
    const [timeKey, setTimeKey] = useState("timeKey");
    const [triggerAnimation, setTriggerAnimation] = useState(0);
    const [carouselLength, setCarouselLength] = useState(0);
    // const [sliderLength, setSliderLength] = useState(0);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const baseURL = process.env.MIX_APP_URL;

    const loadFeaturedProducts = async () => {
        const response = await fetch(`${baseURL}/api/featured`);
        const data = await response.json();
        setFeaturedProducts(data);
        setCarouselLength(data.length);
    };

    useEffect(() => {
        loadFeaturedProducts();
    }, []);

    useEffect(() => {
        const autoRunSlider = setInterval(() => {
            handleNext();
        }, 10000);

        return () => {
            clearInterval(autoRunSlider);
        };
    });

    const handleNext = () => {
        setActiveIndex((prevIndex) => {
            return prevIndex >= carouselLength - 1 ? 0 : prevIndex + 1;
        });
        setTimeKey("timekey" + Date.now());
        setTriggerAnimation((prev) => prev + 1);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselLength - 1 : prevIndex - 1,
        );
        setTimeKey("timekey" + Date.now());
        setTriggerAnimation((prev) => prev - 1);
    };
    return (
        <motion.div className={`carousel`}>
            <SliderShowcase
                activeIndex={activeIndex}
                featuredProducts={featuredProducts}
                triggerAnimation={triggerAnimation}
            />
            <SliderCardContainer
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                featuredProducts={featuredProducts}
                setTriggerAnimation={setTriggerAnimation}
                setTimeKey={setTimeKey}
            />

            <div className="arrows">
                <button id="prev" onClick={handlePrev}>
                    &lt;
                </button>
                <button id="next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
            <motion.div
                className="time"
                key={timeKey}
                initial={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#7e0b0b",
                    position: "absolute",
                    zIndex: 30,
                    top: 0,
                    left: 0,
                }}
                animate={{
                    width: "0%",
                    height: "3px",
                    backgroundColor: "#7e0b0b",
                    position: "absolute",
                    zIndex: 30,
                    top: 0,
                    left: 0,
                }}
                transition={{ duration: 10 }}
            ></motion.div>
        </motion.div>
    );
};

export default Carousel;
