import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../_store/store";

interface IProviders {
  children: ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
