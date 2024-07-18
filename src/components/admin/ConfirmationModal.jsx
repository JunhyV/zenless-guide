import React from "react";

const ConfirmationModal = ({item, cancel, confirm}) => {
  return (
    <div className="bg-overlay fixed top-0 left-0 h-screen w-screen flex">
      <div className="w-32"></div>
      <div className="flex items-center justify-center w-full">
        <div className="bg-white w-1/4 p-5 flex flex-col gap-5 rounded-lg">
          <h2 className="font-black text-2xl text-center">Confirm Deletion</h2>
          <p className="text-center text-base">
            Are you sure you want to delete this{" "}
            <span className="font-medium">{item}?</span>
          </p>
          <div className="flex justify-between">
            <button onClick={confirm} className="bg-sky-500 hover:bg-sky-600 p-1 text-white font-medium">
              Confirm
            </button>
            <button
              className="bg-rose-500 hover:bg-rose-600 p-1 text-white font-medium"
              onClick={() => cancel(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
