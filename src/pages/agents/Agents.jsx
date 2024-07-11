import React, { useEffect, useState } from "react";
import { agentsList } from "./agents";
import AgentCard from "./AgentCard";
import { getElements, getfaction, getRanks } from "./getImage";
import ButtonFilter from "../../components/filters/ButtonFilter";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  const elements = getElements();
  const ranks = getRanks();

  useEffect(() => {
    setAgents(agentsList);
  }, []);

  return (
    <div className="relative grow">
      <div className="absolute inset-0 bg-agents bg-cover bg-no-repeat bg-center md:bg-top opacity-50"></div>
      <div className="relative z-10 px-2 md:px-10">
        <h1 className="font-black text-3xl text-center p-2">
          Zenless Zone Zero Characters List
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-1 bg-neutral-800 p-2">
            <input type="text" className="w-full" />
          </div>
          <ButtonFilter options={elements} />
          <ButtonFilter options={ranks} />
          <div className="bg-neutral-800 p-2">
            <select name="" id="" className="p-2">
              <option value="">Select by Faction</option>
              <option value="Cunning Hares">Cunning Hares</option>
            </select>
          </div>
        </div>
        <div>
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
