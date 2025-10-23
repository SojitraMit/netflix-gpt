import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 bg-blac ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      {/* Hide scrollbar using inline Tailwind arbitrary selectors */}
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
