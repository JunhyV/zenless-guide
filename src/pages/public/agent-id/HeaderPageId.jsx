import React, { useEffect, useState } from "react";

const HeaderPageId = ({ pageDisplay, setPageDisplay, data }) => {
  const [textColor, setTextColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [hoverColor, setHoverColor] = useState('');

  useEffect(() => {
    switch (data.element) {
      case "ether":
        setTextColor('text-fuchsia-400');
        setBorderColor('hover:border-fuchsia-400');
        setHoverColor('hover:text-fuchsia-400');
        break;
      case "electric":
        setTextColor('text-blue-400');
        setBorderColor('hover:border-blue-400');
        setHoverColor('hover:text-blue-400');
        break;
      case "fire":
        setTextColor('text-rose-400');
        setBorderColor('hover:border-rose-400');
        setHoverColor('hover:text-rose-400');
        break;
      case "physical":
        setTextColor('text-yellow-400');
        setBorderColor('hover:border-yellow-400');
        setHoverColor('hover:text-physical-400');
        break;
      case "ice":
        setTextColor('text-cyan-400');
        setBorderColor('hover:border-cyan-400');
        setHoverColor('hover:text-cyan-400');
        break;
      default:
        break;
    }
  }, [data]);

  return (
    <header className="min-w-full lg:min-w-fit fixed h-fit justify-between items-center top-0 lg:top-1/2 left-0 p-2 z-10 lg:-translate-y-1/2 bg-neutral-800 lg:bg-transparent">
      <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 lg:gap-5 border-neutral-800">
        <button
          className={`bg-neutral-800 border-2 ${pageDisplay === 'build' ? textColor : 'text-white'} ${borderColor} ${hoverColor} border-neutral-800 p-2 text-sm md:text-base rounded-lg`}
          onClick={() => setPageDisplay("build")}
        >
          Build
        </button>
        <button
          className={`bg-neutral-800 border-2 ${pageDisplay === 'skills' ? textColor : 'text-white'}  ${borderColor} ${hoverColor} border-neutral-800 p-2 text-sm md:text-base rounded-lg`}
          onClick={() => setPageDisplay("skills")}
        >
          Skills
        </button>
        <button
          className={`bg-neutral-800 border-2 ${pageDisplay === 'mindscape' ? textColor : 'text-white'}  ${borderColor} ${hoverColor} border-neutral-800 p-2 
            pageDisplay === "mindscape" ? text : "text-white"
          } text-sm md:text-base rounded-lg`}
          onClick={() => setPageDisplay("mindscape")}
        >
          Mindscape
        </button>
        <button
          className={`bg-neutral-800 border-2 ${pageDisplay === 'farm' ? textColor : 'text-white'}  ${borderColor} ${hoverColor} border-neutral-800 p-2 text-sm md:text-base rounded-lg`}
          onClick={() => setPageDisplay("farm")}
        >
          Farm
        </button>
      </div>
    </header>
  );
};

export default HeaderPageId;
