import React from "react";
import { Link } from "react-router-dom";

const Parallax = () => {
  return (
    <div
      
      className="flex justify-center items-center h-96 bg-parallax bg-cover bg-fixed"
    >
      <div className="grid justify-items-center text-white font-manrope space-y-2 items-center">
        <span>New Season</span>
        <h1>Back to the past:neckless or bracelets</h1>
        <p>
          You can hide so much behind theatrics, and I don't need to do that any
          more. My relationships with producers or photographers - these are
          relationships that took years.
        </p>
        <Link to="">See all our products</Link>
      </div>
    </div>
  );
};

export default Parallax;
