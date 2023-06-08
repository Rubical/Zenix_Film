import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";
import { RootState } from "./store";

type TypeFetchData = {
  total_pages: number;
  results: IFilm[];
};

export const fetchSearchedFilms = createAsyncThunk<
  TypeFetchData,
  void,
  { state: RootState }
>("info/searchedFilmSlice", async (_, thunkAPI) => {
  const { searchedFilm, filmFilter } = thunkAPI.getState();
  const searchedParams = searchedFilm.filmQuery;
  const page = searchedFilm.page;
  const type = filmFilter.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?query=${searchedParams}&api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=${page}&include_adult=false
`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data;
});
