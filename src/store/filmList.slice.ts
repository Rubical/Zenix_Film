import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";
import { fetchFilms } from "./filmList.actions";

interface IFilmListState {
  filmsList: IFilm[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

const initialState: IFilmListState = {
  filmsList: [],
  loading: true,
  error: null,
  page: 1,
  totalPages: 1,
};

export const filmListSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    changeFilmListPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.filmsList = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.loading = false;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.filmsList = [];
        state.loading = false;
      });
  },
});
export const { changeFilmListPage } = filmListSlice.actions;
export default filmListSlice.reducer;
