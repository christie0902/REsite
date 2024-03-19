import React, { useState, useEffect, useContext } from 'react';
import Context from "../../store/Context.js";

const ProductDetails = ({ productId }) => {
  const { state, dispatch } = useContext(Context);
  const [productData, setProductData] = useState(null); 

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://www.re-mall.test/api/products/details/${productId}`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData(); 
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { name, description, price, size, color, weight, dimension, rating, review_count } = productData;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              {/* Product Image */}
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button 
                  onClick={() => {
                    dispatch({
                      type: "product/cart-add",
                      payload: { ...productData, size: size },
                    });
                  }}
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{name}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">${price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>

             {color && <div className="flex items-center mt-2">
                {color.map((c, index) => (
                  <button key={index} className={`w-6 h-6 rounded-full bg-${c}-500 dark:bg-${c}-700 mr-2`}></button>
                ))}
              </div>}

            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>

              {size && <div className="flex items-center mt-2">
                {size.map((s, index) => (
                  <button key={index} className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{s}</button>
                ))}
              </div>}
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{description}</p>
              {dimension && <p>Dimension:{dimension}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;