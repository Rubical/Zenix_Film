import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const useFavFilmCardsShow = () => {
  const useFavFilmCardsShow = useTypedSelector(
    (state) => state.favFilmCardsShow
  );
  return useFavFilmCardsShow;
};
