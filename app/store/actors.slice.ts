import { createSlice } from "@reduxjs/toolkit";
import { fetchActors } from "./actors.actions";
import { IActor } from "../types/actor.types";

interface IActorsSlice {
  actors: IActor[];
  loading: boolean;
  error: string | null;
}

const initialState: IActorsSlice = {
  actors: [],
  loading: true,
  error: null,
};

export const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActors.fulfilled, (state, action) => {
        state.actors = action.payload;
        state.loading = false;
      })
      .addCase(fetchActors.rejected, (state) => {
        state.actors = [];
        state.loading = false;
      });
  },
});

export default actorsSlice.reducer;
