import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeUserMetadata = {
  name?: string;
};

interface IUser {
  created_at: string;
  email?: string;
  id: string;
  user_metadata: TypeUserMetadata;
}

interface IAuthState {
  name?: string;
  email: string;
  password: string;
  isLogined: boolean;
  user: IUser | null;
}

const initialState: IAuthState = {
  name: "",
  email: "",
  password: "",
  isLogined:
    localStorage.getItem("sb-jdcbrbtfhykwfqsuukms-auth-token") ||
    localStorage.getItem("log")
      ? true
      : false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    login: (state) => {
      state.isLogined = true;
    },
    logout: (state) => {
      state.isLogined = false;
    },
  },
});

export const { changeName, changePassword, changeEmail } = authSlice.actions;
export default authSlice.reducer;
