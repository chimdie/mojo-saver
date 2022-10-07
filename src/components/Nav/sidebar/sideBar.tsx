import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { Box, Link, Icon, Text } from "@chakra-ui/react";
import { links } from "../links";

export default function MainSidebar(): JSX.Element {
  return (
    <Box
      as="aside"
      position="fixed"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      gap="24px"
      width="390px"
      height="100vh"
      top="0"
      left="0"
      bg="#ffff"
      boxShadow="20px 0px 13px rgba(0, 0, 0, 0.035), 8.15px 0px 6.51852px rgba(0, 0, 0, 0.0274815), 1.85px 0px 3.14814px rgba(0, 0, 0, 0.0168519)"
    >
      <Box
        as="section"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-around"
        w="100%"
        padding="24px"
      >
        {links.map((link, i) => {
          return (
            <Link
              as={ReactLink}
              key={link.url + i}
              to={link.url}
              width="330px"
              p="1rem .75rem"
              my=".75rem"
              display="flex"
              alignItems="center"
              gap="1rem"
              borderRadius="12px"
              transition="background 0.2s"
              color="#375d86"
              fontWeight="bold"
              _hover={{ color: "#0085FF", background: "#f1f1f1" }}
              _activeLink={{ color: "#0085FF", background: "#f1f1f1" }}
            >
              <Icon as={link.icon} w={6} h={6} />
              <Text>{link.title}</Text>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
