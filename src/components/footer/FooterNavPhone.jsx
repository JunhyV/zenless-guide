import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import FooterOverlay from "./FooterOverlay";

const FooterNavPhone = ({ displayOverlay, overlayToggle}) => {
  return (
    <div className="flex p-2 items-center justify-end text-white text-3xl">
      {displayOverlay ? <FooterOverlay overlayToggle={overlayToggle}/> : null}
      <FontAwesomeIcon icon={faBars} onClick={overlayToggle}  className="z-10"/>
    </div>
  );
};

export default FooterNavPhone;
