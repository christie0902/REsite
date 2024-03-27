import React, { useEffect, useState, useContext } from "react";
import BasicCard from "../components/cards/BasicCard";
import backgroundImg from "../assets/backgrounds/background11.png";
import Context from "../store/Context.js";
import Tags from "../components/Tags.jsx";
import CategoryList from "../components/cards/CategoryList.jsx";
import { useLocation } from 'react-router-dom';

const Shop = () => {
    const { state, dispatch } = useContext(Context);
    const [showPages, setShowPages] = useState(true);
    const [selectedTags, setSelectedTags] = useState([]);
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);

    const [products, setProducts] = useState({
        data: [],
        meta: { last_page: 1, current_page: 1 },
    });

    const searchQuery = location.state?.searchQuery;

    useEffect(() => {
        if (searchQuery) {
            performSearch(searchQuery).catch(console.error);
        } else {
            loadData().catch(console.error);
        }
    }, [searchQuery]);

    const performSearch = async (query) => {
        try {
            const response = await fetch(`/api/products/search/${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error("Failed to fetch search results");
            }
            const searchData = await response.json();
            setProducts({
                data: searchData.data || [],
                meta: {
                    last_page: searchData.last_page || 1,
                    current_page: searchData.current_page || 1,
                    links: searchData.links,
                },
            });
            setSearchResults(searchData);
        } catch (error) {
            console.error("Error searching products:", error.message);
        }
    };

    useEffect(() => {
        return () => setSearchResults([]);
    }, []);

    const handleTagClick = (tagId) => {
        setSelectedTags((prevSelectedTags) => {
            const isTagSelected = prevSelectedTags.includes(tagId);
            return isTagSelected
                ? prevSelectedTags.filter((id) => id !== tagId)
                : [...prevSelectedTags, tagId];
        });
    };
    
    useEffect(() => {
        loadData(1, selectedTags).catch(console.error);
    }, [selectedTags]);

    const loadData = async (page = 1, tags = selectedTags) => {
        const tagsQueryString =
            tags.length > 0 ? `&tags=${tags.join(",")}` : "";
        try {
            const response = await fetch(
                `/api/products?page=${page}${tagsQueryString}`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts({
                data: data.data || [],
                meta: {
                    last_page: data.last_page || 1,
                    current_page: data.current_page || 1,
                    links: data.links,
                },
            });
        } catch (error) {
            console.error("Could not load data:", error);
        }
    };

    useEffect(() => {
        if (!state.searchActive) {
            loadData().catch(console.error);
        }
    }, [state.searchActive]);

    const handlePageChange = (newPage) => {
        loadData(newPage);
    };

    return (
        <>
            <div
                className="shop-container bg-fixed bg-center bg-cover text-white flex justify-center"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <CategoryList />

                <div className="middle-container">
                    <Tags
                        onTagClick={handleTagClick}
                        selectedTags={selectedTags}
                    />

                    <div className="container mx-auto px-4 py-5">
                        {searchQuery && (
                            <p>{`${searchResults.length} search results for "${searchQuery}"`}</p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {searchResults &&
                            searchResults.length > 0 ? (
                                <>
                                    {searchResults.map((product, i) => (
                                        <BasicCard
                                            key={product.id + "prodCard"+Date.now()}
                                            productData={product}
                                        />
                                    ))}
                                </>
                            ) : (
                                products.data.map((product, i) => (
                                    <BasicCard
                                        key={product.id + "prodCard"+ Date.now()}
                                        productData={product}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                    {/* Pagination buttons */}
                    {showPages && products.meta.last_page > 1 && (
                        <div className="pagination flex justify-center space-x-2 mb-10">
                            {Array.from(
                                { length: products.meta.last_page },
                                (_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`page-item ${
                                            products.meta.current_page === i + 1
                                                ? "active"
                                                : ""
                                        }`}
                                        disabled={
                                            products.meta.current_page === i + 1
                                        }
                                        //disable the current page button
                                    >
                                        {i + 1}
                                    </button>
                                ),
                            )}
                        </div>
                    )}
                    {/* End of pagination */}
                </div>
            </div>
        </>
    );
};

export default Shop;
