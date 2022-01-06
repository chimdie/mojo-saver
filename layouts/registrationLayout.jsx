import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button } from "@chakra-ui/react";
import { SignupFooter } from "../components/signup";
import { LoginFooter } from "../components/login";
import Auth from "../auth/auth";

export default function RegistrationLayout({
  header,
  subHeader,
  children,
  caption,
}) {
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
  }

  useEffect(() => {
    setRouteName(changeRouteName);
  });
  return (
    <Box
      as="main"
      bg="#0b6d47"
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
      <Box paddingY="2rem">
        <Text
          as="a"
          href="/"
          color="white"
          fontSize="2.5rem"
          fontWeight="extrabold"
        >
          mojoSave
        </Text>
      </Box>
      <Box
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
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginBottom="0.5rem"
        >
          <Text
            as="h1"
            color="#0b6d47"
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
            {subHeader ? subHeader : ""}
          </Text>
        </Box>
        {/* <Auth>
          {(currentUser) => {
            return (
              <> */}
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          flexGrow="1"
          flexShrink="1"
          flexBasis="0"
          paddingY="1.5rem"
          minHeight="min-content"
        >
          {children}
        </Box>
        <Box>
          <Button
            bg="#0b6d47"
            color="#fff"
            width="100%"
            // onClick={currentUser}
            paddingY="1.5rem"
            _hover="#0b6d47"
            _focus="#0b6d47"
          >
            {caption}
          </Button>
        </Box>
        {/* </>
            );
          }}
        </Auth> */}
      </Box>

      {router.pathname === "/login" ? <LoginFooter /> : <></>}
      {router.pathname === "/signup" ? <SignupFooter /> : <></>}
    </Box>
  );
}
