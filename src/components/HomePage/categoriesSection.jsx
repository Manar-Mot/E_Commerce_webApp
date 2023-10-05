import React, { useState } from "react";
import { FaLaptop } from "react-icons/fa";
import {
  HiOutlineRadio,
  HiOutlineComputerDesktop,
  HiMiniDevicePhoneMobile,
  HiMiniBars3,
} from "react-icons/hi2";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BsMouse3 } from "react-icons/bs";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import SearchComponent from "./searchComp";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "موبايلات", icon: HiMiniDevicePhoneMobile },
  { id: 3, name: "لابتوبات", icon: FaLaptop },
  { id: 4, name: "راديوهات", icon: HiOutlineRadio },
  { id: 5, name: "كمبيوترات مكتبية ", icon: HiOutlineComputerDesktop },
  { id: 7, name: "ماوسات", icon: BsMouse3 },
  { id: 6, name: "اكسسوارات اخرى", icon: HiOutlineDotsCircleHorizontal },
];

const CategoriesSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMenue, setShowMenue] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleShowMenue = () => {
    setShowMenue(!showMenue);
    console.log(showMenue);
  };

  return (
    <section className="flex  h-[60px] justify-between md:justify-center w-full items-center text-white bg-light-primary-varient">
      <div
        className="md:w-1/4 relative bg-gray-700 font-bold cursor-pointer text-white flex items-center text-lg p-4 bg-opacity-20"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <HiBars3BottomRight className="mx-2 text-2xl" />
        <span className="hidden md:block md:text-2xs">
          <Link to="/">كل الفئات</Link>
        </span>
        <ul
          className={`absolute top-[60px] z-[999] transition-all ease-in-out duration-300 right-0 ${
            isDropdownOpen ? " max-h-80" : "top-[0] max-h-0 "
          } bg-white w-[250px] md:w-full   rounded-lg shadow-md overflow-hidden`}
        >
          {categories.map((category) => (
            <li
              key={category.id}
              className={`py-3 px-4 group hover:bg-gray-100`}
            >
              <Link
                to={`/category/${category.id}`}
                className="flex items-center text-black hover-underline"
              >
                <div className={`transform group-hover:animate-flipAndBack`}>
                  {React.createElement(category.icon, {
                    className: "text-2xl  mx-3  cursor-pointer",
                  })}
                </div>
                <h2 className={`text-xs md:text-base`}>{category.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden w-2/3">
        <SearchComponent />
      </div>
      <HiMiniBars3
        className="block  md:hidden mx-2 text-2xl cursor-pointer"
        onClick={() => handleShowMenue()}
      />

      <ul
        className={`${
          showMenue ? "h-[100vh]" : "h-0 -top-[100px]"
        }  md:flex fixed  flex  transition-all duration-300 ease-linear top-0 left-0 text-black md:text-white bg-white md:bg-transparent md:static  md:mx-10 flex-col md:flex-row  z-[999]  md:h-auto justify-around items-center w-full md:w-3/5 text-lg `}
      >
        <HiMiniXMark
          className=" md:hidden self-start mx-10 cursor-pointer"
          onClick={() => handleShowMenue()}
        />
        <li
          className="cursor-pointer mx-[10px] p-2 group relative
        "
        >
          <Link
            to="/"
            className={`
         after:transition-all after:ease-linear   after:duration-500  group-hover:after:content-[''] group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 after:w-0 group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bg-yellow-400 `}
          >
            الرئيسية
          </Link>
        </li>
        <li className="cursor-pointer mx-[10px] p-2 group relative">
          <Link
            to="/store"
            className={`
         after:transition-all after:ease-linear  after:duration-500  group-hover:after:content-[''] group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 after:w-0 group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bg-yellow-400 `}
          >
            المتجر
          </Link>
        </li>
        <li className="cursor-pointer mx-[10px] p-2 group relative">
          <Link
            to="/about"
            className={`
         after:transition-all after:ease-linear  after:duration-500  group-hover:after:content-[''] group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 after:w-0 group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bg-yellow-400 `}
          >
            حول
          </Link>
        </li>
        <li className="cursor-pointer mx-[10px] p-2 group relative">
          <Link
            to="/contact"
            className={`
         after:transition-all after:ease-linear  after:duration-500  group-hover:after:content-[''] group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 after:w-0 group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bg-yellow-400 `}
          >
            اتصل بنا
          </Link>
        </li>
        <li className="cursor-pointer p-2 group relative">
          <Link
            to="/blog"
            className={`
         after:transition-all after:ease-linear  after:duration-500  group-hover:after:content-[''] group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 after:w-0 group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bg-yellow-400 `}
          >
            المدونة
          </Link>
        </li>
      </ul>
      <div className="  hidden md:block md:w-1/4 w-1/5 text-center font-bold cursor-pointer bg-yellow-400 transition-all duration-300 hover:text-white hover:bg-gray-700 text-black text-2xs h-full p-4 hover-text-white hover:bg-opacity-30">
        <span>العروض الاسبوعية </span>
      </div>
    </section>
  );
};

export default CategoriesSection;
