import React from "react";
import TableOptions from "../../../components/admin/data/TableOptions";

const EngineCard = ({ data }) => {
    const {name, effect, img, _id} = data
  return (
    <div
      className={`grid grid-cols-4 text-center p-1 border-b border-b-blue-300 items-center justify-items-center`}
    >
      <p className="">{name}</p>
      <p className="flex text-sm w-full text-start">{effect}</p>
      <img src={`https://i.imgur.com/${img}.png`} alt="disk-set-img" className="w-28" />
      <TableOptions id={_id} url={"https://zenless-api.vercel.app/engines"} />
    </div>
  );
};

export default EngineCard;
