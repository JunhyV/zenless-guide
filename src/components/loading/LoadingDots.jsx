import React from "react";

const LoadingDots = () => {
  return (
    <div className="flex-1 flex items-center justify-center gap-2 text-white h-full">
        <h2 className="text-2xl">Loading</h2>
      <div className="flex gap-2 justify-center items-center translate-y-2.5">
        <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="h-2 w-2 bg-white rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default LoadingDots;
