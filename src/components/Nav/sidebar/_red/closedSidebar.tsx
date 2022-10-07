import { Box, Button, Link, Icon, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/all";
import { links } from "../../links";
import { OnclickProp } from "../../../types";

export default function ClosedNav({ onClick }: OnclickProp): JSX.Element {
  return (
    <Box
      maxWidth="100px"
      width="100%"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      zIndex="100"
      borderRight="1px solid black"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          as="nav"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          pt="1rem"
        >
          <Button
            onClick={onClick}
            width="100%"
            padding="18px"
            bg="none"
            fontSize="18px"
            _hover={{ bg: "none", color: "#0085FF" }}
          >
            <GiHamburgerMenu />
          </Button>
          <Box
            mt="4rem"
            width="100%"
            textAlign="center"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            {links.map((link, i) => {
              return (
                <Link
                  key={i}
                  as={ReactRouterLink}
                  to={link.url}
                  width="100%"
                  py="1rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={`${onClick} 1rem`}
                  transition="background 0.2s"
                  _hover={{ color: "#fFF", background: "#0085FF" }}
                >
                  <Icon as={link.icon} w={6} h={6} />
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
