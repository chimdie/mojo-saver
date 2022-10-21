/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Api,
  deleteStorage,
  HTTP_STATUS,
  userData,
  saveWithExpiry
} from "utils";

const NAME_SPACE = "auth";

const initialState = {
  user: {},
  isAdmin: false,
  loadingStatus: HTTP_STATUS.IDLE
};

export const signupNewUser = createAsyncThunk(
  `${NAME_SPACE}/newUser`,
  async (params: any) => {
    const { data } = await Api.post("/users/signup", { ...params });
    return data;
  }
);

export const login = createAsyncThunk(`${NAME_SPACE}/login`, async (_data) => {
  const { data } = await Api.post("/users/login", _data);
  return data;
});

export const getLogedInUser = createAsyncThunk(
  `${NAME_SPACE}/USER`,
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
      .addCase(signupNewUser.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(signupNewUser.fulfilled, (state: any, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        if (payload) {
          // toast.success("New Admin Account has been created");
          window.location.href = `${window.location.protocol}//${window.location.host}/login`;
        } else {
          // toast.error(payload.message);
          console.log(payload.message);
        }
      })
      .addCase(signupNewUser.rejected, (state: any) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      });

    builder
      .addCase(login.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(login.fulfilled, (state: any, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        console.log({ payload });
        if (payload && payload.user) {
          console.log(payload);
          state.user = payload;
          state.isAdmin = payload.isAdmin; // TODO IF USER IS ADMIN, LOGIN TO ADMIN Dashboard ELSE user dashboard

          // state.user = { identity: payload.identity };
          saveWithExpiry(state.user, 0);
          // toast.info(payload.result || "OTP has been sent to your email");
          if (payload.user) {
            window.location.href = `${window.location.protocol}//${window.location.host}/`;
          }
        } else {
          // toast.error(payload.message);
        }
      })
      .addCase(login.rejected, (state: any) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      });

    builder
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(getLogedInUser.pending, (state, action) => {})
      .addCase(getLogedInUser.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.user = { ...state.user, ...payload.result };
        } else {
          // toast.error(payload.message);
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(getLogedInUser.rejected, (_state, { error }) => {
        // if (error) {
        //   toast.error(error.message);
        // }
      });
  }
});

export default authSlice.reducer;

//  if (payload.success) {
//    Api.defaults.headers.common["Authorization"] = payload.result.token;

//    if (payload.isAdmin) {
//      state.user = {
//        ...payload.result
//      };
//      saveWithExpiry({ ...payload.result }, 3);
//      window.location.href = `${window.location.protocol}//${window.location.host}/profile`;
//    } else {
//      state.user = {
//        ...payload.result,
//        isAdmin: payload.isAdmin
//      };
//      saveWithExpiry({ ...payload.result }, 0, "sessionStorage");
//    }
//  } else {
//    console.error(payload.message);
//  }
