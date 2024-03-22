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
        user: { name: userName, email: userEmail, primary_address: userPrimaryAddress },
        total_price,
        items,
        created_at
    } = order;


    return (
        <div className="order-summary-container">
        <h1>Order #{orderId}</h1>
        <p>Paid at: {new Date(created_at).toLocaleString()}</p>

        <div className="customer-info">
            <h2>Customer</h2>
            <p>Name: {userName}</p>
            <p>Email: {userEmail}</p>
            <div className="primary-address">
                <h3>Shipping Address</h3>
                <p>{userPrimaryAddress.address_line1}</p>
                <p>{userPrimaryAddress.address_line2}</p>
                <p>{userPrimaryAddress.city}, {userPrimaryAddress.state} {userPrimaryAddress.postal_code}</p>
                <p>{userPrimaryAddress.country}</p>
            </div>
        </div>

        <div className="order-items">
            {items.map(({ product, quantity, price, variant_description }, index) => (
                <div key={index} className="order-item">
                    <img src={product.image_url} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Variant: {variant_description || 'Standard'}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                </div>
            ))}
        </div>

        <div className="order-summary">
            <h2>Summary</h2>
            <p>Subtotal: ${total_price}</p>
        </div>
    </div>

    );
}

export default OrderSummary;
