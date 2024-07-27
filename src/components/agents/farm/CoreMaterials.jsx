import React, { useEffect, useState } from "react";
import FarmHeader from "./FarmHeader";
import FarmContent from "./FarmContent";
import { coreMaterials } from "../../../utils/farm/coreMaterials";
import {
  useAdvance,
  useAwe,
  useDrive,
  useGrip,
  useMalice,
  useObitaury,
  usePursuit,
  useShoes,
} from "../../../utils/farm/coreMaterials";

const CoreMaterials = ({ element, name }) => {
  const [fromColor, setFromColor] = useState("");
  const [toColor, setToColor] = useState("");
  const [getCore, setGetCore] = useState({
    0: "",
    1: "",
  });

  useEffect(() => {
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

  useEffect(() => {
    const newCoreMaterials = { ...getCore };

    if (name) {
      if (useGrip.some((n) => name.includes(n))) {
        newCoreMaterials[0] = "grip";
      } else if (useDrive.some((n) => name.includes(n))) {
        newCoreMaterials[0] = "drive";
      } else if (useShoes.some((n) => name.includes(n))) {
        newCoreMaterials[0] = "shoes";
      }

      if (useObitaury.some((n) => name.includes(n))) {
        newCoreMaterials[1] = "obitaury";
      } else if (useAwe.some((n) => name.includes(n))) {
        newCoreMaterials[1] = "awe";
      } else if (usePursuit.some((n) => name.includes(n))) {
        newCoreMaterials[1] = "pursuit";
      } else if (useMalice.some((n) => name.includes(n))) {
        newCoreMaterials[1] = "malice";
      } else if (useAdvance.some((n) => name.includes(n))) {
        newCoreMaterials[1] = "advance";
      }
    }

    setGetCore(newCoreMaterials);
  }, [name]);
  
  return (
    <div
      role="core-materials"
      className={`relative bg-gradient-to-b ${fromColor ? fromColor : ""} ${
        toColor ? toColor : ""
      } p-2 lg:h-fit`}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <h2 className="text-2xl mb-2 font-medium text-center text-white relative">
        Core Skill Materials
      </h2>
      <div role="skill-materials-content" className="grid relative">
        <div role="table">
          <FarmHeader />
          <FarmContent materials={coreMaterials} element={""} rol={getCore} />
        </div>
      </div>
    </div>
  );
};

export default CoreMaterials;