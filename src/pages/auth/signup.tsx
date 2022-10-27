import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { HTTP_STATUS } from "utils";
import { signupNewUser } from "./slices/authSlice";

const schema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  fullName: yup.string().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

type FormValueT = {
  emailAddress: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
};

interface ModalHookPropsI {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function LoginUser({
  isOpen,
  onOpen,
  onClose
}: ModalHookPropsI) {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const { loadingStatus } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValueT>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    dispatch(signupNewUser(data));
  };

  useEffect(() => {
    if (loadingStatus === HTTP_STATUS.DONE) {
      toast({
        title: "Account created.",
        description: "Welcome to Mojo. Please Login to continue.",
        status: "success",
        duration: 5000,
        isClosable: true
      });
      reset();
      onClose();
    }
  }, [loadingStatus]);

  return (
    <Box>
      <Button
        className="mx-2 text-white "
        bg="#0085FF"
        _hover={{ bg: "#0474de" }}
        onClick={onOpen}
      >
        Sign up
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent
          bg="#f9fbfe"
          boxShadow="3px 6px 10px 0 rgb(0 102 245 / 7%)"
          border="1px solid rgba(0,102,245,.14)"
        >
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl className="py-4">
                <Input
                  type="fullName"
                  id="fullName"
                  bg="white"
                  placeholder="Full Name"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm p-2">
                    Your name is required.
                  </p>
                )}
              </FormControl>
              <FormControl className="py-4">
                <Input
                  type="emailAddress"
                  id="emailAddress"
                  bg="white"
                  placeholder="Email Address"
                  {...register("emailAddress")}
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-sm p-2">
                    A valid email is required.
                  </p>
                )}
              </FormControl>
              <FormControl className="py-4">
                <Input
                  type="password"
                  id="password"
                  bg="white"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm p-2">
                    Your password is required.
                  </p>
                )}
              </FormControl>

              <FormControl className="py-4">
                <Input
                  type="confirmPassword"
                  id="confirmPassword"
                  bg="white"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm p-2">
                    Passwords must match.
                  </p>
                )}
              </FormControl>
            </ModalBody>
            <Box className="px-8 pb-8 flex items-center justify-between">
              <Checkbox {...register("isAdmin")} name="isAdmin">
                Register as an Admin?
              </Checkbox>
              <Popover>
                <PopoverTrigger>
                  <Button borderRadius="50%">i</Button>
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
            <ModalFooter>
              <Button
                width="100%"
                type="submit"
                colorScheme="blue"
                variant="solid"
                isLoading={loadingStatus === HTTP_STATUS.LOADING}
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
