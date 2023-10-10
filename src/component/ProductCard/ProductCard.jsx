import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "@smastrom/react-rating/style.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbDetails } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

import ModalPopUp from "../Modal/Modal";

const ProductCard = ({ title, price, image, id, rating, availability }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div
        className="relative group rounded-lg  transition transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt="" className="w-[270px] h-64 rounded-md" />

        {isHovered && (
          <div className="absolute bottom-0 left-0 py-1 right-0 gap-1 flex items-center bg-black justify-around ">
            <button
              title="add to cart"
              className=" text-white rounded-lg  transition duration-300"
            >
              <HiOutlineShoppingCart size={25} />
            </button>

            <button onClick={() => setIsOpen(true)} title="short details">
              <LuEye color="white" size={25} />
            </button>

            <Link to={`/singleProduct/${id}`}>
              <button title="full details">
                <TbDetails color="white" size={25} />
              </button>
            </Link>
          </div>
        )}
        <span className="bg-black text-white absolute top-2 font-manrope leading-4 font-normal text-[10px] ml-2 rounded-md py-1 px-2">
          {availability}
        </span>
      </div>

      <div className="p-4 font-manrope">
        <h2 className="text-[16px] font-semibold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">${price}</p>
          <Rating style={{ maxWidth: 70 }} readOnly value={rating} />
        </div>
      </div>
      
      <ModalPopUp
        modalIsOpen={modalIsOpen}
        id={id}
        setIsOpen={setIsOpen}
        close={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ProductCard;
