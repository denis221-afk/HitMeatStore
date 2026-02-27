import React from "react";
import { INavigationItem } from "./type/type";
import { IoMdClose } from "react-icons/io";
import { useCloseNavigationMobile } from "./Hook/useShowNavigationMobile";
const NavigationMobile = ({ Items }: { Items: INavigationItem[] }) => {
  useCloseNavigationMobile();
  return (
    <div className="md:hidden w-full h-dvh bg-black fixed top-0 left-0 z-50 hidden navigation-mobile">
      <div className="absolute top-4 right-4 cursor-pointer menu-close">
        <IoMdClose className="text-white" size={25} />
      </div>
      <ul className="flex flex-col items-center justify-center h-full gap-10">
        {Items.map((item) => (
          <li key={item.id} className="text-white text-xl">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMobile;
