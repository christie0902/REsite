import React, { useState } from "react";

const Slider = ({
  categoryName2,
  description2,
  description1,
  categoryName1,
  bgImage1,
  bgImage2,
}) => {
  const [bgStyle, setBgStyle] = useState({  backgroundImage: `url(${bgImage1})`, left: '0%' });

  const handleMouseEnter = () => {
    setBgStyle({
      backgroundImage: `url(${bgImage2})`,
      left: '50%',
    });
  };

  const handleMouseLeave = () => {
    setBgStyle({
      backgroundImage: `url(${bgImage1})`,
      left: '0%',
    });
  };

  return (
    <section
      className="slider-container slide-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-2">
        <h2>{categoryName2}</h2>
        <p>{description2}</p>
      </div>
      <div className="slider-image" 
           style={{
             ...bgStyle,
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             height: '100%', 
             position: 'absolute', 
             transition: '1s left ease-in-out, 1s background ease-in-out', 
             width: '50%',
           }}>
      </div>
      <div className="slider-1">
        <h2>{categoryName1}</h2>
        <p>{description1}</p>
      </div>
    </section>
  );
};

export default Slider;
