import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import { az } from "../assets/lang/az";

import { environment } from "../core/config/app.config";
import { ILang } from "../assets/lang/lang";

const initialState: IState = {
  loader: false,
  leftMenu: true,
  languages: [
    {
      id: 1,
      key: "az",
      value: "Az",
    },
  ],
  locale: az,
  user: null,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    toggleLeftMenu: (state: IState) => {
      state.leftMenu = !state.leftMenu;
    },
    setLocale: (state: IState, action: PayloadAction<ILang>) => {
      const lang = {
        az,
      };
      state.locale = lang[action.payload];
      localStorage.setItem(
        `${environment.applicationName}-locale`,
        action.payload
      );
    },
    setUser: (state: IState, action: PayloadAction<any>) => {
      // state.user = jwtDecode(action.payload);
      state.user = "user";
    },
  },
});

export const { setLoader, toggleLeftMenu, setLocale, setUser } =
  rootSlice.actions;

export default rootSlice.reducer;
