import { IoFlashSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
const HeaderDesktop = () => {
  return (
    <div className="px-4 py-6 min-w-full flex justify-between">
      <div className="text-xl flex items-center">
        MEAT
        <IoFlashSharp color="red" />
        HIT
      </div>
      <nav className="navbar">
        <ul className="flex gap-2 cursor-pointer text-gray-500">
          <li className="hover:text-red-400 transition-all">Магазин</li>
          <li className="hover:text-red-400 transition-all">Про нас</li>
          <li className="hover:text-red-400 transition-all">
            Доставка / оплата
          </li>
          <li className="hover:text-red-400 transition-all">Конткати</li>
          <li className="ml-3.5">
            <FaBagShopping color="red" size={20} cursor="pointer" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
