import React from "react";

const SortByTaste = () => {
  return (
    <div className="ml-4">
      <ul className="flex gap-2 items-center ">
        <li className="cursor-pointer hover:bg-gray-100 p-2">Sweet</li>
        <li className="cursor-pointer hover:bg-gray-100 p-2">Sour</li>
        <li className="cursor-pointer hover:bg-gray-100 p-2">Salty</li>
        <li className="cursor-pointer hover:bg-gray-100 p-2">Bitter</li>
      </ul>
    </div>
  );
};

export default SortByTaste;
