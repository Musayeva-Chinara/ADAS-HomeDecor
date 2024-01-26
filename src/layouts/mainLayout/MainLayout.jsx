import React from "react";
// import Header from "../companents/footer";
import { Outlet } from "react-router-dom";
import Header from "../../assets/companents/header/Header";
import Footer from "../../assets/companents/footer/Footer";
// import Header from "../../companents/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
