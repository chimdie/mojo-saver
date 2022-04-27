import React from "react";
import { Box } from "@chakra-ui/react";
import { DashboardLayout } from "../../../layouts";
import { GroupCard } from "../../../components/dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box className=""></Box>
      <GroupCard
        title="frank's million"
        description="for our first 1 million naira"
      />
    </DashboardLayout>
  );
}
