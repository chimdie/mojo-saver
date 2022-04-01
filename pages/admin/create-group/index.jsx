import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DashboardLayout } from "../../../layouts";
import { Card } from "../../../components/dashboard";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { createGroup } from "../../../redux/group";

const schema = yup.object().shape({
  name: yup.string().required("Group Name is required"),
  description: yup.string().required("Provide group description"),
  monthlyDepositAmount: yup.number().required("Phone Number is required"),
});

export default function CreateGroup() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log({ data });
    dispatch(
      createGroup({
        name: data.name,
        monthlyDepositAmount: data.monthlyDepositAmount,
        description: data.description,
      })
    );
  };
  return (
    <DashboardLayout>
      <Box width={{ lg: "50%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl paddingY="1rem">
            <FormLabel htmlFor="" />
            <Input {...register("name")} type="text" placeholder="Group Name" />
          </FormControl>
          <FormControl paddingY="1rem">
            <FormLabel htmlFor="" />
            <Input
              {...register("monthlyDepositAmount")}
              type="number"
              placeholder="monthlyDepositAmount"
            />
          </FormControl>
          <FormControl paddingY="1rem">
            <FormLabel htmlFor="" />
            <Input
              {...register("description")}
              type="text"
              placeholder="Description"
            />
          </FormControl>
          <Box>
            <Button type="submit">Create Group</Button>
          </Box>
        </form>
      </Box>
    </DashboardLayout>
  );
}
