import { ISlideItem } from "./type/type";
import Image from "next/image";

interface Props {
  item: ISlideItem;
}

export const ProductSlide = ({ item }: Props) => {
  return (
    <div className="min-w-full md:min-w-[50%] px-4 h-120 ">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 h-full">
        <div className="relative h-[280px] md:h-[320px]">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-500 mb-4 text-sm md:text-base">
            {item.description}
          </p>

          <a
            href={item.link}
            className="text-red-600 font-medium hover:underline"
          >
            Переглянути магазин
          </a>
        </div>
      </div>
    </div>
  );
};
