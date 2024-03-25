import React, { useContext, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import Slide from "../components/cards/Slide";
import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Carousel from "../components/carousel/Carousel";
import CustomizerSection from "../components/CustomizerSection";
import Context from "../store/Context.js";

import collectibles from "../assets/website-design/product.png";
import model from "../assets/categories/collectibles4.jpg";

const Home = () => {
    const { state, dispatch } = useContext(Context);

    const getUser = async () => {
        const response = await fetch("/api/user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            dispatch({ type: "user/setUser", payload: data });
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="homepage">
            <Carousel />
            <CustomizerSection />
            <Slide
            header="Categories"
            description1=" Explore our amazing models, realistic collectibles,
            impressive costume and a lot more in our shop!"
            categoryName2="COLLECTIBLES"
            description2="Collection of props and items with differnt theme"
            bgImage1="https://res.cloudinary.com/diwszstai/image/upload/v1711380644/site-assets/category_img_nmyn62.png"
            bgImage2="https://res.cloudinary.com/diwszstai/image/upload/v1711382404/site-assets/category_img1_ctutm3.png"
            />
            {/* <CategorySection /> */}
            <BlogSection />
            <Newsletter />
        </div>
    );
};

export default Home;
