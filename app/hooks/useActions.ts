import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { activeFilterBtnsSlice } from "../store/activeFilterBtns.slice";
import { filmFilterSlice } from "../store/filmFilterSlice.slice";
import { favFilmCardsShowSlice } from "../store/favFilmCardsShow.slice";
import { favouriteFilmsSlice } from "../store/favouriteFilms.slice";
import { searchedFilmSlice } from "../store/searchedFilm.slice";
import { filmListSlice } from "../store/filmList.slice";
import { authSlice } from "../store/auth.slice";
import * as actorsActions from "../store/actors.actions";
import * as filmActions from "../store/film.actions";
import * as filmListActions from "../store/filmList.actions";
import * as filmVideoActions from "../store/filmVideo.actions";
import * as postersActions from "../store/posters.actions";
import * as searchedFilmActions from "../store/searchedFilm.actions";
import * as similarMoviesActions from "../store/similarMovies.actions";

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
