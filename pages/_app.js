import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NextNProgress color="#12b375" options={{ easing: "ease", speed: 300 }} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
