import React, { useEffect, useState } from "react";
import { headerData } from "../data";
import Nav from "./Nav";
import { TiThMenuOutline } from "react-icons/ti";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const { logo } = headerData;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`fixed left-0 top-0 z-20 bg-white w-full transition-all duration-300 ${
        isActive
          ? "bg-green-500/30h-[70px] lg:h-[80px] "
          : " h-[80px] lg:h-[90px] "
      }`}
    >
      <div className="flex items-center justify-between h-full px-8 lg:px-12 lg:pr-14">
        {/* logo */}
        <a href="/" className="lg:w-[150px] w-[100px] block ">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </a>
        {/* nav links */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
        {/* hamburger icon */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer "
        >
          <TiThMenuOutline className="text-3xl" />
        </div>

        {/* socila icons */}
        <div className="hidden lg:flex">
          <Socials />
        </div>

        {/* for mobile */}
        <div
          className={`fixed left-0 bg-white transition-all duration-500 -z-20 w-full h-full ${
            navMobile ? "max-h-full" : "max-h-0"
          } ${
            isActive ? "top-[70px] lg:top-[80px]" : "top-[80px] lg:top-[90px]"
          }`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
