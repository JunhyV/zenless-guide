import React, { useEffect, useState } from "react";
import { agentInitial } from "../../../utils/initialStates";
import InputData from "../../../components/admin/form/InputData";
import SubmitButton from "../../../components/buttons/SubmitButton";
import SelectData from "../../../components/admin/form/SelectData";
import {
  elementOptions,
  factionOptions,
  rankOptions,
  rolOptions,
} from "../../../utils/options";
import AgentCore from "./extras/AgentCore";
import AgentStats from "./extras/AgentStats";
import AgentMindscapes from "./extras/AgentMindscapes";
import AgentSkills from "./extras/AgentSkills";
import { apiCall } from "../../../utils/apiCall";
import UpdateButton from "../../../components/buttons/UpdateButton";
import { useParams } from "react-router-dom";

const UpdateAgent = () => {
  const [agent, setAgent] = useState(agentInitial);
  const params = useParams();

  const stats = Object.keys(agent.stats);
  const mindscape = Object.keys(agent.mindscape);
  const skills = Object.keys(agent.skills);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiCall(
          `https://zenless-api.vercel.app/agents/${params.id}`
        );
        setAgent({
          nickname: data.nickname,
          rank: data.rank,
          rol: data.rol,
          short_img: data.short_img,
          element: data.element,
          faction: data.faction,
          full_img: data.full_img,
          full_name: data.full_name,
          stats: JSON.parse(data.stats),
          core_skill: JSON.parse(data.core_skill),
          mindscape: JSON.parse(data.mindscape),
          skills: JSON.parse(data.skills),
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-3/5">
        <h1 className="font-black text-center text-4xl mb-10">
          Create New Drive Disk Set
        </h1>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent Information</h2>
          <div className="flex flex-col gap-5 mb-5">
            <div className="flex justify-between gap-2">
              <InputData label={"full_name"} data={agent} set={setAgent} />
              <InputData label={"nickname"} data={agent} set={setAgent} />
            </div>
            <div className="flex justify-between gap-2">
              <SelectData
                label={"rol"}
                options={rolOptions}
                data={agent}
                set={setAgent}
              />
              <SelectData
                label={"element"}
                options={elementOptions}
                data={agent}
                set={setAgent}
              />
            </div>
            <div className="flex justify-between gap-2">
              <SelectData
                label={"faction"}
                options={factionOptions}
                data={agent}
                set={setAgent}
              />
              <SelectData
                label={"rank"}
                options={rankOptions}
                data={agent}
                set={setAgent}
              />
            </div>
            <div className="flex justify-between gap-2">
              <InputData label={"full_img"} data={agent} set={setAgent} />
              <InputData label={"short_img"} data={agent} set={setAgent} />
            </div>
          </div>
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent stats at lvl 60</h2>
          <AgentStats stats={stats} data={agent} set={setAgent}/>
        </div>
        <div className="border border-neutral-400 p-5 mb-5 grid gap-5">
          <h2 className="font-medium text-lg">Agent Core Skills</h2>
          {agent.core_skill.map((core, id) => (
            <AgentCore
              key={`core-${id}`}
              data={core}
              id={id}
              set={setAgent}
              global={agent}
            />
          ))}
          <button className="justify-self-center bg-violet-400 text-white font-medium p-2 rounded-md w-fit hover:bg-violet-600 transition-colors duration-500">
            + Add Skill
          </button>
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent skills</h2>
          <AgentSkills skills={skills} data={agent} set={setAgent} />
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent mindscape</h2>
          <AgentMindscapes mindscape={mindscape} data={agent} set={setAgent} />
        </div>
      </div>
      <UpdateButton
        type={"Agent"}
        data={agent}
        url={`https://zenless-api.vercel.app/agents/${params.id}`}
        redirect={"/admin-zzz/agents"}
      />
    </div>
  );
};

export default UpdateAgent;
