import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerVideo: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addMovieTrailerVideo } =
  moviesSlice.actions;
export default moviesSlice.reducer;