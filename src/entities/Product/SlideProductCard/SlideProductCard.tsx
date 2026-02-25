import React from "react";
import type { SlideProductPropsType } from "./type/SliddeProductPropsType";
const SlideProductCard = ({
  imageUrl,
  name,
  price,
  description,
}: SlideProductPropsType) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 max-w-[450px] my-10">
      {/* Image */}
      <div className="relative bg-gray-50  overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain  transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        <p className="text-sm text-gray-500">{description}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-semibold text-gray-900">
            від {price} грн
          </span>

          <button className="px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors duration-200">
            Купити
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideProductCard;
