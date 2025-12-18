import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:pt-44 pt-8 bg-gradient-to-tr  from-black px-4 md:px-12 absolute w-screen aspect-video ">
      <h1 className="font-bold text-xl md:text-5xl drop-shadow-xl text-white w-[40%] md:w-1/3  ">
        {title}
      </h1>
      <p className="hidden md:inline-block pt-6 w-1/3 text-lg text-white  ">
        {overview}
      </p>
      <div className="md:mt-8 mt-3 md:flex md:space-x-4">
        <button className="flex items-center bg-white text-black font-semibold md:px-8 md:py-2 px-3 text-sm md:text-lg rounded-md hover:bg-gray-200 hover:opacity-65 transition shadow-md">
          <span className="mr-2 text-xl md:text-2xl">►</span>
          Play
        </button>

        <button className="flex items-center bg-gray-700/70 text-white font-semibold md:px-8 md:py-2 px-1 text-sm mt-2 md:mt-0 md:text-lg rounded-md borde  hover:bg-gray-600/80 transition shadow-md">
          <span className="mr-2 text-2xl">🛈</span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
