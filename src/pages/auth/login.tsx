import React from "react";
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
  ModalCloseButton
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { HTTP_STATUS } from "utils";
import { login } from "./slices/authSlice";

const schema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  password: yup.string().required().min(6)
});

type FormValueT = {
  emailAddress: string;
  password: string;
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

  const { loadingStatus } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValueT>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    dispatch(login(data));
  };

  return (
    <Box>
      <Button className="mx-2" bg="none" onClick={onOpen}>
        Log in
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent bg="#f9fbfe">
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
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
            </ModalBody>
            <ModalFooter>
              <Button
                width="100%"
                type="submit"
                colorScheme="blue"
                variant="solid"
                isLoading={loadingStatus === HTTP_STATUS.LOADING}
              >
                Login
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
