import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fireBaseSignUp, firebaseLogin } from "../../firebase/auth";
import { addDocument, getDocQuery } from "../../firebase/fireStore";
import router from "next/router";
import { createStandaloneToast } from "@chakra-ui/toast";

const initialState = {
  user: {},
  loadingStatus: "idle",
};

function runToast() {
  const toast = createStandaloneToast();

  toast({
    title: "Signed up sucessfully.",
    description: "Login to your account.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });
}

export const signUp = createAsyncThunk("users/signup", async (userData) => {
  let data = await fireBaseSignUp(userData.email, userData.password)
    .then(async () => {
      let _data = {
        email: userData.email,
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
        isSuperAdmin: userData.isSuperAdmin,
      };
      await addDocument("users", _data);
      return _data;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log({ data });
  return data;
});

export const login = createAsyncThunk("users/login", async (userData) => {
  let data = await firebaseLogin(userData.email, userData.password).then(
    async ({ user }) => {
      let userDoc = await getDocQuery("users", {
        key: "email",
        q: "==",
        val: user.email,
      });
      return { ...userDoc, uid: user.uid };
    }
  );
  return data;
});

export const AccountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // state.value += 1;
    // },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // SIGNUP
    builder
      .addCase(signUp.pending, (state, action) => {
        // console.log("pending");
        state.loadingStatus = "pending";
        state.user = action.payload;
      })
      // Add reducers for additional action types here, and handle loading state as needed
      .addCase(signUp.fulfilled, (state, action) => {
        // console.log("fulfilled");
        state.loadingStatus = "fulfilled";
        state.user = action.payload;
        runToast();
        router.push("/login");
      })
      //when there is an error with the request
      .addCase(signUp.rejected, (state, action) => {
        state.loadingStatus = "rejected";
        state.user = action.payload;
      });

    // LOGIN
    builder
      .addCase(login.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loadingStatus = "fulfilled";
        console.log({ action });
        if (action.payload) {
          // console.log({ action });
          state.user = { ...state.user, ...action.payload };
          router.push("/dashboard");
        } else {
          console.error(action.payload.message);
        }
      })
      .addCase(login.rejected, (state, { error }) => {
        state.loadingStatus = "rejected";
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { setUser } = AccountSlice.actions;
export default AccountSlice.reducer;
