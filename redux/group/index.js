import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "../../firebase/auth";
import { addDocument, getDocQuery } from "../../firebase/fireStore";
import router from "next/router";
import { createStandaloneToast } from "@chakra-ui/toast";
import { HTTP_STATUS } from "../../utils";

const NAMESPACE = "group";
const initialState = {
  groups: [],
  loadingGroupStatus: HTTP_STATUS.IDLE,
};

const toast = createStandaloneToast();

export const createGroup = createAsyncThunk(
  `${NAMESPACE}/new`,
  async (payload) => {
    await addDocument("groups", { ...payload });
    return;
  }
);

export const GroupSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // increment: (state) => {
    //   // state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    // CREATE
    builder
      .addCase(createGroup.pending, (state, action) => {
        // console.log("pending");
        state.loadingGroupStatus = HTTP_STATUS.LOADING;
      })
      // Add reducers for additional action types here, and handle loading state as needed
      .addCase(createGroup.fulfilled, (state, action) => {
        // console.log("fulfilled");
        state.loadingGroupStatus = HTTP_STATUS.DONE;

        toast({
          title: "sucessfully.",
          description: "Login to your account.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      //when there is an error with the request
      .addCase(createGroup.rejected, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.ERROR;
        toast({
          title: "create group error",
          description: "error creating group.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  },
});

export default GroupSlice.reducer;
