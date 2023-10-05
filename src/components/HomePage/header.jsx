import React, { useState, useEffect } from "react";
import slider2 from "../../assets/images/s2.webp";
import slider3 from "../../assets/images/s3.webp";
import background from "../../assets/images/new2.webp";

const Header = () => {
  const slides = [
    {
      url: background,
      name: "سماعات",
      description: "تجربة صوت استثنائية تجعلك تعيش كل لحظة",
    },
    {
      url: slider2,
      name: " مكبرات الصوت  المنزلية",
      description: " تحدث بشكل افضل ",
    },
    {
      url: slider3,
      name: "كاميرات",
      description: "من اجل صور اكثر احترافية",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <header className="max-w-[1400px]  w-full  relative group ">
      <div
        className="  w-full md:h-[65vh] h-auto flex justify-end items-center   relative bg-center bg-cover  bg-blue-100 duration-500 "
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className=" z-50 flex flex-col py-20 px-5 md:px-20 max-w-[40%] md:max-w-[40%] ">
          <h4 className="md:text-2xl font-bold text-lg text-center mb-4 animate__fadeIn leading-loose ">
            {slides[currentIndex].description}
          </h4>
          <a
            href="/buy-now"
            className="mx-auto bg-gradient-to-r from-purple-700 via-purple-500 to-light-pink-purple  text-center transition-all duration-200 ease-linear hover:bg-gradient-to-l  hover:p-3   md:hover:p-3  w-[100px] md:w-[150px]  text-sm md:text-lg text-white font-bold py-2 px-2 rounded-lg shadow-inner animate__fadeIn"
          >
            اشتري الآن
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
