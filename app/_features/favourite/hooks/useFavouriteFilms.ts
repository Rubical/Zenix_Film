import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const useFavouriteFilms = () => {
  const favouriteFilms = useTypedSelector((state) => state.favouriteFilms);
  return favouriteFilms;
};
