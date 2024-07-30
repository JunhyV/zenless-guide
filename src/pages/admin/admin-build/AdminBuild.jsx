import React from "react";
import BuildDiskSet from "./BuildDiskSet";
import BuildEngines from "./BuildEngines";
import BuildTeamComps from "./BuildTeamComps";
import BuildSynergy from "./BuildSynergy";
import BuildStatsSkills from "./BuildStatsSkills";

const AdminBuild = ({ data, set, agents, engines, disks, bangboos }) => {
  return (
    <div className="border border-neutral-400 p-5 w-full mb-5">
      <h2 className="font-black mb-5 text-lg">Build</h2>
      <div>
        <h3 className="font-medium mb-2 text-lg">Drive disk sets</h3>
        <BuildDiskSet data={data} set={set} disks={disks} />
        <h3 className="font-medium mb-2 text-lg">W-engines</h3>
        <BuildEngines data={data} set={set} engines={engines} />
        <h3 className="font-medium mb-2 text-lg">
          Drive disk stats & Skill priorities
        </h3>
        <BuildStatsSkills data={data} set={set} />
        <h3 className="font-medium mb-2 text-lg">Team comps</h3>
        <BuildTeamComps
          data={data}
          set={set}
          agents={agents}
          bangboos={bangboos}
        />
        <h3 className="font-medium mb-2 text-lg">Best synergies</h3>
        <BuildSynergy data={data} set={set} agents={agents} />
      </div>
    </div>
  );
};

export default AdminBuild;
