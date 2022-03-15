/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  FormErrorMessage,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";

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
          <Input
            {...register("newPassword")}
            type="password"
            placeholder="New Password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />{" "}
          <FormErrorMessage>
            {errors.newPassword && (
              <p className="text-sm italic text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </FormErrorMessage>
        </FormControl>
        <FormControl className="mb-5">
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirmew Password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          <FormErrorMessage className="text-sm italic text-red-500">
            {errors.confirmPassword?.message}
            {errors.confirmPassword && (
              <p className="text-sm italic text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          bg="whatsapp.600"
          color="#fff"
          width="100%"
          paddingY="1.5rem"
          _hover={{ bg: "whatsapp.700" }}
        >
          RESET PASSWORD
        </Button>
      </Box>
    </RegistrationLayout>
  );
}
