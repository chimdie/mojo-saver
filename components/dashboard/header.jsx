import { Box, IconButton, Flex, Text, Avatar, HStack } from "@chakra-ui/react";
import { FiMenu, FiBell } from "react-icons/fi";

export default function Header({ onOpen }) {
  return (
    <Flex
      bg="whatsapp.600"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      zIndex="1"
      position="sticky"
      className="p-4 text-white hidden"
      w="100%"
      display={{ base: "flex", md: "none" }}
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
      <HStack
        spacing={{ base: "2", md: "6" }}
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        {/* <Flex alignItems="center">
          <Avatar
            size="md"
            src={
              "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </Flex> */}
      </HStack>
    </Flex>
  );
}
