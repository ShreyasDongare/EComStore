import axios from "axios";
import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API_URL = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.products, "product context")

  const fetchProducts = async (url) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const resp = await axios.get(url);
      const products = await resp.data;

      dispatch({ type: "PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "IS_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts(API_URL);
  }, []);

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "IS_SINGLE_LOADING" });
    try {
      const resp = await axios.get(url);
      const singleProduct = await resp.data;
      // console.log(singleProduct)
      dispatch({ type: "SINGLE_PRODUCT_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "IS_SINGLE_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, DataProvider };
