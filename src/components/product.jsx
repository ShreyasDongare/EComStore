import React from 'react'
import { NavLink } from 'react-router-dom';

const product = ({item}) => {
    const { id, name, image, price, category } = item
  return (
    <NavLink to={`/singleproduct/${id}`} key={id}>
      <div className="flex flex-col capitalize ">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="rounded-lg my-1 -z-30 hover:scale-105 duration-300"
          />
          <div className="absolute top-5 text-sm left-4 text-white bg-teal-600 hover:bg-teal-800 rounded-full px-4 py-2">
            {category}
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div>
            <p>{name}</p>
          </div>
          <div>
            <p>
              {Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(price/100)}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default product
