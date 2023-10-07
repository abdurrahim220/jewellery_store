import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../component/ProductCard/ProductCard";

const EarRing = () => {
  const products = [
    {
      id: 1,
      image_link: "https://i.ibb.co/Qf06v3R/ear-rings-8.jpg",
      category_name: "earrings",
      title: "Elegant Silver Hoops",
      price: 29.99,
      rating: 3.5,
    },
    {
      id: 2,
      image_link: "https://i.ibb.co/QD7WpN7/ear-rings-7.jpg",
      category_name: "earrings",
      title: "Crystal Stud Earrings",
      price: 19.99,
      rating: 3,
    },
    {
      id: 3,
      image_link: "https://i.ibb.co/NV5vXs8/ear-rings-6.jpg",
      category_name: "earrings",
      title: "Pearl Drop Earrings",
      price: 34.99,
      rating: 4.5,
    },
    {
      id: 4,
      image_link: "https://i.ibb.co/6gg8GfJ/ear-ring.jpg",
      category_name: "earrings",
      title: "Gold Flower Earrings",
      price: 22.99,
      rating: 4.0,
    },
    {
      id: 5,
      image_link: "https://i.ibb.co/K09YTv4/ear-rings-4.jpg",
      category_name: "earrings",
      title: "Dangling Silver Stars",
      price: 27.99,
      rating: 4.5,
    },
    {
      id: 6,
      image_link: "https://i.ibb.co/rcCVFjC/ear-rings-3.jpg",
      category_name: "earrings",
      title: "Gemstone Chandelier Earrings",
      price: 39.99,
      rating: 5,
    },
    {
      id: 7,
      image_link: "https://i.ibb.co/CB2HTnL/ear-rings-2.jpg",
      category_name: "earrings",
      title: "Silver Filigree Earrings",
      price: 26.99,
      rating: 4,
    },
    {
      id: 8,
      image_link: "https://i.ibb.co/d7yxQkk/ear-rings-1.jpg",
      category_name: "earrings",
      title: "Crystal Teardrop Earrings",
      price: 32.99,
      rating: 4,
    },
  ];

  //https://i.ibb.co/VpNp2Ss/ear-ring-1.jpg
  // https://i.ibb.co/6gg8GfJ/ear-ring.jpg
  return (
    <div className="container py-5 mx-auto">
      <div className="lg:flex gap-5">
        <div className="lg:w-[25%] mx-auto  relative">
          <div className="grid items-center md:px-0 px-2 lg:pb-0 pb-2 justify-center">
            <img
              src="https://i.ibb.co/VpNp2Ss/ear-ring-1.jpg"
              className="h-[550px]  rounded-xl md:h-[705px]"
              alt=""
            />
            <div className="absolute bottom-14 lg:bottom-22 font-manrope left-0 w-full space-y-2 text-black  grid justify-items-center items-center">
              <h3 className="uppercase font-semibold text-[1.2rem]">
                Nose Rings
              </h3>
              <h1 className="uppercase text-[1.5rem] md:text-[2.5rem] font-bold">
                Nose earrings
              </h1>
              <p className="text-medium font-medium">15 Nov - 29 Nov</p>
              <Link className="underline font-medium">See more products</Link>
            </div>
          </div>
        </div>

        <div className="lg:w-[75%]">
          <div className="grid px-2 md:px-0 grid-cols-2 gap-2 lg:gap-5 md:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                rating={product.rating}
                imageUrl={product.image_link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarRing;
