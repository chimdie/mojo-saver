import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signUp } from "../../redux/account";
import { Box, FormControl, Input, useToast, Button } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
import AuthBtn from "../../components/authBtn";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email Address is required"),
  phoneNumber: yup.number().required("Phone Number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function SignupPage() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser(data) {
    dispatch(
      signUp({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        isSuperAdmin: false,
      })
    );
  }

  return (
    <RegistrationLayout
      header="Create a Secure Account"
      subHeader="Explore the secret of saving by contribution"
    >
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0"
        paddingY="1.5rem"
        minHeight="min-content"
        onSubmit={handleSubmit(registerUser)}
      >
        <FormControl className="mb-5">
          <Input
            {...register("fullName")}
            id="fullName"
            type="text"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="Full Name"
          />
          {errors.fullName && (
            <p className="text-sm italic text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <Input
            {...register("email")}
            id="email"
            type="email"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-sm italic text-red-500">
              {errors.email.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <p className="text-sm italic text-red-500">
              {(errors.phoneNumber.message = "Phone Number is required")}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <Input
            {...register("password")}
            id="password"
            type="password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-sm italic text-red-500">
              {errors.password.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-sm italic text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </FormControl>
        <AuthBtn caption="CREATE ACCOUNT" />
      </Box>
    </RegistrationLayout>
  );
}
