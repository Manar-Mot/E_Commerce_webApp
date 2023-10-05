import React from "react";

import SearchComponent from "./searchComp";
import AppLogo from "../../assets/logos/AppLogo.png";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
function Navbar() {
  return (
    <nav className="bg-transparent-500 p-4 border-b  ">
      <div className="container mx-auto">
        <div className="flex reverse items-center justify-between align-middle">
          <div className="text-black md:text-2xl font-kufi  flex items-center ">
            <img src={AppLogo} alt="logo" className="h-10 w-auto ml-2 " />
            اوريجينال تك
          </div>
          <div className=" w-2/5 hidden md:block">
            <SearchComponent />
          </div>
          <div className=" flex align-middle">
            <HiOutlineHeart className="text-gray-500 text-2xl mx-2 cursor-pointer" />
            <HiOutlineSquare3Stack3D className="text-gray-500 text-2xl mx-2 cursor-pointer" />
            <HiOutlineShoppingCart className="text-gray-500 text-2xl mx-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
