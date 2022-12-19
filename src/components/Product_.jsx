import React from "react";
import { NavLink } from "react-router-dom";

const Product_ = ({ item }) => {
  const { id, name, image, price, category } = item;

  const pirceRs = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price / 100);

  return (
    <NavLink to={`/singleproduct/${id}`} key={id}>
      <div className="flex flex-col capitalize ">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="rounded shadow-md shadow-slate-800 md:rounded-lg my-1 -z-30 hover:scale-105 duration-300 h-32 md:h-44"
          />
          <div className="absolute top-3 left-2 md:top-5  md:left-4 text-xs md:text-sm  text-white bg-teal-600 hover:bg-teal-800 rounded-full px-2 py-1 md:px-4 md:py-2">
            {category}
          </div>
        </div>
        <div className="flex justify-between md:my-2">
          <div>
            <p className="text-sm md:text-base">{name}</p>
          </div>
          <div>
            <p className="text-sm md:text-base"> {pirceRs}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product_;
