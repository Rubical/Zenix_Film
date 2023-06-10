import { useTypedSelector } from "./useTypedSelector";

export const useFilmList = () => {
  const filmList = useTypedSelector((state) => state.films);
  return filmList;
};
