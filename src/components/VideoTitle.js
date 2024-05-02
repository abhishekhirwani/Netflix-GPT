import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-16 text-white bg-gradient-to-r from-black absolute">
      <h1 className="text-xl md:text-4xl w-2/3 md:w-2/4 font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white font-bold text-black py-2 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-85 rounded-lg">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-2 md:py-4 px-3 md:px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
