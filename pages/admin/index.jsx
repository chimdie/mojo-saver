import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Link,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DashboardLayout } from "../../layouts";
import { getGroupList } from "../../redux/group";
import { GoKebabVertical } from "react-icons/go";
import { deleteCollection } from "../../firebase/fireStore";

export default function GroupList() {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getGroupList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(groups);
  }, []);

  return (
    <DashboardLayout>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((group) => {
          return (
            // <NextLink
            //   href={`admin/group/${group.id}`}
            //   key={group.id}
            //   className="cursor-pointer "
            // >
            //   <Link>
            <Box
              key={group.id}
              className="shadow-md rounded-md bg-slate-50 overflow-hidden max-w-md h-36"
            >
              <Flex justifyContent="space-between">
                <Box className="p-3 flex flex-col justify-around w-full">
                  <Text className="text-2xl font-semibold">{group.name}</Text>
                  <Text className="text-2xl font-semibold">
                    {group.monthlyDepositAmount}
                  </Text>
                </Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<GoKebabVertical />}
                    className="bg-white"
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    fontSize="18px"
                  />
                  <MenuList>
                    {/* <MenuItem onClick={deleteCollection(group.id)}> */}
                    Delete Group
                    {/* </MenuItem> */}
                    <MenuItem>Deactivate Group</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
            //   </Link>
            // </NextLink>
          );
        })}
      </Box>
    </DashboardLayout>
  );
}
