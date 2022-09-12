import React from "react";
import {
  Box,
  Button,
  Link,
  Icon,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/all";
import ClosedNav from "./closedSidebar";
import FigFile from "./figSide";
import { links } from "./links";

type toggleProps = {
  isOpen: boolean;
  onClose: boolean;
};

export default function MainSidebar(): JSX.Element {
  const [switchSideBar, setSideBar] = React.useState(false);

  const handleSwitchSideBar = () => {
    setSideBar(!switchSideBar);
  };

  return (
    <>
      {!switchSideBar ? (
        <ClosedNav onClick={handleSwitchSideBar} />
      ) : (
        <Box w="100%" h="100%" position="fixed" left="0" top="0" z-index="100">
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              align-items="flex-start"
              flexDirection="column"
              justifyContent="space-between"
              // width="240px"
              maxWidth="240px"
              height="100vh"
              borderRight="1px solid black"
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="100%"
              >
                <Box
                  mt="1rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  flexDirection="column"
                  // pl="24px"
                  // gap="1rem"
                >
                  <Button
                    onClick={handleSwitchSideBar}
                    justifyContent="flex-start"
                    width="100%"
                    padding="18px"
                    bg="none"
                    fontSize="18px"
                    _hover={{ bg: "none", color: " #0085FF" }}
                  >
                    <GiHamburgerMenu />
                  </Button>
                  <Box
                    mt="4rem"
                    display="flex"
                    textAlign="left"
                    width="100%"
                    flexDirection="column"
                  >
                    {links.map((link) => {
                      return (
                        <Link
                          href={link.url}
                          width="100%"
                          p="1rem 1.25rem"
                          display="flex"
                          alignItems="center"
                          gap="1rem"
                          transition="background 0.3s"
                          _hover={{ color: "#fFF", background: "#0085FF" }}
                        >
                          <Icon as={link.icon} w={6} h={6} />
                          <Text>{link.title}</Text>
                        </Link>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
