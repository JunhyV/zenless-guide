import React, { useCallback, useEffect, useState } from "react";
import FooterNav from "./FooterNav.jsx";
import FooterNavPhone from "./FooterNavPhone.jsx";

const Footer = () => {
  const [deviceScreen, setDeviceScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
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

  return (
    <footer className="flex-none flex flex-col bg-neutral-800 z-10">
      {deviceScreen.width < 768 || deviceScreen.height < 450 ? (
        <FooterNavPhone
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
