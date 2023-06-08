import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => {
  const auth = useTypedSelector((state) => state.auth);
  return auth;
};
