import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import Modal from "./Modal";
import Login from "./Login";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 w-full flex items-center gap-4 px-4 md:px-8 lg:px-10 xl:px-16 py-4 bg-gray-50 border-b border-gray-300">
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
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch
              className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-gray-500"
              onClick={handleSearch}
            />
          </form>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            to="/cart"
            className="relative text-xl text-gray-700 hover:text-red-500 transition-colors"
          >
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span
                className="absolute top-0 text-xs w-3 left-3
              bg-red-600 rounded-full flex justify-center
              items-center text-white"
              >
                {products.length}
              </span>
            )}
          </Link>

          <button
            className="hidden md:block whitespace-nowrap font-medium text-gray-700 hover:text-red-500 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>

          <button
            className="md:hidden text-xl text-gray-700 hover:text-red-500"
            onClick={() => setIsModalOpen(true)}
          >
            <FaUser />
          </button>
        </div>
      </div>

      {/*These are main menu */}
      <div className="border-t border-gray-200 bg-gray-50 mt-18 shadow-md border-b border-gray-300">
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
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
