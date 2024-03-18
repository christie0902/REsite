import React from "react";
import Stars from "../review/Stars.jsx";
import { useContext, useState } from "react";
import Context from "../../store/Context.js";
import CustomButton from "../buttons/CustomButton.jsx";

const BasicCard = ({ productData }) => {
  const { state, dispatch } = useContext(Context);
  const [size, setsize] = useState("");
  const {
    image_url,
    name,
    discount_rate,
    price,
    discount_price,
    rating,
    review_count,
  } = productData;

  return (
    <div className="mx-auto max-w-xs transition-transform duration-200 hover:scale-105 hover:border-red-500">
      <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg backdrop-blur-md bg-white/10 border border-gray-500/50 shadow-lg">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover ml-auto mr-auto my-auto "
            src={image_url}
            alt="product"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {discount_rate ? `${discount_rate}%` : ""}
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-yellow-600 font-bold ellipsis">
              {name}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-white">${price}</span>
              <span className="text-sm text-slate-900 line-through">
                {discount_price ? `${discount_price}` : ""}
              </span>
            </p>
            <div className="flex items-center ml-4">
              <Stars rating={rating} review_count={review_count} />
            </div>
          </div>
          {/* <a
            handleClick={() => {
              dispatch({
                type: "product/cart-add",
                payload: { ...productData, size: size },
              });
            }}
            href="#"
            className="flex items-center justify-center rounded-md bg-red-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
          > */}
          <CustomButton
            type="static"
            title="Add To Cart"
            customStyles="w-full"
            handleClick={() => {
              dispatch({
                type: "product/cart-add",
                payload: { ...productData, size: size },
              });
            }}
          />
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
