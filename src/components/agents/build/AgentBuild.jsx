import React, { useEffect, useState } from "react";

const AgentBuild = () => {
  const [screenWidth, setScreenWidth] = useState('');

  useEffect(()=>{
    if (window.innerWidth < 1024) {
      setScreenWidth('min-h-full');
    } else {
      setScreenWidth('')
    }
  },[window.innerWidth])

  return (
    <div className="lg:w-1/2 flex flex-col p-2 gap-2 md:p-5 md:gap-5">
      <div className="bg-black min-h-40">Content Up</div>
      <div className={`grid md:grid-cols-2 ${screenWidth} h-full gap-2 md:gap-5 pb-2 md:pb-5 lg:pb-0`}>
        <div className="w-full h-full bg-pink-50"> Content Left</div>
        <div className="w-full h-full bg-yellow-50 ">Content Right</div>
      </div>
    </div>
  );
};

export default AgentBuild;
