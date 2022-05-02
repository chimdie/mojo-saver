import React from "react";
import { Box } from "@chakra-ui/react";
import { DashboardLayout } from "../../../layouts";
import { GroupCard } from "../../../components/dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box className="shadow-md rounded-md bg-slate-50 overflow-hidden max-w-md p-3">
        <Box width="35%"></Box>
      </Box>
      <GroupCard
        title="frank's million"
        description="for our first 1 million naira"
      />
    </DashboardLayout>
  );
}
