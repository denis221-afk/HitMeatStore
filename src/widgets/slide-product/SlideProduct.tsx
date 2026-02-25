"use client";
import React from "react";
import SlideProductCard from "@/entities/Product/SlideProductCard/SlideProductCard";
import { useSlideProduct } from "@/widgets/slide-product/Hook/useSlideProduct";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const image =
  "https://klopotenko.com/wp-content/uploads/2024/05/jerky-img.jpg?v=1720540577";

const SlideProduct = () => {
  const { currentIndex, nextSlide, prevSlide } = useSlideProduct();

  return (
    <div className="flex gap-10  py-10 px-4 justify-center w-full flex-1 relative ">
      <div className="a overflow-hidden w-[calc(2*450px+40px)]">
        <div
          className="b flex gap-10 w-[calc(4*450px+4*20px)]"
          style={{
            transform: `translateX(-${currentIndex * 470}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          <SlideProductCard
            imageUrl={image}
            name="Джеркі з курячого м'яса"
            price={145}
            description="Соковиті шматочки курятини, з трьома пікантні смаками на вибір: класичний, гострий та теріякі."
          />
          <SlideProductCard
            imageUrl={image}
            name="Джеркі з курячого м'яса"
            price={142}
            description="Соковиті шматочки курятини, з трьома пікантні смаками на вибір: класичний, гострий та теріякі."
          />
          <SlideProductCard
            imageUrl={image}
            name="Джеркі з курячого м'яса"
            price={143}
            description="Соковиті шматочки курятини, з трьома пікантні смаками на вибір: класичний, гострий та теріякі."
          />
          <SlideProductCard
            imageUrl={image}
            name="Джеркі з курячого м'яса"
            price={125}
            description="Соковиті шматочки курятини, з трьома пікантні смаками на вибір: класичний, гострий та теріякі."
          />
        </div>
      </div>
      <div className="absolute top-1/2  transform -translate-y-1/2 flex items-center gap-4 justify-between w-full px-20">
        <span className="cursor-pointer" onClick={prevSlide}>
          <GrPrevious />
        </span>
        <span className="cursor-pointer" onClick={nextSlide}>
          <GrNext />
        </span>
      </div>
    </div>
  );
};

export default SlideProduct;
