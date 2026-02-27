"use client";
import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import NavigationMobile from "./Navigation-mobille";
import { CiMenuBurger } from "react-icons/ci";
import { useShowNavigationMobile } from "./Hook/useShowNavigationMobile";

const Items = [
  { title: "Магазин", id: 1 },
  { title: "Про нас", id: 2 },
  { title: "Доставка / оплата", id: 3 },
  { title: "Конткати", id: 4 },
];
const Navigation = () => {
  useShowNavigationMobile();
  return (
    <nav className="navbar relative h-10">
      <ul className="gap-2 cursor-pointer text-gray-500 hidden md:flex ">
        {Items.map((li) => {
          return (
            <li
              className="text-gray-700 hover:text-red-300 transition-all"
              key={li.id}
            >
              {li.title}
            </li>
          );
        })}
        <li className="ml-3.5">
          <FaBagShopping color="red" size={20} cursor="pointer" />
        </li>
      </ul>
      <div className="md:hidden cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-50">
        <CiMenuBurger size={25} color="black" />
      </div>
      <NavigationMobile Items={Items} />
    </nav>
  );
};

export default Navigation;
