import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import axios from "axios";
import { App } from "./App";
import store from "redux/store";
import "./index.css";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASEURL
  ? import.meta.env.VITE_APP_BASEURL
  : "http://localhost:1337/api/v1";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <SWRConfig
          value={{
            fetcher: (url: string) => axios.get(url).then((res) => res.data),
            onError: (error) => {
              if (error.status !== 403 && error.status !== 404) {
                // We can send the error to Sentry,
                // or show a notification UI.
              }
            }
          }}
        >
          <App />
        </SWRConfig>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
