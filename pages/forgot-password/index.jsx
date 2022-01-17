import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { RegistrationLayout } from "../../layouts";
import AuthBtn from "../../components/authBtn";

const schema = yup.object().shape({
  email: yup.string().email().required("Email Address is required"),
});

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log("not correct");
  };

  return (
    <RegistrationLayout header="Forgot Password">
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
          <FormLabel htmlFor="email">Email Address</FormLabel>
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
          />
          {errors.email && (
            <p className="text-sm italic text-red-500">
              {errors.email.message}
            </p>
          )}
        </FormControl>
        <AuthBtn caption="SUBMIT" />
      </Box>
    </RegistrationLayout>
  );
}
