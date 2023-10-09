import React from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { RiTimerFlashFill } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiRulerAlt } from "react-icons/tfi";
import { LuCalendarClock } from "react-icons/lu";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaVk,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";

const SingleProducts = () => {
  const data = useLoaderData();
  const {
    image,
    price,
    category,
    title,
    rating,
    sold,
    remaining,
    total_review,
    availability,
  } = data;

  console.log(data);
  return (
    <div className="container my-10 mx-auto">
      <div className="lg:flex px-2  lg:px-0 gap-5">
        <div className="lg:w-[50%]">
          <Carousel className="">
            <img src={image} className="" alt="" />
          </Carousel>
        </div>

        <div className="lg:w-[50%]">
          <div className="flex gap-5 items-center">
            <Link className="flex justify-center items-center gap-1" to="/">
              Home
              <FiHome />
            </Link>

            <Link
              className="flex justify-center items-center gap-1"
              to="/store"
            >
              Store <FiShoppingCart />
            </Link>
            <h3>{title}</h3>
          </div>

          <div className="space-y-6 pt-8">
            <h1 className="text-[32px] font-manrope font-bold leading-8 text-[#060606]">
              {title}
            </h1>
            <p className="font-jost font-normal text-base text-[#7d7d7d]">
              Safer For The Environment: Our denim factory partner recycles 98%
              of their water using reverse osmosis filtration and keeps
              byproducts out of the environment by mixing them with concrete to
              create building materials.
            </p>

            <div className="border-2 flex justify-between items-center p-3 bg-[#F8F9FA]">
              <RiTimerFlashFill size={50} />
              <p className="text-base text-[#7d7d7d]">
                Time remaining until the end of the offer; Hurry to take
                advantage of the offer
              </p>
              <span className="">Expired</span>
            </div>

            <div>
              <p>${price}</p>
              <span className=" bg-red-500 rounded-full text-white px-5 text-base font-jost font-normal leading-4">
                {availability}
              </span>
            </div>

            <div className="space-y-2 ">
              <div className="flex gap-2 items-center">
                <LiaShippingFastSolid size={25} />
                <p className="font-jost text-[15px] font-medium leading-5">
                  DELIVERY & RETURN
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <TfiRulerAlt size={25} />
                <p className="font-jost text-[15px] font-medium leading-5">
                  SIZE GUIDE
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <LuCalendarClock size={25} />
                <p className="font-jost text-[15px] font-medium leading-5">
                  ESTIMATED DELIVERY: OCT 12 OCT 16
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="mr-2 uppercase font-manrope font-bold text-[#060606]">
                {" "}
                Categories:
              </h1>
              <p className=" text-base font-bold font-manrope leading-5">
                {category}
              </p>
            </div>
            <div className="flex space-x-2">
              <h3>Tags:</h3>
              <p>Bestseller</p>
              <p>Trend</p>
            </div>
            <div className="flex space-x-3">
              Share: <FaFacebook color="blue" size={25} />
              <FaTwitter color="#6499E9" size={25} />
              <FaInstagram color="#EC53B0" size={25} />
              <FaWhatsapp color="#98EECC" size={25} />
              <FaPinterest color="#D80032" size={25} />
              <FaTelegram color="#6499E9" size={25} />
              <FaVk color="#088395" size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
