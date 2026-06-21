import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img
          className="h-screen  object-cover md:h-full"
          src={BG_URL}
          alt="GPT search background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </div>
  );
};

export default GPTSearch;
