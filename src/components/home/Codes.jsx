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
      } p-5 text-center hover:cursor-pointer relative shadow-xl`}
      onClick={() => copyToClipboard(code)}
    >
      <p className="font-black">{code}</p>
      <p>{content}</p>
      <p className="font-thin">Released on {release}</p>
      {copied ? (
        <p className="absolute bottom-0 right-5 animate-slideInLeft">
          Copied!  &#128077;
        </p>
      ) : null}
    </div>
  );
};

export default Codes;
