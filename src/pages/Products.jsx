import React from "react";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import { useFilterContext } from "../context/filter_Context";
import Sort from "./Sort";

const Products = () => {
  const { filter_Products } = useFilterContext();
  
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto grid grid-flow-col grid-cols-5 ">
        <div className="hidden  md:block col-span-1">
          <FilterSection />
        </div>
        <section className="col-span-5">
          <div><Sort/></div>
          <div className="mx-auto">
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
