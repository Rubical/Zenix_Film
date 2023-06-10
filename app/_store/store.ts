import { combineReducers, configureStore } from "@reduxjs/toolkit";
import actorsReducer from "../_features/info/store/actors.slice";
import filmsReducer from "./filmList.slice";
import filmReducer from "../_features/info/store/film.slice";
import filmVideoReducer from "../_features/info/store/filmVideo.slice";
import postersReducer from "../_features/info/store/posters.slice";
import similarMoviesReducer from "../_features/info/store/similarMovies.slice";
import filmFilterReducer from "../_features/filter/store/filmFilterSlice.slice";
import activeFilterBtnsReducer from "../_features/filter/store/activeFilterBtns.slice";
import favouriteFilmsReducer from "../_features/favourite/store/favouriteFilms.slice";
import favFilmCardsShowReducer from "../_features/favourite/store/favFilmCardsShow.slice";
import searchedFilmReducer from "../_features/search/store/searchedFilm.slice";
import authReducer from "../_features/auth/store/auth.slice";

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
