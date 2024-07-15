import React from "react";

const ButtonFilter = ({ options, filterParam, setFilter, filterAgents}) => {
  const handleFilter = (option) => {
    if (filterParam.includes(option.name)) {
      let popValue = filterParam.filter(value => value !== option.name);
      setFilter(popValue);
    } else {
      setFilter([...filterParam, option.name]);
    }
  };
  
  // Selected

  return (
    <div className="flex">
      {options.map((option) => (
        <button
          onClick={() => handleFilter(option)}
          key={option.img}
          className={`${filterParam.includes(option.name) ? 'bg-neutral-600' : 'bg-neutral-800'} h-full hover:bg-neutral-600 p-1`}
        >
          <img src={option.img} alt="opt-img" className="w-8 h-8 mx-4" />
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
