import React from "react";
import TestImg from "/images/Testimonial.jpg";

const Testimonial = () => {
  return (
    <div className="w-full h-[50vh] bg-gray-200 flex items-center justify-center ">
      <div className="flex flex-col md:justify-center items-center p-4">
        <div className="max-w-screen-lg  ">
          <img
            src={TestImg}
            alt=""
            className=" object-cover  rounded-full h-[200px] w-[200px] md:h-[200px] md:w-[200px]"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-center">
          <h2 className="text-lg">Robert Jey</h2>
          <p className="text-xs md:text-base md:w-2/3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            odio eligendi voluptatem quos dolorem exercitationem nam nobis
            voluptas sapiente omnis laboriosam facilis, veritatisgit a
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
