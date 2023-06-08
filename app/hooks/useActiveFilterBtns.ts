import { useTypedSelector } from "./useTypedSelector";

export const useActiveFilterBtns = () => {
  const activeFilterBtns = useTypedSelector((state) => state.activeFilterBtns);
  return activeFilterBtns;
};
