import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";
// import Nav from './Nav'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className=" w-full h-16 flex px-6 justify-between fixed items-center bg-white z-50">
      <NavLink to="/">
        <img src="./images/store.png" alt="Store LOGO" className="h-10" />
      </NavLink>
      <ul className="hidden md:flex uppercase items-center  font-medium">
        <li className="mx-5">
          <NavLink
            to="/"
            className="hover:text-[#0eadb3] duration-300  focus:text-[#0eadb3]"
          >
            home
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink
            to="/about"
            className="hover:text-[#0eadb3] duration-300 focus:text-[#0eadb3] "
          >
            About
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink
            to="/products"
            className="hover:text-[#0eadb3] duration-300 focus:text-[#16989c] "
          >
            products
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink
            to="/contact"
            className="hover:text-[#0eadb3] duration-300 focus:text-[#16989c] "
          >
            Contact
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink
            to="/cart"
            className="hover:text-[#0eadb3] duration-300 focus:text-[#16989c] relative"
          >
            <HiOutlineShoppingCart size={28} />
            <div className="h-4 w-4  bg-[#16989c] flex items-center justify-center rounded-full absolute -top-[5px] left-4">
              <span className="text-[10px] text-white">10</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className=" md:hidden z-[99] ">
        {navOpen ? (
          <MdClose
            onClick={() => setNavOpen(!navOpen)}
            size={25}
            className="cursor-pointer hover:rotate-90 hover:text-[#16989c] duration-300 "
          />
        ) : (
          <SlMenu
            onClick={() => setNavOpen(!navOpen)}
            size={25}
            className="cursor-pointer hover:rotate-90 hover:text-[#16989c] duration-300 "
          />
        )}
      </div>
      {navOpen && (
        <ul className="flex flex-col justify-center gap-10 items-center absolute top-0 left-0 w-full h-screen md:hidden z-40 uppercase  font-medium bg-white ">
          <li className="mx-5">
            <NavLink
              to="/"
              className="hover:text-[#0eadb3] duration-300  focus:text-[#0eadb3] px-4 cursor-pointer  py-5 my-2"
              onClick={() => setNavOpen(!navOpen)}
            >
              home
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/about"
              onClick={() => setNavOpen(!navOpen)}
              className="hover:text-[#0eadb3] duration-300 focus:text-[#0eadb3] px-4 cursor-pointer   py-5 my-2"
            >
              About
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/product"
              onClick={() => setNavOpen(!navOpen)}
              className="hover:text-[#0eadb3] duration-300 focus:text-[#16989c] px-4 cursor-pointer   py-5 my-2"
            >
              products
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/contact"
              onClick={() => setNavOpen(!navOpen)}
              className="hover:text-[#0eadb3] duration-300 focus:text-[#16989c] px-4 cursor-pointer   py-5 my-2 "
            >
              Contact
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/cart"
              onClick={() => setNavOpen(!navOpen)}
              className="hover:text-[#0eadb3] duration-300 focus:text-[#16989c] relative px-4 cursor-pointer  py-5 my-2"
            >
              <HiOutlineShoppingCart size={28} />
              <div className="h-4 w-4  bg-[#16989c] flex items-center justify-center rounded-full absolute top-[39px] left-4 ">
                <span className="text-[10px] text-white ">10</span>
              </div>
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
