import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = true;

export const favFilmCardsShowSlice = createSlice({
  name: "favFilmCardsShow",
  initialState,
  reducers: {
    showFavFilmsCards: () => {
      return true;
    },
    hideFavFilmsCards: () => {
      return false;
    },
  },
});

export const { showFavFilmsCards, hideFavFilmsCards } =
  favFilmCardsShowSlice.actions;
export default favFilmCardsShowSlice.reducer;
