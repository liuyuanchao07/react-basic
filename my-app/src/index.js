import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css"
import store from "./store";
import ThemeContext from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeContext.Provider value={{ store }}>
     <App />
   </ThemeContext.Provider>
);