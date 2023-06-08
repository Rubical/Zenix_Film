import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";
import { RootState } from "./store";

interface TypeFetchData {
  id?: string;
  filmType?: string;
}

export const fetchSimilarMovies = createAsyncThunk<
  IFilm[],
  TypeFetchData,
  { state: RootState }
>("similarMovies/fetchSimilarMovies", async (payload, thunkAPI) => {
  const { filmFilter } = thunkAPI.getState();
  const type = filmFilter.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/${payload.filmType || type}/${
      payload.id
    }/similar?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US&page=1`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data.results;
});
