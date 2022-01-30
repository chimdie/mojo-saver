/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
import AuthBtn from "../../components/authBtn";

const ResetSchema = yup.object().shape({
  newPassword: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResetSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <RegistrationLayout header="Reset Password">
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0"
        paddingY="1.5rem"
        minHeight="min-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl className="mb-5">
          {/* <FormLabel htmlFor="password">New Password</FormLabel> */}
          <Input
            {...register("newPassword")}
            type="password"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="New Password"
          />{" "}
          {errors.newPassword && (
            <p className="text-sm italic text-red-500">
              {errors.newPassword.message}
            </p>
          )}
        </FormControl>
        <FormControl className="mb-5">
          {/* <FormLabel htmlFor="password">Confirm Password</FormLabel> */}
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder=""
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
            placeholder="Confirmew Password"
          />
          {errors.confirmPassword && (
            <p className="text-sm italic text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </FormControl>
        <AuthBtn caption="RESET PASSWORD" />
      </Box>
    </RegistrationLayout>
  );
}
