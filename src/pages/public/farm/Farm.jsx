import React, { useEffect, useState } from "react";
import { apiCall } from "../../../utils/apiCall";
import Selector from "../../../components/buttons/Selector";
import AgentCard from "./AgentCard";

const Farm = () => {
  const [agents, setAgents] = useState([]);
  const [selection, setSelection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <Selector data={agents} type={"agent"} set={setSelection} />
      {selection.length > 0 && (
        <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3 p-2 md:p-5" >
          {selection.map((agent, i) => (
            <AgentCard key={i} data={agent} set={setSelection} list={selection}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Farm;
