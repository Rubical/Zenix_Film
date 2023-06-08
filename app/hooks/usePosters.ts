import { useTypedSelector } from "./useTypedSelector";

export const usePosters = () => {
  const { posters } = useTypedSelector((state) => state.posters);
  return posters;
};
