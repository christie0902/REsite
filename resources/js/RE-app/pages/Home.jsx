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

const Home = () => {
  const { state, dispatch } = useContext(Context);
  const getUser = async () => {
    const response = await fetch('/api/user', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
  
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: 'user/setUser', payload: data });
    }
  };
  useEffect(() => {
    getUser();
  }, []);


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
