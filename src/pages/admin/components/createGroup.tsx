import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { useAppDispatch } from "redux/hook";
import { createNewGroup } from "../slices/groupSlice";

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  monthlyDepositAmount: yup.number().required()
});

type FormValueProps = {
  name: string;
  description: string;
  monthlyDepositAmount: number;
};

type CreateGroupProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentUserId: string;
};

export default function CreateGroup({
  isOpen,
  onOpen,
  onClose,
  currentUserId
}: CreateGroupProps) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValueProps>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    dispatch(createNewGroup({ ...data, owner: currentUserId }));
    reset();
    onClose();
  };

  return (
    <Box>
      <Button
        leftIcon={<IoMdAdd size="25px" />}
        colorScheme="blue"
        onClick={onOpen}
      >
        Create Group
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent bg="whitesmoke">
          <ModalHeader>Create Group</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Box className="grid grid-cols-2 gap-3 py-4">
                <FormControl>
                  <Input
                    type="text"
                    id="name"
                    bg="white"
                    placeholder="Group Name"
                    {...register("name")}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <Input
                    type="number"
                    id="monthlyDepositAmount"
                    bg="white"
                    placeholder="Deposit Amount"
                    {...register("monthlyDepositAmount")}
                  />
                  <FormErrorMessage>
                    {errors.monthlyDepositAmount &&
                      errors.monthlyDepositAmount.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <FormControl className="py-4">
                <Input
                  type="text"
                  id="description"
                  bg="white"
                  placeholder="Description"
                  {...register("description")}
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                width="100%"
                type="submit"
                colorScheme="blue"
                variant="solid"
              >
                Create
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
