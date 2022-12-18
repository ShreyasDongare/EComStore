import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { AppContext } from "./productContext";
import reducer from "./filterReducer";
import product from "../components/Product";

const FilterContext = createContext();
const initialState = {
  filter_Products: [],
  all_Products: [],
  grid_View : true
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(products, "outside");
  // to setGridView
  const setGridView = ()=>{
    return dispatch({type: "SET_GRIDVIEW"})
  }

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    console.log(products);
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
