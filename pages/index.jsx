import Head from "next/head";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box className="text-red-600 flex items-center justify-center h-screen">
      <Text as="h1">Goat meat</Text>
    </Box>
  );
}
