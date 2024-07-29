import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorId from "../../error/ErrorId";
import LoadingAgent from "../../../components/loading/LoadingAgent";
import AgentView from "../../../components/agents/build/AgentView";
import AgentBuild from "../../../components/agents/build/AgentBuild";
import AgentFarm from "../../../components/agents/farm/AgentFarm";
import ShowSkills from "../../../components/agents/skills/ShowSkills";
import ShowStats from "../../../components/agents/skills/ShowStats";
import ShowMindscape from "../../../components/agents/mindscape/ShowMindscape";
import HeaderPageId from "./HeaderPageId";

const AgentPageId = () => {
  const [agentData, setAgentData] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageDisplay, setPageDisplay] = useState("build");
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
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [agentId]);

  return (
    <div
      className={`bg-neutral-800 bg-opacity-80 min-h-full flex flex-col gap-4 ${
        pageDisplay === "skills" ? "lg:h-full" : ""
      }`}
    >
      {loading ? (
        <LoadingAgent />
      ) : (
        <>
          {pageDisplay !== "" && (
            <HeaderPageId
              pageDisplay={pageDisplay}
              setPageDisplay={setPageDisplay}
              data={agentData}
            />
          )}
          {pageDisplay === "build" && (
            <div className="w-full pt-14  lg:pt-0 overflow-hidden flex flex-col lg:flex-row custom-height">
              <AgentView data={agentData} />
              <AgentBuild element={agentData.element}/>
            </div>
          )}
          {pageDisplay === "skills" && (
            <div className="pt-14  lg:pt-0 w-full h-full lg:overflow-hidden lg:flex lg:items-center">
              <div className="flex flex-col-reverse lg:flex-row lg:mx-auto lg:w-5/6 lg:h-3/4 2xl:w-full">
                <ShowSkills
                  data={agentData.skills}
                  element={agentData.element}
                  rank={agentData.rank}
                />
                <div className="">
                  <ShowStats data={agentData.stats} />
                </div>
              </div>
            </div>
          )}
          {pageDisplay === "mindscape" && (
            <div className="pt-14  lg:pt-0 w-full h-full lg:overflow-hidden flex flex-col lg:flex-row lg:mx-auto lg:w-5/6 2xl:w-full">
              <ShowMindscape data={agentData.mindscape} element={agentData.element}/>
            </div>
          )}
          {pageDisplay === "farm" && (
            <div className="w-full pt-14 lg:pt-0 overflow-hidden flex flex-col lg:flex-row lg:justify-center">
              <AgentFarm element={agentData.element} rol={agentData.rol} name={agentData.nickname} img={agentData.full_img}/>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AgentPageId;
