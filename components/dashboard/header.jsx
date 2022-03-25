import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import UserProfile from "./userProfile";

export default function Header({ onOpen, ...rest }) {
  return (
  
      <Flex
        // bg="#0b6d47"
        bg="whatsapp.600"
        color="white"
       
        alignItems="center"
        justifyContent={{ base: "space-between", md: "flex-end" }}
        px="4"
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
        <Box>
          <Text
            as="a"
            href="/dashboard"
            display={{ base: "flex", md: "none" }}
            fontSize="2xl"
            fontWeight="bold"
          >
            mojoSave
          </Text>
        </Box>

        <UserProfile />
      </Flex>
  );
}
