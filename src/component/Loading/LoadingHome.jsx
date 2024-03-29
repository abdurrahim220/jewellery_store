import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingHome = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <BeatLoader color="#36d7b7"  cssOverride={{}} speedMultiplier={3} />
    </div>
  );
};

export default LoadingHome;
