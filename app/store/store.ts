import { combineReducers, configureStore } from "@reduxjs/toolkit";
import actorsReducer from "./actors.slice";
import filmsReducer from "./filmList.slice";
import filmReducer from "./film.slice";
import filmVideoReducer from "./filmVideo.slice";
import postersReducer from "./posters.slice";
import similarMoviesReducer from "./similarMovies.slice";
import filmFilterReducer from "./filmFilterSlice.slice";
import activeFilterBtnsReducer from "./activeFilterBtns.slice";
import favouriteFilmsReducer from "./favouriteFilms.slice";
import favFilmCardsShowReducer from "./favFilmCardsShow.slice";
import searchedFilmReducer from "./searchedFilm.slice";
import authReducer from "./auth.slice";

const rootReducer = combineReducers({
  films: filmsReducer,
  film: filmReducer,
  actors: actorsReducer,
  filmVideo: filmVideoReducer,
  posters: postersReducer,
  similarMovies: similarMoviesReducer,
  filmFilter: filmFilterReducer,
  activeFilterBtns: activeFilterBtnsReducer,
  favouriteFilms: favouriteFilmsReducer,
  favFilmCardsShow: favFilmCardsShowReducer,
  searchedFilm: searchedFilmReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
