import React from 'react';
import { useReducer, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { CustomButton, CustomizerSection } from "./components";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Context from "./store/Context.js";
import reducer from "./lib/utils/reducer.js";
import initialCustomizerState from "./lib/config/customizerInitialState.js"
import Community from "./pages/Community.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ProductDetails from './components/cards/ProductDetails.jsx';
import Checkout from './pages/Checkout.jsx';
import LocalStorageHandler from './LocalStorageHandler.jsx';


function App() {
  const initialState = () => {
    const localData = localStorage.getItem('session');
    return localData
      ? { ...JSON.parse(localData) }
      : {
          user: null,
          cart: [],
          customizerState: initialCustomizerState,
          searchActive: false,
          cartActive: false,
          profileActive: false,
          currency: '$',
          total: 0,
          searchResults: null,
          searchQuery: null
        };
  };

  const [state, dispatch] = useReducer(reducer, initialState());


  console.log(state.user)
  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ state, dispatch }}>
          <LocalStorageHandler />
          <Header />
          <Cart />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/customizer" element={<CustomizerSection />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<BlogPage />} />  
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/details/:productId" element={<ProductDetails/>} />
          </Routes>

          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
