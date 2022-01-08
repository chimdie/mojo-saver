import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/account";
import { Box, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
import AuthBtn from "../../components/authBtn";

export default function SignupPage() {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.account.loadingStatus);
  function registerUser() {
    dispatch(signUp({ email: "emmajnrs@gmail.com", password: "Africa@40" }));
  }
  return (
    <>
      <RegistrationLayout
        header="Create a Secure Account"
        subHeader="Explore the secret of saving by contribution"
      >
        <h4>{loadingStatus}</h4>
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
        <AuthBtn caption="CREATE ACCOUNT" onClick={registerUser} />
      </RegistrationLayout>
    </>
  );
}
