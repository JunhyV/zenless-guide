import React, { useEffect, useState } from "react";
import SkillDescription from "../../../components/agents/SkillDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { skillImage } from "../../../utils/options";
import SkillsNav from "../../../components/agents/SkillsNav";
import CoreDescription from "../../../components/agents/CoreDescription";
import AgentTitles from "../../../components/titles/AgentTitles";

const AgentSkills = ({ data }) => {
  const { skills, core_skill, element, rank } = data;

  const [actualSkill, setActualSkill] = useState("basic");
  const [showData, setShowData] = useState([]);
  const [showCore, setShowCore] = useState([]);
  const [multipliersToggle, setMultipliersToggle] = useState({});
  const [coreToggle, setCoreToggle] = useState(false);
  const [bgGradient, setBgGradient] = useState("");

  useEffect(() => {
    if (element) {
      switch (element) {
        case "fire":
          setBgGradient("bg-gradient-to-b from-rose-600 to-rose-400");
          break;
        case "ether":
          setBgGradient("bg-gradient-to-b from-fuchsia-600 to-fuchsia-400");
          break;
        case "ice":
          setBgGradient("bg-gradient-to-b from-cyan-600 to-cyan-400");
          break;
        case "electric":
          setBgGradient("bg-gradient-to-b from-blue-600 to-blue-400");
          break;
        case "physical":
          setBgGradient("bg-gradient-to-b from-yellow-600 to-yellow-400");
          break;
        default:
          setBgGradient("bg-gradient-to-b from-neutral-600 to-neutral-400");
          break;
      }
    }
  }, [element]);

  useEffect(() => {
    if (skills) {
      const parseData = JSON.parse(skills);

      setShowData(parseData[actualSkill]);
    }
  }, [actualSkill]);

  useEffect(() => {
    if (core_skill) {
      const parseData = JSON.parse(core_skill);

      setShowCore(parseData);
    }
  }, []);

  const handleToggle = (id) => {
    setMultipliersToggle((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div role="agent-core">
        <AgentTitles title="Core Skill" />
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {showCore.map((core) => (
            <div key={core.name}>
              <div className="flex items-center gap-5 p-1 bg-neutral-800">
                <img
                  src={`https://i.imgur.com/${skillImage["core_skill"]}.png`}
                  alt="core_skill"
                  className={`w-8 h-8 p-1 ${bgGradient ? bgGradient : ""}`}
                />
                <p className="font-medium">{core.name}</p>
              </div>
              <CoreDescription text={core.description} />
              {core.data.length > 0 ? (
                <div
                  className="flex justify-between items-center p-1 bg-neutral-800 hover:cursor-pointer"
                  onClick={() => setCoreToggle(!coreToggle)}
                >
                  <p className="font-medium">Extra stats at +7</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              ) : null}
              {coreToggle ? (
                <div>
                  {core.data.map((multiplier, i) => {
                    const { type, number } = multiplier;
                    return (
                      <div
                        key={type}
                        className={`flex p-1 justify-between ${
                          i % 2 ? "bg-neutral-600" : "bg-neutral-700"
                        }`}
                      >
                        <p className="font-thin">{type}</p>
                        <p className="text-amber-400 font-medium">
                          +{number}
                          <span>
                            {type.includes("Crit DMG") ||
                            type.includes("Crit Rate") ||
                            type.includes("PEN Ratio")
                              ? "%"
                              : ""}
                          </span>
                          <span>
                            {type.includes("Energy Regen") ? "/s" : ""}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div role="agent-skills" className="mb-5">
        <AgentTitles title="Skills" />
        <SkillsNav
          set={setActualSkill}
          actual={actualSkill}
          element={element}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {showData.map((skill) => {
            const { description, name, data, id } = skill;
            return (
              <div key={name}>
                <div className="flex items-center gap-5 p-1 bg-neutral-800">
                  <img
                    src={`https://i.imgur.com/${skillImage[actualSkill]}.png`}
                    alt={actualSkill}
                    className={`w-8 h-8 p-1 ${bgGradient ? bgGradient : ""}`}
                  />
                  <p className="font-medium">{name}</p>
                </div>
                <SkillDescription
                  description={description}
                  actualSkill={actualSkill}
                />
                {data.length > 0 ? (
                  <div
                    className="flex justify-between items-center p-1 bg-neutral-800 hover:cursor-pointer"
                    onClick={() => handleToggle(id)}
                  >
                    <p className="font-medium">
                      Multipliers at {rank === "S" ? "+12" : "+16"}
                    </p>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                ) : null}
                {multipliersToggle[id] ? (
                  <div>
                    {data.map((multiplier, i) => {
                      const { type, number } = multiplier;
                      return (
                        <div
                          key={type}
                          className={`flex p-1 justify-between ${
                            i % 2 ? "bg-neutral-600" : "bg-neutral-700"
                          }`}
                        >
                          <p className="font-thin">{type}</p>
                          <p className="text-amber-400 font-medium">
                            {number}
                            <span>
                              {type.includes("Energy Cost") ? "" : "%"}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AgentSkills;
