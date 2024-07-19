import React from "react";

const DataTable = ({ tableParams }) => {
  return (
    <div
      className={`grid grid-cols-4 bg-neutral-800 text-white text-center p-1`}
    >
      {tableParams.map((param) => (
        <p key={param} className="capitalize">
          {param}
        </p>
      ))}
    </div>
  );
};

export default DataTable;
