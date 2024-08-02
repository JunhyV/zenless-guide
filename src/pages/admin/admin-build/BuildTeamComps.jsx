import React, { useEffect, useState } from "react";
import SaverInput from "../../../components/admin/form/SaverInput";
import AddDeleteButton from "../../../components/buttons/form/AddDeleteButton";
import DeleteButton from "../../../components/buttons/form/DeleteButton";
import { teamRol } from "../../../utils/options";
import {
  addAgent,
  addBangboo,
  addTeamList,
  deleteAgent,
  deleteBangboo,
  deleteTeamList,
  handleSaveMemberRol,
  handleSaveTeamBangboo,
  handleSaveTeamMember,
  handleSaveTeamTitle,
} from "../../../utils/functions/admin/build/buildTeams";

const BuildTeamComps = ({ data, set, agents, bangboos }) => {
  const [teamData, setTeamData] = useState([]);

  // Obtener datos
  useEffect(() => {
    if (data && data.build && data.build.team_comps) {
      setTeamData(data.build.team_comps);
    }
  }, [data]);

  return (
    <div role="team-comps" className="grid gap-5">
      {teamData.map((teamList) => (
        <div className="flex" key={teamList.id}>
          <div className="grid gap-2 border border-neutral-400 p-2 w-full">
            <SaverInput
              title={"title"}
              type={"text"}
              value={teamList.title}
              action={(e) => handleSaveTeamTitle(e, data, set, teamList.id)}
            />
            <div className="grid grid-cols-3">
              <div className="grid gap-2 col-span-2">
                <h4 className="font-thin text-xl">Agents</h4>
                {teamList.members.map((core) => (
                  <div key={core.id} className="flex items-center gap-5">
                    <select
                      value={core.name}
                      className="p-2 border border-neutral-400 rounded-md text-center"
                      onChange={(e) =>
                        handleSaveTeamMember(
                          e,
                          data,
                          set,
                          core.id,
                          teamList.id,
                          agents
                        )
                      }
                    >
                      <option value="">--Agent Selection--</option>
                      {agents.map((agent) => (
                        <option key={agent.nickname} value={agent.nickname}>
                          {agent.nickname}
                        </option>
                      ))}
                    </select>
                    <select
                      id=""
                      className="p-2 border border-neutral-400 rounded-md text-center"
                      value={core.rol}
                      onChange={(e) =>
                        handleSaveMemberRol(e, data, set, core.id, teamList.id)
                      }
                    >
                      <option value="">--Select Rol--</option>
                      {teamRol.map((rol) => (
                        <option key={rol} value={rol} className="capitalize">
                          {rol}
                        </option>
                      ))}
                    </select>
                    <AddDeleteButton
                      type={"delete"}
                      trigger={() => deleteAgent(core.id, data, set)}
                    />
                  </div>
                ))}
              </div>
              <div className="grid gap-2">
                <h4 className="font-thin text-xl">Bangboos</h4>
                {teamList.bangboos.map((core) => (
                  <div key={core.id} className="flex items-center gap-5">
                    <select
                      value={core.name}
                      className="p-2 border border-neutral-400 rounded-md text-center"
                      onChange={(e) =>
                        handleSaveTeamBangboo(
                          e,
                          data,
                          set,
                          core.id,
                          teamList.id,
                          bangboos
                        )
                      }
                    >
                      <option value="">--Bangboo Selection--</option>
                      {bangboos.map((bangboo, i) => (
                        <option key={bangboo.name + i} value={bangboo.name}>
                          {bangboo.name}
                        </option>
                      ))}
                    </select>
                    <AddDeleteButton
                      type={"delete"}
                      trigger={() => deleteBangboo(core.id, data, set)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <AddDeleteButton
                action={"add"}
                trigger={() => addAgent(teamList.id, data, set, teamList)}
              />
              <AddDeleteButton
                action={"add"}
                trigger={() => addBangboo(teamList.id, data, set, teamList)}
              />
            </div>
          </div>
          <DeleteButton
            trigger={() => deleteTeamList(teamList.id, data, set)}
          />
        </div>
      ))}
      <AddDeleteButton
        action={"add"}
        trigger={() => addTeamList(data, set, teamData)}
      />
    </div>
  );
};

export default BuildTeamComps;
