import React from "react";

import Cover from "../Shared/Cover/Cover";
import ProductCard from "../../component/ProductCard/ProductCard";
import useProductData from "../../hooks/useProductData";
import LoadingHome from "../../component/Loading/LoadingHome";

const ViewAll = () => {
  const img = `https://i.ibb.co/KFYkYY7/banner.jpg`;
  const [products,loading] = useProductData()
  // const img = `https://i.ibb.co/8MLzxZ9/shop-banner.jpg`
  return (
    <div>
      <Cover img={img} title="Shop" desc="We offer the best quality" />

      <div className="my-16 container mx-auto">
        <div className="flex gap-5">
          <div className="w-[25%] font-manrope ">
            <h1 className="text-medium p-2 font-bold leading-6">
              Filter By Price :
            </h1>
          </div>
          <div className="w-[75%]">
            <div className="flex justify-between py-2 items-center">
              <div>
                Showing <span>1</span> <span>9</span> of <span>20</span> results
              </div>
              <div>Short data</div>
            </div>

            <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-5 lg:px-0 px-5">
                {!loading ? (
                  products.slice(0,9).map((product, index) => {
                    return (
                      <ProductCard
                        key={index}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                        availability={product.availability}
                      />
                    );
                  })
                ) : (
                  <LoadingHome />
                )}
              </div>

              <div className="flex justify-center py-3 items-center">
                <button className="text-white font-manrope text-base font-normal py-2 px-6 bg-black">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
