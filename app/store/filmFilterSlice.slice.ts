import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilmFilter {
  type: string;
  category: string;
}

const initialState: IFilmFilter = {
  type: "movie",
  category: "popular",
};

export const filmFilterSlice = createSlice({
  name: "filmFilter",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setType, setCategory } = filmFilterSlice.actions;
export default filmFilterSlice.reducer;
