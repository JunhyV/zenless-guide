import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="absolute inset-0 bg-phone md:bg-desktop bg-cover bg-no-repeat bg-center opacity-50"></div>
      <div className="relative flex-1 overflow-auto">
        <div className="relative h-full xl:max-w-screen-2xl mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
