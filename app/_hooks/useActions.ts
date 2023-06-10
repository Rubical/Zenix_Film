import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { activeFilterBtnsSlice } from "../_features/filter/store/activeFilterBtns.slice";
import { filmFilterSlice } from "../_features/filter/store/filmFilterSlice.slice";
import { favFilmCardsShowSlice } from "../_features/favourite/store/favFilmCardsShow.slice";
import { favouriteFilmsSlice } from "../_features/favourite/store/favouriteFilms.slice";
import { searchedFilmSlice } from "../_features/search/store/searchedFilm.slice";
import { filmListSlice } from "../_store/filmList.slice";
import { authSlice } from "../_features/auth/store/auth.slice";
import * as actorsActions from "../_features/info/store/actors.actions";
import * as filmActions from "../_features/info/store/film.actions";
import * as filmListActions from "../_store/filmList.actions";
import * as filmVideoActions from "../_features/info/store/filmVideo.actions";
import * as postersActions from "../_features/info/store/posters.actions";
import * as searchedFilmActions from "../_features/search/store/searchedFilm.actions";
import * as similarMoviesActions from "../_features/info/store/similarMovies.actions";

const rootActions = {
  ...activeFilterBtnsSlice.actions,
  ...filmFilterSlice.actions,
  ...favFilmCardsShowSlice.actions,
  ...favouriteFilmsSlice.actions,
  ...searchedFilmSlice.actions,
  ...filmListSlice.actions,
  ...authSlice.actions,
  ...actorsActions,
  ...filmActions,
  ...filmListActions,
  ...filmVideoActions,
  ...postersActions,
  ...searchedFilmActions,
  ...similarMoviesActions,
};
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
