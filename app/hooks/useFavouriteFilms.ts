import { useTypedSelector } from "./useTypedSelector";

export const useFavouriteFilms = () => {
  const favouriteFilms = useTypedSelector((state) => state.favouriteFilms);
  return favouriteFilms;
};
