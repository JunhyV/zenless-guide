import React from "react";
import Header from "../header/Header";
import FooterNav from "./FooterNav";

const FooterOverlay = ({ overlayToggle }) => {
  return (
    <div className="absolute top-0 left-0 bg-neutral-800 w-screen h-screen">
      <Header />
      <FooterNav overlayToggle={overlayToggle} />
    </div>
  );
};

export default FooterOverlay;
