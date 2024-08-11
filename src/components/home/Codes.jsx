import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Codes = ({ data, type = "materials" }) => {
  const { code, content, release } = data;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  return (
    <div
      className={`bg-neutral-600 border-b-2 ${
        type === "poly" ? "border-amber-400" : "border-purple-400"
      } p-4 text-center relative shadow-xl text-sm`}
    >
      <p className="font-black">{code}</p>
      <p>{content}</p>
      <div className="relative">
        <p className="font-thin text-center">Released on {release}</p>
        <FontAwesomeIcon
          icon={faCopy}
          className={`absolute text-lg top-0 right-0 ${
            type === "poly" ? "hover:text-amber-400" : "hover:text-purple-400"
          } hover:cursor-pointer`}
          onClick={() => copyToClipboard(code)}
        />
      </div>
      {copied ? (
        <p className="absolute bottom-0 right-5 animate-slideInLeft">
          Copied! &#128077;
        </p>
      ) : null}
    </div>
  );
};

export default Codes;
