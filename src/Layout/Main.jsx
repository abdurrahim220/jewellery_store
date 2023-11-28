import React from "react";
import Navbar from "../pages/Shared/NavBar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import ResponsiveNav from "../pages/Shared/NavBar/ResponsiveNav";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
        <ResponsiveNav />
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
