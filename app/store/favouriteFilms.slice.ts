import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../types/film.types";

interface IFavouriteFilm {
  film: IFilm;
  type: string;
}

const initialState: { film: IFavouriteFilm }[] = [];

export const favouriteFilmsSlice = createSlice({
  name: "favouriteFilms",
  initialState,
  reducers: {
    setFavouriteFilm: (
      state,
      action: PayloadAction<{ film: IFavouriteFilm }[]>
    ) => {
      return action.payload;
    },
    deleteFavouriteFilm: (state, action: PayloadAction<number>) => {
      return state.filter((el) => el.film.film.id !== action.payload);
    },
    addFavoutiteFilm: (
      state,
      action: PayloadAction<{ film: IFavouriteFilm }>
    ) => {
      state.push(action.payload);
    },
  },
});

export const { setFavouriteFilm } = favouriteFilmsSlice.actions;
export default favouriteFilmsSlice.reducer;
