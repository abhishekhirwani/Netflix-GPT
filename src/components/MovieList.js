import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-auto"
        style={{
          WebkitOverflowScrolling: "touch", // Enables smooth scrolling on iOS devices
          scrollbarWidth: "none", // Hides the scrollbar for Firefox
          msOverflowStyle: "none", // Hides the scrollbar for IE and Edge
          "&::WebkitScrollbar": {
            display: "none", // Hides the scrollbar for WebKit browsers like Chrome and Safari
          },
        }}
      >
        <div className="flex">
          {movies &&
            movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
