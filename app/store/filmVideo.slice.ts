import { createSlice } from "@reduxjs/toolkit";
import { fetchVideo } from "./filmVideo.actions";
import { IVideo } from "../types/video.types";

interface IVideoSlice {
  filmVideo: IVideo[];
  videoIsLoading: boolean;
  error: null | string;
}

const initialState: IVideoSlice = {
  filmVideo: [],
  videoIsLoading: true,
  error: null,
};

export const filmVideoSlice = createSlice({
  name: "filmVideo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.videoIsLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.filmVideo = action.payload;
        state.videoIsLoading = false;
      })
      .addCase(fetchVideo.rejected, (state) => {
        state.filmVideo = [];
        state.videoIsLoading = false;
      });
  },
});

export default filmVideoSlice.reducer;
