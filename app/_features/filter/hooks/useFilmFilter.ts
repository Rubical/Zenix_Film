import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const useFilmFilter = () => {
  const filmFilter = useTypedSelector((state) => state.filmFilter);
  return filmFilter;
};
