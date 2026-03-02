import React from "react";
import SortByTaste from "./SortByTaste/SortByTaste";
import SortByCategory from "./SortByCategory/SortByCategory";

const SortProduct = () => {
  return (
    <div className="flex items-center gap-4">
      <SortByCategory />
      <SortByTaste />
    </div>
  );
};

export default SortProduct;
