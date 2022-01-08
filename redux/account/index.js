import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fireBaseSignUp } from "../../firebase/auth";

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

export const AccountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signUp.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("fulfilled");
      state.loadingStatus = "fulfilled";
      state.user = action.payload;
    });

    //when the request is sent and still pending
    builder.addCase(signUp.pending, (state, action) => {
      // Add user to the state array
      console.log("pending");
      state.loadingStatus = "pending";

      state.user = action.payload;
    });
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
