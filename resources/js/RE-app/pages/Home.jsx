import React from "react";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import Slide from "../components/cards/Slide";
import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Carousel from "../components/carousel/Carousel";
import CustomizerSection from "../components/CustomizerSection";

const Home = () => {
  return (
    <div className="homepage">
      <Carousel/>
      <CustomizerSection/>
      {/* <FeaturedProducts /> */}
      <CategorySection />
      <BlogSection />
      <Newsletter />
    </div>
  );
};

export default Home;
