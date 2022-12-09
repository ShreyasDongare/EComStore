import React, { useState } from "react";
import { TiTick } from "react-icons/ti";   

const AddToCart = ({ singleProduct }) => {
  const { id, colors, stock } = singleProduct;

  const [color, setColor] = useState(colors[0])

  console.log(colors);
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
              } flex justify-center items-center` }
            >
              {color === currentColor ? <TiTick className={currentColor === "#000000" || "#000" ? "text-white" : "text-black"} /> : null}
            </button>
          );
        })}
      </p>
    </div>
  );
};

export default AddToCart;
