import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "../../firebase/auth";
import {
  addDocument,
  getDocQuery,
  getCollection,
  createSubCollection,
  getSubCollection,
  getOneCollection,
} from "../../firebase/fireStore";
import router from "next/router";
import { createStandaloneToast } from "@chakra-ui/toast";
import { HTTP_STATUS } from "../../utils";

const NAMESPACE = "group";
const initialState = {
  users: [],
  groups: [],
  currentGroup: [],
  groupUsers: [],
  loadingGroupStatus: HTTP_STATUS.IDLE,
};

const toast = createStandaloneToast();

export const createGroup = createAsyncThunk(
  `${NAMESPACE}/new`,
  async (data) => {
    await addDocument("groups", { ...data });
    return;
  }
);

export const getGroupList = createAsyncThunk(
  `${NAMESPACE}/groups`,
  async () => {
    const groups = await getCollection("groups");
    console.log({ groups });
    return groups;
  }
);

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

export const getUsersList = createAsyncThunk(`${NAMESPACE}/users`, async () => {
  const users = await getCollection("users");
  return users;
});

export const getGroupMembers = createAsyncThunk(
  `${NAMESPACE}/groupUsers`,
  async (groupId) => {
    console.log({ groupId });
    const users = await getSubCollection(groupId, "members");
    return users;
  }
);

export const GroupSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // setGroupUsers: (state, { payload }) => {
    //   state.groupUsers = payload;
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

      // Get Groups
      .addCase(getGroupList.pending, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.LOADING;
      })
      .addCase(getGroupList.fulfilled, (state, action) => {
        state.groups = action.payload;
        state.loadingGroupStatus = "HTTP_STATUS.DONE";
      })
      .addCase(getGroupList.rejected, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.ERROR;
      })

      // Get Users
      .addCase(getUsersList.pending, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.LOADING;
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loadingGroupStatus = "HTTP_STATUS.DONE";
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.ERROR;
      });

    builder
      .addCase(getGroupMembers.pending, (state, action) => {
        state.loadingGroupStatus = HTTP_STATUS.LOADING;
      })
      .addCase(getGroupMembers.fulfilled, (state, { payload }) => {
        state.groupUsers = payload;
        state.loadingGroupStatus = "HTTP_STATUS.DONE";
      })
      .addCase(getGroupMembers.rejected, (state, action) => {
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

// export const { setGroupUsers } = GroupSlice.actions;
export default GroupSlice.reducer;
