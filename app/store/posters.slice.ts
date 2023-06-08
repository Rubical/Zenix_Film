import { createSlice } from "@reduxjs/toolkit";
import { fetchPosters } from "./posters.actions";
import { IPoster } from "../types/posters.types";

interface IPostersSlice {
  posters: IPoster[];
  loading: boolean;
  error: string | null;
}

const initialState: IPostersSlice = {
  posters: [],
  loading: true,
  error: null,
};

export const postersSlice = createSlice({
  name: "posters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosters.fulfilled, (state, action) => {
        state.posters = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosters.rejected, (state) => {
        state.posters = [];
        state.loading = false;
      });
  },
});

export default postersSlice.reducer;
