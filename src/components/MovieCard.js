import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-24 md:w-44 pr-3">
      <img src={IMG_CDN_URL + posterPath} alt="movieImage" />
    </div>
  );
};

export default MovieCard;
