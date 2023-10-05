import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../../constant";

const UniqueProducts = () => {
  const [cart, setCart] = useState([]);

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: responsiveSettings,
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <section className="bg-gray-300 p-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        منتجاتنا المميزة
      </h2>
      <div className="w-full relative">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={product.id} className=" ">
              <div className=" w-[95%]   p-5  bg-white rounded-lg shadow-cardShadow transform transition-all duration-300 hover:scale-90">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full  h-28 md:h-40 object-cover mb-4 rounded-t-lg"
                />
                <h3 className=" text-lg md:text-xl text-center font-bold  text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm text-right">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="md:text-lg text-xs font-semibold text-gray-800">
                    ${product.price}
                  </span>
                  <button
                    className="bg-light-btn-primary   text-xs md:text-2xs transition-all duration-300 hover:bg-purple-700 text-white px-3 py-1 rounded-md"
                    onClick={() => addToCart(product)}
                  >
                    إضافة إلى السلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UniqueProducts;
