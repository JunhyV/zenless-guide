import React, { useEffect, useState, useCallback } from "react";
import ButtonFilter from "../../../components/filters/ButtonFilter";
import SelectFilter from "../../../components/filters/SelectFilter";
import { apiCall } from "../../../utils/apiCall";
import {
  gameVersion,
  newCharacters,
  notReleased,
} from "../../../utils/gameVersion";
import {
  elementOptions,
  factionOptions,
  rankOptions,
  rolOptions,
} from "../../../utils/options";
import LoadingDots from "../../../components/loading/LoadingDots";
import NextAgents from "./NextAgents";
import AgentSelection from "./AgentSelection";
import { Header } from "../../../components/header/Header";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [showAgents, setShowAgents] = useState([]);
  const [loading, setLoading] = useState(true);

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
      let data;

      try {
        const res = await apiCall("https://zenless-api.vercel.app/agents");

        const getData = res.map((agent) => {
          const { _id, short_img, rol, rank, faction, nickname, element } =
            agent;
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

        const noYet = getData.filter((agent) =>
          notReleased.some((name) => agent.name.includes(name))
        );

        data = noYet.length !== 0
          ? getData.filter(
              (agent) => !notReleased.some((name) => agent.name.includes(name))
            )
          : getData;

        const filtredAgents = data.filter((agent) =>
          newCharacters.some((name) => agent.name.includes(name))
        );

        if (filtredAgents.length !== 0) {
          const getDataFiltred = data.filter(
            (agent) =>
              !filtredAgents.some((newAgent) => agent.id === newAgent.id)
          );
          getDataFiltred.sort((a, b) => a.name.localeCompare(b.name));
          filtredAgents.forEach((newAgent) => getDataFiltred.unshift(newAgent));
          setAgents(getDataFiltred);
          setShowAgents(getDataFiltred);
        } else {
          data.sort((a, b) => a.name.localeCompare(b.name));
          setAgents(data);
          setShowAgents(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterAgents = useCallback(() => {
    const agentsToShow = agents.filter((agent) => {
      return (
        (rankFilter.length === 0 || rankFilter.includes(agent.rank)) &&
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
  }, [agents, rankFilter, elementFilter, rolFilter, factionFilter, nameFilter]);

  useEffect(() => {
    filterAgents();
  }, [filterAgents]);

  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full flex flex-col gap-4">
      <Header pages={"agents"} />
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          <div className="text-white px-5">
            <h2 className="text-xl font-medium mb-2">Coming soon... </h2>
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
