import React from "react"
import ReactDom from "react-dom"
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./components/product";
import App from "./App";

const root = ReactDom.render(<Product/>, document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);