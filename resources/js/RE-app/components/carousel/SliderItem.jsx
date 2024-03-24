import { motion, useAnimate } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import Context from "../../store/Context";

const SliderItem = ({ product, triggerAnimation }) => {
    const { state, dispatch } = useContext(Context);
    const [triggerKey1, setTriggerKey1] = useState(0);
    const [triggerKey2, setTriggerKey2] = useState(10);
    const [triggerKey3, setTriggerKey3] = useState(100);

    useEffect(() => {
        // This effect runs when `triggerAnimation` changes.
        setTriggerKey1((prevKey) => prevKey + 1); // Increment the key to force re-animation
        setTriggerKey2((prevKey) => prevKey + 1); // Increment the key to force re-animation
        setTriggerKey3((prevKey) => prevKey + 1); // Increment the key to force re-animation
    }, [triggerAnimation]);

    const {
        name,
        price,
        description,
        copy,
        size,
        des1,
        preorder,
        des3,
        copy1,
        buttonLabel,
    } = product;
    return (
        <div className="carousel-item">
            <div className="flex justify-between relative">
                <motion.div
                    className="left-panel"
                    initial={{
                        transform:
                            "translateX(-50px) translateY(40px) skewY(-7deg)",
                        filter: "blur(20px)",
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0)",
                        transform:
                            "translateX(0px) translateY(0px) skewY(-7deg)",
                    }}
                    transition={{ duration: 2.5 }}
                >
                    <motion.div
                        className="left-info"
                        key={"leftPanel01" + triggerKey2}
                        initial={{
                            transformOrigin: "top left",
                            transform: "translateX(-50px) translateY(40px)",
                            filter: "blur(20px)",
                            opacity: 0,
                        }}
                        animate={{
                            transformOrigin: " top left",
                            opacity: 1,
                            filter: "blur(0)",
                            transform: "translateX(0px) translateY(0px)",
                        }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="recon-title">{name}</div>
                        <div className="recon-header">
                            <div className="recon-name">${price}</div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bottom-info"
                        key={"leftPanel03" + triggerKey2}
                        initial={{
                            transformOrigin: "top left",
                            transform: "translateX(-50px) translateY(40px)",
                            filter: "blur(20px)",
                            opacity: 0,
                        }}
                        animate={{
                            transformOrigin: " top left",
                            opacity: 1,
                            filter: "blur(0)",
                            transform: "translateX(0px) translateY(0px)",
                        }}
                        transition={{ duration: 1 }}
                    >
                        <div className="bottom-description">
                            {size ? size : "Our best seller of all time!"}
                        </div>
                    </motion.div>
                    <motion.div
                        className="right-info add-info"
                        key={"rightpanel04" + triggerKey3}
                        initial={{
                            transformOrigin: "top left",
                            transform: "translateX(150px) translateY(-40px)",
                            filter: "blur(20px)",
                            opacity: 0,
                        }}
                        animate={{
                            transformOrigin: " top left",
                            opacity: 1,
                            filter: "blur(0)",
                            transform: "translateX(0px) translateY(0px)",
                        }}
                        transition={{ duration: 1.5 }}
                    >
                        <button
                            className="recon-button"
                            onClick={() => {
                                console.log(product);
                                dispatch({
                                    type: "product/cart-add",
                                    payload: { ...product, quantity: 1 },
                                });
                            }}
                        >
                            {name === "Customize T-Shirt"
                                ? "TRY NOW"
                                : "ADD TO CART"}
                        </button>
                    </motion.div>
                </motion.div>
                {/* End of left container------------------------------------------------------------- */}
                <motion.div
                    className="hero-img"
                    style={{ pointerEvents: "none" }}
                    key={triggerKey1}
                    initial={{
                        left: 100,
                        bottom: -800,
                        opacity: 0,
                    }}
                    animate={{
                        bottom: 0,
                        left: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={product.image_url} alt="image" />
                </motion.div>
                {/* END OF HERO IMG------------------------------------------------------------- */}
                <motion.div
                    className="right-panel"
                    initial={{
                        opacity: 0,
                        filter: "blur(20px)",
                        transform:
                            "translateX(100px) translateY(-40px) skewY(-9deg)",
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        transform:
                            "translateX(0px) translateY(0px) skewY(-9deg)",
                    }}
                    transition={{ duration: 3 }}
                >
                    <motion.div
                        className="top-info"
                        key={"rightpanel01" + triggerKey3}
                        initial={{
                            transformOrigin: "top left",
                            transform: "translateX(150px) translateY(-40px)",
                            filter: "blur(20px)",
                            opacity: 0,
                        }}
                        animate={{
                            transformOrigin: " top left",
                            opacity: 1,
                            filter: "blur(0)",
                            transform: "translateX(0px) translateY(0px)",
                        }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="top-description">{description}</div>
                    </motion.div>
                    <motion.div
                        className="second-info"
                        key={"rightpanel02" + triggerKey3}
                        initial={{
                            transformOrigin: "top left",
                            transform: "translateX(150px) translateY(-40px)",
                            filter: "blur(20px)",
                            opacity: 0,
                        }}
                        animate={{
                            transformOrigin: " top left",
                            opacity: 1,
                            filter: "blur(0)",
                            transform: "translateX(0px) translateY(0px)",
                        }}
                        transition={{ duration: 1.1 }}
                    >
                        <div className="second-description">
                            Over <strong>500</strong> pre-orders!!!
                        </div>
                    </motion.div>
                    <motion.div
                        className="right-info"
                        key={"rightpanel03" + triggerKey3}
                        initial={{
                            transformOrigin: "top left",
                            transform: "translateX(150px) translateY(-40px)",
                            filter: "blur(20px)",
                            opacity: 0,
                        }}
                        animate={{
                            transformOrigin: " top left",
                            opacity: 1,
                            filter: "blur(0)",
                            transform: "translateX(0px) translateY(0px)",
                        }}
                        transition={{ duration: 1.3 }}
                    >
                        <div className="recon-title">{des3}</div>
                        <div className="recon-description">
                            Made by real fans
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SliderItem;
