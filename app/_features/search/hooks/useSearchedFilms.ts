import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const useSearchedFilms = () => {
  const searchedFilms = useTypedSelector((state) => state.searchedFilm);
  return searchedFilms;
};
