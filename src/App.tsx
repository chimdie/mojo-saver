import * as React from "react";
import { Box } from "@chakra-ui/react";
import { DashboardLayout2, DashboardLayout } from "./layouts";

export const App = () => (
  <Box display="flex" fontSize="xl">
    {/* <DashboardLayout2 variant="drawer">
      <Box></Box>
    </DashboardLayout2> */}
    <DashboardLayout />
  </Box>
);
