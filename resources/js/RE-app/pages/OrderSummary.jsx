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
    const {
        user: {
            name: userName,
            email: userEmail,
            primary_address: userPrimaryAddress,
        },
        total_price,
        items,
        created_at,
    } = order;

    return (
        <div className="container mx-auto py-5">
            <h1 className="text-3xl font-bold mb-4 text-yellow-500">
                Order Summary
            </h1>
            <div className="flex flex-wrap justify-between">
                <div className="w-full lg:w-2/3 mb-8 lg:mb-0 pr-4">
                    <div className="order-summary-container backdrop-blur-md bg-white/10 border border-gray-500/50 shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-300">
                            Order #{orderId}
                        </h2>
                        <p className="mb-4">
                            Paid at: {new Date(created_at).toLocaleString()}
                        </p>

                        <div className="order-items space-y-4">
                            {items.map(
                                (
                                    {
                                        product,
                                        quantity,
                                        price,
                                        variant_description,
                                    },
                                    index,
                                ) => (
                                    <div
                                        key={index}
                                        className="order-item flex items-center space-x-4"
                                    >
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {product.name}
                                            </h3>
                                            <p>
                                                Variant:{" "}
                                                {variant_description ||
                                                    "Standard"}
                                            </p>
                                            <p>Quantity: {quantity}</p>
                                            <p>Price: ${price}</p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        {/* Summary */}
                        <div className="order-summary backdrop-blur-md bg-white/10 border border-gray-500/50 shadow-lg p-6  w-full">
                            <h2 className="text-xl font-bold mb-4">Summary</h2>
                            <p className="mb-3">Delivery: $10.00</p>
                            <p className="mb-3">Discount: $0.00</p>
                            <p className="text-2xl font-bold text-gray-200 mb-2 mt-10">
                                Subtotal:{" "}
                                <span className="text-yellow-500">
                                    ${total_price}
                                </span>
                            </p>
                        </div>
                        {/* Delivery */}
                        <div className="shipping-info backdrop-blur-md bg-white/10 border border-gray-500/50 shadow-lg p-6 w-full ">
                            <h2 className="text-xl font-bold mb-4">
                                DPD Deliver
                            </h2>
                            <div className="flex justify-between">
                                <p>Deliver within 3 days</p>
                                <p>$10.00</p>
                            </div>
                            <button className="mt-4 bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                View Carrier Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 lg:pl-4">
                    <div className="customer-info backdrop-blur-md bg-white/10 border border-gray-500/50 shadow-lg p-6 h-full">
                        <h2 className="text-xl font-bold mb-4">Customer</h2>
                        <p>Name: {userName}</p>
                        <p>Email: {userEmail}</p>
                        <div className="primary-address mt-4">
                            <h3 className="text-lg font-semibold">
                                Shipping Address
                            </h3>
                            <p>{userPrimaryAddress.address_line1}</p>
                            <p>{userPrimaryAddress.address_line2}</p>
                            <p>
                                {userPrimaryAddress.city},{" "}
                                {userPrimaryAddress.state}{" "}
                                {userPrimaryAddress.postal_code}
                            </p>
                            <p>{userPrimaryAddress.country}</p>
                        </div>
                        <button className="mt-4 bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-600">
                            Edit Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
