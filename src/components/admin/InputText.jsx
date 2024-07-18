import React from "react";

const InputText = ({label, id, save, set}) => {
  return (
    <div className="mb-2 flex gap-2 items-center">
      <label htmlFor={label} className="capitalize w-20">{label}: </label>
      <input
        type="text"
        id={label}
        className="border border-neutral-600 rounded-md p-1 flex-1"
        value={save[id]}
        onChange={(e)=> set({...save, [id]: e.target.value})}
      />
    </div>
  );
};

export default InputText;
