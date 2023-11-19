import React, { useEffect, useState } from "react";

import Cover from "../Shared/Cover/Cover";
import ProductCard from "../../component/ProductCard/ProductCard";
import useProductData from "../../hooks/useProductData";
import LoadingHome from "../../component/Loading/LoadingHome";
import Price from "../Sidebar/Price";
import Category from "../../component/Category/Category";
import Search from "../../component/Search/Search";

const ViewAll = () => {
  const img = `https://i.ibb.co/KFYkYY7/banner.jpg`;
  const [products, loading] = useProductData();
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectPriceRange, setSelectPriceRange] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let newFilteredProducts = products;
    // Filter by category
    if (selectCategory) {
      newFilteredProducts = newFilteredProducts.filter(({ category }) => category === selectCategory);
    }
    // Filter by price range
    if (selectPriceRange) {
      const [minPrice, maxPrice] = selectPriceRange.split("-");
      newFilteredProducts = newFilteredProducts.filter(
        ({ price }) => price >= parseInt(minPrice) && price <= parseInt(maxPrice)
      );
    }
     // Filter by search query (case-insensitive)
    if (searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase();
      newFilteredProducts = newFilteredProducts.filter(({ title }) =>
        title.toLowerCase().includes(lowerCaseQuery)
      );
    }
    setFilteredProducts(newFilteredProducts);
  }, [selectCategory, selectPriceRange, searchQuery,products]);


  return (
    <div>
      <Cover img={img} title="Shop" desc="We offer the best quality" />

      <div className="my-16 container mx-auto">
        <div className="flex gap-5">
          <div className="w-[25%] font-manrope">
          <div className="p-3 mt-10">
        <Price handleChange={(event) => setSelectPriceRange(event.target.value)} />
      </div>
      <div className="p-3 mt-10">
        <Category handleChange={(event) => setSelectCategory(event.target.value)} />
      </div>
          </div>
          <div className="w-[75%]">
            <div className="flex justify-between py-2 items-center">
              <div>
                Showing <span>1</span> <span>9</span> of <span>20</span> results
              </div>
              <div><Search handleSearch={(event)=>setSearchQuery(event.target.value)} searchQuery={searchQuery}/></div>
            </div>

            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-5 lg:px-0 px-5">
                {!loading ? (
                  filteredProducts.slice(0, 9).map((product, index) => {
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

              <div className="flex justify-center py-3 items-center">
                <button className="text-white font-manrope text-base font-normal py-2 px-6 bg-black">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
