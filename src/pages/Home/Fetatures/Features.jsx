import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../../component/ProductCard/ProductCard";
import { BiSolidRightArrow } from "react-icons/bi";

import LoadingHome from "../../../component/Loading/LoadingHome";

import useProductData from "../../../hooks/useProductData";

const Features = () => {
  const [products, loading] = useProductData();

  const allProducts = products.filter((item) => item.category !== "earrings");

  return (
    <div className="py-5 px-3 lg:px-0 container mx-auto">
      <div className="lg:flex gap-5">
        <div className="lg:w-[25%]">
          <div className="flex items-center justify-between px-2 font-manrope">
            <h1 className="font-extrabold text-medium">Featured Deals</h1>
            <Link className="font-extrabold text-base" to="/store">
              View all
            </Link>
          </div>

          <div className="cards">
            {!loading ? (
              products.slice(0, 3).map((product, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-2 mb-2 rounded-md font-manrope hover:border-[#060606] p-2"
                  >
                    <div className="space-y-1 text-center">
                      <img className="w-24" src={product.image} alt="" />
                      <button className="px-5 rounded-md text-base bg-red-100 py-1">
                        Expired
                      </button>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="px-1">
                        <h3 className="font-bold">{product.title}</h3>
                        <p>${product.price}</p>
                        <button>Add to cart</button>
                      </div>
                      <p className="bottom-0 font-jost text-[12px] font-normal">
                        Remains until the end of the offer
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <LoadingHome />
            )}
          </div>

          <div className="py-3">
            <h1 className="text-sm font-manrope font-bold py-2">
              Testimonials
            </h1>
            <div className="rounded-xl bg-black">
              <div className="p-6 rounded shadow-md text-white font-manrope dark:bg-gray-900">
                <div className="flex justify-center font-manrope items-center py-4 space-x-4">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt=""
                    className="w-16 h-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                  />
                  <div className="font-manrope">
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-base dark:text-gray-400">customer</p>
                  </div>
                </div>
                <p className="text-center font-jost">
                  An audire commodo habemus cum. Ne sed corrumpit repudiandae.
                  Tota aliquip democritum pro in, nec democritum intellegam ne.
                  Propriae volutpat dissentiet ea sit, nec at lorem inani
                  tritani, an ius populo perfecto vituperatoribus. Eu cum case
                  modus salutandi, ut eum vocent sensibus reprehendunt.
                </p>
              </div>
            </div>
          </div>

          <div className="my-5 space-y-2 bg-[#FAC2131C] font-manrope rounded-xl border-dotted border-2 border-red-400 justify-center items-center py-5 grid justify-items-center md:py-10">
            <h1 className="text-black font-extrabold md:text-sm">
              2nd shopping surprise campaign!
            </h1>

            <span className="flex py-2 px-7 bg-[#FAC213] gap-1 rounded-full justify-center items-center">
              <Link>Check Products</Link>
              <BiSolidRightArrow />
            </span>
          </div>
        </div>

        <div className="lg:w-[75%] border-2 border-[#060606]">
          <div className="">
            <img src="https://i.ibb.co/fvvYWs9/titlebar.png" alt="" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-5 px-5">
            {!loading ? (
              allProducts.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    availability={product.availability}
                    id={product._id}
                  />
                );
              })
            ) : (
              <LoadingHome />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
