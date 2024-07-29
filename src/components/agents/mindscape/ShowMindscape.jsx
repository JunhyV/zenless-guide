import React, { useEffect, useState } from "react";
import { useHeight } from "../../../hooks/useHeight";
import MindscapeDetails from "./MidscapeDetails";

const ShowMindscape = ({ data, element }) => {
  const [mindscape, setMindscape] = useState({});
  const [borderColor, setBorderColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const { height, adapt } = useHeight();

  useEffect(() => {
    if (element) {
      switch (element) {
        case "ether":
          setBorderColor("border-fuchsia-400");
          break;
        case "electric":
          setBorderColor("border-blue-400");
          break;
        case "fire":
          setBorderColor("border-rose-400");
          break;
        case "physical":
          setBorderColor("border-yellow-400");
          break;
        case "ice":
          setBorderColor("border-cyan-400");
          break;
        default:
          break;
      }
    }
  }, [element]);

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setMindscape(parsedData);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    }
  }, [data]);

  useEffect(() => {
    adapt();
  }, [height]);

  return (
    <div className="w-full min-h-full flex justify-center">
      <div className="w-full p-5 grid lg:grid-cols-1 items-center lg:justify-items-center gap-5">
        {mindscape.img && (
          <img
            src={`https://i.imgur.com/${mindscape.img}.jpeg`}
            alt="mindscape"
            className={`w-full h-full lg:w-3/4 border-4 ${borderColor ? borderColor : ''} rounded-3xl`}
          />
        )}
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {mindscape.mindscapes && Array.isArray(mindscape.mindscapes)
            ? mindscape.mindscapes.map((mind, i) => (
                <MindscapeDetails key={i} data={mind} element={element}/>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ShowMindscape;
