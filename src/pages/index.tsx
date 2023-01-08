import React from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiWorld } from "react-icons/gi";
import { mdVariant, smVariant } from "layouts/dashboardLayout";
import { teamRemovebg } from "assets/auth";
import { FaIdCardAlt } from "react-icons/fa";

export default function EntryPage() {
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  return (
    <Box h={{ base: "100%", md: "100vh" }}>
      <Box pb={4}>
        {/* Header */}
        <Box as="header" p={{ md: "24px 32px" }}>
          <Box className="flex justify-between items-center w-full" p="16px 6%">
            <Box>
              {variants?.navigation === "mobileNav" ? (
                <Box>
                  <Link as={ReactRouterLink} to="/">
                    <FaIdCardAlt fontSize="25px" />
                  </Link>
                </Box>
              ) : (
                <Box className="flex">
                  <Link
                    as={ReactRouterLink}
                    to="/"
                    className="flex"
                    alignItems="center"
                    _hover={{ textDecoration: "none" }}
                  >
                    <FaIdCardAlt fontSize="25px" />
                    <Text className="px-2">Thrift Solo</Text>
                  </Link>
                </Box>
              )}
            </Box>
            <Box as="nav" className="flex item-center">
              <Link
                as={ReactRouterLink}
                to="/login"
                _hover={{ textDecoration: "none" }}
              >
                <Button className="mx-2" bg="none">
                  Log in
                </Button>
              </Link>

              <Link
                as={ReactRouterLink}
                to="/signup"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  className="mx-2 text-white"
                  bg="#0085FF"
                  _hover={{ bg: "#0474de" }}
                >
                  Sign up
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* Hero */}
        <Box as="section" className="flex justify-center py-14 pt-20 px-3">
          <Box className="text-center">
            <Heading size={{ base: "md", md: "2xl" }}>
              Save with friends.
              <br />
              Embark on a journey to save.
            </Heading>
            <Box className="flex justify-center text-center py-5">
              <Box className="flex items-center md:px-8">
                <HiOutlineUserGroup fontSize="25px" />
                <Text className="px-2">
                  <strong>100+</strong> users.
                </Text>
              </Box>
              <Box className="flex items-center md:px-8">
                <GiWorld fontSize="25px" />
                <Text className="px-2">
                  active in <strong>35+</strong> cities.
                </Text>
              </Box>
            </Box>

            <Link
              as={ReactRouterLink}
              to="/signup"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                className="mx-2 text-white"
                bg="#0085FF"
                _hover={{ bg: "#0474de" }}
                p="1.5rem 3rem"
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
        {/* main sections */}
        <Box
          as="main"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          p={{ base: "0 4.16%", md: "60px 7%" }}
        >
          <Box
            display={{ base: "flex", md: "grid" }}
            gridTemplateColumns="1fr 1fr"
            gridGap="40px"
            flexDirection="column"
          >
            <Box
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gridColumn="1/3"
              gridGap="40px"
              padding="0 40px"
              borderRadius="10px"
              bg="#f0f4f9"
            >
              <Box className="flex justify-center items-end py-4 md:order-1 order-1">
                <Image src={teamRemovebg} />
              </Box>
              <Box className="flex justify-center items-center md:order-2 py-8">
                <Text className="text-center text-lg md:text-5xl font-semibold">
                  A variety of groups are available to support your saving
                  goals.
                </Text>
              </Box>
            </Box>

            <GridCard
              title="Regular Plan"
              subText="Join availabe groups to save."
              subTitle=" Access to User Dashboard"
            />
            <GridCard
              title="Admin Plan"
              subText="Create groups and invite your friends."
              subTitle="Access to Admin Dashboard"
              bg="#FAF089"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const GridCard = ({
  title,
  subText,
  subTitle,
  bg
}: {
  title: string;
  subText: string;
  subTitle: string;
  bg?: string;
}) => {
  return (
    <Box
      p="80px 16px 64px"
      bg={bg ? bg : "#f0f4f9"}
      borderRadius="10px"
      className="flex flex-col justify-between text-center"
    >
      <Box pb="1rem" px="1rem">
        <Heading size={{ base: "md", md: "xl" }}>{title}</Heading>
        <Text pt="1rem" fontWeight="300">
          {subText}
        </Text>
      </Box>
      <Box pt="2rem" px="1rem">
        <Heading
          as="h6"
          size={{ base: "sm", md: "md" }}
          lineHeight="2"
          fontWeight="500"
        >
          {subTitle}
        </Heading>
        <Heading pt="1rem">$0</Heading>
      </Box>
    </Box>
  );
};
