import { IoFlashSharp } from "react-icons/io5";
import Navigation from "./ui/nav/Navigation";
import Logo from "./ui/logo/Logo";
const HeaderDesktop = () => {
  return (
    <div className="px-4 py-6 min-w-full flex justify-between">
      <Logo />
      <Navigation />
    </div>
  );
};

export default HeaderDesktop;
