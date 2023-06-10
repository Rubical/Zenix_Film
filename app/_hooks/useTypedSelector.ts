import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../_store/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
