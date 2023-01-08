import React from "react";
import { Link as ReactRouter } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Box,
  Text,
  Link,
  FormControl,
  FormErrorMessage,
  Input,
  Button
} from "@chakra-ui/react";
import { AuthLayout } from "layouts";
import { LoginSchema } from "utils";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { HTTP_STATUS } from "utils";
import { login } from "../slices/authSlice";

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const { loadingStatus } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const onSubmit = (data: any) => {
    dispatch(login(data));
  };

  return (
    <AuthLayout header="LOGIN">
      <Box as="form" onSubmit={handleSubmit(onSubmit)} width={{ base: "100%" }}>
        <FormControl isInvalid={errors.email ? true : false} mb="1.5rem">
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

        <FormControl isInvalid={errors.password ? true : false}>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Password"
            bg="#F8FAFC"
          />
          {errors.password && (
            <FormErrorMessage fontSize=".7rem">{`${errors.password.message}`}</FormErrorMessage>
          )}
        </FormControl>
        <Link
          as={ReactRouter}
          to="/forgot-password"
          color="#673AB7"
          fontSize="0.6875rem"
          fontWeight="500"
          margin="1rem .5rem"
          _hover={{ textDecoration: "none", opacity: 0.7 }}
        >
          Forgot Password?
        </Link>
        <Box as="section" display="flex" justifyContent="center" pt="3rem">
          <Button
            type="submit"
            colorScheme="blue"
            px="3rem"
            boxShadow="0px 0px 1px rgba(27, 29, 34, 0.02), 0px 1px 1px rgba(27, 29, 34, 0.05)"
            isLoading={loadingStatus === HTTP_STATUS.LOADING}
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box as="section">
        <Text textAlign="center" fontSize=".75rem" fontWeight="400">
          Don’t have an account?{" "}
          <Link
            as={ReactRouter}
            to="/signup"
            color="#673AB7"
            fontSize=".875rem"
            fontWeight="500"
            _hover={{ textDecoration: "none", opacity: 0.7 }}
          >
            Sign Up
          </Link>
        </Text>
      </Box>
    </AuthLayout>
  );
}
