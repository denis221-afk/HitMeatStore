import SearchProduct from "@/features/SearchProduct/SearchProduct";
import SortProduct from "@/features/SortProduct/SortProduct";
import React from "react";

const Filtered = () => {
  return (
    <div className="flex w-full items-center gap-10 justify-center flex-1">
      <SearchProduct />
      <SortProduct />
    </div>
  );
};

export default Filtered;
