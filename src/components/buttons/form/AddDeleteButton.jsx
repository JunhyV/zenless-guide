import React from "react";

const AddDeleteButton = ({ action, msj = "", trigger = () => {}}) => {
  return (
    <>
      {action === "add" ? (
        <button
          className="text-violet-400 font-medium border-2 border-violet-400 rounded-full w-8 h-8 mx-auto hover:text-violet-600 hover:border-violet-600 transition-colors duration-500"
          onClick={trigger}
        >
          {!msj ? "+" : msj}
        </button>
      ) : (
        <button
          className="text-rose-400 font-medium border-2 border-rose-400 rounded-full w-8 h-8 mx-auto hover:text-rose-600 hover:border-rose-600 transition-colors duration-500"
          onClick={trigger}
        >
          {!msj ? "x" : msj}
        </button>
      )}
    </>
  );
};

export default AddDeleteButton;
