import React from "react";
import { Outlet } from "react-router-dom";

const MyAccountLayout = () => {
  return (
    <>
      <span></span>
      <div>
        <div></div>
        <Outlet />
      </div>
    </>
  );
};

export default MyAccountLayout;
