import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import authSlice, { logout } from "pages/auth/slices/authSlice";

const reducers = combineReducers({
  account: authSlice
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logout/fulfilled") {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});

export function logoutUser() {
  return store.dispatch(logout());
}

export default store;
