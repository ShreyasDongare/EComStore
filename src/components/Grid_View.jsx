import React from "react";
import Product_ from "./Product_";

const Grid_View = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {products.map((item) => {
        return (
          <div key={item.id} className="px-4 w-52 mx-auto md:w-72 my-4">
            <Product_ item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid_View;
