import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ pageTitle }) => {
  return (
    <div className="py-3 px-5">
      <NavLink to={"/"} className="text-sm md:text-base text-teal-700">
        Home
      </NavLink>
      <span className="text-sm md:text-base">/{pageTitle}</span>
    </div>
  );
};

export default PageNavigation
