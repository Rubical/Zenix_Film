import { useTypedSelector } from "../../../_hooks/useTypedSelector";

export const useAuth = () => {
  const auth = useTypedSelector((state) => state.auth);
  return auth;
};
