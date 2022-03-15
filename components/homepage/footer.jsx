import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Text width="100%" color="#767474" textAlign="center" paddingY={10}>
        Copyright © <span>{new Date().getFullYear()}</span>. All rights by
        MojoSave
      </Text>
    </Box>
  );
}
