import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account";
import GroupSlice from "./group";

export const store = configureStore({
  reducer: {
    account: AccountSlice,
    group: GroupSlice,
  },
});
