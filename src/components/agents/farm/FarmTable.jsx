import React, { useEffect, useState } from "react";
import hamster from "../../../assets/images/zzz-materials/skill-materials/UltimateSkill.webp";
import dennies from "../../../assets/images/zzz-materials/dannies.webp";

const FarmTable = ({ materials, element, rol = "" }) => {
  const [imgType, setImgType] = useState("");
  const [borderColor, setBorderColor] = useState("");

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

  useEffect(() => {
    if (!rol) {
      setImgType(element);
    } else if (rol) {
      setImgType(rol);
    }
  }, [element, rol]);

  useEffect(() => {
    if (typeof imgType === 'object') {
      console.log(imgType);
    }
  }, [imgType])
  

  return (
    <div role="farm-table" className="shadow-2xl h-fit ">
      <header
        role="table-header"
        className={`flex bg-neutral-900 border-2 rounded-t-xl ${
          borderColor ? borderColor : ""
        } text-white p-2 font-thin text-xl text-center`}
      >
        <p className="w-1/4 p-0.5 ">Lvl</p>
        <p className="w-2/4 p-0.5 ">Materials</p>
        <p className="w-1/4 p-0.5 ">Dennies</p>
      </header>

      <div role="table-content">
        {materials.map((material, i) => (
          <div
            role="each-lvl"
            className={`flex text-white font-medium p-1 border border-t-0 ${
              borderColor ? borderColor : ""
            } ${i % 2 ? "bg-neutral-600" : "bg-neutral-700"}`}
            key={material.lvl}
          >
            <p className="w-1/4 flex items-center justify-center">
              {material.lvl}
            </p>
            <div className="w-2/4 flex gap-2 md:gap-5 justify-center items-center">
              {material.farm.length > 0 &&
                material.farm.map((item, i) => {
                  const farmCore = i === 0 ? imgType[1] : imgType[0];
                  return (
                    <div className="flex gap-2" key={item.number + i}>
                      <div className="flex gap-1 md:gap-2 items-end">
                        {item.number !== "Pending..." &&
                        material.lvl.length !== 1 ? (
                          <img
                            src={item.img[imgType]}
                            alt="material"
                            className="w-8 h-8 md:w-12 md:h-12"
                          />
                        ) : null}
                        {material.lvl.length === 1 ? (
                          <img
                            src={item.img[farmCore]}
                            alt="material"
                            className="w-10 h-10 md:w-14 md:h-14"
                          />
                        ) : null}
                        <p>x{item.number}</p>
                      </div>
                      {item.hamster && (
                        <div className="flex gap-2 items-end">
                          <img
                            src={hamster}
                            alt="hamster"
                            className="w-8 h-8 md:w-10 md:h-10"
                          />
                          <p>x1</p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <div className="w-1/4 flex items-center gap-1 md:gap-2 justify-center">
              <img
                src={dennies}
                alt="dennies"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <p>x{material.dennies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmTable;
