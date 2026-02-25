"use client";
import { useState } from "react";

export const useSlideProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return { currentIndex, nextSlide, prevSlide };
};
