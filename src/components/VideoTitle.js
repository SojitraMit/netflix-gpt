import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 bg-gradient-to-tr  from-black px-12 absolute w-screen aspect-video ">
      <h1 className="font-bold text-5xl drop-shadow-xl text-white  ">
        {title}
      </h1>
      <p className="pt-6 w-1/3 text-lg text-white  ">{overview}</p>
      <div className="mt-8 flex space-x-4">
        <button className="flex items-center bg-white text-black font-semibold px-8 py-2 text-lg rounded-md hover:bg-gray-200 hover:opacity-65 transition shadow-md">
          <span className="mr-2 text-2xl">►</span>
          Play
        </button>

        <button className="flex items-center bg-gray-700/70 text-white font-semibold px-8 py-2 text-lg rounded-md borde  hover:bg-gray-600/80 transition shadow-md">
          <span className="mr-2 text-2xl">🛈</span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
