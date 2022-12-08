import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ heroData }) => {
  const { greet, title, info, info2, button, image, buttonStatus } = heroData;
  return (
    <div className="w-full  h-screen flex items-center antialiased z-50">
      <div className="md:max-w-screen-lg mx-auto md:h-[25rem]  flex flex-col justify-center py-2  md:flex-row gap-10 px-4">
        <div className="flex-1 flex items-center h-85">
          <div>
            <p>{greet}</p>
            <h1 className="text-5xl md:text-8xl">{title}</h1>
            <p className="mt-4 antialiased">{info}</p>
            <p className="pb-4 pt-1">{info2}</p>
            <NavLink to="/Products">
              <button
                className={`${buttonStatus} btn my-auto hover:bg-[#0a7b80]`}
              >
                {button}
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex-1 h-85 relative flex items-center">
          <img
            src={image}
            alt="homeImg"
            className="h-72 md:h-80 w-full rounded-tr-3xl rounded-bl-3xl md:rounded-bl-[2rem] md:rounded-tr-[2rem] object-cover -z-10  shadow-xl shadow-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
