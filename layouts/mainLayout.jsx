import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/homepage";
import { Navbar } from "../components/utilities";

export default function MainLayout({ children }) {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="mojoSave" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>mojoSave</title>
      </Head>
      <Box
        as="main"
        className="h-screen flex flex-col"
        fontFamily="" //TODO
        // margin="auto"
        // maxWidth="1165px" //TODO
        margin="0 10vw"
        flex="1"
      >
        {/* <Navbar /> */}
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
