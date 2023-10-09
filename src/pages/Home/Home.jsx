import React from "react";

import Services from "./Services/Services";

import ResCarousel from "./Banner/Carousel";
import EarRing from "./EarRing/EarRing";
import Offers from "./Offers/Offers";
import Parallax from "./Parallax/Parallax";
import Features from "./Fetatures/Features";
import WeekendDeals from "./WeekendDeals/WeekendDeals";

const Home = () => {
  return (
    <div>
      <ResCarousel/>
      <Services />
      <EarRing/>
      <Offers/>
      <Features/>
      <Parallax/>
      <WeekendDeals/>
    </div>
  );
};

export default Home;
