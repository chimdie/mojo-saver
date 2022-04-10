import React, { useState } from "react";
import { Header, SideBar, SideBarContent } from "../components/dashboard";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { ModalComp, PopOver } from "../components/utilities";

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [open, seOpen] = useState(false);
  const handleOpen = () => seOpen(!open);

  return (
    <Box minH="100vh" bg="white">
      <SideBar />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg="whatsapp.600" color="white">
            <SideBarContent />
          </DrawerBody>
          <DrawerFooter
            display="flex"
            justifyContent="center"
            bg="whatsapp.600"
          >
            <Button
              color="white"
              variant="dash"
              // mr={3}
              fontSize="xl"
              onClick={handleOpen}
            >
              <RiLogoutCircleLine />
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box as="main" pl={{ base: 0, md: "250px" }} minH="100vh">
        <Header onOpen={onOpen} />

        <Box bg="white" p={{ base: "1rem", md: "3rem" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
