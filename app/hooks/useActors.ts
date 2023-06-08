import { useTypedSelector } from "./useTypedSelector";

export const useActors = () => {
  const { actors } = useTypedSelector((state) => state.actors);
  return actors;
};
