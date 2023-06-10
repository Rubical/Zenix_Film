import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilm } from "../../../_types/film.types";
import { RootState } from "../../../_store/store";

interface IFilmParams {
  id?: string;
  filmType?: string;
}

export const fetchFilm = createAsyncThunk<
  IFilm,
  IFilmParams,
  { state: RootState }
>("info/fetchFilm", async (payload, thunkAPI) => {
  const { filmFilter } = thunkAPI.getState();
  const type = filmFilter.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/${payload.filmType || type}/${
      payload.id
    }?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data;
});
