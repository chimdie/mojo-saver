import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthinitialStateI } from "types";
import {
  Api,
  deleteStorage,
  HTTP_STATUS,
  userData,
  saveWithExpiry,
  callToast
} from "utils";

const NAME_SPACE = "auth";

const initialState = {
  user: {},
  isAdmin: false,
  loadingStatus: HTTP_STATUS.IDLE
};

export const signupNewUser = createAsyncThunk(
  `${NAME_SPACE}/newUser`,
  async (params: object) => {
    const { data } = await Api.post("/users/signup", { ...params });
    return data;
  }
);

export const login = createAsyncThunk(
  `${NAME_SPACE}/login`,
  async (_data: (data: AuthinitialStateI) => void) => {
    const { data } = await Api.post("/users/login", _data);
    return data;
  }
);

export const getLogedInUser = createAsyncThunk(
  `${NAME_SPACE}/user`,
  async () => {
    const userId = userData().user._id;
    const { data } = await Api.get(`/users/${userId}`);
    return data;
  }
);

export const logout = createAsyncThunk(`${NAME_SPACE}/logout`, async () => {
  deleteStorage();
});

const authSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signupNewUser.pending, (state: AuthinitialStateI) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(
        signupNewUser.fulfilled,
        (state: AuthinitialStateI, { payload }) => {
          state.loadingStatus = HTTP_STATUS.DONE;
          if (payload) {
            callToast(
              "Account created.",
              "success",
              "Welcome to Mojo. Please Login to continue."
            );
          } else {
            callToast("Error", "error", payload.message);
          }
        }
      )
      .addCase(signupNewUser.rejected, (state: AuthinitialStateI) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      });

    builder
      .addCase(login.pending, (state: AuthinitialStateI) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(login.fulfilled, (state: AuthinitialStateI, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        if (payload && payload.user) {
          state.user = payload;
          saveWithExpiry(state.user, 0);
          if (payload.user?.isAdmin) {
            window.location.href = `${window.location.protocol}//${window.location.host}/admin`;
          } else {
            window.location.href = `${window.location.protocol}//${window.location.host}/dashboard`;
          }
        } else {
          callToast("Error", "error", payload.message);
        }
      })
      .addCase(login.rejected, (state: AuthinitialStateI) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      });

    builder
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(getLogedInUser.pending, (state, action) => {})
      .addCase(getLogedInUser.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.user = payload;
        } else {
          callToast("Error", "error", payload.message);
        }
      })
      .addCase(
        getLogedInUser.rejected,
        (state: AuthinitialStateI, { error }) => {
          if (error) {
            callToast("Error", "error", "Something went wrong");
          }
        }
      );
  }
});

export default authSlice.reducer;
