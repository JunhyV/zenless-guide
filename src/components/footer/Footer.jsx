import React, { useCallback, useEffect, useState } from "react";
import FooterNav from "./FooterNav.jsx";
import { navList } from "./footerNav.js";
import FooterNavPhone from "./FooterNavPhone.jsx";

const Footer = () => {
  const [deviceScreen, setDeviceScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentLocation, setCurrentLocation] = useState({});
  const [displayOverlay, setDisplayOverlay] = useState(false);

  const overlayToggle = useCallback(() => {
    setDisplayOverlay((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDeviceScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const location = navList.find(
      (link) => link.link === window.location.pathname
    );
    setCurrentLocation(location);
  }, [window.location.pathname]);

  return (
    <footer className="flex-none flex flex-col bg-neutral-800 z-10">
      {deviceScreen.width < 640 || deviceScreen.height < 450 ? (
        <FooterNavPhone
          currentLocation={currentLocation}
          displayOverlay={displayOverlay}
          overlayToggle={overlayToggle}
        />
      ) : (
        <FooterNav />
      )}
    </footer>
  );
};

export default Footer;
