import React from "react";
import NextLink from "next/link";
import { useSelector } from "react-redux";
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
  Link,
} from "@chakra-ui/react";
import { MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useSelector((state) => state.account);

  React.useEffect(() => {
    console.log({ user });
    // console.log(user?.isSuperAdmin);
  }, [user]);

  return (
    <Box as="header" bg="white" className="w-full">
      <nav className="flex lg:flex-row items-center justify-between py-3 px-3 sm:px-4">
        <Link href={`${user?.isSuperAdmin === "/admin"}`}>
          <Text className="text-4xl font-bold cursor-pointer">mojoSave</Text>
        </Link>
        <div className="hidden lg:flex flex-row">
          {!user.isSuperAdmin ? (
            <React.Fragment>
              <LinkItem link="/dashboard" caption="Dashboard" />
              <LinkItem link="/dashboard/groups" caption="Groups" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <LinkItem link="/admin" caption="Admin" />
              <LinkItem link="/admin/create-group" caption="Create Group" />
              <LinkItem link="/admin/users" caption="All Users" />
            </React.Fragment>
          )}
        </div>
        <div className="lg:hidden block sm:ml-3" onClick={onOpen}>
          <Icon fontSize="40px" as={MdOutlineMenu} />
        </div>
      </nav>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader onClick={onClose} />
          <DrawerBody paddingY="15px">
            {!user.isSuperAdmin ? (
              <>
                <Box paddingY={2} onClick={onClose}>
                  <LinkItem link="/dashboard" caption="Dashboard" />
                </Box>
                <Box paddingY={2} onClick={onClose}>
                  <LinkItem link="/dashboard/groups" caption="Groups" />
                </Box>
              </>
            ) : (
              <>
                <Box paddingY={2} onClick={onClose}>
                  <LinkItem link="admin" caption="Admin" />
                </Box>
                <Box paddingY={2} onClick={onClose}>
                  <LinkItem link="admin/create-group" caption="Create Group" />
                </Box>
                <Box paddingY={2} onClick={onClose}>
                  <LinkItem link="admin/users" caption="All Users" />
                </Box>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function LinkItem({ link, caption }) {
  return (
    <NextLink href={link} passHref>
      <Link className="text-lg font-medium cursor-pointer py-2 px-6 hover:text-gray-600">
        {caption}
      </Link>
    </NextLink>
  );
}
