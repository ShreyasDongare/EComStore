import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterContextProvider } from "./context/FilterContext";
import { DataProvider } from "./context/Product_Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </DataProvider>
);
