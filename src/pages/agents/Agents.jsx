import React, { useEffect, useState } from "react";
import { agentsList } from "./agents";
import AgentCard from "./AgentCard";
import { getElements, getfaction, getRanks, getRol } from "./getImage";
import ButtonFilter from "../../components/filters/ButtonFilter";
import SelectFilter from "../../components/filters/SelectFilter";
import { Link } from "react-router-dom";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [showAgents, setShowAgents] = useState([]);

  const [selector, setSelector] = useState({
    title: "",
    options: [],
  });

  // Filters
  const [rankFilter, setRankFilter] = useState([]);
  const [elementFilter, setElementFilter] = useState([]);
  const [rolFilter, setRolFilter] = useState([]);
  const [factionFilter, setFactionFilter] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    setAgents(agentsList);
    setShowAgents(agentsList);

    const factions = getfaction().map((faction) => faction.name);
    setSelector({
      title: "Select by Faction",
      options: factions,
    });
  }, []);

  useEffect(() => {
    const filterAgents = () => {
      const agentsToShow = agents.filter((agent) => {
        return (
          (rankFilter.length === 0 || rankFilter.includes(agent.grade)) &&
          (elementFilter.length === 0 ||
            elementFilter.includes(agent.element)) &&
          (rolFilter.length === 0 || rolFilter.includes(agent.rol)) &&
          (factionFilter.length === 0 ||
            factionFilter.includes(agent.faction)) &&
          (nameFilter === "" ||
            agent.name.toLowerCase().includes(nameFilter.toLowerCase()))
        );
      });
      setShowAgents(agentsToShow);
    };

    filterAgents();
  }, [rankFilter, elementFilter, rolFilter, factionFilter, nameFilter, agents]);

  const elements = getElements();
  const ranks = getRanks();
  const rols = getRol();
  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full flex flex-col gap-4">
      <div className="text-white p-2">
        <h1 className="font-black text-3xl text-center mb-2 ">
          Zenless Zone Zero Agents List
        </h1>
        <p className="mb-2"><Link className="hover:text-yellow-500">Home</Link> / <Link className="hover:text-yellow-500">Agents</Link></p>
        <hr className="border-yellow-500"/>
        <p className="mt-2">
          Characters (Agents) available in{" "}
          <span className="font-black">Zenless Zone Zero </span>
          (ZZZ) - Find them in version <span className="font-black">1.0.</span>
        </p>
        <p>
          <span className="font-thin">Last updated: </span>
          {new Date().getFullYear() +
            "." +
            (new Date().getMonth() + 1).toString().padStart(2, "0") +
            "." +
            new Date().getDate()}
        </p>
      </div>

      <div className="p-3">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <input
            type="text"
            className="w-full flex-1 p-2"
            placeholder="Search by name..."
          />
          <SelectFilter selector={selector} />
          <ButtonFilter
            options={ranks}
            filterParam={rankFilter}
            setFilter={setRankFilter}
          />
        </div>
        <div className="mt-2 flex flex-col md:flex-row gap-2 items-center md: justify-center">
          <ButtonFilter
            options={elements}
            filterParam={elementFilter}
            setFilter={setElementFilter}
          />
          <ButtonFilter
            options={rols}
            filterParam={rolFilter}
            setFilter={setRolFilter}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 p-2 justify-items-center">
        {/* Characters  */}
        {showAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default Agents;
