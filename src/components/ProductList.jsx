import React from "react";
import { useFilterContext } from "../context/FilterContext";
import Grid_View from "./Grid_View";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_Products, setGridView, grid_View } = useFilterContext();

  if (grid_View === true) {
    return <Grid_View products={filter_Products} />;
  }

  if (grid_View === false) {
    return <ListView products={filter_Products} />;
  }
};

export default ProductList;
