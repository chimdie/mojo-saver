import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DashboardLayout } from "../../../layouts";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { createGroup } from "../../../redux/group";
import { Bars, Circles } from "react-loading-icons";

const schema = yup.object().shape({
  name: yup.string().required("Group Name is required"),
  description: yup.string().required("Provide group description"),
  monthlyDepositAmount: yup.number().required("Phone Number is required"),
});

export default function CreateGroup() {
  const [isLoading, setLoading] = useState(false);
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
    setLoading(!isLoading);
    dispatch(
      createGroup({
        name: data.name,
        monthlyDepositAmount: data.monthlyDepositAmount,
        description: data.description,
      })
    );
    setLoading(isLoading);
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
              placeholder="Monthly Deposit Amount"
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
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Circles stroke="#98ff98" />}
              {isLoading ? "Creating Group" : "Create Group"}
            </Button>
          </Box>
        </form>
      </Box>
    </DashboardLayout>
  );
}
