import React, { useEffect, useState } from "react";

const AgentBuild = ({element}) => {
  const [screenWidth, setScreenWidth] = useState("");
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setScreenWidth("min-h-full");
    } else {
      setScreenWidth("");
    }
  }, [window.innerWidth]);

  useEffect(() => {
    if (element) {
      switch (element) {
        case "ether":
          setBorderColor("border-fuchsia-400");
          break;
        case "electric":
          setBorderColor("border-blue-400");
          break;
        case "fire":
          setBorderColor("border-rose-400");
          break;
        case "physical":
          setBorderColor("border-yellow-400");
          break;
        case "ice":
          setBorderColor("border-cyan-400");
          break;
        default:
          break;
      }
    }
  }, [element]);

  return (
    <div className="lg:w-1/2 flex flex-col p-2 lg:pl-0 gap-2 md:pt-5 md:gap-5">
      <div
        className={`border-2 shadow-xl rounded-xl p-2 ${
          borderColor ? borderColor : ""
        } bg-neutral-500 min-h-40`}
      >
        Content Up
      </div>
      <div
        className={`grid md:grid-cols-2 ${screenWidth} h-full gap-2 md:gap-5 pb-2 md:pb-5 lg:pb-0`}
      >
        <div
          className={`w-full h-full border-2 shadow-xl rounded-xl p-2 ${
            borderColor ? borderColor : ""
          } bg-neutral-600`}
        >
          {" "}
          Content Left
        </div>
        <div
          className={`w-full h-full border-2 shadow-xl rounded-xl p-2 ${
            borderColor ? borderColor : ""
          } bg-neutral-700 `}
        >
          Content Right
        </div>
      </div>
    </div>
  );
};

export default AgentBuild;
