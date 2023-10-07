import React from "react";

import Services from "./Services/Services";

import ResCarousel from "./Banner/Carousel";
import EarRing from "./EarRing/EarRing";
import Offers from "./Offers/Offers";
import Parallax from "./Parallax/Parallax";

const Home = () => {
  return (
    <div>
      <ResCarousel/>
      <Services />
      <EarRing/>
      <Offers/>
      <Parallax/>
    </div>
  );
};

export default Home;
