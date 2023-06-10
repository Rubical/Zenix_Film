import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IActiveFilterBtn {
  activeCategoryBtn: number;
  activeTypeBtn: number;
}

const initialState: IActiveFilterBtn = {
  activeCategoryBtn: 1,
  activeTypeBtn: 1,
};

export const activeFilterBtnsSlice = createSlice({
  name: "activeFilterBtns",
  initialState,
  reducers: {
    setActiveCategoryBtn: (state, action: PayloadAction<number>) => {
      state.activeCategoryBtn = action.payload;
    },
    setActiveTypeBtn: (state, action: PayloadAction<number>) => {
      state.activeTypeBtn = action.payload;
    },
  },
});

export const { setActiveCategoryBtn, setActiveTypeBtn } =
  activeFilterBtnsSlice.actions;
export default activeFilterBtnsSlice.reducer;
