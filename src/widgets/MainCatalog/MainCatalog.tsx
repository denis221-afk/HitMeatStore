import React, { useMemo } from "react";
import ProductCard from "@/enteties/Product/ProductCard/ProductCard";
import { IProduct } from "@/enteties/Model/Product";

export const mockProducts: IProduct[] = [
  {
    id: 1,
    name: "Джерки куриные Классический",
    price: 149,
    description: "Натуральные куриные джерки с мягким классическим вкусом.",
    imageUrl: "/images/jerky-classic.jpg",
    weight: 45,
    rating: 4.8,
    category: "Джерки",
    taste: "Классический",
    likes: 132,
    orders: 98,
    reviews: [
      {
        id: 1,
        productId: 1,
        rating: 5,
        comment: "Очень вкусные, беру регулярно!",
      },
      {
        id: 2,
        productId: 1,
        rating: 4,
        comment: "Хороший вкус, но хотелось бы чуть мягче.",
      },
    ],
  },
  {
    id: 2,
    name: "Джерки куриные Острый",
    price: 159,
    description: "Острые джерки с насыщенным пряным ароматом.",
    imageUrl: "/images/jerky-spicy.jpg",
    weight: 45,
    rating: 4.9,
    category: "Джерки",
    taste: "Острый",
    likes: 210,
    orders: 176,
    reviews: [
      {
        id: 3,
        productId: 2,
        rating: 5,
        comment: "Для любителей острого — идеально 🔥",
      },
    ],
  },
  {
    id: 3,
    name: "Пивчики Барбекю",
    price: 169,
    description: "Мясные палочки с ароматом дымного барбекю.",
    imageUrl: "/images/beer-snacks-bbq.jpg",
    weight: 50,
    rating: 4.6,
    category: "Пивчики",
    taste: "Барбекю",
    likes: 87,
    orders: 65,
    reviews: [],
  },
  {
    id: 4,
    name: "Кабаноси Сырный",
    price: 179,
    description: "Кабаноси с нежным сырным вкусом.",
    imageUrl: "/images/kabanos-cheese.jpg",
    weight: 60,
    rating: 4.5,
    category: "Кабаноси",
    taste: "Сырный",
    likes: 74,
    orders: 52,
    reviews: [
      {
        id: 4,
        productId: 4,
        rating: 4,
        comment: "Хороший перекус к фильму.",
      },
    ],
  },

  {
    id: 5,
    name: "Кабаноси Сырный",
    price: 179,
    description: "Кабаноси с нежным сырным вкусом.",
    imageUrl: "/images/kabanos-cheese.jpg",
    weight: 60,
    rating: 4.5,
    category: "Кабаноси",
    taste: "Сырный",
    likes: 74,
    orders: 52,
    reviews: [
      {
        id: 5,
        productId: 5,
        rating: 4,
        comment: "Хороший перекус к фильму.",
      },
    ],
  },
  {
    id: 6,
    name: "Кабаноси Сырный",
    price: 179,
    description: "Кабаноси с нежным сырным вкусом.",
    imageUrl: "/images/kabanos-cheese.jpg",
    weight: 60,
    rating: 4.5,
    category: "Кабаноси",
    taste: "Сырный",
    likes: 74,
    orders: 52,
    reviews: [
      {
        id: 6,
        productId: 6,
        rating: 4,
        comment: "Хороший перекус к фильму.",
      },
    ],
  },
  {
    id: 7,
    name: "Кабаноси Сырный",
    price: 179,
    description: "Кабаноси с нежным сырным вкусом.",
    imageUrl: "/images/kabanos-cheese.jpg",
    weight: 60,
    rating: 4.5,
    category: "Кабаноси",
    taste: "Сырный",
    likes: 74,
    orders: 52,
    reviews: [
      {
        id: 7,
        productId: 7,
        rating: 4,
        comment: "Хороший перекус к фильму.",
      },
    ],
  },
  {
    id: 8,
    name: "Кабаноси Сырный",
    price: 179,
    description: "Кабаноси с нежным сырным вкусом.",
    imageUrl: "/images/kabanos-cheese.jpg",
    weight: 60,
    rating: 4.5,
    category: "Кабаноси",
    taste: "Сырный",
    likes: 74,
    orders: 52,
    reviews: [
      {
        id: 8,
        productId: 8,
        rating: 4,
        comment: "Хороший перекус к фильму.",
      },
    ],
  },
];

const MainCatalog = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {useMemo(
            () =>
              mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              )),
            [mockProducts],
          )}
        </div>
      </div>
    </section>
  );
};

export default MainCatalog;
