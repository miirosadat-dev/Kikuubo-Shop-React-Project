import React from "react";
import { Categories } from "../assets/MockData";
import banner1 from "../assets/images/banner1.png";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div
        className="container mx-auto py-4
       flex flex-col md:flex-row space-x-2"
      >
        <div className="w-full md:w-3/12">
          <div
            className="bg-red-600 text-white
          text-xs font-bold px-2 py-2.5"
          >
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border border-gray-300">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-100 relative">
          <img src={banner1} alt="hero image" />
          <div className="absolute lg:top-15 md:top-10 top-1 lg:left-10 md:left-8 left-3">
            <p className="text-gray-600 lg:mb-4 mb-1 text-sm">
              Sadat | Kikuubo Shop
            </p>
            <h2 className="lg:text-5xl lg:mb-5 md:mb-2 mb-0 text-sm font-bold">
              WELCOME TO
              <br /> KIKUUBO SHOP
            </h2>
            <p className="lg:text-2xl lg:mb-5 md:mb-2 mb-1 text-sm lg:mt-1.5 md:mt-1 mt-0 font-bold text-gray-800">
              MILLIONS+ PRODUCTS
            </p>
            <button
              className="bg-red-600 lg:text-3xl text-sm px-8 lg:py-1 md:py-1 py-0.3 text-white lg:mt-4 mt-0
            hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <InfoSection />
    </div>
  );
};

export default Home;
