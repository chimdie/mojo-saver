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

  const onSubmit = (data) => {};

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
          <FormErrorMessage>
            {errors.email && (
              <p className="text-sm italic text-red-500">
                {errors.email.message}
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
          SUBMIT
        </Button>
      </Box>
    </RegistrationLayout>
  );
}
