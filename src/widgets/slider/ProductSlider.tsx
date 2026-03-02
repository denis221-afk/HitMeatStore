"use client";
import { ISlideItem } from "./type/type";
import { ProductSlide } from "./ProductSlide";
import { SliderControls } from "./SliderControls";
import { useChangeSlide } from "./Hook/useChangeSlide";
import { useMemo } from "react";

interface Props {
  slides: ISlideItem[];
}

export const ProductSlider = ({ slides }: Props) => {
  const { current, handlePrev, handleNext } = useChangeSlide(slides.length);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Наша продукція
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out mt-12"
            style={{
              transform: `translateX(-${current * 50}%)`,
            }}
          >
            {useMemo(
              () =>
                slides.map((item) => (
                  <ProductSlide key={item.id} item={item} />
                )),
              [slides]
            )}
          </div>
        </div>

        <SliderControls onPrev={handlePrev} onNext={handleNext} />
      </div>
    </section>
  );
};
