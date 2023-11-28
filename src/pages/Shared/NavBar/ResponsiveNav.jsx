import React, { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

import SideBar from "./SideBar";

const ResponsiveNav = () => {
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/store">All jewelry</NavLink>
      </li>
      <li>
        <NavLink to="/">My Jewelry</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/">Blogs</NavLink>
      </li>
    </>
  );
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.getItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
    <header className="bg-navbar relative z-50 text-white border-b-[2px] border-blue-500">
      <nav className="container flex items-center justify-between mx-auto p-5 h-[70px]">
        {/* logo */}
        <div className="text-white text-2xl  md:text-3xl ">
          <Link to="/">Jewelry</Link>
        </div>
        {/* desktop menu */}

        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {navItem}
            {theme === "dark" ? (
              <BiSolidSun size={25} onClick={() => setTheme("light")} />
            ) : (
              <BiSolidMoon size={25} onClick={() => setTheme("dark")} />
            )}
          </ul>
        </div>

        {/* mobile menu */}
        <div className="flex items-center gap-4 md:hidden ">
          {theme === "dark" ? (
            <BiSolidSun
              onClick={() => setTheme("light")}
              className="text-2xl"
            />
          ) : (
            <BiSolidMoon
              onClick={() => setTheme("dark")}
              className="text-2xl"
            />
          )}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className=" cursor-pointer transition-all"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all"
              size={30}
            />
          )}
        </div>
      </nav>
    </header>
    <SideBar showMenu={showMenu} navItem={navItem}/>
    </>
  );
};

export default ResponsiveNav;
