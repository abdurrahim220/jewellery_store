import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const ResCarousel = () => {
  const images = [
    {
      id: 1,
      image_url: "https://i.ibb.co/XfHqgjQ/Slider-1.jpg",
      title: "Image 1",
      description: "This is the first image in the slider.",
    },
    {
      id: 2,
      image_url: "https://i.ibb.co/5v2RxZP/slider-3.jpg",
      title: "Image 2",
      description: "This is the second image in the slider.",
    },
    {
      id: 3,
      image_url: "https://i.ibb.co/D1pCnS8/slider-2.jpg",
      title: "Image 3",
      description: "This is the third image in the slider.",
    },
  ];

  return (
    <div className="mt-[73px] mb-5 md:flex container gap-3 mx-auto px-2">
      <div className="md:w-[70%]">
        <Carousel>
          {images.map((image, i) => {
            const { image_url, id, title } = image;
            return (
              <div key={id}>
                <img src={image_url} alt="" />
                <p className="legend">{title}</p>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="justify-items-center md:w-[30%] relative">
        <img
          src="https://i.ibb.co/fCsrsVH/right-side-image.jpg"
          className="sm:h-[350px]  xl:h-[704px]"
          alt=""
        />
        <div className="absolute bottom-20 lg:bottom-36 font-manrope left-0 w-full space-y-2 text-white  grid justify-items-center items-center">
          <h3 className="uppercase font-semibold text-[1.2rem]">
            Gold Piercing
          </h3>
          <h1 className="uppercase text-[2.5rem] md:text-[3.2rem] font-bold">
            Flash Sale
          </h1>
          <p className="text-medium font-medium">15 Nov - 25 Nov</p>
          <Link className="underline font-medium">See more products</Link>
        </div>
      </div>
    </div>
  );
};

export default ResCarousel;
