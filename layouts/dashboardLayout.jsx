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
  // const close = () => seOpen(false);
  return (
    <Box minH="100vh" bg="white" >

      <SideBar />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody bg="whatsapp.600"
            color="white">
            <SideBarContent />
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center">
            <Button
              color="white"
              variant="dash"
              mr={3}
              fontSize="xl"
              // onClick={onOpen}
              onClick={handleOpen}
            >
              <RiLogoutCircleLine />
              Logout
            </Button>
            {/* <ModalComp isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
            {/* <PopOver isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box as="main" pl={{ base: 0, md: '250px' }}>
        <Header onOpen={onOpen} />

        <Box bg="white">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
