import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { SidebarContent } from "../components/sidebar";

const smVariant: { navigation: string; navigationButton: string } = {
  navigation: "drawer",
  navigationButton: "300px",
};
const mdVariant: { navigation: string; navigationButton: string } = {
  navigation: "sidebar",
  navigationButton: "0px",
};

type Dashboard = {
  variant: any;
  children: any;
  // pl: any;
};

export default function DashboardLayout2({ children }: Dashboard) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box as="main" bg="#F3F7F8">
      <SidebarContent
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />

      <Box
        as="main"
        pl={variants?.navigationButton}
        display="flex"
        flexDirection="column"
        height="100vh"
        justifyContent="space-between"
      >
        <Box as="section">
          <Box as="section" px={{ base: 4, md: 10, xl: 8 }} py="1rem">
            {children}
          </Box>
        </Box>
        <Box as="footer" textAlign="center" py={10} justifySelf="self-end">
          <Text width="100%" color="#767474" fontSize={{ md: "20px" }}>
            Copyright © <span>{new Date().getFullYear()}</span>.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
