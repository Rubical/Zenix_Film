import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const useFilm = () => {
  const film = useTypedSelector((state) => state.film);
  return film;
};
