import { combineReducers, configureStore } from "@reduxjs/toolkit";
import actorsReducer from "../features/info/store/actors.slice";
import filmsReducer from "./filmList.slice";
import filmReducer from "../features/info/store/film.slice";
import filmVideoReducer from "../features/info/store/filmVideo.slice";
import postersReducer from "../features/info/store/posters.slice";
import similarMoviesReducer from "../features/info/store/similarMovies.slice";
import filmFilterReducer from "../features/filter/store/filmFilterSlice.slice";
import activeFilterBtnsReducer from "../features/filter/store/activeFilterBtns.slice";
import favouriteFilmsReducer from "../features/favourite/store/favouriteFilms.slice";
import favFilmCardsShowReducer from "../features/favourite/store/favFilmCardsShow.slice";
import searchedFilmReducer from "../features/search/store/searchedFilm.slice";
import authReducer from "../features/auth/store/auth.slice";

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
