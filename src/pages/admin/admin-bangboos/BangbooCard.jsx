import React from "react";
import TableOptions from "../../../components/admin/data/TableOptions";

const BangbooCard = ({ data }) => {
  const { name, skill_a, skill_b, skill_c, img, _id } = data;
  return (
    <div
      className={`grid grid-cols-4 text-center p-1 border-b border-b-blue-300 items-center justify-items-center`}
    >
      <p className="">{name}</p>
      <div className="flex flex-col gap-2 w-full items-start text-sm">
        <p className="border-b border-b-neutral-300 text-start w-full">{skill_a}</p>
        <p className={skill_c ? 'border-b border-b-neutral-300 text-start w-full' : null}>{skill_b}</p>
        {skill_c ? <p className="text-start">{skill_c}</p> : null}
      </div>
      <img src={`https://i.imgur.com/${img}.png`} alt="disk-set-img" className="w-36" />
      <TableOptions id={_id} url={"https://zenless-api.vercel.app/bangboos"} />
    </div>
  );
};

export default BangbooCard;
