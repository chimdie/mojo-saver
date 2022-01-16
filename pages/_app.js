import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <NextNProgress
          color="#12b375"
          options={{ easing: "ease", speed: 300 }}
        />
        <Component {...pageProps} />
      </ChakraProvider>{" "}
    </Provider>
  );
}

export default MyApp;
