import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account";

export const store = configureStore({
  reducer: {
    account: AccountSlice,
  },
});
