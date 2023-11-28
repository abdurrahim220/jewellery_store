import React from "react";

import { PiHourglassSimpleMediumDuotone } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import { BsCreditCard2Front } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className="container py-10 px-4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-4">
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center">
          <PiHourglassSimpleMediumDuotone size={60} />
        </div>
        <h1 className="loading-[28px] font-manrope font-bold text-sm text-[#060606]">
          Amazing Value Every Day
        </h1>
        <p className="text-[#7d7d7d] loading-[27px] text-base">
          Items prices that fit your budget
        </p>
      </div>
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center">
          <TbAward size={60} />
        </div>
        <h1 className="loading-[28px] font-manrope font-bold text-sm text-[#060606]">
          Successful Customer Service
        </h1>
        <p className="text-[#7d7d7d] loading-[27px] text-base">
          We work with a focus on 100% customer satisfaction.
        </p>
      </div>
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center">
          <BsCreditCard2Front size={60} />
        </div>
        <h1 className="loading-[28px] font-manrope font-bold text-sm text-[#060606]">
          All Payment Methods
        </h1>
        <p className="text-[#7d7d7d] loading-[27px] text-base">
          Don't bother with payment details.
        </p>
      </div>
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center">
          <LiaShippingFastSolid size={60} />
        </div>
        <h1 className="loading-[28px] font-manrope font-bold text-sm text-[#060606]">
          Completely free shipping
        </h1>
        <p className="text-[#7d7d7d] loading-[27px] text-base">
          We'll handle the shipping.
        </p>
      </div>
    </div>
  );
};

export default Services;
