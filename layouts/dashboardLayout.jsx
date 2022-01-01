import React from "react";
import { Header, SideBar } from "../components/dashboard";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white">
      <SideBar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        // size="md"
      >
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} />
      <Box as="main" ml={{ base: 0, md: 60 }} p="4">
        <Box as="main" bg="white">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
