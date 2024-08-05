import React from "react";

const AgentFull = ({img, name}) => {
  return (
    <img
      src={`https://i.imgur.com/${img}.png`}
      alt={name}
      className="h-96 object-cover object-top mx-auto"
    />
  );
};

export default AgentFull;
