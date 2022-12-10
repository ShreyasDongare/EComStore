import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const AddQuantityToggler = ({ amount, QtyIncrease, QtyDecrease }) => {
  return (
    <div className="flex items-center gap-4  my-3">
      <p>Seclect Quantity:</p>
      <div className="flex items-center w-20 justify-between">
        <button onClick={() => QtyDecrease()} className="text-teal-800">
          <AiOutlineMinus size={20} />
        </button>
        <p className="text-xl">{amount}</p>
        <button onClick={() => QtyIncrease()} className="text-teal-800">
          <AiOutlinePlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default AddQuantityToggler;
