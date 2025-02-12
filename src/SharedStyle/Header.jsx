import { FaUserSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const link = (
    <>
      <Link
        to="/"
        className="relative md:px-2 font-semibold text-gray-800 transition duration-300 hover:text-blue-600 
             before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] before:bg-blue-600 
             before:transition-all before:duration-300 before:ease-in-out before:rounded-full 
             hover:before:w-full hover:before:left-0"
      >
        Home
      </Link>
      <Link
        to="/home"
        className="relative md:px-2 font-semibold text-gray-800 transition duration-300 hover:text-blue-600 
             before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] before:bg-blue-600 
             before:transition-all before:duration-300 before:ease-in-out before:rounded-full 
             hover:before:w-full hover:before:left-0"
      >
        House
      </Link>
      <Link
        className="relative md:px-2 font-semibold text-gray-800 transition duration-300 hover:text-blue-600 
             before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] before:bg-blue-600 
             before:transition-all before:duration-300 before:ease-in-out before:rounded-full 
             hover:before:w-full hover:before:left-0"
      >
        Card
      </Link>
      <Link
        className="relative md:px-2 font-semibold text-gray-800 transition duration-300 hover:text-blue-600 
             before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] before:bg-blue-600 
             before:transition-all before:duration-300 before:ease-in-out before:rounded-full 
             hover:before:w-full hover:before:left-0"
      >
        Profile
      </Link>
      <Link
        className="relative md:px-2 font-semibold text-gray-800 transition duration-300 hover:text-blue-600 
             before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[3px] before:bg-blue-600 
             before:transition-all before:duration-300 before:ease-in-out before:rounded-full 
             hover:before:w-full hover:before:left-0"
      >
        About Us
      </Link>
    </>
  );
  return (
    <div className="bg-gradient-to-r static from-[#8bb9ffcc] via-[#9d73ff7a] to-[#2ac525dc] ... shadow-xl">
      <div className="container py-3 mx-auto text-center heavenly flex md:flex-row flex-col justify-between font-semibold items-center">
        <div className="md:block hidden"></div>
        <div className="flex gap-5  text-sm md:text-lg  px-2 mb-3 md:pb-0">
          {link}
        </div>
        <div className="flex gap-2 items-end px-3 md:px-0 md:flex-row flex-row-reverse">
          <FaUserSlash className="text-3xl rounded-full bg-[#00000027]  p-[2px]" />
          <h2 className="text-[#232469]">waliurrafiqsami@gmail.com</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
