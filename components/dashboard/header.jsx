import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import UserProfile from "./userProfile";

export default function Header({ onOpen, ...rest }) {
  return (
    <Box as="header">
      <Flex
        bg="#0b6d47"
        color="white"
        position="sticky"
        height="20"
        top="0"
        alignItems="center"
        justifyContent={{ base: "space-between", md: "flex-end" }}
        px="4"
        ml={{ base: 0, md: 60 }}
        zIndex="1"
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontWeight="bold"
        >
          mojoSave
        </Text>

        <UserProfile />
      </Flex>
    </Box>
  );
}
