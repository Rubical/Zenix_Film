import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const useFavouriteFilms = () => {
  const favouriteFilms = useTypedSelector((state) => state.favouriteFilms);
  return favouriteFilms;
};
