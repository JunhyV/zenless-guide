import React, { useEffect, useState } from "react";
import FooterNav from "./FooterNav.jsx";
import { navList } from "./footerNav.js";
import FooterNavPhone from "./FooterNavPhone.jsx";

const Footer = () => {
  const [deviceScreen, setDeviceScreen] = useState({width: window.innerWidth, heigth: window.innerHeight});
  const [currentLocation, setCurrentLocation] = useState({});
  const [displayOverlay, setDisplayOverlay] = useState(false);


  const overlayToggle = () => {
    setDisplayOverlay(!displayOverlay);
  };

  useEffect(() => {
    const location = navList.find(
      (link) => link.link === window.location.pathname
    );
    setCurrentLocation(location);
  }, [window.location.pathname]);

  window.addEventListener("resize", () => setDeviceScreen(window.innerWidth));

  return (
    <footer className="flex-none bg-neutral-800">
      {deviceScreen.width < 640 || deviceScreen.heigth < 450 ? (
        <FooterNavPhone currentLocation={currentLocation} displayOverlay={displayOverlay} overlayToggle={overlayToggle}/>
      ) : (
        <FooterNav />
      )}
    </footer>
  );
};

export default Footer;
