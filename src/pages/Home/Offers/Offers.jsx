import React from "react";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const Offers = () => {
  return (
    <div className="py-5">
      <div className="lg:flex gap-5 md:px-0 px-3 container mx-auto">
        <div className="lg:w-[60%] grid justify-items-center my-5 md:my-0 bg-red-50 font-manrope rounded-xl border-dotted border-2 border-red-400 lg:flex gap-5 md:justify-center items-center py-10">
          <h1 className="text-[#F03E3E] font-extrabold md:text-sm">
            Super discount for your first purchase
          </h1>
          <span className="bg-[#F03E3E] cursor-pointer py-2 px-8 text-white font-extrabold rounded-full">
            FIRST250
          </span>
          <p className="text-black font-extrabold">
            Use discount code in checkout page.
          </p>
        </div>

        <div className="md:w-[40%]  my-5 md:my-0 bg-[#FAC2131C] font-manrope rounded-xl border-dotted border-2 border-red-400 lg:flex gap-5 justify-center items-center py-5 grid justify-items-center md:py-10">
          <h1 className="text-black font-extrabold md:text-sm">
            2nd shopping surprise campaign!
          </h1>

          <span className="flex py-2 px-7 bg-[#FAC213] gap-1 rounded-full justify-center items-center">
            <Link>Check Products</Link>
            <BiSolidRightArrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Offers;
