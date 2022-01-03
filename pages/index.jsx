import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Text, Button } from "@chakra-ui/react";
import { Card } from "../components/homepage";
import { GiPadlock } from "react-icons/gi";

export default function Home() {
  return (
    <Box
      className="h-screen flex flex-col"
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
          <Box as="" className="flex flex-col justify-center md:px-4">
            <Text as="h1" className="text-4xl md:text-6xl font-bold">
              Now Start Saving by Contributions.
            </Text>
            <Text as="p" className="py-4 text-lg font-medium">
              MojoSave is helping organisations, co-workers, friends and lots
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
              src="/homepage/finance.svg"
              width="572px"
              height="572px"
              alt=""
            />
          </Box>
        </Box>
        <Box
          as="section"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left py-"
        >
          <Box
            as=""
            className="flex flex-col justify-center px-4 order-1 md:order-2"
          >
            <Image
              src="/homepage/vault.svg"
              width="572px"
              height="572px"
              alt=""
            />
          </Box>
          <Box className="flex flex-col justify-center px-4 md:order-2">
            <Text as="p">
              Worried about your card security? Don`t worry, we have your debit
              card secured with the best internet security you can imagine.
            </Text>
          </Box>
        </Box>
        <Box
          as="section"
          className="flex md:flex-wrap flex-col md:flex-row py-10 px-5"
        >
          <Box
            className="text-center md:text-left py-4 flex flex-col justify-center"
            maxWidth={{ base: "100%", md: "33%" }}
            flex={{ base: "100%", md: "33% 1" }}
            marginBottom="25px!important"
          >
            <Text
              as="h1"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold py-4"
            >
              4 ways to build your savings
            </Text>
            <Text as="p" className="py-1">
              Earn 5%-15% when you save with any of these PiggyVest plans.
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
                  Start Saving
                </Button>
              </Link>
            </Box>
          </Box>
          <>
            <Card
              icons={<GiPadlock />}
              caption="Automated Savings"
              subText="Build a dedicated savings faster on your terms automatically or manually."
              footer="MojoSave"
            />
            <Card
              icons={<GiPadlock />}
              caption="Fixed Savings"
              subText="Build a dedicated savings faster on your terms automatically or manually."
              footer="Safelock"
            />
            <Card
              icons={<GiPadlock />}
              caption="Goal-oriented Savings"
              subText="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
              footer="Target Savings"
            />
            <Card
              icons={<GiPadlock />}
              caption="Flexible Savings"
              subText="Save, Transfer, withdraw, manage and organize your money for free at any time."
              footer="Flex Naira"
            />
          </>
        </Box>
      </Box>
      <Box as="footer">
        <Text as="p"></Text>
      </Box>
    </Box>
  );
}
