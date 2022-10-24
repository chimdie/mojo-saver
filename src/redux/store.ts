import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import authSlice, { logout } from "pages/auth/slices/authSlice";
import groupSlice from "pages/admin/slices/groupSlice";

const reducers = combineReducers({
  account: authSlice,
  group: groupSlice
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

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
