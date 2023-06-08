import { createAsyncThunk } from "@reduxjs/toolkit";
import { IVideo } from "../types/video.types";
import { RootState } from "./store";

interface IVideoParams {
  id?: string;
  filmType?: string;
}

export const fetchVideo = createAsyncThunk<
  IVideo[],
  IVideoParams,
  { state: RootState }
>("filmVideo/fetchVideo", async (payload, thunkAPI) => {
  const { filmFilter } = thunkAPI.getState();
  const type = filmFilter.type;
  const response = await fetch(
    `https://api.themoviedb.org/3/${payload.filmType || type}/${
      payload.id
    }/videos?api_key=b053e4b701c01a664de1a144e1ab9f7f&language=en-US`
  );
  if (!response.ok) {
    console.log("Server error!");
  }
  const data = await response.json();
  return data.results;
});
