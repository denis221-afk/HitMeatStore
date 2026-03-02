import React from "react";
import HeaderDesktop from "@/widgets/header-desktop/header-desktop";
import MainScrean from "@/widgets/Main-screan/MainScrean";
import { ProductSlider } from "@/widgets/slider/ProductSlider";
import type { ISlideItem } from "@/widgets/slider/type/type";
import Filtered from "@/widgets/Filtered/Filtered";
const slide: ISlideItem[] = [
  {
    id: 1,
    title: "Снеки з яловичини",
    description: "Насолоджуйтесь справжнім смаком яловичини в кожному снеці.",
    imageUrl: "/images/slider/beef-snacks.jpg",
    link: "/products/beef-snacks",
  },
  {
    id: 2,
    title: "Снеки зі свинини",
    description: "Соковиті снеки зі свинини для справжніх гурманів.",
    imageUrl: "/images/slider/pork-snacks.jpg",
    link: "/products/pork-snacks",
  },
  {
    id: 3,
    title: "Снеки з курятини",
    description: "Легкі та смачні снеки з курятини для будь-якого настрою.",
    imageUrl: "/images/slider/chicken-snacks.jpg",
    link: "/products/chicken-snacks",
  },
];
const Main = () => {
  return (
    <>
      <HeaderDesktop />
      <MainScrean />
      <ProductSlider slides={slide} />
      <div className="py-16  flex justify-center w-full flex-1">
        <Filtered />
      </div>
    </>
  );
};

export default Main;
