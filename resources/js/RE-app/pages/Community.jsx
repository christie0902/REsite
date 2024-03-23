import React, { useState } from "react";
import BlogPage from "./BlogPage";
import { Routes, Route } from "react-router";
import BlogCard from "../components/cards/BlogCard";

const Community = () => {
    const numberOfCards = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(numberOfCards / 9);

    const startIndex = (currentPage - 1) * 9;
    const endIndex = Math.min(startIndex + 9, numberOfCards);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="container mx-auto px-4 max-w-screen-lg">
            <h1 className="text-4xl font-bold text-center mt-8 mb-10 text-yellow-500">
                Resident Evil Community
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {Array.from({ length: endIndex - startIndex }, (_, index) => (
                    <div key={startIndex + index}>
                        <BlogCard />
                    </div>
                ))}
            </div>

            {/* Pagination buttons */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${currentPage === index + 1 ? "bg-gray-700" : ""} mr-2`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Community;
