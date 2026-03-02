import React from "react";

const SearchProduct = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Видіть назву товару"
        className="max-w-100  w-full p-4 border-b  border-gray-300  focus:outline-none  text-gray-700 placeholder-gray-400"
      />
      <button className="mt-4 px-10 text-sm py-4 bg-red-600 text-white  hover:bg-red-700 transition duration-300 border-b border-red-600 rounded-r-md">
        Пошук
      </button>
    </>
  );
};

export default SearchProduct;
