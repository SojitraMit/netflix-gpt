import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-44 flex justify-center">
      <form className="bg-black p-1 w-1/2 rounded-3xl grid grid-cols-12">
        <input
          className="m-2 px-4 py-3 rounded-2xl col-span-9"
          placeholder={lang[langKey].gptSearchPlacholder}
        />
        <button className="m-2 px-2 py-3 rounded-2xl text-white bg-red-700 col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
