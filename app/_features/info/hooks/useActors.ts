import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const useActors = () => {
  const { actors } = useTypedSelector((state) => state.actors);
  return actors;
};
