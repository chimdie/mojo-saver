import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

export default function SignupFooter() {
  return (
    <Box paddingY="1.5rem">
      <Text color="#fff">
        Already have an account? {""}
        <Link href="/login">
          <a className="hover:underline">Login</a>
        </Link>
      </Text>
    </Box>
  );
}
