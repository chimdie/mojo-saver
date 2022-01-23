import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Divider, CloseButton, Flex, Text } from "@chakra-ui/react";
import { LinkItems, adminLink } from "./linkItems";
import NavLink from "./navLink";

export default function SideBar({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Flex
      as="aside"
      bg="whatsapp.600"
      color="white"
      pos="fixed"
      w={{ base: "full", md: 60 }}
      h="full"
      flexDirection="column"
      transition="3s ease"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text as="a" href="/dashboard" fontSize="2xl" fontWeight="bold">
          mojoSave
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <div className="flex justify-center w-2/4 md:w-3/4">
        <Text>Admin</Text>
      </div>
      {adminLink.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
      <Divider />
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Flex>
  );
}
