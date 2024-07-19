import React, { useEffect, useState } from "react";
import DataTable from "../../../components/admin/data/DataTable";
import { apiCall } from "../../../utils/apiCall";
import CreateButton from "../../../components/buttons/CreateButton";
import AgentCard from "./AgentCard";

const ReadAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/agents");
        setAgents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-end justify-center">
      <div className="w-3/4 flex flex-col">
        <h1 className="text-3xl font-black my-10 text-center">Agents List</h1>
        <CreateButton url={'/admin-zzz/agents/new'}/>
        <div>
          <DataTable
            tableParams={["Name", "Information", "Image", "Options"]}
            data={agents}
            url={"https://zenless-api.vercel.app/agents"}
          />
          {agents.map(agent => <AgentCard key={agent._id} data={agent}/>)}
        </div>
      </div>
    </div>
  );
};

export default ReadAgents;
