import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  return (
    <div>
      {movieResult &&
        movieNames.map((movie, index) => (
          <div className="p-4 m-4 bg-black text-white opacity-95">
            <MovieList title={movieNames} movies={movieResult} />
          </div>
        ))}
    </div>
  );
};

export default GptMovieSuggestion;
