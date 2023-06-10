import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { activeFilterBtnsSlice } from "../features/filter/store/activeFilterBtns.slice";
import { filmFilterSlice } from "../features/filter/store/filmFilterSlice.slice";
import { favFilmCardsShowSlice } from "../features/favourite/store/favFilmCardsShow.slice";
import { favouriteFilmsSlice } from "../features/favourite/store/favouriteFilms.slice";
import { searchedFilmSlice } from "../features/search/store/searchedFilm.slice";
import { filmListSlice } from "../store/filmList.slice";
import { authSlice } from "../features/auth/store/auth.slice";
import * as actorsActions from "../features/info/store/actors.actions";
import * as filmActions from "../features/info/store/film.actions";
import * as filmListActions from "../store/filmList.actions";
import * as filmVideoActions from "../features/info/store/filmVideo.actions";
import * as postersActions from "../features/info/store/posters.actions";
import * as searchedFilmActions from "../features/search/store/searchedFilm.actions";
import * as similarMoviesActions from "../features/info/store/similarMovies.actions";

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
