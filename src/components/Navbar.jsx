import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="w-full flex items-center gap-4 px-4 md:px-8 lg:px-10 xl:px-16 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-base md:text-xl font-bold text-gray-800 whitespace-nowrap hover:text-red-500 transition-colors"
          >
            KIKUUBO SHOP
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1">
          <form className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
          </form>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            to="/cart"
            className="relative text-xl text-gray-700 hover:text-red-500 transition-colors"
          >
            <FaShoppingCart />
          </Link>

          <button className="hidden md:block whitespace-nowrap font-medium text-gray-700 hover:text-red-500 transition-colors">
            Login | Register
          </button>

          <button className="md:hidden text-xl text-gray-700 hover:text-red-500">
            <FaUser />
          </button>
        </div>
      </div>

      {/*These are main menu */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-center gap-4 md:gap-8 overflow-x-auto whitespace-nowrap px-4 py-3 text-sm font-semibold text-gray-700">
          <Link
            to="/"
            className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-red-500 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-red-500 hover:text-white"
          >
            Shop
          </Link>

          <Link
            to="/contact"
            className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-red-500 hover:text-white"
          >
            Contact
          </Link>

          <Link
            to="/about"
            className="rounded-md px-3 py-2 transition-all duration-200 hover:bg-red-500 hover:text-white"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
