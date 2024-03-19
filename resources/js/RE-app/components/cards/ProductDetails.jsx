import React, { useState, useEffect, useContext } from "react";
import Context from "../../store/Context.js";
import { useParams } from "react-router-dom";
import Stars from "../review/Stars.jsx";
import CustomButton from "../buttons/CustomButton.jsx";

const ProductDetails = () => {
    const { state, dispatch } = useContext(Context);
    const [productData, setProductData] = useState(null);

    const { productId } = useParams();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(
                    `http://www.re-mall.test/api/products/details/${productId}`
                );
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProductData();
    }, [productId]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const {
        name,
        description,
        price,
        dimension,
        sizes,
        colors,
        primary_image,
        images,
        rating,
        review_count,
    } = productData;

    const handleColorSelect = (color) => {
        // Handle color selection
    };
    return (
        <div className="flex flex-col md:flex-row md:items-start bg-black py-8">
            <div className="flex-1 flex flex-col items-center px-4 mb-8 md:mb-0">
                <div className="w-full h-96 rounded-lg overflow-hidden mb-4 hover:scale-105">
                    {/* Primary Product Image */}
                    <img
                        src={primary_image}
                        alt={name}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex -mx-2 mb-4 overflow-x-auto">
                    {/* Thumbnail Images */}
                    {images.map((img, index) => (
                        <div key={index} className="px-2 flex-none">
                            <img
                                src={img}
                                alt={`${name} ${index + 1}`}
                                className="h-24 w-24 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 px-4">
                <h2 className="text-3xl font-bold mb-2 text-yellow-500">{name}</h2>
                <p className="text-sm mb-4">{description}</p>

                <div className="flex items-center mb-4">
                    <Stars
                        type="fullbar"
                        rating={rating}
                        review_count={review_count}
                    />
                </div>

                <div className="flex mb-4 flex-col ">
                    <div className="mr-4 mt-5">
                        <span className="font-bold text-gray-700 text-yellow-500 text-2xl">
                            Price:{" "}
                        </span>
                        <span className="text-yellow-500 text-2xl font-bold">
                            ${price}
                        </span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                            Availability: {""}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                            In Stock
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                        Color:
                    </span>

                    {colors && (
                        <div className="flex items-center mt-2">
                            {colors.map((color, index) => (
                                <label
                                    key={index}
                                    className={`w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer mr-2 hover:border-gray-500`}
                                    style={{ backgroundColor: color }}
                                >
                                    <input
                                        type="radio"
                                        name="color"
                                        value={color}
                                        className="opacity-0 absolute"
                                        onChange={() =>
                                            handleColorSelect(color)
                                        }
                                    />
                                </label>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                        Size:
                    </span>

                    {sizes && (
                        <div className="flex items-center mt-2">
                            {sizes.map((s, index) => (
                                <button
                                    key={index}
                                    className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <span className="font-bold text-white mt-15">
                        Product Description:
                    </span>
                    <p className="text-gray-400 text-md mt-2 mb-5">
                        {description}
                    </p>
                    {dimension && <p>Dimension: {dimension}</p>}
                </div>
                <div className="flex w-full -mx-2 mt-20">
                    <div className="w-1/2 px-2">
                        <CustomButton
                            type="static"
                            title="Add To Cart"
                            customStyles="w-full"
                            handleClick={() => {
                                dispatch({
                                    type: "product/cart-add",
                                    payload: {
                                        ...productData,
                                        size: size,
                                    },
                                });
                            }}
                        />
                    </div>
                    <div className="w-1/2 px-2">
                        <CustomButton
                            type="outline"
                            title="Add to Wishlist"
                            customStyles="w-full"
                            // Add handleClick function
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
