import React from "react";
import { Link as ReactRouter } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Link
} from "@chakra-ui/react";
import { AuthLayout } from "layouts";
import { ForgotPasswordSchema } from "utils";
import { useAppSelector } from "redux/hook";
import { HTTP_STATUS } from "utils";

export default function ForgotPassword(): JSX.Element {
  const { loadingStatus } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout header="FORGOT PASSWORD">
      <Box as="form" onSubmit={handleSubmit(onSubmit)} width={{ base: "100%" }}>
        <FormControl isInvalid={errors.email ? true : false} mb=".5rem">
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email Address"
            bg="#F8FAFC"
          />
          {errors.email && (
            <FormErrorMessage fontSize=".7rem">{`${errors.email.message}`}</FormErrorMessage>
          )}
        </FormControl>
        <Link
          as={ReactRouter}
          to="/login"
          color="#673AB7"
          fontSize="0.6875rem"
          fontWeight="500"
          margin="0 .5rem"
          _hover={{ textDecoration: "none", opacity: 0.7 }}
        >
          Login?
        </Link>

        <Box as="section" display="flex" justifyContent="center" pt="3rem">
          <Button
            type="submit"
            colorScheme="blue"
            px="3rem"
            boxShadow="0px 0px 1px rgba(27, 29, 34, 0.02), 0px 1px 1px rgba(27, 29, 34, 0.05)"
            isLoading={loadingStatus === HTTP_STATUS.LOADING}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </AuthLayout>
  );
}
