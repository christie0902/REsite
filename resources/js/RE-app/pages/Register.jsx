import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";
import "../../bootstrap.js";

export default function Register(props) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    const { state, dispatch } = useContext(Context);

    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/register", values);
            const response_data = response.data;
            navigate("/");
        } catch (error) {
            console.error("Error occurred:", error);
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
                console.log("VALIDATION FAILED:", error.response.data.errors);
            } else {
                console.log("UNKNOWN ERROR", error.response);
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
    <div style={{ backgroundImage: "url('https://res.cloudinary.com/diwszstai/image/upload/v1711358846/site-assets/background_login_ixege8.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", minHeight: '100vh',  backgroundPosition: "top center" }}>
        {Object.keys(errors).length > 0 && (
             <div className="errors" style={{
                 backgroundColor: 'rgba(255, 255, 255, 0.1)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid #A82003',
                 color: '#FC3E35',
                 padding: '10px',
                 width: '450px',
                 marginInline: "auto",
                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
               }}>
                 <h4 style={{color: '#9D9190'}}>Errors occured. Please check and try again</h4>
                 {Object.keys(errors).map((key) => (
                     errors[key].map((errorMessage, index) => (
                         <p key={key + index}>{errorMessage}</p>
                     ))
                 ))}
             </div>
         )}
        <h1 className="text-center text-yellow-500 text-3xl font-bold pt-10">Register</h1>
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
    </div>
    );
}
