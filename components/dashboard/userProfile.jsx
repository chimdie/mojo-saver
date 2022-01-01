import { IconButton, Avatar, Flex, HStack } from "@chakra-ui/react";
import { FiChevronDown, FiBell } from "react-icons/fi";

export default function UserProfile() {
  return (
    <HStack spacing={{ base: "2", md: "6" }}>
      {/* <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<FiBell />}
      /> */}
      <Flex alignItems="center">
        <Avatar
          size="md"
          src={
            "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
        />
      </Flex>
    </HStack>
  );
}
