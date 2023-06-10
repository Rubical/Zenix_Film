import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const usePosters = () => {
  const { posters } = useTypedSelector((state) => state.posters);
  return posters;
};
