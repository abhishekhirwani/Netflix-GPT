import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 rounded-lg bg-red-700">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;