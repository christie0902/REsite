import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = () => {
    return (
        <nav
            className="flex px-5 py-3 text-white rounded-lg bg-gray-100 bg-opacity-50  shadow-xl backdrop-blur-lg"
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-white hover:text-red-600 dark:text-gray-400 dark:hover:text-white"
                    >
                        Home
                    </a>
                </li>
                <BreadcrumbItem label="Shop" />
            </ol>
        </nav>
    );
};

export default Breadcrumb;
