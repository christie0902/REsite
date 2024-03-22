import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OrderSummary() {
    let { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get(`/api/orders/${orderId}`);
                setOrder(response.data);
                console.log(order);
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (!order) {
        return <div>Loading order details...</div>;
    }
    console.log(order);
    const { id, total_price, created_at, items } = order;
    return (
        <div>
            <h2>Order Summary</h2>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                        Order #{id}
                    </h1>
                    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                        {created_at}
                    </p>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    {/* Map through items */}
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
                        >
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                                Product #{item.product.id}
                            </p>
                            {/* Display product details */}
                            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                    <img
                                        className="w-full hidden md:block"
                                        src={item.product.image_url}
                                        alt={item.product.name}
                                    />
                                    <img
                                        className="w-full md:hidden"
                                        src={item.product.image_url}
                                        alt={item.product.name}
                                    />
                                </div>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                            {item.product.name}
                                        </h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm dark:text-white leading-none text-gray-800">
                                                <span className="dark:text-gray-400 text-gray-300">
                                                    Price:{" "}
                                                </span>
                                                ${item.price}
                                            </p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800">
                                                <span className="dark:text-gray-400 text-gray-300">
                                                    Quantity:{" "}
                                                </span>
                                                {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-x-6 xl:space-x-8">
                    {/* Summary Section */}
                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                            Summary
                        </h3>
                        {/* Render summary details */}
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div className="flex justify-between w-full">
                                <p className="text-base dark:text-white leading-4 text-gray-800">
                                    Total Price
                                </p>
                                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                                    ${total_price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
