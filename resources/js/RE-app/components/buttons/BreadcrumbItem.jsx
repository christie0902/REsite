import React from "react";

const BreadcrumbItem = ({ label }) => {
    return (
        <li className="inline-flex items-center">
            <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-white hover:text-red-600 dark:text-gray-400 dark:hover:text-white"
            >
                <svg
                    class="rtl:rotate-180 block w-3 h-3 mx-2 text-gray-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                    />
                </svg>
                {label}
            </a>
        </li>
    );
};

export default BreadcrumbItem;
