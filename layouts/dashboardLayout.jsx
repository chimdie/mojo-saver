import React from "react";
import { Box } from "@chakra-ui/react";
import { ModalComp, PopOver, Navbar } from "../components/utilities";

export default function Layout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      className="h-screen flex flex-col"
      margin={{ sm: "0 10vw" }}
      // maxWidth="1165px" //TODO
      flex="1"
      height="100vh"
    >
      <Navbar />
      <Box as="main" bg="white" my="2rem" h="100%">
        <Box as="section" p={{ base: "1rem", md: "3rem" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
