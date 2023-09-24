import React from "react";
import ToggleMode from "./toggleMode";

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
      <div className="right-section">
        <ToggleMode />
      </div>
      <div className="left-section space-x-4 text-xs md:text-sm ">
        <a
          href="/login"
          className="text-white hover:text-gray-300 transition duration-300  "
        >
          تسجيل الدخول
          <span className="mx-2">/</span>
        </a>
        <a
          href="/register"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          تسجيل حساب
        </a>
      </div>
    </div>
  );
};

export default TopBar;
