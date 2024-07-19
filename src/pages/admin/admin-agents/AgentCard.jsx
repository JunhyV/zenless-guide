import React from "react";
import TableOptions from "../../../components/admin/data/TableOptions";

const AgentCard = ({ data }) => {
  const { full_name, element, rol, faction, short_img, _id} = data;
  return (
    <div
      className={`grid grid-cols-4 text-center p-1 border-b border-b-blue-300 items-center justify-items-center`}
    >
      <p className="">{full_name}</p>
      <div className="flex gap-2">
        <p>{element}</p>
        <p>{rol}</p>
        <p>{faction}</p>
      </div>
      <p className="">{short_img}</p>
      <TableOptions id={_id} url={'https://zenless-api.vercel.app/agents'}/>
    </div>
  );
};

export default AgentCard;
