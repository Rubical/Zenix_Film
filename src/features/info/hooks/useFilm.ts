import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const useFilm = () => {
  const film = useTypedSelector((state) => state.film);
  return film;
};
