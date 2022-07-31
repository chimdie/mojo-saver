import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Text, Button } from "@chakra-ui/react";
import { SignupFooter } from "../components/signup";
import { LoginFooter } from "../components/login";
import { AuthContext } from "../firebase/auth";
import router from "next/router";

export default function RegistrationLayout({ header, subHeader, children }) {
  const [routeName, setRouteName] = useState("");
  const router = useRouter();

  function changeRouteName() {
    if (router.pathname === "/login") {
      return "login";
    } else if (router.pathname === "/signup") {
      return "signup";
    } else if (router.pathname === "/forgot-password") {
      return "forgot-password";
    } else if (router.pathname === "/reset-password") {
      return "reset-password";
    }
    return "";
  }

  useEffect(() => {
    setRouteName(changeRouteName);
  }, []);

  const { user } = React.useContext(AuthContext);
  React.useEffect(() => {
    if (user.uid) {
      router.push("/dashboard");
    }
  }, [user, router]);


  return (
    <Box
      as="main"
      bg="whatsapp.600"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      minHeight="100vh"
      paddingY="2rem"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={routeName} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>mojoSave | {routeName}</title>
      </Head>
      <Box as="header" paddingY="2rem">
        <Link href="/" passHref>
          <Text
            color="white"
            fontSize="2.5rem"
            fontWeight="extrabold"
            _hover={{ cursor: "pointer" }}
          >
            mojoSave
          </Text>
        </Link>
      </Box>
      <Box
        as="section"
        bg="white"
        width="89%"
        maxWidth="28rem"
        padding="2rem 2rem 2.5rem"
        borderRadius="1.5rem 0 1.5rem 0"
        border="0 solid #e2e8f0"
        display=" flex"
        flexDirection="column"
      >
        <Box
          as="section"
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginBottom="0.5rem"
        >
          <Text
            as="h1"
            color="whatsapp.600"
            textAlign="center"
            fontWeight="bold"
            fontSize="1.5rem"
            marginY="0.5rem"
          >
            {header}
          </Text>
          <Text
            as="p"
            textAlign="center"
            fontSize="0.875rem"
            marginBottom="0.5rem"
          >
            {subHeader}
          </Text>
        </Box>
        {children}
      </Box>
      {/* page footer */}
      {router.pathname === "/login" && <LoginFooter />}
      {router.pathname === "/signup" && <SignupFooter />}
    </Box>
  );
}
