import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AddcontryContextProvider } from "./context/AddcountryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddcontryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AddcontryContextProvider>
  </React.StrictMode>
);
