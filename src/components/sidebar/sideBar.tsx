import React from "react";
// import { NavLink } from "react-router-dom";
import { Box, Button, Link, Icon } from "@chakra-ui/react";
import "../../styles/sidebar.css";
import { links } from "./links";

export default function SideBar() {
  // const [asideIsOpen, setAsideIsOpen] = useState(true);

  const handleClick = (e: any) => e.preventDefault();

  return (
    <Box className="sidebar">
      <Box width="100%" overflow="hidden">
        <Box className="logo">LOGO</Box>
        <Box
          width="100%"
          height="calc(100vh - 150px)"
          padding-bottom="50px"
          display="flex"
          flex-direction="column"
          justify-content="space-between"
          overflow-y="scroll"
        >
          <Box>
            {links.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.url}
                  // _hover={{
                  //   cursor: "pointer",
                  //   textDecoration: "none",
                  //   bg: "#0085FF",
                  // }}
                  onClick={handleClick}
                  width="100%"
                  mb="1rem"
                  // width="100%"
                  height="44px"
                  p="0 15px 0 20px"
                  borderLeft="10px solid transparent"
                  display="flex"
                  justify-content="flex-start"
                  align-items="center"
                  _hover={{
                    cursor: "pointer",
                    // borderLeft: "10px solid",
                    bg: "#0085FF",
                  }}
                >
                  <Button
                    width="100%"
                    height="44px"
                    p="0 15px 0 20px"
                    borderLeft="10px solid transparent"
                    display="flex"
                    justify-content="flex-start"
                    align-items="center"
                    _hover={{
                      cursor: "pointer",
                      borderLeft: "10px solid",
                      bg: "#0085FF",
                    }}
                    bg="#fff"
                  >
                    <Icon
                      as={link.icon}
                      fontSize="1.5rem"
                      mr={2}
                      transition="-moz-initial.2s"
                    />
                    {link.title}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
