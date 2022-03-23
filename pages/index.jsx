import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, Button, Link } from "@chakra-ui/react";
import { Card } from "../components/homepage";
import { MainLayout } from "../layouts";

export default function Home() {
  return (
    <MainLayout>
      <Box as="header">
        <Box className="flex justify-between w-full py-6 px-5">
          <NextLink href="/" passHref>
            <Text className="text-4xl font-bold cursor-pointer">mojoSave</Text>
          </NextLink>

          <Box as="nav">
            <div className="hidden md:grid grid-cols-2 gap-4 w-full">
              <NextLink href="/login">
                <Link
                  bg="#fff"
                  color="#000"
                  fontSize="18px"
                  _hover={{ bg: "#f1f1f1" }}
                  borderRadius="10px"
                  boxShadow="0px 1px 10px rgb(0 0 1 / 7%)"
                  className="px-6 py-2 text-center"
                >
                  Login
                </Link>
              </NextLink>
              <NextLink href="/signup">
                <Link
                  bg="#000"
                  color="#fff"
                  fontSize="18px"
                  _hover={{ bg: "#333" }}
                  borderRadius="10px"
                  className="px-6 py-2"
                >
                  Create an account
                </Link>
              </NextLink>
            </div>
          </Box>
        </Box>
      </Box>
      <Box as="main" className="w-full h-full flex-1">
        <Box
          as="section"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0 py-4"
        >
          <Box as="" className="flex flex-col justify-center md:px-4">
            <Text as="h1" className="text-4xl md:text-6xl font-bold">
              Now Start Saving by Contributions
            </Text>
            <Text as="p" className="py-4 text-lg font-medium">
              MojoSave is helping organisations, co-workers, friends and lots
              more save by contributing on a periodic basis.
            </Text>
            <Box className="py-4">
              <Link href="/signup">
                <Button
                  role="link"
                  bg="#000"
                  color="#fff"
                  fontSize="18px"
                  _hover={{ bg: "#333" }}
                  paddingY={{ base: "5px", md: "10px" }}
                  borderRadius="10px"
                >
                  Create an account
                </Button>
              </Link>
            </Box>
          </Box>
          <Box as="" className="flex flex-col justify-center px-4">
            <Image
              src="/homepage/invoices_b.svg"
              width="572px"
              height="572px"
              alt=""
            />
          </Box>
        </Box>
        <Box
          as="section"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left py-4"
        >
          <Box
            as=""
            className="flex flex-col justify-center px-4 order-1 md:order-2"
          >
            <Image
              src="/homepage/secure.svg"
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
            className="py-4 flex flex-col justify-center"
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
              Learn how to be committed to saving with any of these mojoSave
              plans.
            </Text>
            <Box className="py-4">
              <Link href="/signup">
                <Button
                  role="link"
                  bg="#000"
                  color="#fff"
                  fontSize="18px"
                  _hover={{ bg: "whatsapp.600" }}
                  // paddingY={{ base: "5", md: "7" }}
                  borderRadius="10px"
                >
                  Start Saving
                </Button>
              </Link>
            </Box>
          </Box>
          {/* cards */}
          <Card />
        </Box>
      </Box>
    </MainLayout>
  );
}
