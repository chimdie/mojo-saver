import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fireBaseSignUp, firebaseLogin } from "../../firebase/auth";
import {
  addDocument,
  getDocQuery,
  addDocManual,
} from "../../firebase/fireStore";
import router from "next/router";
import { createStandaloneToast } from "@chakra-ui/toast";
import { HTTP_STATUS } from "../../utils/constants";

const toast = createStandaloneToast();

const initialState = {
  user: {},
  singupLoadingStatus: HTTP_STATUS.IDLE,
  loginLoadingStatus: HTTP_STATUS.IDLE,
};

function runToast(title) {
  const toast = createStandaloneToast();

  toast({
    title: "Signed up sucessfully.",
    description: "Login to your account.",
    status: "success",
    duration: 3000,
    isClosable: true,
  });
}

export const signUp = createAsyncThunk("users/signup", async (userData) => {
  let data = await fireBaseSignUp(userData.email, userData.password);
  let details = {
    email: userData.email,
    fullName: userData.fullName,
    phoneNumber: userData.phoneNumber,
    isSuperAdmin: userData.isSuperAdmin,
  };
  // await addDocument("users", { ...details });
  let u = await addDocManual("users", data.user.uid, details);
  return { details };
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // SIGNUP
    builder
      .addCase(signUp.pending, (state, action) => {
        state.singupLoadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.singupLoadingStatus = HTTP_STATUS.DONE;
        console.log(action);
        state.user = action.payload;
        toast({
          title: "Signed up sucessfully.",
          description: "Login to your account.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/login");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.singupLoadingStatus = HTTP_STATUS.ERROR;
        state.user = action.payload;
      });

    // LOGIN
    builder
      .addCase(login.pending, (state, action) => {
        state.loginLoadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginLoadingStatus = HTTP_STATUS.DONE;
        if (action.payload) {
          state.user = { ...state.user, ...action.payload };
          if (state.user.isSuperAdmin) {
            router.push("/admin");
          } else {
            router.push("/dashboard");
          }
          toast({
            title: "Login sucessfull.",
            description: "Welcome to Mojo",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          console.error(action.payload.message);
        }
      })
      .addCase(login.rejected, (state, { error }) => {
        state.loginLoadingStatus = HTTP_STATUS.ERROR;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { setUser } = AccountSlice.actions;
export default AccountSlice.reducer;
