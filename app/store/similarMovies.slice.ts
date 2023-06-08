import { createSlice } from "@reduxjs/toolkit";
import { fetchSimilarMovies } from "./similarMovies.actions";
import { IFilm } from "../types/film.types";

interface ISimilarMoviesSlice {
  similarMovies: IFilm[];
  loading: boolean;
  error: string | null;
}

const initialState: ISimilarMoviesSlice = {
  similarMovies: [],
  loading: true,
  error: null,
};

export const similarMoviesSlice = createSlice({
  name: "similarMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
        state.loading = false;
      })
      .addCase(fetchSimilarMovies.rejected, (state) => {
        state.similarMovies = [];
        state.loading = false;
      });
  },
});

export default similarMoviesSlice.reducer;
