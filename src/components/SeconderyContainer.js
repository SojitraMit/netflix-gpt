import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="relative pl-0 md:pl-8 -mt-0 md:-mt-56">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Popular" movies={movies.popularMovies} />
        <MoviesList title="Top Rated" movies={movies.topRatedMovies} />
        <MoviesList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SeconderyContainer;
