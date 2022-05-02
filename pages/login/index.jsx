import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { HTTP_STATUS } from "../../utils";
import { login } from "../../redux/account";

const schema = yup.object().shape({
  email: yup.string().email().required("Email Address is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const dispatch = useDispatch();

  const { loadingStatus } = useSelector((state) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log(login);
    dispatch(login({ email: data.email, password: data.password }));
  };

  return (
    <RegistrationLayout
      header="Login to your account"
      subHeader="Don't share your login details"
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl className="mb-5">
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email Address"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          <FormErrorMessage>
            {errors.email && (
              <p className="text-sm italic text-red-500">
                {errors.email.message}
              </p>
            )}
          </FormErrorMessage>
        </FormControl>
        <FormControl className="mb-5">
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Password"
            paddingY="1.5rem"
            outline="none"
            color="#1a202c"
            bg="#edf2f7"
            border="0 solid #e2e8f0"
            borderRadius=".25rem"
            textShadow="none"
          />
          <FormErrorMessage>
            {errors.password && (
              <p className="text-sm italic text-red-500">
                {errors.password.message}
              </p>
            )}
          </FormErrorMessage>
          <Box paddingY="15px">
            <Button
              type="submit"
              bg="whatsapp.600"
              color="#fff"
              width="100%"
              paddingY="1.5rem"
              _hover={{ bg: "whatsapp.700" }}
              isLoading={loadingStatus === HTTP_STATUS.LOADING}
            >
              LOGIN
            </Button>
          </Box>
        </FormControl>
      </Box>
    </RegistrationLayout>
  );
}
