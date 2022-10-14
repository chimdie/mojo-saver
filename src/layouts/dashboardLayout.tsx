import { Box, useBreakpointValue, Text } from "@chakra-ui/react";
import { BottomNaviagtion, SideBar } from "../components/Nav";

const smVariant = { navigation: "mobileNav", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  return (
    <Box as="main" height="100%" width="100%">
      {variants?.navigation === "mobileNav" ? (
        <>
          <Box
            as="section"
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
          >
            <Box
              as="main"
              flex="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              padding={8}
              mb="4rem"
            >
              {children}
            </Box>
          </Box>
          <BottomNaviagtion />
        </>
      ) : (
        <Box as="section">
          <SideBar />
          <Box
            as="section"
            pl={390}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            minHeight="100vh"
          >
            <Box as="section">
              <Box as="main" p="14">
                {children}
              </Box>
            </Box>
            <Box as="footer" textAlign="center" py={5} justifySelf="self-ed">
              <Text fontSize="12px">
                Copyright Solo Thrift © <span>{new Date().getFullYear()}</span>.
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
