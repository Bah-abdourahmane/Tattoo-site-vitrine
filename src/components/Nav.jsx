import React from "react";
import { navData } from "../data";

const Nav = () => {
  const { items } = navData;
  return (
    <ul className="flex items-center gap-8">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="link hover:border-b-2 hover:border-black transition-all duration-300"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
