import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="mx-6 ">
      <ul className="hidden md:flex uppercase ">
        <li className="mx-4 ">
          <NavLink
            className="font-medium duration-300  hover:text-[#0eadb3] focus:text-[#0eadb3]"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className=" mx-4  ">
          <NavLink
            className="font-medium  duration-300 hover:text-[#0eadb3] focus:text-[#0eadb3]"
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li className=" mx-4  ">
          <NavLink
            className="font-medium  duration-300  hover:text-[#0eadb3] focus:text-[#0eadb3]"
            to="/product"
          >
            product
          </NavLink>
        </li>
        <li className=" mx-4  ">
          <NavLink
            className="font-medium  duration-300 hover:text-[#0eadb3] focus:text-[#0eadb3]"
            to="/contact"
          >
            contact
          </NavLink>
        </li>
        <li className=" mx-4  ">
          <NavLink
            className="duration-300 hover:text-[#0eadb3] focus:text-[#0eadb3] flex relative"
            to="/cart "
          >
            <HiOutlineShoppingCart size={24} />
            <span className="text-[10px] text-white bg-[#0eadb3] rounded-xl w-4 h-4 text-center absolute left-3 -top-1">
              10
            </span>
          </NavLink>
        </li>
      </ul>
      {/* hamburger menu  */}
      <div className="  overflow-hidden">
        {navOpen ? (
          <MdClose
            onClick={() => setNavOpen(!navOpen)}
            size={25}
            className="z-10 font-medium md:hidden cursor-pointer hover:text-[#0eadb3] hover:rotate-90 duration-300"
          />
        ) : (
          <SlMenu
            onClick={() => setNavOpen(!navOpen)}
            size={25}
            className=" z-10 font-medium md:hidden cursor-pointer hover:text-[#0eadb3] hover:rotate-90 duration-300"
          />
        )}
      </div>
      {navOpen && (
        <ul className="bg-white  flex flex-col justify-center items-center absolute top-16 left-0 w-full h-[89vh]  uppercase  md:hidden z-10 ">
          <li className="my-4 px-4 py-2 ">
            <NavLink
              className="font-medium duration-300 text-xl hover:text-[#0eadb3] focus:text-[#0eadb3]"
              to="/"
              onClick={() => setNavOpen(!navOpen)}
            >
              Home
            </NavLink>
          </li>
          <li className=" my-4 px-4 py-2  ">
            <NavLink
              className="font-medium text-xl duration-300 hover:text-[#0eadb3] focus:text-[#0eadb3]"
              onClick={() => setNavOpen(!navOpen)}
              to="/about"
            >
              about
            </NavLink>
          </li>
          <li className=" my-4 px-4 py-2  ">
            <NavLink
              className="font-medium text-xl duration-300  hover:text-[#0eadb3] focus:text-[#0eadb3]"
              to="/product"
              onClick={() => setNavOpen(!navOpen)}
            >
              product
            </NavLink>
          </li>
          <li className=" my-4 px-4 py-2  ">
            <NavLink
              className="font-medium text-xl duration-300 hover:text-[#0eadb3] focus:text-[#0eadb3]"
              to="/contact"
              onClick={() => setNavOpen(!navOpen)}
            >
              contact
            </NavLink>
          </li>
          <li className=" my-4 px-4 py-2  ">
            <NavLink
              className="duration-300 text-xl hover:text-[#0eadb3] focus:text-[#0eadb3] flex relative"
              to="/cart "
              onClick={() => setNavOpen(!navOpen)}
            >
              <HiOutlineShoppingCart size={30} />
              <span className="text-[10px] text-white pb-5 bg-[#0eadb3] text-center rounded-full align-text-top w-5 h-5  absolute left-4 -top-2">
                10
              </span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
