import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoadingAgent = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pt-16 min-h-full text-white left-0 px-5 flex flex-col lg:flex-row justify-center items-center gap-5 md:mt-5 lg:mt-0">
      <div className="bg-neutral-700 h-fit p-5 rounded-xl w-full">
        <div className="animate-pulse grid gap-5">
          <FontAwesomeIcon
            icon={faUser}
            className="text-neutral-400 w-40 h-40 mt-5 mx-auto"
          />
          <div className="grid gap-2">
            <p className="w-full bg-neutral-400 rounded-full h-6"></p>
            <p className="w-full bg-neutral-400 rounded-full h-6"></p>
            <p className="w-full bg-neutral-400 rounded-full h-6"></p>
            <p className="w-1/2 bg-neutral-400 rounded-full h-6"></p>
          </div>
        </div>
      </div>
      {dimensions.width < 768 || dimensions.height < 450 ? null : (
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="bg-neutral-700 h-fit p-5 rounded-xl w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2">
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-1/2 bg-neutral-400 rounded-full h-6"></p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-700 h-fit p-5 rounded-xl w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2">
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-1/2 bg-neutral-400 rounded-full h-6"></p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-700 h-fit p-5 rounded-xl w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2">
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-1/2 bg-neutral-400 rounded-full h-6"></p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-700 h-fit p-5 rounded-xl w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2">
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-full bg-neutral-400 rounded-full h-6"></p>
                <p className="w-1/2 bg-neutral-400 rounded-full h-6"></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingAgent;
