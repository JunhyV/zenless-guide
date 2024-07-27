import React, { useEffect, useState } from "react";
import FarmHeader from "./FarmHeader";
import { levelMaterials, lvlUpMaterials } from "../../../utils/farm/levelMaterals";
import FarmContent from "./FarmContent";

const LevelMaterials = ({ name, element, img, rol }) => {
  const [fromColor, setFromColor] = useState("");
  const [toColor, setToColor] = useState("");

  useEffect(() => {
    // Get bg color
    if (element) {
      switch (element) {
        case "ether":
          setFromColor("from-fuchsia-400");
          setToColor("to-fuchsia-100");
          break;
        case "electric":
          setFromColor("from-blue-400");
          setToColor("to-blue-100");
          break;
        case "fire":
          setFromColor("from-rose-400");
          setToColor("to-rose-100");
          break;
        case "physical":
          setFromColor("from-yellow-400");
          setToColor("to-yellow-100");
          break;
        case "ice":
          setFromColor("from-cyan-400");
          setToColor("to-cyan-100");
          break;
        default:
          break;
      }
    }
  }, [element]);
  return (
    <div
      role="lvl-materials"
      className={`relative bg-gradient-to-b ${fromColor ? fromColor : ""} ${
        toColor ? toColor : ""
      } p-2`}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <h2 className="text-2xl mb-2 font-medium text-center text-white relative">
        Agent Level{" "}
      </h2>
      <div
        role="lvl-materials-content"
        className="relative grid lg:grid-cols-2"
      >
        <div role="agent-img" className="">
          <img
            src={`https://i.imgur.com/${img}.png`}
            alt={name}
            className="w-full h-full object-cover object-top aspect-square"
          />
        </div>
        <div className="grid gap-5">
          <div role="promotion-table">
            <FarmHeader />
            <FarmContent materials={levelMaterials} element={""} rol={rol} />
          </div>
          <div role="lvl-up-table">
            <FarmHeader/>
            <FarmContent materials={lvlUpMaterials} element={'exp'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelMaterials;
