import React, { useEffect, useState, version } from "react";
import ButtonFilter from "../../../components/filters/ButtonFilter";
import SelectFilter from "../../../components/filters/SelectFilter";
import { Link } from "react-router-dom";
import { apiCall } from "../../../utils/apiCall";
import { gameVersion, lastUpdate, newCharacters } from "../../../utils/gameVersion";
import {
  elementOptions,
  factionOptions,
  rankOptions,
  rolOptions,
} from "../../../utils/options";
import LoadingDots from "../../../components/loading/LoadingDots";
import NextAgents from "./NextAgents";
import AgentSelection from "./AgentSelection";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [showAgents, setShowAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const MINIMUM_DELAY = 2000;

  const [selector, setSelector] = useState({
    title: "Select by Faction",
    options: [],
  });

  // Filters
  const [rankFilter, setRankFilter] = useState([]);
  const [elementFilter, setElementFilter] = useState([]);
  const [rolFilter, setRolFilter] = useState([]);
  const [factionFilter, setFactionFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const factions = factionOptions.map((faction) => faction.name);
    setSelector({
      title: "Select by Faction",
      options: factions,
    });

    const fetchData = async () => {
      const startTime = Date.now();

      try {
        const res = await apiCall("https://zenless-api.vercel.app/agents");

        const elapsedTime = Date.now() - startTime;
        const remainingTime = MINIMUM_DELAY - elapsedTime;

        const getData = res.map((agent) => {
          const { _id, short_img, rol, rank, faction, nickname, element } = agent;
          return {
            id: _id,
            name: nickname,
            rol,
            rank,
            faction,
            element,
            img: short_img,
          };
        });

        if (remainingTime > 0) {
          setTimeout(() => {
            // Filter New Agents
            const filtredAgents = getData.filter((agent) =>
              newCharacters.some((name) => agent.name.includes(name))
            );

            if (filtredAgents.length !== 0) {
              // Take out the new Agents
              const getDataFiltred = getData.filter((agent) =>
                filtredAgents.some((newAgent) => agent.id !== newAgent.id)
              );
              // Order Array by name
              getDataFiltred.sort((a, b) => a.name.localeCompare(b.name));
              // Put new agents first
              filtredAgents.forEach((newAgent) => getDataFiltred.unshift(newAgent));
              // Set data
              setAgents(getDataFiltred);
              setShowAgents(getDataFiltred);
              setLoading(false);
            } else {
              // Order Array by name
              getData.sort((a, b) => a.name.localeCompare(b.name));
              // Set data
              setAgents(getData);
              setShowAgents(getData);
              setLoading(false);
            }
          }, remainingTime);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterAgents = () => {
      const agentsToShow = agents.filter((agent) => {
        return (
          (rankFilter.length === 0 || rankFilter.includes(agent.rank)) &&
          (elementFilter.length === 0 || elementFilter.includes(agent.element)) &&
          (rolFilter.length === 0 || rolFilter.includes(agent.rol)) &&
          (factionFilter.length === 0 || factionFilter.includes(agent.faction)) &&
          (nameFilter === "" ||
            agent.name.toLowerCase().includes(nameFilter.toLowerCase()))
        );
      });
      setShowAgents(agentsToShow);
    };

    filterAgents();
  }, [rankFilter, elementFilter, rolFilter, factionFilter, nameFilter, agents]);

  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full flex flex-col gap-4">
      <div className="text-white px-5 h-full">
        <h1 className="font-black text-3xl md:text-5xl text-center">
          Zenless Zone Zero Agents List
        </h1>
        <p className="mb-2">
          <Link className="hover:text-yellow-500">Home</Link> /{" "}
          <Link className="hover:text-yellow-500">Agents</Link>
        </p>
        <hr className="border-yellow-500" />
        <p className="mt-2">
          Characters (Agents) available in{" "}
          <span className="font-black">Zenless Zone Zero </span>
          (ZZZ) - Find them in version <span className="font-black">{gameVersion}.</span>
        </p>
        <p>
          <span className="font-thin">Last updated: </span>
          {lastUpdate}
        </p>
      </div>
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          <div className="text-white px-5">
            <h2 className="text-xl font-medium mb-2">Comming soon... </h2>
            <NextAgents />
          </div>
          <div className="px-5">
            <h2 className="text-xl text-white font-medium mb-2">
              Available characters {gameVersion}
            </h2>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <input
                type="text"
                className="w-full flex-1 p-2"
                placeholder="Search by name..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                id="name"
              />
              <SelectFilter
                selector={selector}
                filter={factionFilter}
                set={setFactionFilter}
              />
              <ButtonFilter
                options={rankOptions}
                filterParam={rankFilter}
                setFilter={setRankFilter}
              />
            </div>
            <div className="mt-2 flex flex-col md:flex-row gap-2 items-center md: justify-center">
              <ButtonFilter
                options={elementOptions}
                filterParam={elementFilter}
                setFilter={setElementFilter}
              />
              <ButtonFilter
                options={rolOptions}
                filterParam={rolFilter}
                setFilter={setRolFilter}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-5 p-2 justify-items-center">
            {showAgents.map((agent) => (
              <AgentSelection key={agent.id} data={agent} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Agents;
