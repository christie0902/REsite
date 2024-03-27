import React, { useEffect, useState } from "react";

const CategoryList = () => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch("/api/products/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getParentCategories = () => {
        return categories[""] || [];
    };

    const getSubcategories = (parentId) => {
        return categories[parentId] || [];
    };

    const renderSubcategories = (parentId, level = 1) => {
        const subcategories = getSubcategories(parentId);

        if (subcategories.length === 0) return null;

        return (
            <ul className={`ml-${level * 4} mb-4`}>
                {subcategories.map((subcategory) => (
                    <li
                        key={subcategory.id}
                        className="ml-2 cursor-pointer hover:underline"
                    >
                        {subcategory.name}
                        {renderSubcategories(subcategory.id, level + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    const renderParentCategories = () => {
        const parentCategories = getParentCategories();

        return parentCategories.map((parentCategory) => (
            <div key={parentCategory.id} className="mb-6">
                <h2 className="font-bold text-yellow-500 cursor-pointer hover:underline">
                    {parentCategory.name}
                </h2>
                {renderSubcategories(parentCategory.id)}
            </div>
        ));
    };

    return (
        <>
      {/*   <div className="top-0 left-0 pt-2 pl-10 lg:pt-10 lg:pl-10 bg-gray-800 w-full lg:w-1/4 h-auto bg-opacity-40 shadow-xl backdrop-filter backdrop-blur-lg hidden lg:block w-1/5 ">
            <h3 className="font-bold text-xl mb-5">ALL CATEGORIES</h3>
            {renderParentCategories()}
        </div> */}
        </>);
};

export default CategoryList;
