import React from "react";
import { Link } from "react-router-dom";

const ErrorId = () => {
  return (
    <div className="pt-16 w-full h-full flex justify-center items-center">
      <div className="md:w-3/4 p-5 text-center flex flex-col gap-5 bg-neutral-800 text-white">
        <h1 className="font-black text-lg md:text-3xl">404 - Page Not Found</h1>
        <p className="text-sm md:text-base">
          The page was looking for an agent information and couldn´t found it.
          It might have removed, renamed or didn't exist. We apologize for the
          inconvenient, please go back to the main page
        </p>
        <Link to='/' className="bg-sky-400 w-fit p-2 mx-auto">Back Home</Link>
      </div>
    </div>
  );
};

export default ErrorId;
