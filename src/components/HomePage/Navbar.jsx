import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import AppLogo from "../../assets/logos/AppLogo.png";
import {
  HiOutlineShoppingCart,
  HiMagnifyingGlass,
  HiOutlineHeart,
} from "react-icons/hi2";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // font-family: 'Noto Kufi Arabic', sans-serif;
  // font-family: 'Quicksand', sans-serif;
  // font-family: 'Roboto', sans-serif;
  return (
    <nav className="bg-transparent-500 p-4 border-b ">
      <div className="container mx-auto">
        <div className="flex reverse items-center justify-between align-middle">
          <div className="text-black sm:text-lg md:text-2xl font-kufi  flex items-center ">
            <img src={AppLogo} alt="logo" className="h-10 w-auto ml-2 " />
            اوريجينال تك
          </div>

          <div className="hidden md:flex  text-lg ">
            <a href="#" className="text-black cursor-pointer mx-[10px]">
              الرئيسية
            </a>
            <a href="#" className="text-black cursor-pointer mx-[10px]">
              المتجر
            </a>
            <a href="#" className="text-black cursor-pointer mx-[10px]">
              حول
            </a>
            <a href="#" className="text-black cursor-pointer mx-[10px]">
              اتصل بنا
            </a>
            <a href="#" className="text-black cursor-pointer">
              المدونة
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
          <div className=" flex align-middle">
            <HiMagnifyingGlass className="text-gray-500 text-2xl mx-2  cursor-pointer" />
            <HiOutlineHeart className="text-gray-500 text-2xl mx-2 cursor-pointer" />

            <HiOutlineShoppingCart className="text-gray-500 text-2xl mx-2 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-blue-500 p-2 space-y-2">
            <li>
              <a href="#" className="text-white">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                حول
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                خدمات
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
