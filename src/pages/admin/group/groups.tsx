import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  AvatarBadge
} from "@chakra-ui/react";
import useSWR from "swr";
import { GroupCard } from "components";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import { CreateGroup } from "../components";
import {
  getSelectedGroup,
  getSelectedGroupMembers,
  deleteUser
} from "../slices/groupSlice";

interface UserCard {
  _id: string;
  status: string;
  fullName: string;
  emailAddress: string;
}

export default function AdminGroups() {
  const [currentUser, setCurrentUser] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: any) => state.account);
  const { currentGroupMembers, currentGroup } = useAppSelector(
    (state: any) => state.group
  );

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data: myGroups, error: myGrpsError } = useSWR(
    `/users/${currentUserId}/groups`
  );

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

  if (myGrpsError)
    return (
      <DashboardLayout>
        <Box>An error occurred</Box>
      </DashboardLayout>
    );
  if (!myGroups)
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
      <Box className="flex gap-6 flex-wrap">
        {myGroups?.map((group: any) => {
          return (
            <GroupCard
              key={group?._id}
              title={group.name}
              description={group.description}
              onClick={() => handleGroupFn(group?._id)}
            />
          );
        })}
        <Drawer
          isOpen={isGroupOpen}
          placement="right"
          onClose={onGroupClose}
          size={{ base: "sm", md: "md" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Group Members</DrawerHeader>

            <DrawerBody>
              <Box className="flex flex-col gap-4 flex-wrap">
                {currentGroupMembers?.length === 0 ? (
                  <Box>No Members yet</Box>
                ) : (
                  currentGroupMembers?.map((member: UserCard) => {
                    return (
                      <Box
                        className="flex justify-between bg-white border-gray-200 border p-4 rounded-md shadow hover:bg-slate-50"
                        onClick={() => handleGetSelectedUser(member?._id)}
                      >
                        <Box className="py-1">
                          <Text className="font-semibold pb-1 capitalize">
                            {member?.fullName}
                          </Text>
                          <Text className="text-sm">
                            {member?.emailAddress}
                          </Text>
                        </Box>
                        <Menu>
                          <MenuButton
                            onClick={() => handleGetSelectedUser(member?._id)}
                          >
                            <Avatar
                              name={member?.fullName}
                              size={{ base: "sm", md: "md" }}
                            >
                              {member?.status === "ACTIVE" && (
                                <AvatarBadge boxSize="1rem" bg="green.500" />
                              )}
                            </Avatar>
                          </MenuButton>
                          <MenuList>
                            <MenuItem onClick={() => handlDeleteSelectedUser()}>
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                    );
                  })
                )}
              </Box>
            </DrawerBody>

            <DrawerFooter
              display="flex"
              justifyContent="space-between"
              className="flex justify-between w-full"
            >
              <Button variant="outline" mr={3} onClick={onGroupClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </DashboardLayout>
  );
}
