import React, { useState, useEffect, useContext } from "react";
import Context from "../../store/Context.js";
import { useParams } from "react-router-dom";
import Stars from "../review/Stars.jsx";
import CustomButton from "../buttons/CustomButton.jsx";

const ProductDetails = () => {
    const { state, dispatch } = useContext(Context);
    const [productData, setProductData] = useState(null);
    const [selectSize, setSelectSize] = useState(null);
    const [selectColor, setSelectColor] = useState(null);
    const [selectEdition, setSelectEdition] = useState(null);
    const [quantity, setQuantity] = useState(1);

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
        id,
        name,
        description,
        price,
        dimension,
        sizes,
        colors,
        edition,
        image_url,
        images,
        rating,
        review_count,
        tags,
    } = productData;
console.log(productData);
    const handleColorSelect = (color) => {
        setSelectColor(color);
    };

    const handleSizeSelect = (size) => {
        setSelectSize(size);
    };

    const handleEditionSelect = (edition) => {
        setSelectEdition(edition);
    };

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) =>
            prevQuantity > 1 ? prevQuantity - 1 : 1
        );
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity);
    };

    return (
        <div className="flex flex-col md:flex-row md:items-start bg-black py-8">
            <div className="flex-1 flex flex-col items-center px-4 mb-8 md:mb-0">
                <div className="w-full h-96 rounded-lg overflow-hidden mb-4 hover:scale-105">
                    {/* Primary Product Image */}
                    <img
                        src={image_url}
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
                <h2 className="text-4xl font-bold mb-3 text-yellow-500 ">
                    {name}
                </h2>
                {tags.length > 0 &&
                    tags.map((tag) => (
                        <p
                            className="text-sm mb-4 bg-yellow-700 w-24 flex justify-center items-center py-1 rounded-sm"
                            key={tag}
                        >
                            {tag}
                        </p>
                    ))}

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
                    <div className="flex items-center mt-6 mb-3">
                        <button
                            className="cursor-pointer rounded-l bg-gray-800 py-1 px-3 hover:bg-red-700 hover:text-white"
                            aria-label="Decrease quantity"
                            onClick={decreaseQuantity}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            data-input-counter
                            data-input-counter-min="1"
                            data-input-counter-max="50"
                            className="bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-red-500 focus:border-red-500 block w-8 py-2.5"
                        />
                        <button
                            className="cursor-pointer rounded-r bg-gray-800 py-1 px-3 hover:bg-red-700 hover:text-white"
                            aria-label="Increase quantity"
                            onClick={increaseQuantity}
                        >
                            +
                        </button>
                    </div>
                </div>
                {colors.length > 0 && (
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                            Color:
                        </span>

                        <div className="flex items-center mt-2">
                            {colors.map((color, index) => (
                                <label
                                    key={index}
                                    className={`w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer mr-2 hover:border-gray-500 ${
                                        selectColor === color
                                            ? "border-red-500 scale-125"
                                            : ""
                                    }`}
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
                    </div>
                )}
                {sizes.length > 0 && (
                    <div className="mb-4">
                        <span className="font-bold text-gray-700">
                            Size: {""}
                        </span>
                        {sizes.map((s, index) => (
                            <button
                                key={index}
                                onClick={() => handleSizeSelect(s)}
                                className={`bg-gray-800 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 ${
                                    selectSize === s
                                        ? "border-white scale-105"
                                        : ""
                                }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                )}

                {edition.length > 0 && (
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                            Edition: {""}
                        </span>
                        {edition.map((e, index) => (
                            <button
                                key={index}
                                onClick={() => handleEditionSelect(e)}
                                className={`bg-gray-700 text-white py-2 px-4 rounded-md font-bold mr-2 hover:bg-gray-400 ${
                                    selectEdition === e
                                        ? "border-white scale-105"
                                        : ""
                                }`}
                            >
                                {e}
                            </button>
                        ))}
                    </div>
                )}

                <div>
                    <span className="font-bold text-white mt-15">
                        Product Description:
                    </span>
                    <p className="text-gray-400 text-md mt-2 mb-5">
                        {description}
                    </p>
                    {dimension && <p>Dimension: {dimension}</p>}
                </div>
                <div className="flex w-full -mx-2 mt-5">
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
                                        id: id,
                                        selectedColor: selectColor,
                                        selectedSize: selectSize,
                                        selectedEdition: selectEdition,
                                        quantity: quantity,
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
