import React from "react";

const DeleteButton = ({ trigger = () => {} }) => {
  return (
    <button
      className="p-1 bg-rose-400 text-white font-black border border-rose-400 hover:bg-rose-600 min-h-full"
      onClick={trigger}
    >
      x
    </button>
  );
};

export default DeleteButton;
