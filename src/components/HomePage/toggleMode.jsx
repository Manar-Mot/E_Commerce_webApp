import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // استيراد الأيقونات

const ToggleMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`w-10 h-6 md:w-14 md:h-7 bg-${
        isDarkMode ? "red" : "blue"
      }-500 rounded-full p-1`}
      onClick={toggleMode}
    >
      <div
        className={`w-4 h-4 md:w-6 md:h-5 bg-white rounded-full  flex justify-center items-center shadow-md transform ${
          isDarkMode ? "-translate-x-8" : "translate-x-0"
        } transition-transform duration-300`}
      >
        {isDarkMode ? (
          <FaMoon className=" text-red-500  text-xs md:text-sm " />
        ) : (
          <FaSun className=" text-red-500 text-xs md:text-sm" />
        )}
      </div>
    </button>
  );
};

export default ToggleMode;
