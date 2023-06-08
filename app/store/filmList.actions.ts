import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";
import { RootState } from "./store";

type TypeFetchData = {
  total_pages: number;
  results: IFilm[];
};

export const fetchFilms = createAsyncThunk<
  TypeFetchData,
  void,
  { state: RootState }
>("filmsList/fetchPopularFilms", async (__, thunkAPI) => {
  const { films, filmFilter } = thunkAPI.getState();
  const page = films.page;
  const type = filmFilter.type;
  const category =
    filmFilter.category !== "coming"
      ? filmFilter.category
      : type === "tv"
      ? "on_the_air"
      : "upcoming";
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${category}?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=${page}`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data;
});
