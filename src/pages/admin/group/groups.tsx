import React, { useRef, useState } from "react";
import {
  Box,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from "@chakra-ui/react";
import useSWR from "swr";
import { PayStackApp, GroupCard, UserGroupCard } from "components";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import { CreateGroup, GroupMemDrawer } from "../components";
import {
  getSelectedGroup,
  getSelectedGroupMembers,
  deleteUser,
  joinAGroup
} from "../slices/groupSlice";

export default function AdminGroups() {
  const [currentUser, setCurrentUser] = useState<string>("");

  const dispatch = useAppDispatch();

  const cancelRef = useRef<HTMLButtonElement>(null);

  const { user } = useAppSelector((state: any) => state.account);
  const { currentGroupMembers, currentGroup } = useAppSelector(
    (state: any) => state.group
  );

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;
  const _currentUser = userData()?.user;

  const { data: myGroups, error: myGrpsError } = useSWR(
    `/users/${currentUserId}/groups`
  );
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
              <Box className="flex gap-6 flex-wrap">
                {myGroups?.length === 0 ? (
                  <Box>No Groups available</Box>
                ) : (
                  myGroups?.map((group: any) => {
                    return (
                      <GroupCard
                        key={group?._id}
                        title={group.name}
                        description={group.description}
                        onClick={() => handleGroupFn(group?._id)}
                      />
                    );
                  })
                )}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box className="flex gap-6 md:gap-10 flex-wrap">
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

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          size={{ base: "xs", md: "md" }}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Join a Group
              </AlertDialogHeader>
              <AlertDialogBody>
                You're about to join this group? You can't undo this action at
                the moment.
              </AlertDialogBody>
              <AlertDialogFooter display="flex" justifyContent="space-between">
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" onClick={onClose}>
                  <PayStackApp
                    callBackFn={handleJoinGroup}
                    emailAddress={_currentUser?.emailAddress}
                    amount={currentGroup?.monthlyDepositAmount}
                  />
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

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
