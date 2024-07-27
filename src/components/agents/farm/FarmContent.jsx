import React, { useEffect, useState } from "react";
import hamster from "../../../assets/images/zzz-materials/skill-materials/UltimateSkill.webp";
import dennies from "../../../assets/images/zzz-materials/dannies.webp";

const FarmContent = ({ materials, element, rol }) => {
  const [imgType, setImgType] = useState("");

  useEffect(() => {
    if (element) {
      setImgType(element);
    } else if (rol) {
      setImgType(rol);
    }
  }, [element, rol]);

  return (
    <div role="content">
      {materials.map((material, i) => (
        <div
          role="each-lvl"
          className="flex p-1 text-white border-2 border-t-0 border-neutral-900"
          key={material.lvl}
        >
          <p className="w-1/4 flex items-center justify-center">
            {material.lvl}
          </p>
          <div className="w-2/4 flex gap-2 md:gap-5 justify-center items-center">
            {material.farm.length > 0 &&
              material.farm.map((item, j) => {
                const farmCore = j === 0 ? imgType[1] : imgType[0];
                return (
                  <div className="flex gap-2" key={item.number + j}>
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
  );
};

export default FarmContent;
