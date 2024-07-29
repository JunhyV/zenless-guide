import React, { useEffect, useState } from "react";

const MidscapeDetails = ({ data, element }) => {
  const { id, name, description } = data;
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (element) {
      switch (element) {
        case "ether":
          setBgColor("bg-fuchsia-400");
          break;
        case "electric":
          setBgColor("bg-blue-400");
          break;
        case "fire":
          setBgColor("bg-rose-400");
          break;
        case "physical":
          setBgColor("bg-yellow-400");
          break;
        case "ice":
          setBgColor("bg-cyan-400");
          break;
        default:
          break;
      }
    }
  }, [element]);

  return (
    <div className={`flex justify-center w-full`}>
      <h2 className={`${bgColor ? bgColor : ""} p-1 h-10 font-black flex items-center`}>
        M{id}
      </h2>
      <div className="w-full">
        <h3 className="font-medium min-h-10 p-1 bg-neutral-800 flex justify-between items-center text-white">
          {name}
        </h3>
        <div
          className={`bg-neutral-600 text-white transition-max-height duration-500 ease-in-out overflow-hidden`}
        >
          <p className="p-1 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MidscapeDetails;
