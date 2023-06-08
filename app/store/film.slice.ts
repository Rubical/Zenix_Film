import { createSlice } from "@reduxjs/toolkit";
import { fetchFilm } from "./film.actions";
import { IFilm } from "../types/film.types";

interface IFilmSlice {
  film: IFilm;
  loading: boolean;
  error: null | string;
}

const initialState: IFilmSlice = {
  film: {
    id: 0,
    backdrop_path: "",
    budget: 0,
    first_air_date: "",
    genres: [],
    genre_ids: [],
    homepage: "",
    name: "",
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    vote_average: 0,
    status: "",
    revenue: 0,
    runtime: 0,
    last_episode_to_air: { air_date: "", episode_number: 0, name: "" },
    next_episode_to_air: { air_date: "", episode_number: 0, name: "" },
  },
  loading: true,
  error: null,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default filmSlice.reducer;
