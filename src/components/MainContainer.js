import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  //Only MainContainer and its children (VideoTitle, VideoBackground) re-render when nowPlayingMovies changes.
  //It does not re-render your whole app, unless your Redux state updates in a way that other components also depend on.
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground moviesId={id} />
    </div>
  );
};

export default MainContainer;
