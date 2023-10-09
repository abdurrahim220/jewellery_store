import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const user = true;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/store">All jewelry</Link>
      </li>
      <li>
        <Link to="/">My Jewelry</Link>
      </li>
      <li>
        <Link to="/">Add jewelry</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
    </>
  );

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">{navItem}</ul>
      </div>
    </>
  );

  const logo = "https://i.ibb.co/yX1dS3T/logo.png";
  return (
    <nav className="border-b">
      <div className="h-10vh flex justify-between z-50 text-black container py-4 lg:py-6 mx-auto  ">
        
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">{navItem}</ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transtion" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
