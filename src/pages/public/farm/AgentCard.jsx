import React, { useEffect, useState } from "react";
import { elementOptions, rolOptions, skillImage } from "../../../utils/options";
import { getOptions } from "../../../utils/functions/general/get";
import CoreOptions from "../../../components/titles/CoreOptions";
import LevelOptions from "../../../components/titles/LevelOptions";
import {
  deleteSelected,
  handleData,
  handleMAX,
  handleRecommended,
} from "../../../utils/functions/public/farm/agentCard";
import { calculateSigleMaterials } from "../../../utils/functions/public/farm/calculateMaterials";
import FarmMaterials from "./FarmMaterials";

const AgentCard = ({ data, set, list, materials, setMaterials }) => {
  const { name, rol, element, lvl, img, core, rank } = data;

  const skills = ["basic", "dodge", "assist", "special", "chain"];

  useEffect(() => {
    const getMaterials = calculateSigleMaterials(data);
    const exists = materials.some((li) => li.name === name);

    if (exists) {
      const newMaterials = materials.map((li) =>
        li.name === name ? { name, materials: getMaterials } : li
      );
      setMaterials(newMaterials);
    } else {
      setMaterials([...materials, { name, materials: getMaterials }]);
    }
  }, [data]);

  return (
    <div>
      <div
        className={`bg-gradient-to-b  from-neutral-800 to-neutral-600 mx-auto p-2 flex flex-col gap-5 lg:gap-2 lg:max-w-lg md:p-3 shadow-xl border`}
      >
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              className="font-medium border p-2 hover:text-sky-400 hover:border-sky-400"
              onClick={() => handleMAX(name, set)}
            >
              MAX
            </button>
            <button
              className="font-medium border p-2 hover:text-amber-400 hover:border-amber-400"
              onClick={() => handleRecommended(name, set, rol)}
            >
              Recommended
            </button>
          </div>
          <div>
            <button
              className="font-medium p-2 hover:text-rose-400"
              onClick={() => deleteSelected(name, list, set)}
            >
              X
            </button>
          </div>
        </div>

        <div className="grid md:flex gap-5">
          <div className="md:w-2/5 flex flex-col gap-5">
            <div className="grid gap-2 border p-1 bg-neutral-800">
              <div className="flex justify-between">
                <p className="font-medium">Level</p>
                <p className="font-thin">1 &rarr; {lvl}</p>
              </div>
              <div className="flex justify-between">
                <LevelOptions
                  type={"10"}
                  name={data.name}
                  set={set}
                  data={lvl}
                />
                <LevelOptions
                  type={"20"}
                  name={data.name}
                  set={set}
                  data={lvl}
                />
                <LevelOptions
                  type={"30"}
                  name={data.name}
                  set={set}
                  data={lvl}
                />
                <LevelOptions
                  type={"40"}
                  name={data.name}
                  set={set}
                  data={lvl}
                />
                <LevelOptions
                  type={"50"}
                  name={data.name}
                  set={set}
                  data={lvl}
                />
                <LevelOptions
                  type={"60"}
                  name={data.name}
                  set={set}
                  data={lvl}
                />
              </div>
            </div>

            <div>
              <div
                className={`bg-gradient-to-b ${
                  rank === "S"
                    ? "from-amber-600 to-amber-400"
                    : "from-purple-600 to-purple-400"
                } w-full h-52 lg:h-36 overflow-hidden flex tranform`}
              >
                <img
                  src={`https://imgur.com/${img}.jpg`}
                  alt={name}
                  className="object-scale-down mx-auto translate-x-1 translate-y-2 transform scale-110"
                  onError={(e) =>
                    (e.currentTarget.src = "/path/to/default-image.jpg")
                  }
                />
              </div>
              <div className="bg-black p-1 flex justify-center items-center gap-5">
                <img
                  src={`https://imgur.com/${
                    getOptions(rol, rolOptions).img
                  }.png`}
                  alt={rol}
                  className="w-4 h-4"
                />
                <p className="font-medium">{name}</p>
                <img
                  src={`https://imgur.com/${
                    getOptions(element, elementOptions).img
                  }.png`}
                  alt={element}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          <div className="md:w-3/5 grid gap-5">
            <div className="grid gap-2 border p-2 bg-neutral-800">
              <p className="text-center font-medium">
                Core Skill = "{core || "-"}"
              </p>
              <div className="grid grid-cols-3 gap-2">
                <CoreOptions
                  type={"A"}
                  name={data.name}
                  set={set}
                  data={core}
                />
                <CoreOptions
                  type={"C"}
                  name={data.name}
                  set={set}
                  data={core}
                />
                <CoreOptions
                  type={"E"}
                  name={data.name}
                  set={set}
                  data={core}
                />
                <CoreOptions
                  type={"B"}
                  name={data.name}
                  set={set}
                  data={core}
                />
                <CoreOptions
                  type={"D"}
                  name={data.name}
                  set={set}
                  data={core}
                />
                <CoreOptions
                  type={"F"}
                  name={data.name}
                  set={set}
                  data={core}
                />
              </div>
            </div>

            <div className="flex items-center justify-around border p-1 bg-neutral-800">
              {skills.map((skill) => (
                <div key={skill} className="grid gap-2">
                  <img
                    src={`https://imgur.com/${skillImage[skill]}.png`}
                    alt={skill}
                    className="w-8 h-8 mx-auto"
                  />
                  <div className="text-sm flex">
                    <input
                      type="number"
                      className="w-8 text-black text-end"
                      value={data[skill]}
                      onChange={(e) => handleData(e, skill, name, set)}
                      max={12}
                      min={1}
                    />
                    <p className="font-thin">/12</p>
                  </div>
                  <button
                    className="mx-auto hover:text-sky-400"
                    onClick={() =>
                      set((prev) =>
                        prev.map((agent) =>
                          agent.name === name
                            ? { ...agent, [skill]: 12 }
                            : agent
                        )
                      )
                    }
                  >
                    MAX
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gap-2 border p-2 bg-neutral-800">
          <p className="text-center font-medium">Materials</p>
          <div>
            {materials.map((material) =>
              material.name === name ? (
                <FarmMaterials
                  key={material.name}
                  data={material.materials}
                  name={material.name}
                  element={element}
                  rol={rol}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
