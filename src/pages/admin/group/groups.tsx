import React, { useRef, useState } from "react";
import {
  Box,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import useSWR from "swr";
import {
  PayStackApp,
  GroupCard,
  UserGroupCard,
  CreateGroup,
  GroupMemDrawer
} from "components";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import {
  getSelectedGroup,
  getSelectedGroupMembers,
  deleteUser,
  joinAGroup,
  createNewGroup
} from "../slices/groupSlice";

interface GroupI {
  id: string;
  name: string;
  description: string;
}

export default function AdminGroups() {
  const [currentUser, setCurrentUser] = useState<string>("");
  const cancelRef = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: any) => state.account);
  const { currentGroupMembers, currentGroup } = useAppSelector(
    (state: any) => state.group
  );

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;
  const _currentUser = userData()?.user;

  const {
    data: myGroups = [],
    error: myGrpsError,
    mutate: mutateMyGroups
  } = useSWR<GroupI[]>(`/users/${currentUserId}/groups`);
  const { data: trendingGroups, error: trendingGrpError } = useSWR("/groups");
  // const { data: groupWallet } = useSWR(`/wallet/groups/${currentGroup?._id}`);

  const {
    isOpen: isCreateGroupOpen,
    onOpen: onCreateGroupOpen,
    onClose: onCreateGroupClose
  } = useDisclosure();
  const {
    isOpen: isGroupOpen,
    onOpen: onGroupOpen,
    onClose: onGroupClose
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGroupFn = (groupId: string) => {
    dispatch(getSelectedGroup(groupId));
    dispatch(getSelectedGroupMembers(groupId));
    onGroupOpen();
  };

  const handleGetSelectedUser = (userId: string) => {
    setCurrentUser(userId);
  };

  const handlDeleteSelectedUser = () => {
    dispatch(deleteUser({ groupId: currentGroup?._id, userId: currentUser }));
    handleGroupFn;
  };

  const handleOpenGroup = (id: string) => {
    dispatch(getSelectedGroup(id));
  };

  const handleJoinGroup = () => {
    dispatch(joinAGroup({ groupId: currentGroup?._id, userId: currentUserId }));
    mutateMyGroups((data: any) => ({
      ...data,
      [currentGroup?._id]: currentGroup
    }));
  };

  const handleCreateGroup = (data: any) => {
    dispatch(createNewGroup({ ...data, owner: currentUserId }));
    mutateMyGroups(() => [...myGroups, data], false);
  };

  // console.log(groupWallet);
  if (myGrpsError || trendingGrpError)
    return (
      <DashboardLayout>
        <Box>An error occurred</Box>
      </DashboardLayout>
    );
  if (!myGroups || !trendingGroups)
    return (
      <DashboardLayout>
        <Box>Loading...</Box>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <Box className="flex justify- w-full pb-7">
        <CreateGroup
          isOpen={isCreateGroupOpen}
          onOpen={onCreateGroupOpen}
          onClose={onCreateGroupClose}
          currentUserId={currentUserId}
          handleCreateGroup={handleCreateGroup}
        />
      </Box>
      <>
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList pb="1rem">
            <Tab>My Groups</Tab>
            <Tab>Trending</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box className="flex gap-6 flex-wrap justify-between">
                {myGroups && myGroups?.length === 0 ? (
                  <Box>No Groups available</Box>
                ) : (
                  myGroups.length > 0 &&
                  myGroups?.map((group: any) => {
                    return (
                      <GroupCard
                        key={group?._id}
                        title={group.name}
                        description={group.description}
                        monthlyDepositAmount={group?.monthlyDepositAmount}
                        onClick={() => handleGroupFn(group?._id)}
                      />
                    );
                  })
                )}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box className="flex gap-6 flex-wrap justify-between">
                {trendingGroups?.length === 0 ? (
                  <Box>No Groups available</Box>
                ) : (
                  trendingGroups?.map((group: any) => {
                    return (
                      <UserGroupCard
                        key={group?._id}
                        title={group.name}
                        // groupTotal={group?.members?.length}
                        description={group.description}
                        onClick={() => handleOpenGroup(group?._id)}
                        // handleJoinGroup={() => handleJoinGroup()}
                        amount={group?.monthlyDepositAmount}
                        onOpen={onOpen}
                      />
                    );
                  })
                )}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <PayStackApp
          callBackFn={handleJoinGroup}
          emailAddress={_currentUser?.emailAddress}
          amount={currentGroup?.monthlyDepositAmount}
          cancelRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
        />

        <GroupMemDrawer
          isGroupOpen={isGroupOpen}
          onGroupClose={onGroupClose}
          currentGroupMembers={currentGroupMembers}
          handleGetSelectedUser={handleGetSelectedUser}
          handlDeleteSelectedUser={handlDeleteSelectedUser}
        />
      </>
    </DashboardLayout>
  );
}
