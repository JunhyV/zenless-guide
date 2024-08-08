import React, { useEffect, useState } from 'react'

const EquipementTitle = ({element, text}) => {
    const [bgGradient, setBgGradient] = useState("");

    useEffect(() => {
      if (element) {
        switch (element) {
          case "fire":
            setBgGradient("bg-gradient-to-b from-rose-600 to-rose-400");
            break;
          case "ether":
            setBgGradient("bg-gradient-to-b from-fuchsia-600 to-fuchsia-400");
            break;
          case "ice":
            setBgGradient("bg-gradient-to-b from-cyan-600 to-cyan-400");
            break;
          case "electric":
            setBgGradient("bg-gradient-to-b from-blue-600 to-blue-400");
            break;
          case "physical":
            setBgGradient("bg-gradient-to-b from-yellow-600 to-yellow-400");
            break;
          default:
            setBgGradient("bg-gradient-to-b from-neutral-600 to-neutral-400");
            break;
        }
      }
    }, [element]);
  return (
    <p
    className={`capitalize ${bgGradient ? bgGradient : ''} p-1 text-black font-black text-center`}
  >
    {text}
  </p>
  )
}

export default EquipementTitle