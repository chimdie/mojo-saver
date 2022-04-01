import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "../firebase/auth";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <NextNProgress
          color="linear-gradient(104.44deg, #F43249 1.59%, #BE071D 88.43%)"
          options={{ easing: "ease", speed: 300, showSpinner: false }}
        />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>{" "}
    </Provider>
  );
}

export default MyApp;
