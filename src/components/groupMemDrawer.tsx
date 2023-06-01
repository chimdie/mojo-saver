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
  AvatarBadge
} from "@chakra-ui/react";
import { UserCardI } from "types";

interface GroupMemDrawerI {
  isGroupOpen: boolean;
  onGroupClose: () => void;
  currentGroupMembers: [];
  handleGetSelectedUser: (member: string) => void;
  handlDeleteSelectedUser: () => void;
}

export default function GroupMemDrawer({
  isGroupOpen,
  onGroupClose,
  currentGroupMembers,
  handleGetSelectedUser,
  handlDeleteSelectedUser
}: GroupMemDrawerI) {
  return (
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
              currentGroupMembers?.map((member: UserCardI) => {
                return (
                  <Box
                    className="flex justify-between bg-white border-gray-200 border p-4 rounded-md shadow hover:bg-slate-50"
                    onClick={() => handleGetSelectedUser(member?._id)}
                  >
                    <Box className="py-1">
                      <Text className="font-semibold pb-1 capitalize">
                        {member?.fullName}
                      </Text>
                      <Text className="text-sm">{member?.emailAddress}</Text>
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
  );
}
