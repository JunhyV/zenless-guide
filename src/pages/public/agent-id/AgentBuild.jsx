import React, { useEffect, useState } from "react";
import { useParse } from "../../../hooks/useParse";
import AgentTitles from "../../../components/titles/AgentTitles";
import AgentFull from "../../../components/img/AgentFull";
import { getBorder, getBg } from "../../../utils/functions/general/get";
import { skillImage } from "../../../utils/options";
import star from "../../../assets/images/extras/png-clipart-star-computer-icons-desktop-star-angle-smiley.png";
import slots from "../../../assets/images/extras/slots.png";
import AgentMain from "../../../components/agents/AgentMain";

const SkillPriority = ({ element, parsedData, SPL }) => (
  <div
    className={`grid grid-cols-5 bg-neutral-800 p-1 border-2 h-20 ${getBorder(
      element
    )}`}
  >
    {SPL.map((skill, i) => {
      const last = i === SPL.length - 1;
      return (
        <div key={skill} className="flex justify-around items-center">
          <div>
            <img
              src={`https://i.imgur.com/${
                skillImage[parsedData.skill_priority[skill]]
              }.png`}
              alt={parsedData.skill_priority[skill]}
              className="w-10"
            />
            <p className="capitalize font-medium text-sm text-center">
              {parsedData.skill_priority[skill]}
            </p>
          </div>
          {!last && <p className="font-medium text-center">&#62;</p>}
        </div>
      );
    })}
  </div>
);

const CoreSkill = ({ element, core }) => (
  <div
    className={`flex items-center justify-between bg-neutral-800 p-1 border-2 ${getBorder(
      element
    )} h-20`}
  >
    <p>Core Skill: </p>
    <div className="flex gap-2">
      {Array.from({ length: parseInt(core?.slice(0, 1)) }).map((_, i) => (
        <img key={i} src={star} alt={`Star ${i + 1}`} className="w-10" />
      ))}
    </div>
  </div>
);

const AgentBuild = ({ data }) => {
  const { element, build } = data;
  const { parsedData } = useParse(build);
  const [SPL, setSPL] = useState([]);

  console.log(parsedData);

  useEffect(() => {
    if (parsedData.skill_priority) {
      const getList = Object.keys(parsedData.skill_priority);
      setSPL(getList);
    }
  }, [parsedData]);

  const { core, main_stats, disksets, engines, team_comps, synergy } =
    parsedData;

  return (
    <>
      <div role="agent-build" className="grid gap-5 md:grid-cols-2 mb-5">
        <div className="h-full flex flex-col mx-auto gap-5 justify-around w-96">
          <CoreSkill element={element} core={core} />
          <SkillPriority element={element} parsedData={parsedData} SPL={SPL} />
        </div>

        <div className="flex relative">
          <div className="absolute flex flex-col justify-around h-full">
            <AgentMain stat="PV" element={element} />
            <AgentMain stat="ATK" element={element} />
            <AgentMain stat="DEF" element={element} />
          </div>
          <img src={slots} alt="slots" className="w-72 mx-auto" />
          <div className="absolute right-0 flex flex-col justify-around h-full">
            <AgentMain stat={main_stats?.sixth} element={element} />
            <AgentMain stat={main_stats?.fifth} element={element} />
            <AgentMain stat={main_stats?.fourth} element={element} />
          </div>
        </div>
      </div>

      <div role="agent-equip">
        <AgentTitles title="Equipment" />
        <div className="mb-5 grid gap-5 landscape:grid-cols-2 md:grid-cols-2">
          {disksets?.map((set) => (
            <div key={set.title}>
              <p className={`font-medium text-center ${getBg(element)}`}>
                {set.title}
              </p>
              <div
                className={`grid grid-cols-2 gap-2 bg-neutral-700 border-2 ${getBorder(
                  element
                )}`}
              >
                {set.sets.map((disk) => (
                  <div key={disk.name}>
                    <div className="flex items-end p-2">
                      <img
                        src={`https://i.imgur.com/${disk.img}.png`}
                        alt={disk.name}
                        className="w-24"
                      />
                      <p className="text-xl">
                        x <span className="text-2xl">{disk.quantity}</span>
                      </p>
                    </div>
                    <p className="text-center">{disk.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {engines?.map((li) => (
            <div
              key={li.title}
              className={li.title === "best A" ? "col-span-2" : ""}
            >
              <p
                className={`capitalize ${getBg(
                  element
                )} p-1 font-medium text-xl text-center`}
              >
                {li.title}
              </p>
              <div
                className={`grid justify-items-center bg-neutral-600 border-2 ${getBorder(
                  element
                )} mb-5 ${li.title === "best A" ? "grid-cols-2" : ""} p-2`}
              >
                {li.engines.map((engine) => (
                  <div key={engine.name}>
                    <img
                      src={`https://i.imgur.com/${engine.img}.png`}
                      alt={engine.name}
                      className="w-32 h-28"
                    />
                    <p className="text-center">{engine.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div role="agent-teams">
        <AgentTitles title="Best teams" />
        <div className="grid gap-5 lg:grid-cols-2 mb-5">
          {team_comps?.map((team) => (
            <div key={team.title}>
              <div className={`${getBg(element)} font-medium text-center`}>
                {team.title}
              </div>
              <div
                className={`grid grid-cols-3 bg-neutral-800 border-2 ${getBorder(
                  element
                )} items-center`}
              >
                {team.members.map((member) => (
                  <div
                    key={member.img}
                    className="p-2 grid gap-2 justify-items-center"
                  >
                    <img
                      src={`https://i.imgur.com/${member.img}.png`}
                      alt={member.name}
                      className="w-28 h-24"
                    />
                    <div className="landscape:flex landscape:gap-2 md:flex md:gap-2">
                      <p className="font-medium text text-center">
                        {member.name}
                      </p>
                      <p className="capitalize font-thin">({member.rol})</p>
                    </div>
                  </div>
                ))}
                <div className="grid gap-2 justify-items-center landscape:grid-cols-2 md:grid-cols-2 md:items-center">
                  {team.bangboos.map((bangboo) => (
                    <div key={bangboo.name}>
                      <img
                        src={`https://i.imgur.com/${bangboo.img}.png`}
                        alt={bangboo.name}
                        className="w-20 h-16 md:w-24 md:h-20"
                      />
                      <p className="text-sm text-center">{bangboo.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div role="agent-synergy">
          <AgentTitles title="Synergies" />
          <div className="grid gap-2 landscape:grid-cols-2 md:grid-cols-2 md:gap-5 items-start">
            {synergy?.map((syn) => (
              <div key={syn.img} className="grid">
                <AgentFull name={syn.name} img={syn.img} />
                <div
                  className={`lg:w-3/4 bg-neutral-700 rounded-lg border-2 ${getBorder(
                    element
                  )} p-2 mx-auto`}
                >
                  <p className="text-center text-2xl font-medium">{syn.name}</p>
                  <hr className={`${getBorder(element)}`} />
                  <p>{syn.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentBuild;
