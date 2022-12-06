import axios from "axios";
import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/ProductReducer";


const AppContext = createContext()


// const API_URL = "https://fakestoreapi.com/products";
const API_URL = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading: false,
    isError: false,
    Products : [],
    featuredProducts: []
}

const DataProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

const fetchProducts = async (url) => {
    dispatch({type:"IS_LOADING"})
 try {
	 const resp = await axios.get(url);
	  const products = await resp.data;
      dispatch({type: "PRODUCT_DATA", payload: products})
    } catch (error) {
        dispatch({type: "IS_ERROR"})
	
}
}

useEffect(() => {
  fetchProducts(API_URL);
}, []);


   return  <AppContext.Provider >{children}</AppContext.Provider>

}

export { AppContext, DataProvider };