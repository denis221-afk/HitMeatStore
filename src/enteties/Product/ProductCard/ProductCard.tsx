import React from "react";
import { IProduct } from "@/enteties/Model/Product";

type Props = {
  product: IProduct;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300  flex flex-col justify-between">
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <h4 className="font-semibold text-lg mb-1">{product.name}</h4>

      <p className="text-sm text-gray-500 mb-2">{product.weight}г</p>

      <p className="font-semibold text-lg mb-3">від {product.price} грн</p>

      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
        Купити
      </button>
    </div>
  );
};

export default ProductCard;
