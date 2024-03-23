import React, { useState } from "react";
import { CustomButton } from "../components";
import contactImg from "../assets/website-design/contactBg.jpg";
import backgroundImg from "../assets/backgrounds/background11.png";

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section
            className="py-24 bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-stretch">
                    <div className="relative">
                        <div className="relative inset-0 shadow-lg"></div>
                        <div className="relative inset-0 p-8 flex flex-col justify-center ">
                            <div>
                                <h2 className="text-6xl font-bold text-yellow-500 mb-4 mt-10">
                                    Contact Us
                                </h2>
                                <p className="text-white mb-4">
                                    Feel free to reach out if you have any
                                    questions.
                                    <br />
                                    Our RPD team is always ready to help!
                                </p>
                            </div>
                            <div className="bg-black/50 p-4 lg:p-8 lg:rounded-lg mt-8">
                                <ul className="text-white space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-6 w-6 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.105l-2.257 1.503a11.042 11.042 0 005.516 5.516l1.503-2.257a1 1 0 011.105-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <div>
                                            <strong className="block text-xl font-semibold">
                                                Phone:
                                            </strong>
                                            <span>(123) 456-7890</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-6 w-6 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16.242 3H7.758C4.79 3 3 4.79 3 7.758v8.484C3 19.21 4.79 21 7.758 21h8.484C19.21 21 21 19.21 21 16.242V7.758C21 4.79 19.21 3 16.242 3zM8 11h8m-8 4h8"
                                            />
                                        </svg>
                                        <div>
                                            <strong className="block text-xl font-semibold">
                                                Email:
                                            </strong>
                                            <span>contact@example.com</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-6 w-6 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 3.13a4 4 0 100 7.75M8 3.13a4 4 0 100 7.75M12 12a4 4 0 100 7.75M12 12V9m0 12v-3m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <strong className="block text-xl font-semibold">
                                                Address:
                                            </strong>
                                            <span>
                                                123 Main Street, Anytown, AN
                                                12345
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 lg:p-11 rounded-lg">
                        <h2 className="text-white text-4xl font-semibold leading-10 mb-11 mt-10">
                            Send Us A Message
                        </h2>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="tel"
                                        className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4"
                                        placeholder="Phone"
                                    />
                                </div>
                                <textarea
                                    className="w-full h-32 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 pt-2 resize-none"
                                    placeholder="Message"
                                />
                                <div className="flex justify-end mt-10">
                                    <CustomButton type="static" title="Send" />
                                </div>
                            </form>
                        ) : (
                            <div className="text-center p-10 fade-in">
                                <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                                    Thank you for sending us a message!
                                </h3>
                                <p className="text-white">
                                    We will get back to you soon.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
