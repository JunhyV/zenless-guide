import React, { useState } from "react";
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
import AgentCore from "./AgentCore";

const CreateAgent = () => {
  const [agent, setAgent] = useState(agentInitial);
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-1/2">
        <h1 className="font-black text-center text-4xl mb-10">
          Create New Drive Disk Set
        </h1>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent Information</h2>
          <div className="flex flex-col gap-5 mb-5">
            <div className="flex justify-between">
              <InputData label={"full_name"} data={agent} set={setAgent} />
              <InputData label={"nickname"} data={agent} set={setAgent} />
            </div>
            <div className="flex justify-between">
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
            <div className="flex justify-between">
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
            <div className="flex justify-between">
              <InputData label={"full_img"} data={agent} set={setAgent} />
              <InputData label={"short_img"} data={agent} set={setAgent} />
            </div>
          </div>
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent stats</h2>
          <div></div>
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5 grid gap-5">
          <h2 className="font-medium text-lg">Agent core skills</h2>
          {agent.core_skill.map((core, id) => (
            <AgentCore key={id} data={core} id={id} set={setAgent} global={agent}/>
          ))}
          <button className="justify-self-center bg-violet-400 text-white font-medium p-2 rounded-md w-fit hover:bg-violet-600 transition-colors duration-500">+ Add Skill</button>
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent skills</h2>
          <div>
            <h3 className="font-medium">Basic</h3>
            <h3 className="font-medium">Dodge</h3>
            <h3 className="font-medium">Assist</h3>
            <h3 className="font-medium">Special</h3>
            <h3 className="font-medium">Chain</h3>
          </div>
        </div>
        <div className="border border-neutral-400 p-5 w-full mb-5">
          <h2 className="font-medium mb-5 text-lg">Agent mindscape</h2>
          <div></div>
        </div>
      </div>

      <SubmitButton
        name={"Create New Agent"}
        data={agent}
        url={"https://zenless-api.vercel.app/agents"}
        reset={setAgent}
        initialData={agentInitial}
      />
    </div>
  );
};

export default CreateAgent;
