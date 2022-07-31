import React from "react";
import { Box } from "@chakra-ui/react";
import { ModalComp, PopOver, Navbar } from "../components/utilities";
import { AuthContext } from "../firebase/auth";
import router from "next/router";

export default function Layout({ children }) {
  const { user } = React.useContext(AuthContext);
  React.useEffect(() => {
    if (user.uid) {
      console.log("signed in!",user);
    } else{
      router.push("/login");
    }
  }, [user]);

  if (!user.uid) {
    // user is signed out or still being checked.
    // don't render anything
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      className="h-screen flex flex-col"
      margin={{ sm: "0 10vw" }}
      // maxWidth="1165px" //TODO
      flex="1"
      height="100vh"
    >
      <Navbar />
      <Box as="main" bg="white" my="2rem" h="100%">
        <Box as="section" p={{ base: "1rem", md: "3rem" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
