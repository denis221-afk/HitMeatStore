import React from "react";
import { FaBagShopping } from "react-icons/fa6";

const Items = [
  { title: "Магазин", id: 1 },
  { title: "Про нас", id: 2 },
  { title: "Доставка / оплата", id: 3 },
  { title: "Конткати", id: 4 },
];
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="flex gap-2 cursor-pointer text-gray-500">
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
    </nav>
  );
};

export default Navigation;
