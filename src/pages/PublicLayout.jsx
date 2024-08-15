import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FooterNav from "../components/footer/FooterNav";
import FooterNavPhone from "../components/footer/FooterNavPhone";

const PublicLayout = () => {
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
    <div className="flex flex-col h-screen">
      {deviceScreen.width < 768 || deviceScreen.height < 450 ? (
        <footer className="flex-none flex flex-col bg-neutral-800 z-10">
          <FooterNavPhone
            displayOverlay={displayOverlay}
            overlayToggle={overlayToggle}
          />
        </footer>
      ) : null}
      <div className="absolute inset-0 bg-phone md:bg-desktop bg-cover bg-no-repeat bg-center opacity-50"></div>
      <div className="relative flex-1 overflow-auto">
        <div className="relative h-full xl:max-w-screen-2xl mx-auto">
          <Outlet />
        </div>
      </div>
      {deviceScreen.width < 768 || deviceScreen.height < 450 ? null : (
        <footer className="flex-none flex flex-col bg-neutral-800 z-10">
          <FooterNav />
        </footer>
      )}
    </div>
  );
};

export default PublicLayout;
