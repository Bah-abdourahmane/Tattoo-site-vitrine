import React from "react";
import { navData } from "../data";
import Socials from "./Socials";

const NavMobile = () => {
  const { items } = navData;
  return (
    <div className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-6 py-6">
        {items.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-2xl font-primary uppercase">{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="text-2xl pb-10">
        <Socials />
      </div>
    </div>
  );
};

export default NavMobile;
