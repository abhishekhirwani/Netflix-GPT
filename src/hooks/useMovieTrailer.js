import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./../utils/constants";
import { addMovieTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (videos) => videos.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailerVideo(trailer));
  };
  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
