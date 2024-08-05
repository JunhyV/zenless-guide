import React from "react";
import { getBorder } from "../../utils/functions/general/get";

const AgentMain = ({ stat, element }) => {
  return (
    <p
      className={`bg-neutral-800 p-2 text-center font-medium rounded-lg border-2 ${getBorder(
        element
      )} w-32`}
    >
      {stat}
    </p>
  );
};

export default AgentMain;
