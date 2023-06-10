import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const useFilmFilter = () => {
  const filmFilter = useTypedSelector((state) => state.filmFilter);
  return filmFilter;
};
