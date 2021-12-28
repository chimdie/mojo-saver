import React from "react";
import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";

export default function ResetPassword() {
  return (
    <RegistrationLayout header="Reset Password" caption="RESET PASSWORD">
      <FormControl className="mb-5">
        <FormLabel htmlFor="password">New Password</FormLabel>
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
    </RegistrationLayout>
  );
}
