import React, { useEffect } from "react";
import { FaLaptop } from "react-icons/fa";
import {
  HiOutlineRadio,
  HiOutlineComputerDesktop,
  HiMiniDevicePhoneMobile,
} from "react-icons/hi2";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BsMouse3 } from "react-icons/bs";

const categories = [
  { id: 1, name: "موبايلات", icon: HiMiniDevicePhoneMobile },
  { id: 3, name: "لابتوبات", icon: FaLaptop },
  { id: 4, name: "راديوهات", icon: HiOutlineRadio },
  { id: 5, name: "كمبيوترات مكتبية ", icon: HiOutlineComputerDesktop },
  { id: 7, name: "ماوسات", icon: BsMouse3 },
  { id: 6, name: "اكسسوارات اخرى", icon: HiOutlineDotsCircleHorizontal },
];

const CategoriesSection = () => {
  return (
    <section className=" overflow-hidden flex md:justify-center marquee-container relative py-4 w-[100vw]  h-auto text-gray-300 bg-light-primary-varient">
      <div className=" flex w-full  md:justify-around md:items-center md:animate-none  animate-marquee-infinite ">
        {categories.map((category) => (
          <div
            className="flex  flex-col text-center items-center group justify-center text-gray-300 transition-all ease-linear duration-300 hover:text-pink-300 px-5 cursor-pointer "
            key={category.id}
          >
            <div className={`transform group-hover:animate-flipAndBack`}>
              {React.createElement(category.icon, {
                className: " text-xl md:text-2xl mb-2 cursor-pointer",
              })}
            </div>
            <h2 className={` text-xs md:text-sm   `}>{category.name}</h2>
          </div>
        ))}
      </div>
      {/* <div className=" flex  w-full  md:hidden md:animate-none  animate-marquee2-infinite ">
        {categories.map((category) => (
          <div
            className="flex flex-col text-center items-center group justify-center text-gray-300 transition-all ease-linear duration-300 hover:text-pink-300 px-5 cursor-pointer "
            key={category.id}
          >
            <div className={`transform group-hover:animate-flipAndBack`}>
              {React.createElement(category.icon, {
                className: "text-2xl mb-2 cursor-pointer",
              })}
            </div>
            <h2 className={`text-xs md:text-4xs`}>{category.name}</h2>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default CategoriesSection;
