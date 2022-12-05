import React from 'react'
import { BsCashCoin } from "react-icons/bs";
import { SiFastapi } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { RiTruckLine } from "react-icons/ri";


const Services = () => {
  return (
    <div className="w-full h-[75vh] md:h-[60vh] flex flex-col items-center justify-center antialiased">
      <div className="my-6">
        <h1 className="capitalize text-4xl antialiased text-gray-700">
          services
        </h1>
      </div>
      <div className="font-light text-xs md:text-base md:font-medium max-w-screen-lg mx-auto flex flex-col  md:flex-row h-96 md:h-[19rem]   ">
        <div className="w-[22rem] md:w-[19rem] h-64 md:h-72  flex  items-center justify-center p-2">
          <div className="h-full w-full  bg-gray-200 rounded-lg flex flex-col items-center  justify-center">
            <p>
              <BsCashCoin size={25} className="text-teal-700 my-1" />
            </p>
            <p>Cash on delivery</p>
          </div>
        </div>
        <div className="w-[22rem] md:w-[19rem] h-64 md:h-72 flex flex-row md:flex-col gap-2 items-center justify-center p-2">
          <div className=" w-full h-full  bg-gray-200 rounded-lg flex flex-col items-center  justify-center">
            <p>
              <SiFastapi size={25} className="text-teal-700 my-1" />
            </p>
            <p>Premium subscription</p>
          </div>
          <div className=" w-full h-full  bg-gray-200 rounded-lg flex flex-col items-center  justify-center">
            <p>
              <TiTick size={25} className="text-teal-700 my-1" />
            </p>
            <p> Quality Assurance</p>
          </div>
        </div>
        <div className="w-[22rem] md:w-[19rem] h-64 md:h-72 flex items-center justify-center p-2">
          <div className="h-full w-full  bg-gray-200 rounded-lg flex flex-col items-center  justify-center">
            <p>
              <RiTruckLine size={25} className="text-teal-700 my-1" />
            </p>
            <p>Fast Delivery</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
