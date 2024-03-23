import React from "react";
import Slide from "./cards/Slide";
import apparel from "../assets/categories/apparel2.jpg";
import collectibles from "../assets/website-design/product.png";
import costume from "../assets/categories/cosplay.jpg";
import model from "../assets/categories/collectibles4.jpg";
import CustomButton from "./buttons/CustomButton";
import { Link } from "react-router-dom";

const CategorySection = () => {
    return (
        <>
            <div className="category-section">
                <div className="category-header">
                    <h1 className="category-title">Categories</h1>
                    <p className="category-description">
                        Explore our amazing models, realistic collectibles,
                        impressive costume and a lot more in our shop!
                    </p>
                    <Link to={"/shop"}>
                        <CustomButton
                            className="category-button"
                            type="static"
                            title="SHOP NOW"
                        />
                    </Link>
                </div>
                <div className="category-slides">
                    <Slide
                        categoryName1="MODELS"
                        description1="Explore the most vivid and high quality models."
                        categoryName2="COLLECTIBLES"
                        description2="Collection of props and items with differnt theme"
                        bgImage1={model}
                        bgImage2={collectibles}
                    />

                    <Slide
                        categoryName1="COSPLAY"
                        description1="Explore realistic costume and props for your cosplay party."
                        categoryName2="APPAREL"
                        description2="Collection of props and items with differnt theme"
                        bgImage1={costume}
                        bgImage2={apparel}
                    />
                    <Slide
                        categoryName1="CUSTOM SHIRT"
                        description1="Explore realistic costume and props for your cosplay party."
                        categoryName2="APPAREL"
                        description2="Collection of props and items with differnt theme"
                        bgImage1={collectibles}
                        bgImage2={apparel}
                    />
                </div>
            </div>
        </>
    );
};

export default CategorySection;
