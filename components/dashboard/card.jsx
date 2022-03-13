import React from "react";
import { Box } from "@chakra-ui/react";

export default function Card({ children }) {
  return (
    <Box
      bg="#FFF"
      padding={{ base: 2, md: 4 }}
      borderRadius="10px"
      boxShadow="0px 4px 10px -10px rgba(120, 120, 120, 0.15)"
      // border="1px solid red"
    >
      {children}
    </Box>
  );
}
