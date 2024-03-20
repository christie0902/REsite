import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";
import axios from 'axios';
import '../../bootstrap.js';

export default function Login() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/login', values);
            const response_data = response.data;
            navigate("/");
    
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }
    

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