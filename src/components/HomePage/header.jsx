import React, { useState, useEffect } from "react";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";

const Header = () => {
  const slides = [
    {
      url: slider1,
      name: "سماعات",
      description: "احصل على تجربة صوت استثنائية تجعلك تعيش كل لحظة",
    },
    {
      url: slider2,
      name: "سماعات لاسلكية",
      description: "لا تعيقك الأسلاك، استمتع بالصوت بحرية",
    },
    {
      url: slider3,
      name: "كاميرات",
      description: "قم بتوثيق رحلتك مع كاميراتنا الاحترافية",
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
    <header className="max-w-[1400px] h-[60vh] w-full  relative group ">
      <div className="  w-full h-full flex align-middle justify-start items-center md:items-end  relative bg-right md:bg-center bg-cover md:bg-cover bg-blue-100 duration-500">
        <img
          src={slides[currentIndex].url}
          alt="base slide"
          className="absolute top-0 md:w-full md:h-auto h-[100%] w-auto  "
        />
        <div className=" z-50 flex flex-col  max-w-[33%] mx-[20px] ">
          <h4 className="md:text-4xl font-bold text-lg text-center mb-4 animate__fadeIn leading-loose ">
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
