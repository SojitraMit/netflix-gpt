import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/groqClient";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieRresult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    console.log("User Query:", query);

    const gptQuery =
      "Act as a movie recommendation system and suggest 10 movies for the query: " +
      query +
      ". Give only 10 movie names in a comma-separated list.";

    const gptResults = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      max_tokens: 250,
    });

    const gptMovies = gptResults.choices[0].message.content.split(",");
    console.log("GPT Movies:");

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      addGptMovieRresult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="pt-[40%] md:pt-24">
      <p className="text-white bg-black bg-opacity-35 mb-2    md:w-[1000px]  md:mb-5 md:m-auto md:font-bol">
        <b className="bg-black bg-opacity-80">🔍Note</b>:- you can enter a movie
        genre, mood, or example like “romantic movies”, “sci-fi movies like
        Interstellar”, or “feel-good movies”. The system will suggest movie
        recommendations for you to explore.
      </p>
      <div className=" pb-5 flex justify-center  ">
        <form
          className="bg-black p-1 w-full md:w-1/2 rounded-3xl grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            className="m-2 px-4 py-3 rounded-2xl col-span-9"
            placeholder={lang[langKey]?.gptSearchPlacholder}
          />
          <button
            className="m-2 px-2 py-3 rounded-2xl text-white bg-red-700 col-span-3"
            onClick={handleGptSearchClick}>
            {lang[langKey]?.search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
