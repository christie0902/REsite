import React, { useRef, useEffect, useState, useContext } from "react";
import VanillaTilt from "vanilla-tilt";
import CustomButton from "../buttons/CustomButton";
import Context from "../../store/Context";

const ProductCard = ({ productData }) => {
  const { image_url, name, description, price, hasSizes } = productData;
  const { state, dispatch } = useContext(Context);
  const tiltRef = useRef(null);
  const [size, setsize] = useState("");

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 300,
    });
  }, []);

  return (
    <>
      <div className="card-container">
        <h2 className="card-name">{name}</h2>
        <div className="card-box" ref={tiltRef}>
          <div className="card-circle"></div>
          <img src={image_url} alt="product" className="card-product" />
          <h2 className="card-description">
            {description} {state.currency + price} {size}
          </h2>
        </div>
        <div className="card-buttons">
          <CustomButton
            type="static"
            title="Add To Cart"
            handleClick={() => {
              dispatch({
                type: "product/cart-add",
                payload: { ...productData, size: size },
              });
            }}
          />
          <CustomButton
            type="outline"
            title="See details"
            handleClick={() => {
              console.log(productData);
            }}
          />
          {hasSizes && (
            <>
              <button className="bg-white" onClick={() => setsize("S")}>
                S
              </button>
              <button className="bg-white" onClick={() => setsize("M")}>
                M
              </button>
              <button className="bg-white" onClick={() => setsize("L")}>
                L
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
