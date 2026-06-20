import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setLoading: (state, action) => {
      state.isLoading = true;
    },

    addGptMovieRresult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      state.isLoading = false;
    },
  },
});

export const { toggleGptSearchView, addGptMovieRresult, setLoading } =
  gptSlice.actions;
export default gptSlice.reducer;
