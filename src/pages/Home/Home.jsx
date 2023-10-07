import React from "react";
import Nav from "../Shared/NavBar/Extra";
import Services from "./Services/Services";

import ResCarousel from "./Banner/Carousel";
import EarRing from "./EarRing/EarRing";

const Home = () => {
  return (
    <div>
      <ResCarousel/>
      <Services />
      <EarRing/>
    </div>
  );
};

export default Home;
