import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActor } from "../types/actor.types";
import { RootState } from "./store";

interface IActorsPayload {
  id?: string;
  filmType?: string;
}

export const fetchActors = createAsyncThunk<
  IActor[],
  IActorsPayload,
  { state: RootState }
>("actors/fetchActors", async (payload, thunkAPI) => {
  const { filmFilter } = thunkAPI.getState();
  const type = filmFilter.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/${payload.filmType || type}/${
      payload.id
    }/credits?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data.cast;
});
