import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({img,title,desc}) => {
  return (
    <Parallax
      blur={{ min: -5, max: 5 }}
      bgImage={img}
      bgImageAlt="The Menu"
      strength={-200}
    >
      <div className="hero h-[300px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content font-manrope grid justify-start pl-16 h-[300px] items-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5  text-3xl text-black">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
