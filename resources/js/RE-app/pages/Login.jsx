import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";

export default function Login() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        const responseData = await response.json();

        if (Math.floor(response.status / 100) === 2) {
            
            navigate('/');
        } else {
            
            console.log("Login failed:", responseData.message);
        }
    };

    const handleChange = (event) => {
        setValues((previousValues) => ({
            ...previousValues,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form
            action="/login"
            method="post"
            onSubmit={handleSubmit}
            className="bg-gray-900 bg-opacity-50 rounded-lg p-8 max-w-md mx-auto mt-8 shadow-lg backdrop-filter backdrop-blur-xl border border-gray-800"
        >
            <div className="mb-4">
                <label htmlFor="email" className="text-white mb-2 block">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="bg-gray-700 bg-opacity-50 border-b-2 border-gray-600 outline-none placeholder-gray-400 text-white py-2 px-4 block w-full rounded-md focus:border-gray-400 focus:bg-gray-800"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="text-white mb-2 block">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="bg-gray-700 bg-opacity-50 border-b-2 border-gray-600 outline-none placeholder-gray-400 text-white py-2 px-4 block w-full rounded-md focus:border-gray-400 focus:bg-gray-800"
                />
            </div>

            <button
                type="submit"
                className="bg-red-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
                Login
            </button>
        </form>
    );
}