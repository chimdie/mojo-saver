import React, { useRef } from "react";
import useSWR from "swr";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { PayStackApp, MyGroupCard, UserGroupCard } from "components";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import { getSelectedGroup, joinAGroup } from "pages/admin/slices/groupSlice";

export default function Groups(): JSX.Element {
  const dispatch = useAppDispatch();

  const cancelRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useAppSelector((state: any) => state.account);
  const { currentGroup } = useAppSelector((state: any) => state.group);

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;
  const currentUser = userData()?.user;

  const { data: trendingGroups, error: trendingGrpError } = useSWR("/groups/");
  const { data: myGroups, error: userGrpError } = useSWR(
    `/users/${currentUserId}`
  );

  const handleOpenGroup = (id: string) => {
    onOpen();
    dispatch(getSelectedGroup(id));
  };

  const handleJoinGroup = () => {
    dispatch(joinAGroup({ groupId: currentGroup?._id, userId: currentUserId }));
  };

  // TODO Loading status and error messages proper implementations
  if (trendingGrpError || userGrpError)
    return (
      <DashboardLayout>
        <Box>An error occurred</Box>
      </DashboardLayout>
    );
  if (!trendingGroups || !myGroups)
    return (
      <DashboardLayout>
        <Box>Loading...</Box>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList pb="1rem">
          <Tab>Trending</Tab>
          <Tab>My Groups</Tab>
        </TabList>
        <TabPanels>
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
                      groupTotal={group?.members?.length}
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

          <TabPanel>
            <Box className="flex gap-6 md:gap-10 flex-wrap">
              {myGroups?.groups?.length === 0 ? (
                <Box>You're yet to join any group</Box>
              ) : (
                myGroups?.groups?.map((group: any) => {
                  return (
                    <MyGroupCard
                      key={group?._id}
                      title={group?.name}
                      description={group?.description}
                      monthlyDepositAmount={group?.monthlyDepositAmount}
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
              You're about to join this group? You can't undo this action at the
              moment.
            </AlertDialogBody>
            <AlertDialogFooter display="flex" justifyContent="space-between">
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={onClose}>
                <PayStackApp
                  callBackFn={handleJoinGroup}
                  emailAddress={currentUser?.emailAddress}
                  amount={currentGroup?.monthlyDepositAmount}
                />
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </DashboardLayout>
  );
}
