import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingHome = () => {
  return (
    <div>
      <BeatLoader color="#36d7b7"  cssOverride={{}} speedMultiplier={0} />
    </div>
  );
};

export default LoadingHome;
