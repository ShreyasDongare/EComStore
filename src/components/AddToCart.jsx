import React, { useState } from "react";
import { TiTick } from "react-icons/ti";   
import { NavLink } from "react-router-dom";
import AddQuantityToggler from "./AddQuantityToggler";

const AddToCart = ({ singleProduct }) => {
  const { id, colors, stock } = singleProduct;

  const [color, setColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const QtyIncrease = ()=>{
    amount < stock ? setAmount(amount + 1 )  :setAmount(stock)
  }
  const QtyDecrease = ()=>{
    amount > 1  ? setAmount(amount - 1 )  :setAmount(1)
  }

  // console.log(colors);
  return (
    <div className="my-5">
      <p className="flex items-center gap-2">
        Available colors:
        {colors.map((currentColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: currentColor }}
              onClick={() => setColor(currentColor)}
              className={`${
                color === currentColor
                  ? "h-8 w-8 rounded-full focus:border-2 border-black"
                  : "h-8 w-8 rounded-full opacity-50"
              } flex justify-center items-center`}
            >
              {color === currentColor ? (
                <TiTick
                  className={
                    currentColor === "#000000" || "#000"
                      ? "text-white"
                      : "text-black"
                  }
                />
              ) : null}
            </button>
          );
        })}
      </p>
      <div>
        <AddQuantityToggler
          amount={amount}
          QtyIncrease={QtyIncrease}
          QtyDecrease={QtyDecrease}
        />
      </div>
      <div>
      <NavLink to={'/cart'}>
          <button className="btn">Add to cart</button>
      </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;
