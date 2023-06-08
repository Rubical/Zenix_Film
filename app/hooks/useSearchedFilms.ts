import { useTypedSelector } from "./useTypedSelector";

export const useSearchedFilms = () => {
  const searchedFilms = useTypedSelector((state) => state.searchedFilm);
  return searchedFilms;
};
