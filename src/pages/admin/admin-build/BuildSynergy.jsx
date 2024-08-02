import React, { useEffect, useState } from "react";
import AddDeleteButton from "../../../components/buttons/form/AddDeleteButton";
import DeleteButton from "../../../components/buttons/form/DeleteButton";
import {
  addSynergy,
  deleteSynergy,
  handleDescription,
  handleSaveSynergy,
} from "../../../utils/functions/admin/build/buildSynergies";

const BuildSynergy = ({ data, set, agents }) => {
  const [synergies, setSynergies] = useState([]);

  // Get data
  useEffect(() => {
    if (data && data.build && data.build.engines) {
      setSynergies(data.build.synergy);
    }
  }, [data]);
  return (
    <div
      role="synergies"
      className="grid gap-5 p-2 border border-neutral-400 rounded-md text-center"
    >
      {synergies.map((synergy, i) => (
        <div key={synergy.id} className="flex items-center gap-5">
          <div className="grid grid-cols-3 gap-5 items-center">
            <select
              id={"selector" + i}
              value={synergy.name}
              className="p-2 border border-neutral-400 rounded-md text-center h-fit"
              onChange={(e) =>
                handleSaveSynergy(e, data, set, synergy.id, agents)
              }
            >
              <option value="">--Drive Disk Selection--</option>
              {agents.map((agent) => (
                <option key={agent.nickname} value={agent.nickname}>
                  {agent.nickname}
                </option>
              ))}
            </select>
            <textarea
              id={"description-" + i}
              className="p-2 border border-neutral-400 rounded-md col-span-2"
              value={synergy.description}
              onChange={(e) => handleDescription(e, data, set, synergy.id)}
            />
          </div>
          <AddDeleteButton
            action={"delete"}
            trigger={() => deleteSynergy(synergy.id, data, set)}
          />
        </div>
      ))}
      <AddDeleteButton action={"add"} trigger={() => addSynergy(data, set)} />
    </div>
  );
};

export default BuildSynergy;
