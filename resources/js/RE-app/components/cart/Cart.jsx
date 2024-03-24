import React, { useContext, useEffect, useRef, useState } from "react";
import CartItem from "../cards/CartItem";
import CustomButton from "../buttons/CustomButton";
import Context from "../../store/Context";
import { Link } from "react-router-dom";

const Cart = ({ productData }) => {
    const { state, dispatch } = useContext(Context);
    const backdrop = useRef()
    const toggleVisibility = () => {
        dispatch({ type: "product/toggle-cartVisibility" });
    };

    const closeCart = (e) => {
        if(e.target === backdrop.current){
            toggleVisibility()
       };
   }

   useEffect(() => {
    document.addEventListener("click", closeCart);  
    return () => {
      document.removeEventListener("click", closeCart);
    }
  }, [])

    return (
        <>
            {state.cartActive && (
                <div
                    className="relative z-20"
                    aria-labelledby="slide-over-title"
                    role="dialog"
                    aria-modal="true"
                    id="shoppingCartContainer"
                >
                    <div  className="fixed inset-0  backdrop-blur-md bg-white/10 border border-gray-500/50 shadow-lg"></div>

                    <div className="fixed inset-0 overflow-hidden">
                        <div ref={backdrop} className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll  backdrop-blur-md bg-white/20 border border-gray-800/50 shadow-lg backdrop-filter backdrop-blur-sm rounded-lg shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h2
                                                    className="text-2xl font-medium text-white mb-8"
                                                    id="slide-over-title"
                                                >
                                                    Shopping cart
                                                </h2>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={toggleVisibility}
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <svg
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="white"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            {state.cart?.length > 0 && (
                                                <ul>
                                                    {state.cart?.map(
                                                        (product, i) => {
                                                            return (
                                                                <div
                                                                    key={
                                                                        i +
                                                                        "cartItem"
                                                                    }
                                                                >
                                                                    {product.quantity >
                                                                        0 && (
                                                                        <li className="mb-4">
                                                                            <CartItem
                                                                                productData={
                                                                                    product
                                                                                }
                                                                            />
                                                                        </li>
                                                                    )}
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </ul>
                                            )}
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-black bg-opacity-60 ">
                                            <div className="flex justify-between text-xl font-bold text-yellow-500">
                                                <p>Subtotal</p>
                                                <p>
                                                    {state.currency +
                                                        state.total}
                                                </p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-white">
                                                Shipping and taxes calculated at
                                                checkout.
                                            </p>
                                            <div className="mt-6 flex gap-3 flex-row">
                                                <Link to={"/checkout"} className="w-2/3"
                                                >
                                                    {" "}
                                                   { state.cart?.length > 0 ? <CustomButton
                                                        type="static"
                                                        title="Checkout"
                                                        handleClick={() => {
                                                            toggleVisibility()
                                                        }}
                                                        customStyles="w-full"
                                                    />: <CustomButton
                                                    type="static"
                                                    title="Checkout"
                                                    customStyles="w-full"
                                                />}
                                                </Link>
                                                <CustomButton
                                                    type="outline"
                                                    title="Clear Cart"
                                                    customStyles="w-full"
                                                    handleClick={() => {
                                                        dispatch({
                                                            type: "product/cart-clear",
                                                        });
                                                        toggleVisibility()
                                                    }}
                                                />
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    {'or '}
                                                    <button
                                                        type="button"
                                                        className="font-medium text-red-600 hover:text-indigo-500"
                                                        onClick={()=> toggleVisibility()}
                                                    >
                                                        Continue Shopping
                                                        <span aria-hidden="true">
                                                            {" "}
                                                            &rarr;
                                                        </span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
