import React from "react";

const TierListDetails = () => {
  return (
    <div className="bg-neutral-600 p-2">
      <ul className="pl-5">
        <li className="list-disc">Agents ranked <span className="font-medium text-amber-400">S</span> are considered up to M0.</li>
        <li className="list-disc">Agents ranked <span className="font-medium text-violet-400">A</span> are considered up to M6.</li>
        <li className="list-disc">
          The tier list is based on the agents synergy and versatility.
          <ul className="pl-5">
            <li className="list-disc">
              Synergy: The agent pairs well with another strong agent.
            </li>
            <ul className="pl-5 bg">
              <li className="list-disc">
                Example: <span className="font-medium text-cyan-400">Ellen</span>/<span className="font-medium text-cyan-400">Soukaku</span>,{" "}
                <span className="font-medium text-yellow-400">Piper</span>/<span className="font-medium text-rose-400">Lucy</span>, or <span className="font-medium text-blue-400">Grace</span>/
                <span className="font-medium text-blue-400">Rina</span>.
              </li>
            </ul>
            <li className="list-disc">
              Versatility: The agent can be used in various situations thanks to
              their kit.
            </li>
            <ul className="pl-5">
              <li className="list-disc">
                Example: Lucy, Nicole, Lycaon, or Grace.
              </li>
            </ul>
          </ul>
        </li>
        <li className="list-disc">
          This tier list{" "}
          <span className="font-medium text-rose-400">IS NOT ABSOLUTE</span>.
          There may be changes as the community continues to discover new builds
          or mechanics that enhance any of the characters on this list.
        </li>
        <li className="list-disc">
          It is also <span className="font-medium text-rose-400">NOT</span> a
          guide for obtaining characters. It has been shown that you can
          complete the most challenging content of the game using starter
          characters; it is just a matter of investing time and care in{" "}
          <span className="font-medium text-amber-400">
            YOUR FAVORITE CHARACTER
          </span>{" "}
          .
        </li>
      </ul>
    </div>
  );
};

export default TierListDetails;
