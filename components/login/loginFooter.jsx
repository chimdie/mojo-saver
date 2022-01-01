import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

export default function LoginFooter() {
  return (
    <Box
      color="#fff"
      display="grid"
      gridTemplateColumns={{
        base: "repeat(1, minmax(0, 1fr))",
        md: "repeat(2, minmax(0, 1fr))",
      }}
      gap="8"
      alignItems="center"
      padding="1.5rem"
      textAlign="center"
    >
      <Text>
        New account? {""}
        <Link href="/signup">
          <a className="hover:underline"> Register</a>
        </Link>
      </Text>{" "}
      <Link href="/forgot-password">
        <a className="hover:underline">Forgot Password?</a>
      </Link>
    </Box>
  );
}
