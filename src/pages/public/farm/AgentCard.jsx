import React from "react";
import {
  elementOptions,
  rolOptions,
  skillImage,
} from "../../../utils/options";
import { getOptions } from "../../../utils/functions/general/get";
import CoreOptions from "../../../components/titles/CoreOptions";
import LevelOptions from "../../../components/titles/LevelOptions";
import {
  deleteSelected,
  handleData,
  handleMAX,
} from "../../../utils/functions/public/farm/agentCard";

const AgentCard = ({ data, set, list }) => {
  const { name, rol, element, lvl, img} = data;
  
  
  const skills = ["basic", "dodge", "assist", "special", "chain"];

  return (
    <div>
      <div className="bg-neutral-800 mx-auto p-2 flex flex-col gap-2 max-w-96 md:max-w-lg md:p-3 shadow-xl">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              className="font-medium border-2 p-2 rounded-xl"
              onClick={handleMAX}
            >
              MAX
            </button>
            <button className="font-medium border-2 p-2 rounded-xl">
              Recommended
            </button>
          </div>
          <div>
            <button
              className="font-medium p-2"
              onClick={() => deleteSelected(name, list, set)}
            >
              X
            </button>
          </div>
        </div>
        <div className="lg:flex gap-5">
          <div className="lg:w-2/5 flex flex-col gap-5">
            <div className="grid gap-2 border-2 p-1 rounded-xl">
              <div className="flex justify-between">
                <p className="font-medium">Level</p>
                <p className="font-thin">1 &rarr; {lvl}</p>
              </div>
              <div className="flex justify-between">
                <LevelOptions type={"10"} name={data.name} set={set}/>
                <LevelOptions type={"20"} name={data.name} set={set}/>
                <LevelOptions type={"30"} name={data.name} set={set}/>
                <LevelOptions type={"40"} name={data.name} set={set}/>
                <LevelOptions type={"50"} name={data.name} set={set}/>
                <LevelOptions type={"60"} name={data.name} set={set}/>
              </div>
            </div>
            <div>
              <img
                src={`https://imgur.com/${img}.jpg`}
                alt={name}
                className="bg-purple-600 w-full h-36 object-cover object-top"
                onError={(e) =>
                  (e.currentTarget.src = "/path/to/default-image.jpg")
                }
              />
              <div className="bg-black p-1 flex justify-center items-center">
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
          <div className="w-3/5 grid gap-5">
            <div className="gap-2 border-2 p-2 rounded-xl">
              <p className="text-center font-medium">Core Skill</p>
              <div className="grid grid-cols-3 gap-2">
                <CoreOptions type={"A"} />
                <CoreOptions type={"C"} />
                <CoreOptions type={"E"} />
                <CoreOptions type={"B"} />
                <CoreOptions type={"D"} />
                <CoreOptions type={"F"} />
              </div>
            </div>
            <div className="flex items-center justify-around border-2 p-1 rounded-xl">
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
                      min={0}

                    />
                    <p className="font-thin">/12</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gap-2 border-2 p-2 rounded-xl">
          <p className="text-center font-medium">Materials</p>
          <div>materials</div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
