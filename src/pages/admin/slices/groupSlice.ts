import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api, HTTP_STATUS } from "utils";

const NAME_SPACE = "group";

const initialState = {
  currentGroup: {},
  currentGroupMembers: [],
  loadingStatus: HTTP_STATUS.IDLE
};

interface JoinGroupI {
  groupId: string;
  userId: string;
}

export const createNewGroup = createAsyncThunk(
  `${NAME_SPACE}/createGroup`,
  async (params: any) => {
    const { data } = await Api.post("/groups", params);
    return { ...data, owner: params.owner };
  }
);

export const getSelectedGroup = createAsyncThunk(
  `${NAME_SPACE}/oneGroup`,
  async (groupId: string) => {
    const { data } = await Api.get(`/groups/${groupId}`);
    return data;
  }
);

export const joinAGroup = createAsyncThunk(
  `${NAME_SPACE}/joinGroup`,
  async (params: JoinGroupI) => {
    const { data } = await Api.put(`/groups/${params.groupId}/members`, {
      member: params.userId
    });
    return data;
  }
);

export const getSelectedGroupMembers = createAsyncThunk(
  `${NAME_SPACE}/allGroupMembers`,
  async (groupId: string) => {
    const { data } = await Api.get(`/groups/${groupId}/members`);
    return data;
  }
);

const groupSlice = createSlice({
  name: "Group",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createNewGroup.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(createNewGroup.fulfilled, (state: any, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        if (payload) {
          console.log("New Group has been created");
        } else {
          console.log(payload);
        }
      })
      .addCase(createNewGroup.rejected, (state: any) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      });

    builder
      .addCase(getSelectedGroup.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(getSelectedGroup.fulfilled, (state: any, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        if (payload) {
          state.currentGroup = payload;
          console.log(payload);
        } else {
          console.log(payload);
        }
      })
      .addCase(getSelectedGroup.rejected, (state: any) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      })

      .addCase(joinAGroup.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(joinAGroup.fulfilled, (state: any, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        if (payload) {
          console.log("New Group join Group");
        } else {
          console.log(payload);
        }
      })
      .addCase(joinAGroup.rejected, (state: any) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      })

      .addCase(getSelectedGroupMembers.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(getSelectedGroupMembers.fulfilled, (state: any, { payload }) => {
        state.loadingStatus = HTTP_STATUS.DONE;
        if (payload) {
          state.currentGroupMembers = payload.members;
          console.log(payload);
        } else {
          console.log(payload);
        }
      })
      .addCase(getSelectedGroupMembers.rejected, (state: any) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      });
  }
});

export default groupSlice.reducer;
