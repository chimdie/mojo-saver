import React from "react";
import Link from "next/link";
import {
  Icon,
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="white" className="w-full">
      <nav className="flex lg:flex-row items-center justify-between py-3 px-3 sm:px-4">
        <Link href="/" passHref>
          <Text className="text-4xl font-bold cursor-pointer">mojoSave</Text>
        </Link>
        <div className="hidden lg:flex flex-row">
          <LinkItem link="/" caption="Home" />
          <LinkItem link="/" caption="" />
        </div>
        <div className="lg:hidden block md:ml-3 z-10" onClick={onOpen}>
          <Icon fontSize="40px" as={MdOutlineMenu} />
        </div>
      </nav>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader onClick={onClose} />
          <DrawerBody paddingY="15px">
            <Box paddingY={2} onClick={onClose}>
              <LinkItem link="/" caption="Home" />
            </Box>
            <Box paddingY={2} onClick={onClose}>
              <LinkItem link="/" caption="" />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function LinkItem({ link, caption }) {
  return (
    <Link href={link}>
      <a className="text-lg font-medium cursor-pointer py-2 px-6 hover:text-gray-600">
        {caption}
      </a>
    </Link>
  );
}
