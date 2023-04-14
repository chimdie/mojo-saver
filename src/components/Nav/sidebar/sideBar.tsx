import React from "react";
import { NavLink as ReactLink, To } from "react-router-dom";
import { Box, Link, Icon, Text, Button } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
// import { OnclickProp } from "components/types";

export default function MainSidebar({
  onClick,
  currentUser
}: {
  onClick: any;
  currentUser: any;
}): JSX.Element {
  return (
    <Box
      as="aside"
      position="fixed"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      gap="24px"
      width="300px"
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
        {currentUser.map(
          (
            link: {
              url: To;
              icon: any;
              title: string;
            },
            i: any
          ) => {
            return (
              <Link
                end
                as={ReactLink}
                key={link.url + i}
                to={link.url}
                width="270px"
                p="1rem .75rem"
                my=".75rem"
                display="flex"
                alignItems="center"
                gap="1rem"
                borderRadius="12px"
                transition="background 0.2s"
                color="#022040"
                fontWeight="bold"
                _hover={{ color: "#0085FF" }}
                _activeLink={{ color: "#0085FF" }}
              >
                <Icon as={link.icon} w={6} h={6} />
                <Text>{link.title}</Text>
              </Link>
            );
          }
        )}
      </Box>
      <Box className="flex w-full">
        <Box as="section" className="p-8 my-8 w-full">
          <Button
            leftIcon={<AiOutlineLogout />}
            colorScheme="blue"
            variant="outline"
            width="100%"
            py="1.5rem"
            borderRadius="12px"
            onClick={onClick}
            fontSize="20px"
            textAlign="left"
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
