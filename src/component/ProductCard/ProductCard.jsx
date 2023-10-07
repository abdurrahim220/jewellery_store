import React, { useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import "@smastrom/react-rating/style.css";
const ProductCard = ({ title, price, imageUrl, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div
        className="relative group rounded-lg  transition transform hover:scale-105"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageUrl} alt="" className="w-[270px] h-64 rounded-md" />

        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black">
            <button className=" text-white py-2 rounded-lg  transition duration-300">
              Add to Cart
            </button>
          </div>
        )}
      </div>

      <div className="p-4 font-manrope">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">${price}</p>
          <Rating style={{ maxWidth: 80 }} readOnly value={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
