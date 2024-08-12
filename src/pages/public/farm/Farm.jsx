import React, { useEffect, useState } from "react";
import { apiCall } from "../../../utils/apiCall";
import Selector from "../../../components/buttons/Selector";
import AgentCard from "./AgentCard";
import {Header} from "../../../components/header/Header";
import Coffees from "./Coffees";

const Farm = () => {
  const [agents, setAgents] = useState([]);
  const [selection, setSelection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/agents");
        const filterData = data.map((agent) => ({
          nickname: agent.nickname,
          full_img: agent.full_img,
          short_img: agent.short_img,
          element: agent.element,
          rol: agent.rol,
          rank: agent.rank,
          faction: agent.faction,
        }));

        setAgents(filterData);
      } catch (error) {
        setError("Failed to fetch agents");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full gap-4 text-white relative">
      <Header pages={'Farm guide'}/>
      <div className="flex p-5">
        <Selector data={agents} type={"agent"} set={setSelection} />
      </div>
      {selection.length > 0 && (
        <div
          className={`grid gap-2 ${
            selection.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
          } ${
            selection.length === 1
              ? "md:grid-cols-1"
              : selection.length === 2
              ? "2xl:grid-cols-2"
              : "2xl:grid-cols-3"
          }  p-2 md:px-5 landscape-grid-2`}
        >
          {selection.map((agent, i) => (
            <AgentCard
              key={i}
              data={agent}
              set={setSelection}
              list={selection}
              setMaterials={setMaterials}
              materials={materials}
            />
          ))}
        </div>
      )}
      <div className="px-5 py-2">
        <Coffees />
      </div>
    </div>
  );
};

export default Farm;
