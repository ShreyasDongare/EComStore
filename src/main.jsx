import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterContextProvider } from "./context/filter_Context";
import { DataProvider } from "./context/productContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </DataProvider>
);
