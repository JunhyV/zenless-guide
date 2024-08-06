import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingAgent from "../../../components/loading/LoadingAgent";
import AgentBuild from "./AgentBuild";
import AgentFarm from "./AgentFarm";
import AgentSkills from "./AgentSkills";
import AgentMindscape from "./AgentMindscape";
import { lastUpdate } from "../../../utils/gameVersion";
import AgentData from "./AgentData";

const AgentPageId = () => {
  const [agentData, setAgentData] = useState({});
  const [loading, setLoading] = useState(true);
  const agentId = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://zenless-api.vercel.app/agents/${agentId}`
        );

        const data = await res.json();

        if (res.status === 200) {
          setAgentData(data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [agentId]);

  return (
    <div className="bg-neutral-800 bg-opacity-80 flex flex-col gap-5 min-h-screen">
      <div className="text-white px-2 md:px-5 h-full">
        <h1 className="font-black text-3xl text-center mb-2 ">
          {agentData.full_name}
        </h1>
        <div className="mb-2">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/agents" className="hover:text-yellow-500">
            Agents
          </Link>{" "}
          /{" "}
          <Link
            to={`/agents/${agentData._id}`}
            className="hover:text-yellow-500"
          >
            {agentData.nickname}
          </Link>
        </div>
        <hr className="border-yellow-500" />
        <p className="mt-2">
          The following information was obtained from various sources based on
          the original content of the game{" "}
          <span className="font-black"> Zenless Zone Zero</span> (ZZZ) . We hope
          it will be useful for you to discover the best way to use the
          character in a team.
        </p>
        <p>
          <span className="font-thin">Last updated: </span>
          {lastUpdate}
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <LoadingAgent />
        </div>
      ) : (
        <div
          role="agent-content"
          className="text-white px-2 xl:max-w-screen-xl xl:mx-auto"
        >
          <AgentData data={agentData} />
          <AgentBuild data={agentData} />
          <AgentSkills data={agentData} />
          <AgentMindscape data={agentData} />
          <AgentFarm data={agentData} />
        </div>
      )}
    </div>
  );
};

export default AgentPageId;
