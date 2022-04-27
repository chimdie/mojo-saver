import React from "react";
import {
  Box,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Link,
  Flex,
  Button,
} from "@chakra-ui/react";
import { GoKebabVertical } from "react-icons/go";

export default function GroupCard({ title, description }) {
  return (
    <Box className="shadow-md rounded-md bg-slate-50 overflow-hidden max-w-md">
      <Flex justifyContent="space-between">
        <Box className="p-3 pb-">
          <Text className="text-2xl font-semibold">{title}</Text>
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
            <MenuItem>Transaction History</MenuItem>
            <MenuItem>Opt out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box className="p-3">
        <Text>{description}</Text>
      </Box>
      <Image src="/header.jpeg" alt="" className="object-cover block w-full" />
    </Box>
  );
}
