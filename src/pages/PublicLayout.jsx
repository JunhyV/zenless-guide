import React from "react";
import { Outlet } from "react-router-dom";
import  Footer  from "../components/footer/Footer";
import Header from "../components/header/Header";

const PublicLayout = () => {
  return (
    <div className="w-screen min-h-screen lg:h-screen flex flex-col ">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default PublicLayout;
