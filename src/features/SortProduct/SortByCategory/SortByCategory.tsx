import React from "react";

const SortByCategory = () => {
  return (
    <div>
      <select className="p-4 border-b border-gray-300 focus:outline-none text-gray-700">
        <option value="">Виберіть категорію</option>
        <option value="meat">М'ясо</option>
        <option value="seafood">Риба та морепродукти</option>
        <option value="vegetables">Овочі</option>
        <option value="fruits">Фрукти</option>
      </select>
    </div>
  );
};

export default SortByCategory;
