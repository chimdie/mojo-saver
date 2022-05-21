import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "../../firebase/auth";
import {
  addDocument,
  getDocQuery,
  getCollection,
  createSubCollection,
} from "../../firebase/fireStore";
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

export const getGroupList = createAsyncThunk(`${NAMESPACE}/all`, async () => {
  const groups = await getCollection("groups");
  // console.log({ groups });
  return groups;
});

export const addNewMemberToGroup = createAsyncThunk(
  "users/groups",
  async (groupDocId, thunkAPI) => {
    // console.log({ thunkAPI: thunkAPI.getState() });

    let userId = thunkAPI.getState().account.user.uid;
    console.log({ user: userId });
    // console.log({ userId: userId, groupDocId: groupDocId });
    await createSubCollection(userId, groupDocId);
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
          description: "group created sucessfully",
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
      })

      .addCase(getGroupList.pending, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.LOADING;
      })
      .addCase(getGroupList.fulfilled, (state, action) => {
        // console.log(action);
        state.groups = action.payload;
        state.loadingGroupStatus = "HTTP_STATUS.DONE";
      })
      .addCase(getGroupList.rejected, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.ERROR;
      });

    builder
      .addCase(addNewMemberToGroup.pending, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.LOADING;
      })
      .addCase(addNewMemberToGroup.fulfilled, (state, action) => {
        // console.log(action);
        state.loadingGroupStatus = "fulfilled";
        toast({
          title: "Registration successful",
          description: "",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .addCase(addNewMemberToGroup.rejected, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.ERROR;
      });
  },
});

export default GroupSlice.reducer;
