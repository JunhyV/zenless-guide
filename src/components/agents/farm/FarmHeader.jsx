import React from "react";

const FarmHeader = () => {
  return (
    <header role="header" className="flex bg-neutral-900">
      <p className="w-1/4 font-medium text-center p-0.5 text-white">Lvl</p>
      <p className="w-2/4 font-medium text-center p-0.5 text-white">
        Materials
      </p>
      <p className="w-1/4 font-medium text-center p-0.5 text-white">Dennies</p>
    </header>
  );
};

export default FarmHeader;
