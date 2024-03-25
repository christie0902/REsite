import { CustomButton } from "../components";
import React, { useContext, useState, useEffect } from "react";
import Context from "../store/Context";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Checkout = () => {
    const { state, dispatch } = useContext(Context);
    const [userAddress, setUserAddress] = useState(null);
    const { cart, currency, total } = state;
    const [paymentType, setPaymentType] = useState("card");
    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationMonth, setExpirationMonth] = useState("01");
    const [expirationYear, setExpirationYear] = useState("2024");
    const [securityCode, setSecurityCode] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch user address if logged in
    useEffect(() => {
        const fetchAddress = async () => {
            if (state.user) {
                try {
                    const response = await axios.get('/api/user/address', {
                        headers: {
                            'Authorization': `Bearer ${state.user.token}`,
                        },
                    });
                    setUserAddress(response.data);
                } catch (error) {
                    console.error("Error fetching address:", error);
                }
            }
        };
    
        fetchAddress();
    }, [state.user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setisLoading(true);

        const paymentData = {
            paymentType,
            nameOnCard,
            cardNumber,
            expirationMonth,
            expirationYear,
            securityCode,
            total,
        };

        try {
            const response = await axios.post("api/checkout", {
                paymentData,
                cart,
            });

            console.log("Payment successful:", response.data);
            alert("Payment successful!");
            dispatch({ type: "product/cart-clear" });
            navigate(`/order-summary/${response.data.orderId}`);
        } catch (error) {
            console.error("Payment failed:", error.response || error);
            alert(
                `Payment failed: ${error.response ? error.response.data.message : error.message}`,
            );
        } finally {
            setisLoading(false);
        }
    };

    if (!state.user) {
        return (
            <div>
                <p>Please log in to proceed to checkout.</p>
                <CustomButton
                    title="Login"
                    handleClick={() => navigate("/login")}
                />
            </div>
        );
    }

    return (
        <>
            <div className="min-w-screen min-h-screen bg-black">
                <div className="p-8 flex justify-center">
                    <div className="mb-2">
                        <h1 className="text-3xl md:text-5xl font-bold text-yellow-500">
                            Checkout
                        </h1>
                    </div>
                </div>
                <div className="w-full bg-black px-5 py-10 text-white">
                    <div className="w-full">
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-7/12 lg:pr-10">
                                {cart.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full mx-auto text-white font-light mb-6 border-b border-gray-200 pb-6"
                                    >
                                        <div className="w-full flex items-center">
                                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <img
                                                    src={item.image_url}
                                                    alt={item.name}
                                                />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-semibold uppercase text-yellow-500">
                                                    {item.name}
                                                </h6>
                                                <p className="text-white">
                                                    Quantity: x {item.quantity}
                                                </p>

                                                {item.selectedSize && (
                                                    <p className="text-white">
                                                        Size:{" "}
                                                        {item.selectedSize}
                                                    </p>
                                                )}
                                                {item.selectedColor && (
                                                    <p className="text-white">
                                                        Color:{" "}
                                                        {item.selectedColor}
                                                    </p>
                                                )}
                                                {item.selectedEdition && (
                                                    <p className="text-white">
                                                        Edition:{" "}
                                                        {item.selectedEdition}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <span className="font-semibold text-white text-xl">
                                                    {currency}
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <div className="-mx-2 flex items-end justify-end">
                                        <div className="flex-grow px-2 lg:max-w-xs">
                                            <label className="text-white font-semibold text-sm mb-2 ml-1">
                                                Discount code
                                            </label>
                                            <div>
                                                <input
                                                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                                    placeholder="XXXXXX"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="px-2">
                                            <button className="block w-full max-w-xs mx-auto border border-transparent bg-white hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                                                APPLY
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200 text-white">
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="flex-grow">
                                            <span className="text-yellow-600">
                                                Subtotal
                                            </span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">
                                                {currency}
                                                {total}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-white text-xl">
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-yellow-600">
                                                Total
                                            </span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold text-white text-sm">
                                                USD
                                            </span>{" "}
                                            <span className="font-semibold">
                                                {currency}
                                                {total}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="px-3 md:w-5/12">
                                <div className="w-full mx-auto rounded-lg  bg-gray-700 bg-opacity-40 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg p-3 text-white font-light mb-6">
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-white font-semibold">
                                                Contact
                                            </span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                        <span>{state.user?.name || "Guest"}</span>
                                        </div>
                                    </div>
                                    {userAddress ? (
                                        <div>
                                            <p>Shipping to:</p>
                                            <p>{userAddress.address_line1}</p>
                                            {userAddress.address_line2 && (
                                                <p>
                                                    {userAddress.address_line2}
                                                </p>
                                            )}
                                            <p>{`${userAddress.city}, ${userAddress.state} ${userAddress.postal_code}`}</p>
                                            <p>{userAddress.country}</p>
                                        </div>
                                    ) : (
                                        <p>
                                            No address found. Please add a
                                            shipping address.
                                        </p>
                                    )}
                                </div>

                                {/* Payment info */}
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full mx-auto rounded-lg  bg-gray-700 bg-opacity-40 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg text-white font-light mb-6">
                                        <div className="w-full p-3 border-b border-gray-200">
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="type1"
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        className="form-radio h-5 w-5 text-red-500"
                                                        name="type"
                                                        id="type1"
                                                        checked={
                                                            paymentType ===
                                                            "card"
                                                        }
                                                        onChange={() =>
                                                            setPaymentType(
                                                                "card",
                                                            )
                                                        }
                                                    />
                                                    <img
                                                        src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                                        className="h-6 ml-3"
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <label className="text-white font-semibold text-sm mb-2 ml-1">
                                                        Name on card
                                                    </label>
                                                    <div>
                                                        <input
                                                            className="w-full px-3 py-2 mb-1 border border-gray-500 rounded-md focus:outline-none focus:border-yellow-500 bg-gray-800 transition-colors"
                                                            placeholder="John Smith"
                                                            type="text"
                                                            value={nameOnCard}
                                                            onChange={(e) =>
                                                                setNameOnCard(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="text-white font-semibold text-sm mb-2 ml-1">
                                                        Card number
                                                    </label>
                                                    <div>
                                                        <input
                                                            className="w-full px-3 py-2 mb-1 border border-gray-500 rounded-md focus:outline-none focus:border-yellow-500 bg-gray-800 transition-colors"
                                                            placeholder="0000 0000 0000 0000"
                                                            type="text"
                                                            value={cardNumber}
                                                            onChange={(e) =>
                                                                setCardNumber(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3 -mx-2 flex items-end">
                                                    <div className="px-2 w-1/4">
                                                        <label className="text-white font-semibold text-sm mb-2 ml-1">
                                                            Expiration date
                                                        </label>
                                                        <div>
                                                            <select
                                                                className="form-select w-full px-3 py-2 mb-1 border border-gray-500 rounded-md focus:outline-none focus:border-yellow-500 bg-gray-800"
                                                                value={
                                                                    expirationMonth
                                                                }
                                                                onChange={(e) =>
                                                                    setExpirationMonth(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                            >
                                                                <option value="01">
                                                                    01 - January
                                                                </option>
                                                                <option value="02">
                                                                    02 -
                                                                    February
                                                                </option>
                                                                <option value="03">
                                                                    03 - March
                                                                </option>
                                                                <option value="04">
                                                                    04 - April
                                                                </option>
                                                                <option value="05">
                                                                    05 - May
                                                                </option>
                                                                <option value="06">
                                                                    06 - June
                                                                </option>
                                                                <option value="07">
                                                                    07 - July
                                                                </option>
                                                                <option value="08">
                                                                    08 - August
                                                                </option>
                                                                <option value="09">
                                                                    09 -
                                                                    September
                                                                </option>
                                                                <option value="10">
                                                                    10 - October
                                                                </option>
                                                                <option value="11">
                                                                    11 -
                                                                    November
                                                                </option>
                                                                <option value="12">
                                                                    12 -
                                                                    December
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="px-2 w-1/4">
                                                        <select
                                                            className="form-select w-full px-3 py-2 mb-1 border border-gray-500 rounded-md focus:outline-none focus:border-yellow-500 bg-gray-800"
                                                            value={
                                                                expirationYear
                                                            }
                                                            onChange={(e) =>
                                                                setExpirationYear(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                        >
                                                            <option value="2024">
                                                                2024
                                                            </option>
                                                            <option value="2025">
                                                                2025
                                                            </option>
                                                            <option value="2026">
                                                                2026
                                                            </option>
                                                            <option value="2027">
                                                                2027
                                                            </option>
                                                            <option value="2028">
                                                                2028
                                                            </option>
                                                            <option value="2029">
                                                                2029
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="px-2 w-1/4">
                                                        <label className="text-white font-semibold text-sm mb-2 ml-1">
                                                            Security code
                                                        </label>
                                                        <div>
                                                            <input
                                                                className="w-full px-3 py-2 mb-1 border border-gray-500 rounded-md focus:outline-none focus:border-yellow-500 bg-gray-800"
                                                                placeholder="000"
                                                                type="text"
                                                                value={
                                                                    securityCode
                                                                }
                                                                onChange={(e) =>
                                                                    setSecurityCode(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full p-3">
                                            <label
                                                htmlFor="type2"
                                                className="flex items-center cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    className="form-radio h-5 w-5 text-red-500"
                                                    name="type"
                                                    id="type2"
                                                    checked={
                                                        paymentType === "paypal"
                                                    }
                                                    onChange={() =>
                                                        setPaymentType("paypal")
                                                    }
                                                />
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                                    width="80"
                                                    className="ml-3"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    {/* End of payment info */}
                                    <div>
                                        {!isLoading ? (
                                            <CustomButton
                                                type="static"
                                                title="PAY NOW"
                                                customStyles="w-full"
                                            />
                                        ) : (
                                            <div className="btn-loading-placeholder">
                                                <div className="btn-spinner animate-spin"></div>{" "}
                                                Please Wait...
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
