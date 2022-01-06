import React from "react";
import { Box, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
export default function Signup() {
  return (
    <>
      <RegistrationLayout
        header="Create a Secure Account"
        subHeader="Explore the secret of saving by contribution"
        caption="CREATE ACCOUNT"
      >
        <FormControl className="mb-5">
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input
            type="text"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            type="email"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          <Input
            type="email"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
        </FormControl>
        <FormControl className="mb-5">
          <FormLabel htmlFor="password">Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
        </FormControl>
        <Box>
          <Button
            bg="#0b6d47"
            color="#fff"
            width="100%"
            // onClick={currentUser}
            paddingY="1.5rem"
            _hover="#0b6d47"
            _focus="#0b6d47"
          >
            submit
          </Button>
        </Box>
      </RegistrationLayout>
    </>
  );
}
