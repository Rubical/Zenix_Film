import { useTypedSelector } from "./useTypedSelector";

export const useFilmFilter = () => {
  const filmFilter = useTypedSelector((state) => state.filmFilter);
  return filmFilter;
};
