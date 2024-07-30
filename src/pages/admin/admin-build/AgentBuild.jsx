import React from "react";
import BuildDiskSet from "./BuildDiskSet";

const AgentBuild = ({ data, set, agents, engines, bangboos, disks }) => {

  return (
    <div>
      <h2>Drive disk sets</h2>
        <BuildDiskSet data={data} set={set} disks={disks}/>

      <div role="w-engines"></div>

      {/* Engine Selection END */}

      <div role="skill-priority"></div>

      {/* Skill PRIORITY END */}

      <div role="stats">
        <div></div>
        <div></div>
      </div>

      {/* Stats END */}

      <div role="team-comps"></div>

      {/* Team comps END */}

      <div role="best-synergy"></div>
    </div>
  );
};

export default AgentBuild;
