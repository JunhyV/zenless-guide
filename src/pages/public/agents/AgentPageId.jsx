import React, { useEffect, useState } from "react";
import zzz from "../../../assets/images/extras/cropped-cropped-Zenlesslab-logo4-2-1.png";
import { useParams } from "react-router-dom";
import ErrorId from "../../error/ErrorId";
import LoadingAgent from "./LoadingAgent";
import AgentContent from "./AgentContent";

const AgentPageId = () => {
  const [agentData, setAgentData] = useState({});
  const [errorId, setErrorId] = useState(false);
  const [loading, setLoading] = useState(true);
  const agentId = useParams().id;
  const MINIMUM_DELAY = 2000;

  useEffect(() => {
    const fetchData = async () => {
      const startTime = Date.now();
      try {
        const res = await fetch(
          `https://zenless-api.vercel.app/agents/${agentId}`
        );
        const elapsedTime = Date.now() - startTime;
        const remainingTime = MINIMUM_DELAY - elapsedTime;

        const data = await res.json();

        if ((remainingTime > 0, remainingTime)) {
          setTimeout(() => {
            if (res.status === 200) {
              setAgentData(data);
              setLoading(false);
            } else {
              setLoading(false);
              setErrorId(true);
            }
          }, remainingTime);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <header className="fixed bg-neutral-800 flex w-full justify-between items-center top-0 left-0 h-16 p-2 text-white z-10">
        <img src={zzz} alt="home" className="w-10 md:w-20 md:p-5" />
        <p>Build</p>
        <p>Skills</p>
        <p>Mindscapes</p>
        <p>Farm</p>
      </header>
      {loading ? (
        <LoadingAgent />
      ) : errorId ? (
        <ErrorId />
      ) : (
        <AgentContent data={agentData} />
      )}
    </div>
  );
};

export default AgentPageId;
