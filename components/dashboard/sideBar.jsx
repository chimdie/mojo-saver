import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Divider, CloseButton, Flex, Text, Box } from "@chakra-ui/react";
import { LinkItems, adminLink } from "./linkItems";
import NavLink from "./navLink";
import { AuthContext } from "../../firebase/auth";

export default function SideBar({ onClose }) {
  const router = useRouter();

  // useEffect(() => {
  //   router.events.on("routeChangeComplete", onClose);
  //   return () => {
  //     router.events.off("routeChangeComplete", onClose);
  //   };
  // }, [router.events, onClose]);

  return (
    <Flex
      as="aside"
      width="250px"
      position="fixed"
      left={0}
      p={5}
      top={0}
      height="100%"
      bg="whatsapp.600"
      color="white"
      display={{ base: "none", md: "block" }}
    >
      <Box alignItems="center" mx="8" justifyContent="space-between">
        <Text as="a" href="/dashboard" fontSize="2xl" fontWeight="bold">
          mojoSave
        </Text>
      </Box>
      <SideBarContent />
    </Flex>

  );
}

export function SideBarContent() {
  return <Box>
    <AuthContext.Consumer>
      {/* if(user.user.isSuperAdmin === true) */}
      {({ user }) => (
        <React.Fragment>
          {/* {user?.isSuperAdmin.toString()} */}
          {user.isSuperAdmin && (
            <div>
              <div className="flex justify-center w-2/4 md:w-3/4">
                <Text>Admin</Text>
              </div>
              {adminLink.map((link, i) => (
                <NavLink key={i} link={link} />
              ))}
            </div>
          )}
        </React.Fragment>
      )}
    </AuthContext.Consumer>
    {/* <Divider /> */}
    {({ user }) => (
      <React.Fragment>
        {!user.isSuperAdmin &&
          LinkItems.map((link, i) => <NavLink key={i} link={link} />)}
      </React.Fragment>
    )}
  </Box>
}