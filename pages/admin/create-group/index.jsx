import React from "react";
import { DashboardLayout } from "../../../layouts";
import { Card } from "../../../components/dashboard";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function CreateGroup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <DashboardLayout>
      <Box width={{ lg: "50%" }}>
        <form onSubmit={handleSubmit}>
          <FormControl paddingY="1rem">
            <FormLabel htmlFor="" />
            <Input type="text" placeholder="Group Name" />
          </FormControl>
          <FormControl paddingY="1rem">
            <FormLabel htmlFor="" />
            <Input type="text" placeholder="Group Name" />
          </FormControl>
          <FormControl paddingY="1rem">
            <FormLabel htmlFor="" />
            <Input type="text" placeholder="Group Name" />
          </FormControl>
          <Box>
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
    </DashboardLayout>
  );
}
