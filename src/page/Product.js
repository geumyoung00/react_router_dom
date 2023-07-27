import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Product = () => {
  const PRODUCTS = [
    { id: 111, title: "Sunscreen" },
    { id: 222, title: "Coffee beans" },
    { id: 333, title: "Paper towels" },
    { id: 444, title: "Dish soap" },
  ];
  const homeNavigate = useNavigate();
  const onClickHome = () => {
    homeNavigate("/");
  };

  return (
    <>
      <h1>Product</h1>
      <button onClick={onClickHome}>홈으로 이동</button>

      <ul>
        <li>
          <Link to="/product/11">11</Link>
        </li>
        <li>
          <Link to="/product/22">22</Link>
        </li>
      </ul>

      <ul>
        {PRODUCTS.map((el, id) => {
          return (
            <li>
              <Link to={`/product/${el.id}`}>{el.title.toString()}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Product;
