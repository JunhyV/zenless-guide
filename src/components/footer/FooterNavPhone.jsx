import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import FooterOverlay from "./FooterOverlay";

const FooterNavPhone = ({currentLocation, displayOverlay, overlayToggle}) => {
  return (
    <div className="flex p-2 items-center justify-between text-white text-3xl">
      <div className="flex gap-2 items-center ">
        <FontAwesomeIcon icon={currentLocation.icon} />
        <p className="uppercase text-xl">{currentLocation.name}</p>
      </div>
      {displayOverlay ? <FooterOverlay overlayToggle={overlayToggle}/> : null}
      <FontAwesomeIcon icon={faBars} onClick={overlayToggle}  className="z-10"/>
    </div>
  );
};

export default FooterNavPhone;
