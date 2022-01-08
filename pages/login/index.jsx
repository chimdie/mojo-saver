import React from "react";
import { Box, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
import AuthBtn from "../../components/authBtn";

export default function Login() {
  return (
    <RegistrationLayout
      header="Login to your account"
      subHeader="Don't share your login details"
    >
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
        <AuthBtn caption="LOGIN" />
      </FormControl>
    </RegistrationLayout>
  );
}
