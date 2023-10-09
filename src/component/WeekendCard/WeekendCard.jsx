import React, { useState } from "react";

const WeekendCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={product.image} // Replace with your image source
        alt={product.name} // Replace with your product name
        className="mb-2"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>

      {isHovered && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full absolute right-4 top-4"
          onClick={() => alert("Added to Cart")}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default WeekendCard;
