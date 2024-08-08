import React from "react";

const EventUncomming = ({ data }) => {
  return (
    <div className="bg-neutral-800 shadow-xl border-4 border-neutral-800">
      <img src={`https://imgur.com/${data.img}.png`} alt={data.name} />
      <div className="p-1">
        <p className="font-black text-center text-sm">{data.name}</p>
        <p className="font-thin text-center text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default EventUncomming;
