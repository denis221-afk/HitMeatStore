"use client";
import { useCallback, useState } from "react";
export const useChangeSlide = (slidesLength: number) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slidesLength - 1 : prev - 1));
  }, [slidesLength]);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev === slidesLength - 1 ? 0 : prev + 1));
  }, [slidesLength]);
  return { current, handlePrev, handleNext };
};
