import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
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
import { login } from "./slices/authSlice";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { HTTP_STATUS } from "utils";

const schema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  password: yup.string().required().min(6)
});

type FormValueT = {
  emailAddress: string;
  password: string;
};

interface ModalHookProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function LoginUser({ isOpen, onOpen, onClose }: ModalHookProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loadingStatus } = useAppSelector((state: any) => state.account);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValueT>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    //@ts-ignore
    dispatch(login(data));
  }
  useEffect(() => {
    if (loadingStatus === HTTP_STATUS.DONE) {
      navigate("/", { replace: true });
    }
  }, [loadingStatus]);

  return (
    <Box>
      <Button className="mx-2" onClick={onOpen}>
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
                  placeholder="email Address"
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
                  placeholder="password"
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
