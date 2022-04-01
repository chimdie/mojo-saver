import React, { useEffect } from "react";
import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";
import { LinkItems, adminLink } from "./linkItems";
import NavLink from "./navLink";
import { AuthContext } from "../../firebase/auth";

export default function SideBar() {
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
        <Link href="/dashboard" passHref>
          <Text fontSize="2xl" fontWeight="bold" cursor="pointer">
            mojoSave
          </Text>
        </Link>
      </Box>
      <SideBarContent />
    </Flex>
  );
}

export function SideBarContent() {
  return (
    <Box>
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
            {!user.isSuperAdmin &&
              LinkItems.map((link, i) => <NavLink key={i} link={link} />)}
          </React.Fragment>
        )}
      </AuthContext.Consumer>
    </Box>
  );
}
