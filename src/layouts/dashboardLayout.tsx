import React from "react";
import { Box } from "@chakra-ui/react";
import SideBar from "../components/sidebar";

export default function DashboardLayout() {
  return (
    <Box height="100vh" display="flex">
      <SideBar />
      <Box></Box>
    </Box>
  );
}
