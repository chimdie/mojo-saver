import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fireBaseSignUp } from "../../firebase/auth";
import { HTTP_STATUS } from "../../utils";

const initialState = {
  user: {},
  loadingStatus: "idle",
};

export const signUp = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userData, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
    fireBaseSignUp(userData.email, userData.password)
      .then((data) => {
        console.log({ data });
        return {
          id: data.uid,
          email: data.email,
          createdAt: data.createdAt,
          lastLoginAt: data.lastLoginAt,
        };
      })
      .catch((e) => {
        console.log(e);
      });
  }
);

// export const signUp = createAsyncThunk(
//   `${NAME_SPACE}/signup`,
//   async (_data) => {
//     const { data } = await Api.post("/auth/signup", _data);
//     return data;
//   }
// );

export const login = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_data) => {
    const { data } = await Api.post("/auth/login", _data);
    return data;
  }
);

export const AccountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    //when the request is sent and still pending
    builder.addCase(signUp.pending, (state, action) => {
      // Add user to the state array
      console.log("pending");
      state.loadingStatus = "pending";

      state.user = action.payload;
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signUp.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("fulfilled");
      state.loadingStatus = "fulfilled";
      state.user = action.payload;
    });

    // builder
    //   .addCase(signUp.pending, (state, action) => {
    //     state.loadingStatus = HTTP_STATUS.LOADING;
    //   })
    //   .addCase(signUp.fulfilled, (state, action) => {
    //     state.loadingStatus = HTTP_STATUS.DONE;
    //     if (action.payload.success) {
    //       state.user = action.payload.result;
    //     } else {
    //       toast.error(action.payload.message);
    //     }
    //   })
    //   .addCase(signUp.rejected, (state, { error }) => {
    //     state.loadingStatus = HTTP_STATUS.ERROR;
    //     toast.error("server error");
    //   });

    //when there is an error with the request
    builder.addCase(signUp.rejected, (state, action) => {
      // Add user to the state array
      console.log("rejected");
      state.loadingStatus = "rejected";
      state.user = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default AccountSlice.reducer;
