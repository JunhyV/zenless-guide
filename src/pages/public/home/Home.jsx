import { Link } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import {
  gameVersion,
  lastUpdate,
  nextVersion,
} from "../../../utils/gameVersion";
import { materialsCodes, polyCodes } from "../../../utils/info/codes";
import { eventsActive } from "../../../utils/info/eventsActive";
import { eventsUncomming } from "../../../utils/info/eventsUncomming";
import { banners } from "../../../utils/info/banners";
import { videos } from "../../../utils/info/videos";
import { preloadImages } from "../../../utils/functions/general/preLoadImages";

// Lazy load components
const AgentTitles = React.lazy(() =>
  import("../../../components/titles/AgentTitles")
);
const Codes = React.lazy(() => import("../../../components/home/Codes"));
const EventActive = React.lazy(() =>
  import("../../../components/home/EventActive")
);
const EventUncomming = React.lazy(() =>
  import("../../../components/home/EventUncomming")
);
const Banner = React.lazy(() => import("../../../components/home/Banner"));
const Subtitle = React.lazy(() =>
  import("../../../components/titles/Subtitle")
);

const Home = () => {
  useEffect(() => {
    const preLoad = ['https://imgur.com/wMH5cH9.jpg', 'https://imgur.com/JxxJWGj.jpg', 'https://imgur.com/Le48jbD.jpg'];

    preloadImages(preLoad);
  }, [])
  
  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full flex flex-col gap-4">
      <div className="text-white px-5 h-full">
        <h1 className="font-black text-3xl md:text-5xl text-center">
          Welcome to Zenless Guide
        </h1>
        <p className="mb-2">
          <Link className="hover:text-yellow-500">Home</Link>
        </p>
        <hr className="border-yellow-500" />
        <p className="mt-2">
          Welcome to your ultimate source for guides, builds, and news about{" "}
          <span className="font-black">Zenless Zone Zero</span> (ZZZ)! Dive into
          the thrilling world of{" "}
          <span className="font-black">Zenless Zone Zero</span> and discover
          essential strategies, setups, and updates to take your game to the
          next level. Start your adventure here!
        </p>
        <div className="flex flex-col items-end">
          <p>
            Game Versión <span className="font-black">{gameVersion}.</span>{" "}
          </p>
          <p>
            <span className="font-thin">Last updated: </span>
            {lastUpdate}
          </p>
        </div>
      </div>

      <Suspense fallback={<div>Loading content...</div>}>
        <div role="home-content" className="p-5 text-white">
          <div role="codes" className="mb-5">
            <AgentTitles title={"Recently updates"} />
            <div className="grid md:grid-cols-3 xl:grid-cols-4 landscape-grid-3 gap-5">
              <div className="mx-auto grid">
                <Link
                  to="https://x.com/ZZZ_EN/status/1822845597537436105"
                  target="_blank"
                  className=""
                >
                  <img
                    src={`https://imgur.com/wMH5cH9.jpg`}
                    alt="Ridu Renovation Talk Vol. 1"
                    className="grayscale-image h-72 border-4 border-neutral-800 hover-grayscale hover:border-rose-400 transition-colors duration-500 mx-auto"
                  />
                </Link>
                <div className="text-center">
                  <p className="font-medium">
                    New Agent: <span className="font-black">Burnice</span> (
                    <span className="text-rose-400">Fire</span>/
                    <span className="text-neutral-400">Anomaly</span>)
                  </p>
                  <p>
                    Announced for version{" "}
                    <span className="font-black">{nextVersion}</span>
                  </p>
                </div>
              </div>
              <div className="mx-auto grid">
                <Link
                  to="https://x.com/ZZZ_EN/status/1822483089945448694"
                  target="_blank"
                  className=""
                >
                  <img
                    src={`https://imgur.com/JxxJWGj.jpg`}
                    alt="Ridu Renovation Talk Vol. 1"
                    className="grayscale-image h-72 border-4 border-neutral-800 hover-grayscale hover:border-rose-400 transition-colors duration-500 mx-auto"
                  />
                </Link>
                <div className="text-center">
                  <p className="font-medium">
                    New Agent: <span className="font-black">Caesar</span> (
                    <span className="text-yellow-400">Physical</span>/
                    <span className="text-neutral-400">Defense</span>)
                  </p>
                  <p>
                    Announced for version{" "}
                    <span className="font-black">{nextVersion}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div role="codes" className="mb-5">
            <AgentTitles title={"Get Codes"} />
            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 landscape-grid-2">
                {polyCodes.map((code) => (
                  <Codes key={code.code} data={code} type={"poly"} />
                ))}
                {materialsCodes.map((code) => (
                  <Codes key={code.code} data={code} />
                ))}
              </div>
            </div>
          </div>

          <div role="events" className="mb-5">
            <AgentTitles title={"Events"} />
            <div className="grid gap-5">
              <div>
                <Subtitle title={"Announced"} />
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 landscape-grid-2 p-2">
                  {eventsActive.map((event) => (
                    <EventActive key={event.name} data={event} />
                  ))}
                </div>
              </div>
              <div>
                <Subtitle title={"Comming soon..."} />
                <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 landscape-grid-3">
                  {eventsUncomming.map((event) => (
                    <EventUncomming key={event.name} data={event} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div role="news">
            <AgentTitles title={"News"} />
            <div className="grid gap-5">
              <div>
                <Subtitle title={`Banners ${gameVersion}`} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {banners.map((banner) => (
                    <Banner key={banner.main} data={banner} />
                  ))}
                </div>
              </div>

              <div>
                <Subtitle title={`Videos ${gameVersion}`} />
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 landscape-grid-2">
                  {videos.map((li) =>
                    gameVersion === li.version
                      ? li.videos.map((video) => (
                          <div key={video.title} className="grid gap-2">
                            <iframe
                              src={video.link}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="mx-auto w-full md:h-56 lg:h-72 xl:h-60 shadow-xl"
                            ></iframe>
                            <p className="text-sm md:text-base font-medium text-start">
                              {video.title}
                            </p>
                          </div>
                        ))
                      : null
                  )}
                </div>
              </div>

              <div>
                <Subtitle title={"Official"} />
                <div className="grid md:grid-cols-4 landscape-grid-3">
                  <Link
                    to="https://x.com/ZZZ_EN/status/1815960335876243493"
                    target="_blank"
                    className="border-4 border-neutral-800 hover-grayscale hover:border-amber-400 transition-colors duration-500"
                  >
                    <img
                      src={`https://imgur.com/Le48jbD.jpg`}
                      alt="Ridu Renovation Talk Vol. 1"
                      className="grayscale-image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
