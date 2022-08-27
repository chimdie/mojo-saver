import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Icon,
  VStack,
  Link,
} from "@chakra-ui/react";
import { links } from "./links";

type SidebarContentProps = {
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
};

const SidebarContent = ({ onClick }: SidebarContentProps) => {
  return (
    <VStack>
      <Box>
        {links.map((link) => {
          return (
            <Link
              key={link.title}
              as={RouterLink}
              to={link.url}
              _activeLink={{ color: "yellow.500" }}
              display="flex"
              textAlign="left"
              onClick={onClick}
              w="100%"
              pb={4}
              _hover={{
                color: "yellow.500",
              }}
            >
              <Icon as={link.icon} boxSize={6} />
              <Text fontSize={18} fontWeight={500} paddingLeft={6}>
                {link.title}
              </Text>
            </Link>
          );
        })}
      </Box>
    </VStack>
  );
};

type SidebarProps = {
  // onClose?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  isOpen: boolean;
  variant: any;
  onClose: any;
};

const Sidebar = ({ isOpen, variant, onClose }: SidebarProps) => {
  return variant === "sidebar" ? (
    <Box
      as="aside"
      position="fixed"
      left={0}
      padding={8}
      width="300px"
      top={0}
      paddingTop={28}
      height="100%"
      bg="#FCFFFF"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menji Inspector</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
