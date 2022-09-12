import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { DashboardLayout } from "./layouts";

export const App = () => (
  <Router>
    <Box display="flex" fontSize="xl">
      <DashboardLayout />
    </Box>
  </Router>
);
