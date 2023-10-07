import React from "react";
import Nav from "../Shared/NavBar/Extra";
import Services from "./Services/Services";

import ResCarousel from "./Banner/Carousel";
import EarRing from "./EarRing/EarRing";
import Offers from "./Offers/Offers";

const Home = () => {
  return (
    <div>
      <ResCarousel/>
      <Services />
      <EarRing/>
      <Offers/>
    </div>
  );
};

export default Home;
