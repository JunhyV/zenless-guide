import React from "react";
import TableOptions from "../../../components/admin/data/TableOptions";

const EngineCard = ({ data }) => {
    const {name, effect, img, _id} = data
  return (
    <div
      className={`grid grid-cols-4 text-center p-1 border-b border-b-blue-300 items-center justify-items-center`}
    >
      <p className="">{name}</p>
      <p>{effect}</p>
      <p className="">{img}</p>
      <TableOptions id={_id} url={"https://zenless-api.vercel.app/engines"} />
    </div>
  );
};

export default EngineCard;
