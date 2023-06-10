import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const useActiveFilterBtns = () => {
  const activeFilterBtns = useTypedSelector((state) => state.activeFilterBtns);
  return activeFilterBtns;
};
