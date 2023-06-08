import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPoster } from "../types/posters.types";
import { RootState } from "./store";

interface IPostersParams {
  id?: string;
  filmType?: string;
}

export const fetchPosters = createAsyncThunk<
  IPoster[],
  IPostersParams,
  { state: RootState }
>("posters/fetchPosters", async (payload, thunkAPI) => {
  const { filmFilter } = thunkAPI.getState();
  const type = filmFilter.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/${payload.filmType || type}/${
      payload.id
    }/images?api_key=b053e4b701c01a664de1a144e1ab9f7f`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data.posters;
});
