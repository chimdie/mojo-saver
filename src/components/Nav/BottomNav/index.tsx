import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { Box, Link, Icon } from "@chakra-ui/react";
import { links } from "../links";

const BottomNaviagtion = (): JSX.Element => {
  return (
    <Box
      as="section"
      position="fixed"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexShrink="0"
      color="#fFF"
      width="100%"
      height="60px"
      padding="2rem"
      left="0"
      bottom="0"
      boxShadow="rgba(0, 0, 0, 0.01) 0px 2px 1px 0px inset"
    >
      {links.map((link) => {
        return (
          <Link
            as={ReactLink}
            to={link.url}
            key={link.title}
            color="#375d86"
            _activeLink={{ color: "#0085FF" }}
          >
            <Box display="grid" placeItems="center">
              <Icon
                as={link.icon}
                w={8}
                h={8}
                padding=".4rem"
                color="inherit"
                _activeLink={{ color: "inherit" }}
                borderRadius="50%"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              />
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default BottomNaviagtion;
