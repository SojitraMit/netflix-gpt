import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
