import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GroupinitialStateI, JoinGroupI } from "types";
import { Api, HTTP_STATUS, callToast, userData } from "utils";

const accessToken = userData()?.accessToken;

const NAME_SPACE = "group";

const initialState = {
  currentGroup: {},
  currentUser: {},
  currentGroupMembers: [],
  loadingStatus: HTTP_STATUS.IDLE
};

export const createNewGroup = createAsyncThunk(
  `${NAME_SPACE}/createGroup`,
  async (params: { owner: string }) => {
    const { data } = await createGroup(params);

    const joinG = await joinGroup(data?._id, data?.owner);

    return { ...data, owner: params.owner, joinG };
  }
);

const createGroup = async (params: any) => {
  return await Api.post("/groups", {
    ...params,
    bankName: "9 Payment Service Bank",
    bankAccountNumber: "6073355537"
  });
};

const joinGroup = async (groupId: string, memberId: string) => {
  return await Api.put(
    `/groups/${groupId}/members`,
    {
      member: memberId
    },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
};

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

export const deleteUser = createAsyncThunk(
  `${NAME_SPACE}/delUser`,
  async (params: JoinGroupI) => {
    const { data } = await Api.delete(`/groups/${params.groupId}/members`, {
      data: {
        member: params.userId
      }
    });
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
          callToast("Group created", "success", "New Group has been created");
        } else {
          callToast("Group created", "error", payload.message);
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
      .addCase(
        joinAGroup.fulfilled,
        (state: GroupinitialStateI, { payload }) => {
          state.loadingStatus = HTTP_STATUS.DONE;
          if (payload) {
            console.log("New Group join Group");
          } else {
            console.log(payload);
          }
        }
      )
      .addCase(joinAGroup.rejected, (state: GroupinitialStateI) => {
        state.loadingStatus = HTTP_STATUS.ERROR;
      })

      .addCase(getSelectedGroupMembers.pending, (state: any) => {
        state.loadingStatus = HTTP_STATUS.LOADING;
      })
      .addCase(
        getSelectedGroupMembers.fulfilled,
        (state: GroupinitialStateI, { payload }) => {
          state.loadingStatus = HTTP_STATUS.DONE;
          if (payload) {
            state.currentGroupMembers = payload.members;
            console.log(payload);
          } else {
            console.log(payload);
          }
        }
      )
      .addCase(
        getSelectedGroupMembers.rejected,
        (state: GroupinitialStateI) => {
          state.loadingStatus = HTTP_STATUS.ERROR;
        }
      )

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .addCase(deleteUser.pending, (_state: GroupinitialStateI) => {})
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })

      .addCase(deleteUser.rejected, (state: GroupinitialStateI, { error }) => {
        if (error) {
          console.error(error.message);
        }
      });
  }
});

export default groupSlice.reducer;
