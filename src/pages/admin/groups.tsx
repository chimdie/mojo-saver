import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import useSWR from "swr";
import { DashboardLayout } from "layouts";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { GroupCard } from "components/";
import { CreateGroup } from "./components";
import { getSelectedGroup } from "./slices/groupSlice";

export default function AdminGroups() {
  const { data } = useSWR("/groups/");

  const dispatch = useAppDispatch();

  const { currentGroup } = useAppSelector((state: any) => state.group);

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

  const handleGroupOpen = (id: string) => {
    dispatch(getSelectedGroup(id));
    onGroupOpen();
  };

  return (
    <DashboardLayout>
      <Box className="flex justify-end w-full pb-7">
        <CreateGroup
          isOpen={isCreateGroupOpen}
          onOpen={onCreateGroupOpen}
          onClose={onCreateGroupClose}
        />
      </Box>
      <Box className="flex gap-6 flex-wrap">
        {data?.map((group: any) => {
          return (
            <>
              <GroupCard
                key={group?._id}
                title={group.name}
                description={group.description}
                onClick={() => handleGroupOpen(group?._id)}
              />
            </>
          );
        })}
        <Drawer
          isOpen={isGroupOpen}
          placement="right"
          onClose={onGroupClose}
          size={{ base: "xs", md: "md" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Group Members</DrawerHeader>

            <DrawerBody>
              <GroupCard
                key={currentGroup?._id}
                title={currentGroup.name}
                description={currentGroup.description}
              />
            </DrawerBody>

            <DrawerFooter
              display="flex"
              justifyContent="space-between"
              className="flex justify-between w-full"
            >
              <Button variant="outline" mr={3} onClick={onGroupClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </DashboardLayout>
  );
}
