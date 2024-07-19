import React from "react";
import TableOptions from "../../../components/admin/data/TableOptions";

const BangbooCard = ({ data }) => {
  const { name, set2, set4, img, _id } = data;
  return (
    <div
      className={`grid grid-cols-4 text-center p-1 border-b border-b-blue-300 items-center justify-items-center`}
    >
      <p className="">{name}</p>
      <div className="flex flex-col gap-2 w-full items-start">
        <p className="border-b border-b-neutral-300 text-sm text-start w-full">
          {set2}
        </p>
        <p className="text-start text-sm">{set4}</p>
      </div>
      <img src={`https://i.imgur.com/${img}.png`} alt="register-img" className="w-28" />
      <TableOptions id={_id} url={"https://zenless-api.vercel.app/disks"} />
    </div>
  );
};

export default BangbooCard;
