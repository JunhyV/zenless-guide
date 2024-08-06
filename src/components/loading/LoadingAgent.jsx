import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoadingAgent = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-2 gap-2 md:p-5 md:gap-5">
      <div className="bg-neutral-600 w-full">
        <div className=" animate-pulse grid gap-5  p-5">
          <FontAwesomeIcon
            icon={faUser}
            className="text-neutral-400 w-40 h-40 mx-auto"
          />
          <div className="grid gap-2 md:gap-5">
            <p className="w-full bg-neutral-400 h-6"></p>
            <p className="w-full bg-neutral-400 h-6"></p>
            <p className="w-full bg-neutral-400 h-6"></p>
            <p className="w-1/2 bg-neutral-400 h-6"></p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 gap-2 md:gap-5 w-full">
          <div className="bg-neutral-600 h-fit p-5 w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2 md:gap-5">
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-1/2 bg-neutral-400 h-6"></p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-600 h-fit p-5 w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2 md:gap-5">
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-1/2 bg-neutral-400 h-6"></p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-600 h-fit p-5 w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2 md:gap-5">
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-1/2 bg-neutral-400 h-6"></p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-600 h-fit p-5 w-full">
            <div className="animate-pulse grid gap-5">
              <div className="grid gap-2 md:gap-5">
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-full bg-neutral-400 h-6"></p>
                <p className="w-1/2 bg-neutral-400 h-6"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAgent;
