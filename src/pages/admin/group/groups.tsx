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
  useDisclosure
} from "@chakra-ui/react";
import useSWR from "swr";
import { GroupCard } from "components";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { userData } from "utils";
import { CreateGroup } from "../components";
import {
  getSelectedGroup,
  getSelectedGroupMembers
} from "../slices/groupSlice";

interface UserCard {
  fullName: string;
  emailAddress: string;
}

export default function AdminGroups() {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: any) => state.account);
  const { currentGroupMembers } = useAppSelector((state: any) => state.group);

  const currentUserId =
    userData() && userData()?.user?._id ? userData()?.user?._id : user?._id;

  const { data: groupsCreated } = useSWR(`/users/${currentUserId}/groups`);

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
        {groupsCreated?.map((group: any) => {
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
                      <Box className="flex justify-between bg-white border-gray-200 border p-4 rounded-md shadow">
                        <Box className="py-1">
                          <Text className="font-semibold pb-1 capitalize">
                            {member?.fullName}
                          </Text>
                          <Text className="text-sm">
                            {member?.emailAddress}
                          </Text>
                        </Box>
                        <Avatar name={member?.fullName} />
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
