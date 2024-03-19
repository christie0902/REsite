import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";

export default function Register(props) {

    const navigate = useNavigate();

    const {state, dispatch} = useContext(Context);

    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/register", {
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

        const response_data = await response.json();
        navigate('/');

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log("VALIDATION FAILED:", response_data.errors);
                    break;
                default:
                    console.log("UNKNOWN ERROR", response_data);
                    break;
            }
         }
        };


    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <form
            action="/register"
            method="post"
            onSubmit={handleSubmit}
            class="bg-gray-900 bg-opacity-50 rounded-lg p-8 max-w-md mx-auto mt-8 shadow-lg backdrop-filter backdrop-blur-xl border border-gray-800"
        >
            <div class="mb-4">
                <label for="name" class="text-white mb-2 block">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    class="bg-gray-700 bg-opacity-50 border-b-2 border-gray-600 outline-none placeholder-gray-400 text-white py-2 px-4 block w-full rounded-md focus:border-gray-400 focus:bg-gray-800"
                />
            </div>

            <div class="mb-4">
                <label for="email" class="text-white mb-2 block">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    class="bg-gray-700 bg-opacity-50 border-b-2 border-gray-600 outline-none placeholder-gray-400 text-white py-2 px-4 block w-full rounded-md focus:border-gray-400 focus:bg-gray-800"
                />
            </div>

            <div class="mb-4">
                <label for="password" class="text-white mb-2 block">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    class="bg-gray-700 bg-opacity-50 border-b-2 border-gray-600 outline-none placeholder-gray-400 text-white py-2 px-4 block w-full rounded-md focus:border-gray-400 focus:bg-gray-800"
                />
            </div>

            <div class="mb-6">
                <label
                    for="password_confirmation"
                    class="text-white mb-2 block"
                >
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={values.password_confirmation}
                    onChange={handleChange}
                    class="bg-gray-700 bg-opacity-50 border-b-2 border-gray-600 outline-none placeholder-gray-400 text-white py-2 px-4 block w-full rounded-md focus:border-gray-400 focus:bg-gray-800"
                />
            </div>

            <button
                type="submit"
                class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
                Register
            </button>
        </form>
    );
}
