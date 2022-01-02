import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      className="h-screen text-black flex flex-col"
      fontFamily="DM Sans,sans-serif!important;"
      margin="auto"
      maxWidth="1165px"
    >
      <Box as="header" className="w-full py-6 px-5">
        <Box>
          <Text as="a" href="/" className="text-4xl font-bold cursor-pointer">
            mojoSave
          </Text>
        </Box>
        <Box as="nav"></Box>
      </Box>
      <Box as="main" className="w-full h-full flex-1">
        <Box
          as="section"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left py-10"
        >
          <Box as="" className="flex flex-col justify-center px-4">
            <Text as="h1" className="text-4xl md:text-6xl font-bold">
              Now Start Saving by Contributions.
            </Text>
            <Text as="p" className="py-4 text-lg font-medium">
              MojoSave is helping organisations, co-workers friends and lots
              more save by contributing on a periodic basis.
            </Text>
            <Box className="py-4">
              <Link href="/signup" passHref>
                <Button
                  role="link"
                  bg="#000"
                  color="#fff"
                  fontSize="18px"
                  _hover="#0b6d47"
                  paddingY={{ base: "5", md: "7" }}
                  borderRadius="10px"
                >
                  Create an account
                </Button>
              </Link>
            </Box>
          </Box>
          <Box as="" className="flex flex-col justify-center px-4">
            <Image
              src="/homepage/vault.svg"
              width="572px"
              height="572px"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
