import React from "react";
import TableOptions from "../../../components/admin/data/TableOptions";
import { elementOptions, factionOptions, rolOptions } from "../../../utils/options";

const AgentCard = ({ data }) => {
  const { full_name, element, rol, faction, short_img, _id} = data;
  const filtredFaction = factionOptions.find(fact => fact.name === faction);
  const filtredElement = elementOptions.find(fact => fact.name === element);
  const filtredRol = rolOptions.find(fact => fact.name === rol);
  return (
    <div
      className={`grid grid-cols-4 text-center p-1 border-b border-b-blue-300 items-center justify-items-center`}
    >
      <p className="">{full_name}</p>
      <div className="flex gap-10 items-center">
        <img src={`https://i.imgur.com/${filtredElement.img}.png`} alt="element-img" className="w-10 h-10" />
        <img src={`https://i.imgur.com/${filtredFaction.img}`} alt="faction-img" className="w-14" />
        <img src={`https://i.imgur.com/${filtredRol.img}.png`} alt="rol-img" className="w-10 h-10" />
      </div>
      <img src={`https://i.imgur.com/${short_img}.png`} alt="agent-img" className="w-28" />
      <TableOptions id={_id} url={'https://zenless-api.vercel.app/agents'}/>
    </div>
  );
};

export default AgentCard;
