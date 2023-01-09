import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Box,
  Text,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader
} from "@chakra-ui/react";
import { AuthLayout } from "layouts";
import { SignupSchema } from "utils";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { HTTP_STATUS } from "utils";
import { signupNewUser } from "../slices/authSlice";

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loadingStatus } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SignupSchema)
  });

  const onSubmit = (data: any) => {
    dispatch(signupNewUser(data));
  };

  useEffect(() => {
    if (loadingStatus === HTTP_STATUS.DONE) {
      navigate("/login");
      reset();
    }
  }, [loadingStatus]);

  return (
    <AuthLayout header="SIGN UP">
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <Box className="grid grid-cols-2 gap-3 py-4">
            <FormControl isInvalid={errors.firstName ? true : false}>
              <Input
                type="firstName"
                id="firstName"
                bg="white"
                placeholder="First Name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <FormErrorMessage fontSize=".7rem">{`${errors.firstName.message}`}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.lastName ? true : false}>
              <Input
                type="lastName"
                id="lastName"
                bg="white"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <FormErrorMessage fontSize=".7rem">{`${errors.lastName.message}`}</FormErrorMessage>
              )}
            </FormControl>
          </Box>
          <Box className="grid grid-cols-2 gap-3 py-4">
            <FormControl isInvalid={errors.emailAddress ? true : false}>
              <Input
                type="emailAddress"
                id="emailAddress"
                bg="white"
                placeholder="Email"
                {...register("emailAddress")}
              />
              {errors.emailAddress && (
                <FormErrorMessage fontSize=".7rem">{`${errors.emailAddress.message}`}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.phoneNumber ? true : false}>
              <Input
                type="phoneNumber"
                id="phoneNumber"
                bg="white"
                placeholder="Phone"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <FormErrorMessage fontSize=".7rem">{`${errors.phoneNumber.message}`}</FormErrorMessage>
              )}
            </FormControl>
          </Box>
          {/* password */}
          <FormControl
            className="py-4"
            isInvalid={errors.password ? true : false}
          >
            <Input
              type="password"
              id="password"
              bg="white"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <FormErrorMessage fontSize=".7rem">{`${errors.password.message}`}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            className="py-4"
            isInvalid={errors.confirmPassword ? true : false}
          >
            <Input
              type="password"
              id="confirmPassword"
              bg="white"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <FormErrorMessage fontSize=".7rem">{`${errors.confirmPassword.message}`}</FormErrorMessage>
            )}
          </FormControl>
          {/* bank detaials */}
          <Box className="grid grid-cols-2 gap-3 py-4">
            <FormControl
              className="py-4"
              isInvalid={errors.bankAccountNumber ? true : false}
            >
              <Input
                type="text"
                id="bankAccountNumber"
                bg="white"
                placeholder="Bank Account"
                {...register("bankAccountNumber")}
              />
              {errors.bankAccountNumber && (
                <FormErrorMessage fontSize=".7rem">{`${errors.bankAccountNumber.message}`}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              className="py-4"
              isInvalid={errors.bankName ? true : false}
            >
              <Input
                type="text"
                id="bankName"
                bg="white"
                placeholder="Bank Name"
                {...register("bankName")}
              />
              {errors.bankName && (
                <FormErrorMessage fontSize=".7rem">{`${errors.bankName.message}`}</FormErrorMessage>
              )}
            </FormControl>
          </Box>
          <FormControl className="py-4" isInvalid={errors.bvn ? true : false}>
            <Input
              type="text"
              id="bvn"
              bg="white"
              placeholder="BVN"
              {...register("bvn")}
            />
            {errors.bvn && (
              <FormErrorMessage fontSize=".7rem">{`${errors.bvn.message}`}</FormErrorMessage>
            )}
          </FormControl>
        </>
        <Box className="px-8 pb-8 flex items-center justify-between">
          <Checkbox {...register("isAdmin")} name="isAdmin">
            <Text size="sm">Admin?</Text>
          </Checkbox>
          <Popover size="sm">
            <PopoverTrigger>
              <Button borderRadius="50%" size="sm">
                i
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton size="sm" />
              <PopoverHeader>Register as Admin</PopoverHeader>
              <PopoverBody>
                Create groups and invite your friends to join.{" "}
                <strong>No extra advantages!</strong>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <>
          <Button
            width="100%"
            type="submit"
            colorScheme="blue"
            variant="solid"
            isLoading={loadingStatus === HTTP_STATUS.LOADING}
          >
            Sign up
          </Button>
        </>
      </form>
    </AuthLayout>
  );
}
