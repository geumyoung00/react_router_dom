import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const PRODUCTS = [
    { id: 111, title: "Sunscreen" },
    { id: 222, title: "Coffee beans" },
    { id: 333, title: "Paper towels" },
    { id: 444, title: "Dish soap" },
  ];

  return (
    <>
      <h1>Product</h1>
      <Link to="/">
        <button>홈으로 이동</button>
      </Link>

      <ul>
        <li>
          <Link to="/product/11">11</Link>
        </li>
        <li>
          <Link to="/product/22">22</Link>
        </li>
      </ul>
    </>
  );
};

export default Product;
