import { createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";
import { fetchSearchedFilms } from "./searchedFilm.actions";

interface ISearchedFilmSlice {
  filmQuery: string;
  filmsFound: IFilm[];
  page: number;
  totalPages: number;
  loading: boolean;
  error: null | string;
}

const initialState: ISearchedFilmSlice = {
  filmQuery: "",
  filmsFound: [],
  loading: true,
  error: null,
  page: 1,
  totalPages: 1,
};

export const searchedFilmSlice = createSlice({
  name: "searchedFilm",
  initialState,
  reducers: {
    changeSearchedQuery: (state, action) => {
      state.filmQuery = action.payload;
    },
    changeSearchedFilmPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchedFilms.fulfilled, (state, action) => {
        state.filmsFound = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.loading = false;
      })
      .addCase(fetchSearchedFilms.rejected, (state) => {
        state.filmsFound = [];
        state.loading = false;
      });
  },
});

export const { changeSearchedQuery, changeSearchedFilmPage } =
  searchedFilmSlice.actions;

export default searchedFilmSlice.reducer;
