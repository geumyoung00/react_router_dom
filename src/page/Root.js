import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
};

export default RootLayout;
