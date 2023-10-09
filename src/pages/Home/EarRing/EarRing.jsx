import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../component/ProductCard/ProductCard";

import LoadingHome from "../../../component/Loading/LoadingHome";
import useProductData from "../../../hooks/useProductData";

const EarRing = () => {
  
  const [products,loading] = useProductData()

  const earProducts = products.filter(item=> item.category === 'earrings')
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
            {!loading ? earProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                availability={product.availability}
                id={product._id}
              />
            )) :<LoadingHome/> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarRing;
