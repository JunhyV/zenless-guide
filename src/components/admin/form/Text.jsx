import React from "react";

const Text = ({ label, id, save, set }) => {
  return (
    <div className="mb-2 flex gap-2">
      <label htmlFor={label} className="capitalize w-20">
        {label}:
      </label>
      <textarea
        id={label}
        className="border border-neutral-600 rounded-md p-1 flex-1 h-24"
        value={save[id]}
        onChange={(e)=> set({...save, [id]: e.target.value})}
      />
    </div>
  );
};

export default Text;
