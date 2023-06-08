import { useTypedSelector } from "./useTypedSelector";

export const useSimilarMovies = () => {
  const { similarMovies } = useTypedSelector((state) => state.similarMovies);
  return similarMovies;
};
